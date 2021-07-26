import { globals as api } from './globals';
import { Observer } from './pcui'

/**
 * Represents an Asset
 */
class Asset {
    /**  @typedef {import("./assets").Assets} Assets */

    /**
     * Constructor
     *
     * @param {Assets} assetsApi - The asset api
     * @param {object} data - The asset data
     */
    constructor(assetsApi, data) {
        this._assets = assetsApi;

        // allow duplicate values in data.frameKeys of sprite asset
        let options = null;
        if (data.type === 'sprite') {
            options = {
                pathsWithDuplicates: ['data.frameKeys']
            };
        }

        this._observer = new Observer(data, options);
        this._observer.apiAsset = this;

        const id = data.id;
        this._observer.latestFn = () => {
            const latest = this._assets.get(id);
            return latest && latest._observer;
        };

        this._resetThumbnailUrls();

        this._observer.on('has_thumbnail:set', this._resetThumbnailUrls.bind(this));

        this._suspendOnSet = false;
        this._observer.on('*:set', this._onSet.bind(this));
    }

    _resetThumbnailUrls() {
        if (!['texture', 'textureatlas'].includes(this.get('type'))) return;

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
        if (this._suspendOnSet || ! path.startsWith('file') || path.endsWith('.url') || ! asset.get('file'))
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
        return this._assets.get(this._observer.get('id'));
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
