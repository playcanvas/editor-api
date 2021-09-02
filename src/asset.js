import { globals as api } from './globals';
import { Events, Observer, ObserverHistory } from '@playcanvas/observer';

/**
 * Represents an Asset
 */
class Asset extends Events {
    /**  @typedef {import("./assets").Assets} Assets */

    /**
     * Constructor
     *
     * @param {object} data - The asset data
     */
    constructor(data = {}) {
        super();

        // allow duplicate values in data.frameKeys of sprite asset
        let options = null;
        if (data.type === 'sprite') {
            options = {
                pathsWithDuplicates: ['data.frameKeys']
            };
        }

        data = Object.assign({
            name: 'New Asset',
            tags: [],
            meta: null,
            data: null,
            file: null,
            path: []
        }, data);

        this._observer = new Observer(data, options);
        this._observer.apiAsset = this;
        this._observer.addEmitter(this);

        this._observer.latestFn = () => {
            const latest = api.assets.get(this.get('id'));
            return latest && latest._observer;
        };

        this._resetThumbnailUrls();

        this._observer.on('has_thumbnail:set', this._resetThumbnailUrls.bind(this));

        this._suspendOnSet = false;
        this._observer.on('*:set', this._onSet.bind(this));

        this._history = {};
    }

    _initializeHistory() {
        if (this._observer.history) return;

        this._history = new ObserverHistory({
            item: this._observer,
            prefix: 'asset.' + this.get('id') + '.',
            history: api.history
        });

        this._observer.history = this._history;
    }

    _resetThumbnailUrls() {
        const type = this.get('type') || '';
        if (!type.startsWith('texture')) return;

        if (this.get('has_thumbnail')) {
            const id = this.get('id');
            this.set('thumbnails', {
                's': `/api/assets/${id}/thumbnail/small?branchId=${api.branchId}`,
                'm': `/api/assets/${id}/thumbnail/medium?branchId=${api.branchId}`,
                'l': `/api/assets/${id}/thumbnail/large?branchId=${api.branchId}`,
                'xl': `/api/assets/${id}/thumbnail/xlarge?branchId=${api.branchId}`
            });
        } else {
            this.unset('thumbnails');
        }
    }

    _onSet(path, value) {
        if (this._suspendOnSet || ! path.startsWith('file') || path.endsWith('.url') || ! this.get('file'))
            return;

        this._suspendOnSet = true;

        const parts = path.split('.');

        if ((parts.length === 1 || parts.length === 2) && parts[1] !== 'variants') {
            // reset file url
            this.set('file.url', Asset.getFileUrl(this.get('id'), this.get('file.filename')));
            // reset thumbnails
            this._resetThumbnailUrls();
        } else if (parts.length >= 3 && parts[1] === 'variants') {
            const format = parts[2];
            this.set(`file.variants.${format}.url`, Asset.getFileUrl(this.get('id'), this.get(`file.variants.${format}.filename`)));
        }

        this._suspendOnSet = false;
    }

    /**
     * Checks if path exists
     *
     * @param {string} path - The path
     * @returns {boolean} True if path exists
     */
    has(path) {
        return this._observer.has(path);
    }

    /**
     * Gets value at path
     *
     * @param {string} path - The path
     * @returns {any} The value
     */
    get(path) {
        return this._observer.get(path);
    }

    /**
     * Sets value at path
     *
     * @param {string} path - The path
     * @param {any} value - The value
     * @returns {boolean} Whether the value was set
     */
    set(path, value) {
        return this._observer.set(path, value);
    }

    /**
     * Unsets value at path
     *
     * @param {string} path - The path
     * @returns {boolean} Whether the value was unset
     */
    unset(path) {
        return this._observer.unset(path);
    }

    /**
     * Inserts value in array at path, at specified index
     *
     * @param {string} path - The path
     * @param {any} value - The value
     * @param {number} index - The index (if undefined the value will be inserted in the end)
     * @returns {boolean} Whether the value was inserted
     */
    insert(path, value, index) {
        return this._observer.insert(path, value, index);
    }

    /**
     * Remove value from array at path.
     *
     * @param {string} path - The path
     * @param {any} value - The value
     * @returns {boolean} Whether the value was removed
     */
    removeValue(path, value) {
        return this._observer.removeValue(path, value);
    }

    /**
     * Returns JSON representation of entity data
     *
     * @returns {object} - The data
     */
    json() {
        return this._observer.json();
    }

    /**
     * Returns the latest version of the Asset from the Assets API.
     *
     * @returns {Asset} The asset
     */
    latest() {
        return api.assets.get(this._observer.get('id'));
    }

    /**
     * Loads the asset's data from sharedb and subscribes to changes
     */
    async loadAndSubscribe() {
        if (!api.realtime) return;

        const uniqueId = this.get('uniqueId');
        const a = api.realtime.assets.load(uniqueId);
        await new Promise((resolve, reject) => {
            a.once('load', () => {
                const data = a.data;

                data.id = parseInt(data.item_id, 10);
                data.uniqueId = uniqueId;
                data.createdAt = this.get('createdAt');

                // delete unnecessary fields
                delete data.item_id;
                delete data.branch_id;

                if (data.file) {
                    data.file.url = Asset.getFileUrl(data.id, data.file.filename);

                    if (data.file.variants) {
                        for (const key in data.file.variants) {
                            data.file.variants[key].url = Asset.getFileUrl(data.id, data.file.variants[key].filename);
                        }
                    }
                }

                for (const field in a.data) {
                    this.set(field, a.data[field]);
                }

                resolve();
            });

            a.once('error:load', (err) => {
                reject(err);
            });
        });
    }

    async parseScript() {
        // TODD
    }

    /**
     * Deletes this asset
     */
    async delete() {
        await api.assets.delete([this]);
    }

    /**
     * Gets observer history for this assset
     *
     * @type {ObserverHistory}
     */
    get history() {
        return this._history;
    }

    /**
     * Gets the file URL for an asset file
     *
     * @param {number} id - The asset id
     * @param {string} filename - The desired filename
     * @returns {string} The file URL
     */
    static getFileUrl(id, filename) {
        return `/api/assets/${id}/file/${filename}?branchId=${api.branchId}`;
    }
}

export { Asset };
