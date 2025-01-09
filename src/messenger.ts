import { Events } from '@playcanvas/observer';

import { globals as api } from './globals';

type MessagerClient = Events & {
    connect(url: string): void;
    isConnected: boolean;
    authenticate(accessToken: string, role: string): void;
    projectWatch(projectId: string): void;
}

/**
 * The Messenger API. The messenger receives messages
 * when various things happen e.g. an asset is created etc.
 *
 * @category Internal
 */
class Messenger extends Events {
    private _messenger: MessagerClient;

    private _url: string;

    /**
     * Constructor
     *
     * @param {MessagerClient} messenger - The instance of the Messenger client - this is
     * a different class which requires the Messenger client library to be downloaded.
     */
    constructor(messenger: MessagerClient) {
        super();
        this._messenger = messenger;
        this._url = null;

        messenger.on('connect', this._onConnect.bind(this));
        messenger.on('welcome', this._onWelcome.bind(this));
        messenger.on('message', this._onMessage.bind(this));
    }

    _onConnect() {
        this._messenger.authenticate(api.accessToken, 'designer');
        this.emit('connected');
    }

    _onWelcome() {
        this._messenger.projectWatch(api.projectId as unknown as string);
    }

    _onMessage(data: { name: string; data: any; }) {
        this.emit(data.name, data.data);
        this.emit('message', data.name, data.data);
    }

    /**
     * Connects to the messenger server.
     *
     * @param {string} url - The server URL
     */
    connect(url: string) {
        this._url = url;
        this._messenger.connect(url);
    }

    /**
     * Returns true if we are connected to the messenger server.
     *
     * @type {boolean}
     */
    get isConnected() {
        return this._messenger.isConnected;
    }
}

export { Messenger };
