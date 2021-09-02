import { globals as api } from './globals';
import { Events } from '@playcanvas/observer';

/**
 * The Messenger API. The messenger receives messages
 * when various things happen e.g. an asset is created etc.
 *
 * @category Internal
 */
class Messenger extends Events {
    /**
     * Constructor
     *
     * @param {object} messenger - The instance of the Messenger client - this is
     * a different class which requires the Messenger client library to be downloaded.
     */
    constructor(messenger) {
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
        this._messenger.projectWatch(api.projectId);
    }

    _onMessage(data) {
        this.emit(data.name, data.data);
        this.emit('message', data.name, data.data);
    }

    /**
     * Connects to the messenger server.
     *
     * @param {string} url - The server URL
     */
    connect(url) {
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
