import { globals as api } from './globals';
import { Events } from './pcui';

class Realtime extends Events {
    constructor() {
        super();
        this.connection = new RealtimeConnection(this);
        this.scenes = new RealtimeScenes(this, this.connection);
    }
}

class RealtimeConnection extends Events {
    static MAX_ATTEMPTS = 3;
    static RECONNECT_INTERVAL = 3;

    constructor(realtime) {
        super();
        this._realtime = realtime;
        this._socket = null;
        this._sharedb = null;
        this._reconnectAttempts = 0;
        this._reconnectInterval = RealtimeConnection.RECONNECT_INTERVAL;
        this._connected = false;
        this._authenticated = false;
        this._domEvtVisibilityChange = this._onVisibilityChange.bind(this);
    }

    connect() {
        if (this._reconnectAttempts > RealtimeConnection.MAX_ATTEMPTS) {
            this._realtime.emit('cannotConnect');
            return;
        }

        this._reconnectAttempts++;
        this._realtime.emit('connecting', this._reconnectAttempts);

        // create new socket
        this._socket = new WebSocket(api.url.realtime);
        // create new sharedb connection
        this._sharedb = new share.Connection(this._socket);

        this._sharedb.on('connected', this._onConnect.bind(this));
        this._sharedb.on('error', this._onError.bind(this));
        this._sharedb.on('bs error', this._onBulkSubscribeError.bind(this));

        const onmessage = this._socket.onmessage;
        this._socket.onmessage = (msg) => {
            if (!this._onMessage(msg)) {
                onmessage(msg);
            }
        }

        const onclose = this._socket.onclose;
        this._socket.onclose = (reason) => {
            this._onClose(reason, onclose);
        };

        document.addEventListener('visibilitychange', this._domEvtVisibilityChange);
    }

    disconnect() {
        if (this._socket) {
            this._socket.close();
        }

        document.removeEventListener('visibilitychange', this._domEvtVisibilityChange);
    }

    sendMessage(name, data) {
        this.send(name + JSON.stringify(data));
    }

    send(data) {
        if (this._socket && this._socket.readyState === 1) {
            this._socket.send(data);
        }
    }

    getDocument(collection, id) {
        return this._sharedb.get(collection, id.toString());
    }

    _onVisibilityChange() {
        if (document.hidden) return;
        if (!this.connected) {
            this.connect();
        }
    }

    _onConnect() {
        this._connected = true;
        this._reconnectAttempts = 0;
        this._reconnectInterval = RealtimeConnection.RECONNECT_INTERVAL;
        this._sendAuth();
        this._realtime.emit('connected');
    }

    _onError(msg) {
        if (this._sharedb.state === 'connected') return;
        this._realtime.emit('error', msg);
    }

    _onBulkSubscribeError(msg) {
        this._realtime.emit('error:bs', msg);
    }

    _onClose(reason, originalOnClose) {
        this._connected = false;
        this._authenticated = false;

        this._realtime.emit('disconnect', reason);
        originalOnClose();

        this._realtime.emit('nextAttempt', this._reconnectInterval * 1000);

        if (!document.hidden) {
            setTimeout(() => {
                this.connect();
            }, this._reconnectInterval * 1000);
        }
    }

    _onMessage(msg) {
        try {
            if (msg.data.startsWith('auth')) {
                return this._onMessageAuth(msg);
            } else if (msg.data.startsWith('whoisonline:')) {
                return this._onMessageWhoIsOnline(msg);
            } else if (msg.data.startsWith('chat:')) {
                return this._onMessageChat(msg);
            }  else if (msg.data.startsWith('selection')) {
                return this._onMessageSelection(msg);
            }

            return false;
        } catch (err) {
            console.error(err);
        }
    }

    _onMessageAuth(msg) {
        if (!this._authenticated) {
            this._authenticated = true;
            this._realtime.emit('authenticated');
        }

        return true;
    }

    _onMessageWhoIsOnline(msg) {
        const parts = msg.data.split(':');
        if (parts.length === 5 && parts[1] === 'scene') {
            let data;
            const op = parts[3];
            if (op === 'set') {
                data = JSON.parse(parts[4]);
            } else if (op === 'add' || op === 'remove') {
                data = parseInt(parts[4], 10);
            }
            this._realtime.emit('whoisonline', op, data);
        }

        return true;
    }

    _onMessageChat(msg) {
        data = msg.data.slice('chat:'.length);

        const ind = data.indexOf(':');
        if (ind !== -1) {
            const op = data.slice(0, ind);
            data = JSON.parse(data.slice(ind + 1));

            if (op === 'typing') {
                this._realtime.emit('chat:typing', data);
            } else if (op === 'msg') {
                this._realtime.emit('chat:msg', data);
            }
        }

        return true;
    }

    _onMessageSelection(msg) {
        const data = msg.data.slice('selection:'.length);
        this._realtime.emit('selection', data);
        return true;
    }

    _onMessageFs(msg) {
        data = msg.data.slice('fs:'.length);
        const ind = data.indexOf(':');
        if (ind !== -1) {
            const op = data.slice(0, ind);
            if (op === 'paths') {
                data = JSON.parse(data.slice(ind + 1));
                this._realtime.emit('fs:paths', data);
            }

            return true;
        }

        return false;
    }

    _sendAuth() {
        this.sendMessage('auth', {
            accessToken: api.accessToken
        })
    }

    get connected() {
        return this._connected;
    }

    get authenticated() {
        return this._authenticated;
    }

    get sharedb() {
        return this._sharedb;
    }
}

class RealtimeScenes extends Events {
    constructor(realtime, connection) {
        super();
        this._realtime = realtime;
        this._connection = connection;
        this._scenes = {};
        this._currentScene = null;
    }

    load(sceneId) {
        this._currentScene = this._scenes[sceneId];

        if (!this._currentScene) {
            this._currentScene = new RealtimeScene(sceneId, this._realtime, this._connection);
            this._scenes[sceneId] = this._currentScene;
        }

        if (!this._currentScene.loaded) {
            this._currentScene.load();
            this._currentScene.once('load', () => {
                this._realtime.emit('load:scene', this._currentScene);
            });
        }

        return this._currentScene;
    }

    unload(sceneId) {
        if (this._scenes[sceneId]) {
            this._scenes[sceneId].unload();
            if (this._currentScene === this._scenes[sceneId]) {
                this._currentScene = null;
            }

            delete this._scenes[sceneId];
        }
    }

    get current() {
        return this._currentScene;
    }
}

class RealtimeScene extends Events {
    constructor(uniqueId, realtime, connection) {
        super();
        this._uniqueId = uniqueId;
        this._realtime = realtime;
        this._connection = connection;
        this._document = null;
        this._loaded = false;

        this._evtConnection = null;
    }

    load() {
        if (this._document) return;

        this._document = this._connection.getDocument('scenes', this._uniqueId);
        this._document.on('error', this._onError.bind(this));
        this._document.on('load', this._onLoad.bind(this));

        this._evtConnection = this._connection.on('disconnect', this.unload.bind(this));

        this._document.subscribe();
    }

    unload() {
        if (!this._document) return;

        this._document.unsubscribe();
        this._document.destroy();
        this._document = null;
        this._loaded = null;

        this._connection.sendData('close:scene:' + this._uniqueId);

        this._evtConnection.unbind();
        this._evtConnection = null;
    }

    addEntity(entity) {
        this.submitOp({
            p: ['entities', entity.get('resource_id')],
            oi: entity.json()
        });
    }

    removeEntity(entity) {
        this.submitOp({
            p: ['entities', entity.get('resource_id')],
            od: {}
        });
    }

    submitOp(op) {
        if (!this._loaded) return;

        try {
            this._document.submitOp([op]);
        } catch (err) {
            console.error(err);
            this._realtime.emit('scene:error', err, this._uniqueId);
        }
    }

    whenNothingPending(callback) {
        if (this._document) {
            this._document.whenNothingPending(callback);
        }
    }

    _onError(err) {
        this._realtime.emit('error:scene', err);
    }

    _onLoad() {
        // notify of operations
        this._document.on('op', this._onOp.bind(this));
        this._loaded = true;
        this.emit('load');
    }

    _onOp(ops, local) {
        if (local) return;

        for (let i = 0; i < ops.length; i++) {
            if (ops[i].p[0]) {
                this._realtime.emit('scene:op', ops[i].p[0], ops[i]);
            }
        }
    }

    get loaded() {
        return this._loaded;
    }

    get data() {
        return this._loaded && this._document && this._document.data || null;
    }

    get id() {
        return this.data && this.data.item_id;
    }

    get uniqueId() {
        return this._uniqueId;
    }
}


export { Realtime };
