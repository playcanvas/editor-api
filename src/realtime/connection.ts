import { Events } from '@playcanvas/observer';
import { type } from 'ot-text';
import * as share from 'sharedb/lib/client/index';
share.types.register(type);

import { globals as api } from '../globals';
import { Realtime } from '../realtime';

const RECONNECT_INTERVAL = 3;
const MAX_ATTEMPTS = 3;

type ShareDb = share.Connection & {
    bindToSocket: (socket: WebSocket) => void;
    startBulk: () => void;
    endBulk: () => void;
};

/**
 * Handles connecting and communicating with the Realtime server.
 *
 * @category Internal
 */
class RealtimeConnection extends Events {
    private _url: string;

    private _realtime: Realtime;

    private _socket: WebSocket;

    private _sharedb: ShareDb;

    private _reconnectAttempts: number;

    private _reconnectInterval: number;

    private _connected: boolean;

    private _authenticated: boolean;

    private _sendQueue: (string | ArrayBuffer | Blob | ArrayBufferView)[] = [];

    private _domEvtVisibilityChange: () => void;

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

        this._domEvtVisibilityChange = () => {
            if (document.hidden) {
                return;
            }
            if (!this.connected && this._url) {
                this.connect(this._url);
            }
        };
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
        this._sharedb = new share.Connection(this._socket) as ShareDb;

        this._sharedb.on('connected', () => {
            this._connected = true;
            this._reconnectAttempts = 0;
            this._reconnectInterval = RECONNECT_INTERVAL;

            this.sendMessage('auth', {
                accessToken: api.accessToken
            });

            this._realtime.emit('connected');
        });
        this._sharedb.on('error', (msg: any) => {
            if (this._sharedb.state === 'connected') {
                return;
            }
            this._realtime.emit('error', msg);
        });
        this._sharedb.on('bs error' as any, (msg: any) => {
            this._realtime.emit('error:bs', msg);
        });

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
            try {
                // handle auth
                if (msg.data.startsWith('auth')) {
                    if (!this._authenticated) {
                        this._authenticated = true;
                        this._realtime.emit('authenticated');
                    }
                    return;
                }

                // handle selection
                if (msg.data.startsWith('selection')) {
                    const data = msg.data.slice('selection:'.length);
                    this._realtime.emit('selection', data);
                    return;
                }
            } catch (err) {
                console.error(err);
            }
            onmessage.call(this._socket, msg);
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
            this._connected = false;
            this._authenticated = false;

            this._realtime.emit('disconnect', reason);
            onclose.call(this._socket, reason);

            this._realtime.emit('nextAttempt', this._reconnectInterval);

            if (!document.hidden) {
                setTimeout(() => {
                    this.connect(this._url);
                }, this._reconnectInterval * 1000);
            }
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
