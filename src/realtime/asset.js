import { Events } from '@playcanvas/observer';

/**
 * Represents an asset in sharedb
 *
 * @category Internal
 */
class RealtimeAsset extends Events {

    /** @typedef {import("../realtime").Realtime} Realtime */
    /** @typedef {import("./connection").RealtimeConnection} RealtimeConnection */

    /**
     * Constructor
     *
     * @param {number} uniqueId - The unique asset id
     * @param {Realtime} realtime - The realtime API
     * @param {RealtimeConnection} connection - The realtime connection
     *
     */
    constructor(uniqueId, realtime, connection) {
        super();
        this._uniqueId = uniqueId;
        this._realtime = realtime;
        this._connection = connection;
        this._document = null;
        this._loaded = false;

        this._evtConnection = null;
    }

    /**
     * Loads asset from sharedb and subscribes to changes.
     */
    load() {
        if (this._document) return;

        this._document = this._connection.getDocument('assets', this._uniqueId);
        this._document.on('error', this._onError.bind(this));
        this._document.on('load', this._onLoad.bind(this));

        this._evtConnection = this._realtime.on('disconnect', this.unload.bind(this));

        this._document.subscribe();
    }

    /**
     * Unloads scene from sharedb and unsubscribes from changes.
     */
    unload() {
        if (!this._document) return;

        this._document.unsubscribe();
        this._document.destroy();
        this._document = null;
        this._loaded = false;

        this._connection.send('close:scene:' + this._uniqueId);

        this._evtConnection.unbind();
        this._evtConnection = null;

        this.emit('unload');
    }

    /**
     * Submits sharedb operation
     *
     * @param {object} op - The operation
     */
    submitOp(op) {
        if (!this._loaded) return;

        try {
            this._document.submitOp([op]);
        } catch (err) {
            console.error(err);
            this._realtime.emit('error:asset', err, this._uniqueId);
        }
    }

    /**
     * Calls the callback when there are no changes pending to be
     * sent to the server
     *
     * @param {Function} callback - The callback
     */
    whenNothingPending(callback) {
        if (this._document) {
            this._document.whenNothingPending(callback);
        }
    }

    _onError(err) {
        if (this._connection.connected) {
            console.log(err);
        } else {
            this._realtime.emit('error:asset', err, this._uniqueId);
        }
    }

    _onLoad() {
        const assetData = this._document.data;
        if (!assetData) {
            const err = 'Could not load asset: ' + this._uniqueId;
            this._onError(err);
            this.unload();
            this.emit('error:load', err);
            return;
        }

        // notify of operations
        this._document.on('op', this._onOp.bind(this));
        this._loaded = true;
        this.emit('load');
    }

    _onOp(ops, local) {
        if (local) return;

        for (let i = 0; i < ops.length; i++) {
            if (ops[i].p[0]) {
                this._realtime.emit('asset:op', ops[i], this._uniqueId);
            }
        }
    }


    /**
     * Whether the asset is loaded
     *
     * @type {boolean}
     */
    get loaded() {
        return this._loaded;
    }

    /**
     * The asset data
     *
     * @type {object}
     */
    get data() {
        return (this._loaded && this._document) ? this._document.data : null;
    }

    /**
     * The asset id - used in combination with branch id
     *
     * @type {number}
     */
    get id() {
        return this.data?.item_id;
    }

    /**
     * The asset's unique id
     *
     * @type {number}
     */
    get uniqueId() {
        return this._uniqueId;
    }
}

export { RealtimeAsset };
