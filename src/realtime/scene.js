import { Events } from '../pcui';

/**
 * Represents a scene in sharedb
 */
class RealtimeScene extends Events {
    /** @typedef {import("../entity").Entity} Entity */
    /** @typedef {import("../realtime").Realtime} Realtime */
    /** @typedef {import("./connection").RealtimeConnection} RealtimeConnection */

    /**
     * Constructor
     *
     * @param {number} uniqueId - The unique scene id
     * @param {Realtime} realtime - The realtime API
     * @param {RealtimeConnection} connection - The realtime connection
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
     * Loads scene from sharedb and subscribes to changes.
     */
    load() {
        if (this._document) return;

        this._document = this._connection.getDocument('scenes', this._uniqueId);
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
     * Add entity to scene
     *
     * @param {Entity} entity - The entity
     */
    addEntity(entity) {
        this.submitOp({
            p: ['entities', entity.get('resource_id')],
            oi: entity.json()
        });
    }

    /**
     * Removes entity from scene (not from children of another entity)
     *
     * @param {Entity} entity - The entity
     */
    removeEntity(entity) {
        this.submitOp({
            p: ['entities', entity.get('resource_id')],
            od: {}
        });
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
            this._realtime.emit('error:scene', err, this._uniqueId);
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
        this._realtime.emit('error:scene', err, this._uniqueId);
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

    /**
     * Whether the scene is loaded
     *
     * @type {boolean}
     */
    get loaded() {
        return this._loaded;
    }

    /**
     * The scene data
     *
     * @type {object}
     */
    get data() {
        return this._loaded && this._document && this._document.data || null;
    }

    /**
     * The scene id - used in combination with the branch id
     *
     * @type {number}
     */
    get id() {
        return this.data && this.data.item_id;
    }

    /**
     * The scene's unique id
     *
     * @type {number}
     */
    get uniqueId() {
        return this._uniqueId;
    }
}

export { RealtimeScene };
