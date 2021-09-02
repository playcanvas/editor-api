import { globals as api } from '../globals';
import { Events } from '@playcanvas/observer';

const RECONNECT_INTERVAL = 3;
const MAX_ATTEMPTS = 3;

/**
 * Handles connecting and communicating with the Realtime server.
 *
 * @category Internal
 */
class RealtimeConnection extends Events {
    /** @typedef {import("../realtime").Realtime} Realtime */

    /**
     * Constructor
     *
     * @param {Realtime} realtime - The realtime API
     */
    constructor(realtime) {
        super();

        this._url = null;
        this._realtime = realtime;
        this._socket = null;
        this._sharedb = null;
        this._reconnectAttempts = 0;
        this._reconnectInterval = RECONNECT_INTERVAL;
        this._connected = false;
        this._authenticated = false;
        this._domEvtVisibilityChange = this._onVisibilityChange.bind(this);
    }

    /**
     * Connect to the realtime server
     *
     * @param {string} url - The server URL
     */
    connect(url) {
        this._url = url;

        if (this._reconnectAttempts > MAX_ATTEMPTS) {
            this._realtime.emit('cannotConnect');
            return;
        }

        this._reconnectAttempts++;
        this._realtime.emit('connecting', this._reconnectAttempts);

        // create new socket
        this._socket = new WebSocket(url);
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
        };

        const onclose = this._socket.onclose;
        this._socket.onclose = (reason) => {
            this._onClose(reason, onclose);
        };

        document.addEventListener('visibilitychange', this._domEvtVisibilityChange);
    }

    /**
     * Disconnect from the server
     */
    disconnect() {
        if (this._socket) {
            this._socket.close();
        }

        document.removeEventListener('visibilitychange', this._domEvtVisibilityChange);
    }

    /**
     * Send message to server
     *
     * @param {string} name - The message name
     * @param {object} data - The message data
     */
    sendMessage(name, data) {
        this.send(name + JSON.stringify(data));
    }

    /**
     * Sends a string to the server
     *
     * @param {string} data - The message data
     */
    send(data) {
        if (this._socket && this._socket.readyState === 1) {
            this._socket.send(data);
        }
    }

    /**
     * Gets a sharedb document
     *
     * @param {string} collection - The collection name
     * @param {string} id - The document id
     * @returns {object} The sharedb document
     */
    getDocument(collection, id) {
        return this._sharedb.get(collection, id.toString());
    }

    /**
     * Start bulk subscribing to documents
     */
    startBulkSubscribe() {
        this._sharedb.startBulk();
    }

    /**
     * Stop bulk subscribing to documents
     */
    endBulkSubscribe() {
        this._sharedb.endBulk();
    }

    _onVisibilityChange() {
        if (document.hidden) return;
        if (!this.connected && this._url) {
            this.connect(this._url);
        }
    }

    _onConnect() {
        this._connected = true;
        this._reconnectAttempts = 0;
        this._reconnectInterval = RECONNECT_INTERVAL;
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

        this._realtime.emit('nextAttempt', this._reconnectInterval);

        if (!document.hidden) {
            setTimeout(() => {
                this.connect(this._url);
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
        });
    }


    /**
     * Whether the user is connected to the server
     *
     * @type {boolean}
     */
    get connected() {
        return this._connected;
    }

    /**
     * Whether the server has authenticated the user
     *
     * @type {boolean}
     */
    get authenticated() {
        return this._authenticated;
    }

    /**
     * Gets the sharedb instance
     *
     * @type {object}
     */
    get sharedb() {
        return this._sharedb;
    }
}

export { RealtimeConnection };
