import { RealtimeAsset } from './asset';
import { globals as api } from '../globals';
import { Events } from '@playcanvas/observer';

/**
 * Provides methods to load assets from sharedb
 *
 * @category Internal
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
     * @param {number} id - The asset's unique id
     * @returns {RealtimeAsset} The asset
     */
    load(id) {
        let asset = this._assets[id];
        if (!asset) {
            asset = new RealtimeAsset(id, this._realtime, this._connection);
            this._assets[id] = asset;
        }

        if (!asset.loaded) {
            asset.load();
        }

        return asset;
    }

    /**
     * Gets an already loaded asset
     *
     * @param {number} id - The asset's unique id
     * @returns {RealtimeAsset} The asset
     */
    get(id) {
        return this._assets[id] || null;
    }

    /**
     * Unloads an asset
     *
     * @param {number} id - The asset's unique id
     */
    unload(id) {
        if (this._assets[id]) {
            this._assets[id].unload();
            delete this._assets[id];
        }
    }
}

export { RealtimeAssets };
