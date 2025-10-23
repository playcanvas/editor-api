import { Events } from '@playcanvas/observer';
import { type } from 'ot-text';
import * as share from 'sharedb/lib/client/index';
share.types.register(type);

import { Deferred } from '../deferred';
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

    private _reconnectAttempts: number = 0;

    private _reconnectInterval: number = RECONNECT_INTERVAL;

    private _connected: boolean = false;

    private _authenticated: boolean = false;

    private _active: Deferred<WebSocket> = new Deferred<WebSocket>();

    private _domEvtVisibilityChange: () => void;

    private _alive: ReturnType<typeof setInterval> | null = null;

    /**
     * Constructor
     *
     * @param realtime - The realtime API
     */
    constructor(realtime: Realtime) {
        super();

        this._realtime = realtime;
        this._domEvtVisibilityChange = () => {
            if (document.hidden) {
                return;
            }
            if (!this.connected && this._url) {
                this.connect(this._url);
            }
        };
    }

    private _onauth(socket: WebSocket) {
        if (this._sharedb) {
            this._sharedb.bindToSocket(socket);
        } else {
            this._sharedb = new share.Connection(socket) as ShareDb;
            this._sharedb.on('error', (err) => {
                if (this._sharedb?.state === 'connected') {
                    return;
                }
                this._realtime.emit('error', err);
            });
            this._sharedb.on('bs error' as any, (msg: any) => {
                this._realtime.emit('error:bs', msg);
            });
        }

        // reset keep alive
        if (this._alive) {
            clearInterval(this._alive);
        }
        this._alive = setInterval(() => {
            if (!this._sharedb) {
                return;
            }
            if (this._sharedb.state === 'connected') {
                this._sharedb.ping();
            }
        }, 1000);

        // intercept messages
        const onmessage = socket.onmessage;
        socket.onmessage = (msg) => {
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
            onmessage.call(socket, msg);
        };

        // allow sending messages
        this._active.resolve(socket);

        // mark as authenticated
        this._authenticated = true;
        this._realtime.emit('authenticated');
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
        const socket = new WebSocket(url);

        socket.onopen = () => {
            this._connected = true;
            this._reconnectAttempts = 0;

            socket.send(`auth${JSON.stringify({ accessToken: api.accessToken })}`);

            this._realtime.emit('connected');
        };

        socket.onmessage = (msg) => {
            if (msg.data.toString().startsWith('auth')) {
                // clear this handler
                socket.onmessage = null;

                this._onauth(socket);
            }
        };

        socket.onclose = (reason) => {
            // block sending messages
            this._active = new Deferred<WebSocket>();

            // clear keep alive
            if (this._alive) {
                clearInterval(this._alive);
                this._alive = null;
            }

            this._connected = false;
            this._authenticated = false;

            this._realtime.emit('disconnect', reason);

            this._realtime.emit('nextAttempt', this._reconnectInterval);

            if (!document.hidden) {
                setTimeout(() => {
                    this.connect(this._url);
                }, this._reconnectInterval * 1000);
            }
        };

        document.addEventListener('visibilitychange', this._domEvtVisibilityChange);

        this._socket = socket;
    }

    /**
     * Disconnect from the server
     */
    disconnect() {
        this._sharedb?.close();

        this._socket?.close();

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
    async send(data: string) {
        const socket = await this._active.promise;
        socket.send(data);
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
