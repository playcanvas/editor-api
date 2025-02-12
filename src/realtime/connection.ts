import { Events } from '@playcanvas/observer';

import { globals as api } from '../globals';
import { Realtime } from '../realtime';
import { share } from '../sharedb';

const RECONNECT_INTERVAL = 3;
const MAX_ATTEMPTS = 3;

/**
 * Handles connecting and communicating with the Realtime server.
 *
 * @category Internal
 */
class RealtimeConnection extends Events {
    private _url: string;

    private _realtime: Realtime;

    private _socket: WebSocket;

    private _sharedb: any;

    private _reconnectAttempts: number;

    private _reconnectInterval: number;

    private _connected: boolean;

    private _authenticated: boolean;

    private _sendQueue: (string | ArrayBuffer | Blob | ArrayBufferView<ArrayBufferLike>)[] = [];

    private _domEvtVisibilityChange: any;

    /**
     * Constructor
     *
     * @param realtime - The realtime API
     */
    constructor(realtime: Realtime) {
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
     * @param url - The server URL
     */
    connect(url: string) {
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

        const send = this._socket.send;
        this._socket.send = (data) => {
            if (this._socket.readyState === WebSocket.OPEN) {
                send.call(this._socket, data);
            } else {
                this._sendQueue.push(data);
            }
        };

        const onmessage = this._socket.onmessage;
        this._socket.onmessage = (msg) => {
            if (!this._onMessage(msg)) {
                onmessage.call(this._socket, msg);
            }
        };

        const onopen = this._socket.onopen;
        this._socket.onopen = (ev) => {
            while (this._sendQueue.length) {
                this._socket.send(this._sendQueue.shift());
            }
            onopen.call(this._socket, ev);
        };

        const onclose = this._socket.onclose;
        this._socket.onclose = (reason) => {
            this._onClose(reason, onclose.bind(this._socket));
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
     * @param name - The message name
     * @param data - The message data
     */
    sendMessage(name: string, data: object) {
        this.send(name + JSON.stringify(data));
    }

    /**
     * Sends a string to the server
     *
     * @param data - The message data
     */
    send(data: string) {
        if (this._socket && this._socket.readyState === WebSocket.OPEN) {
            this._socket.send(data);
        }
    }

    /**
     * Gets a sharedb document
     *
     * @param collection - The collection name
     * @param id - The document id
     * @returns The sharedb document
     */
    getDocument(collection: string, id: number) {
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

    private _onVisibilityChange() {
        if (document.hidden) return;
        if (!this.connected && this._url) {
            this.connect(this._url);
        }
    }

    private _onConnect() {
        this._connected = true;
        this._reconnectAttempts = 0;
        this._reconnectInterval = RECONNECT_INTERVAL;
        this._sendAuth();
        this._realtime.emit('connected');
    }

    private _onError(msg: any) {
        if (this._sharedb.state === 'connected') return;
        this._realtime.emit('error', msg);
    }

    private _onBulkSubscribeError(msg: any) {
        this._realtime.emit('error:bs', msg);
    }

    private _onClose(reason: CloseEvent, originalOnClose: () => void) {
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

    private _onMessage(msg: MessageEvent<any>) {
        try {
            if (msg.data.startsWith('auth')) {
                return this._onMessageAuth(msg);
            }  else if (msg.data.startsWith('selection')) {
                return this._onMessageSelection(msg);
            }

            return false;
        } catch (err) {
            console.error(err);
        }
    }

    private _onMessageAuth(_msg: MessageEvent<any>) {
        if (!this._authenticated) {
            this._authenticated = true;
            this._realtime.emit('authenticated');
        }

        return true;
    }

    private _onMessageSelection(msg: MessageEvent<any>) {
        const data = msg.data.slice('selection:'.length);
        this._realtime.emit('selection', data);
        return true;
    }

    private _onMessageFs(msg: { data: any; }) {
        let data = msg.data.slice('fs:'.length);
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

    private _sendAuth() {
        this.sendMessage('auth', {
            accessToken: api.accessToken
        });
    }


    /**
     * Whether the user is connected to the server
     */
    get connected() {
        return this._connected;
    }

    /**
     * Whether the server has authenticated the user
     */
    get authenticated() {
        return this._authenticated;
    }

    /**
     * Gets the sharedb instance
     */
    get sharedb() {
        return this._sharedb;
    }
}

export { RealtimeConnection };
