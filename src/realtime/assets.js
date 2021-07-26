import { Events } from '../pcui';

/**
 * Provides methods to load assets from sharedb
 */
class RealtimeAssets extends Events {
    /** @typedef {import("../realtime").Realtime} Realtime */
    /** @typedef {import("../realtime/connection").RealtimeConnection} RealtimeConnection */

    /**
     * Constructor
     *
     * @param {Realtime} realtime - The realtime API
     * @param {RealtimeConnection} connection - The realtime connection
     */
    constructor(realtime, connection) {
        super();
        this._realtime = realtime;
        this._connection = connection;
        this._assets = {};
    }

    /**
     * Loads an asset
     *
     * @param {number} id - The asset id
     * @returns {RealtimeAsset} The asset
     */
    load(id) {
        let asset = this._assets[id];
        if (!asset) {
            asset = new RealtimeAsset(id, this._realtime, this._connection);
        }

        if (!asset.loaded) {
            asset.load();
        }

        return asset;
    }

    /**
     * Unloads an asset
     *
     * @param {number} id - The asset id
     */
    unload(id) {
        if (this._assets[id]) {
            this._assets[id].unload();
            delete this._scenes[id];
        }
    }
}

export { RealtimeAssets };
