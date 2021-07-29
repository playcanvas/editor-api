import { Asset } from './asset';
import { globals as api } from './globals';
import { Events } from './pcui';

/**
 * The Assets Editor API
 */
class Assets extends Events {
    /**
     * Constructor
     */
    constructor() {
        super();

        this._uniqueIdToItemId = {};

        this._assets = new ObserverList({
            index: 'id',
            sorted: (a, b) => {
                const f = (b._data.type === 'folder') - (a._data.type === 'folder');
                if (f !== 0)
                    return f;
                if (a._data.name.toLowerCase() > b._data.name.toLowerCase()) {
                    return 1;
                } else if (a._data.name.toLowerCase() < b._data.name.toLowerCase()) {
                    return -1;
                }
                return 0;
            }
        });
    }

    /**
     * Gets asset by id
     *
     * @param {number} id - The asset id
     * @returns {Asset} The asset
     */
    get(id) {
        const a = this._assets.get(id);
        return a ? a.apiAsset : null;
    }

    /**
     * Gets asset by its unique id
     *
     * @param {number} uniqueId - The unique id
     * @returns {Asset} The asset
     */
    getUnique(uniqueId) {
        const id = this._uniqueIdToItemId[uniqueId];
        return id ? this.get(id) : null;
    }

    /**
     * Returns array of all assets
     *
     * @returns {Array[]} The assets
     */
    list() {
        return this._assets.array().map(a => a.apiAsset);
    }

    /**
     * Finds all assets with specified tags
     *
     * @param  {...string|...string[]} tags - The tags. If multiple tags are specified then assets that contain ANY of the specified
     * tags will be included. If an argument is an array of tags then assets that contain ALL of the tags in the array will be included.
     * @returns {Asset[]} The assets
     */
    listByTag(...tags) {
        return this.filter(asset => {
            const t = asset.get('tags');
            for (let i = 0; i < tags.length; i++) {
                if (Array.isArray(tags[i])) {
                    let countTags = 0;
                    for (let j = 0; j < tags[i].length; j++) {
                        if (t.includes(tags[i][j])) {
                            countTags++;
                        } else {
                            break;
                        }
                    }

                    if (countTags === tags[i].length) {
                        return true;
                    }
                } else {
                    if (t.includes(tags[i])) {
                        return true;
                    }
                }
            }

            return false;
        });
    }

    /**
     * Adds asset to the list
     *
     * @param {Asset} asset - The asset
     */
    add(asset) {
        asset._initializeHistory();

        const pos = this._assets.add(asset._observer);
        if (pos === null) return;

        const id = asset.get('id');
        this._uniqueIdToItemId[asset.get('uniqueId')] = id;

        asset._observer.on('name:set', (name, oldName) => {
            name = name.toLowerCase();
            oldName = oldName.toLowerCase();

            const ind = this._assets.data.indexOf(asset._observer);
            let pos = this._assets.positionNextClosest(asset._observer, (a, b) => {
                const f = (b._data.type === 'folder') - (a._data.type === 'folder');

                if (f !== 0)
                    return f;

                if ((a === b ? oldName : a._data.name.toLowerCase()) > name) {
                    return 1;
                } else if ((a === b ? oldName : a._data.name.toLowerCase()) < name) {
                    return -1;
                }
                return 0;

            });

            if (pos === -1 && (ind + 1) === this._assets.data.length)
                return;

            if (ind !== -1 && (ind + 1 === pos) || (ind === pos))
                return;

            if (ind < pos)
                pos--;

            this._assets.move(asset._observer, pos);
            this.emit('move', asset, pos);
        });

        this.emit(`add:[${id}]`, asset, pos);
        this.emit('add', asset, pos);
    }

    /**
     * Removes asset from the list
     *
     * @param {Asset} asset - The asset
     */
    remove(asset) {
        if (!this._assets.has(asset._observer)) return;

        this._assets.remove(asset._observer);

        delete this._uniqueIdToItemId[asset.get('uniqueId')];
        asset._observer.destroy();

        if (api.realtime) {
            api.realtime.assets.unload(asset.get('uniqueId'));
        }

        this.emit(`remove`, asset);
        this.emit(`remove[${asset.get('id')}]`);
    }

    /**
     * Removes all assets from the list
     */
    clear() {
        const assets = this.list();
        if (!assets.length) return;

        this._assets.clear();

        let i = assets.length;
        while (i--) {
            this.remove(assets[i]);
        }

        this.emit('clear');
    }

    /**
     * Gets assets that satisfy function
     *
     * @param {Function} fn - The function (takes an asset as an argument and returns boolean).
     * @returns {Asset[]} The assets
     */
    filter(fn) {
        return this._assets.data
        .filter(observer => fn(observer.apiAsset))
        .map(observer => observer.apiAsset);
    }

    /**
     * Finds first asset that satisfies function
     *
     * @param {Function} fn - A function that takes an asset as an argument and returns boolean.
     * @returns {Asset} The asset
     */
    findOne(fn) {
        const result = this._assets.data.find(observer => fn(observer.apiAsset));
        return result ? result.apiAsset : null;
    }

    /**
     * Loads all assets in the current project / branch
     * and subscribes to changes
     */
    async loadAllAndSubscribe() {
        this.clear();

        this.emit('load:progress', 0.1);

        const response = await fetch(`/api/projects/${api.projectId}/assets?branchId=${api.branchId}&view=designer`);
        if (!response.ok) {
            console.error(`Could not load assets: [${response.status}] - ${response.statusText}`);
            return;
        }

        const assets = await response.json();
        this.emit('load:progress', 0.5);

        const total = assets.length;
        if (!total) {
            this.emit('load:progress', 1);
            this.emit('load:all');
            return;
        }

        const batchSize = 256;
        let loaded = 0;
        let startBatch = 0;

        const onProgress = () => {
            loaded++;
            this.emit('load:progress', (loaded / total) * 0.5 + 0.5);
            if (loaded === total) {
                this.emit('load:progress', 1);
                this.emit('load:all');
            }
        };

        while (startBatch < total) {
            api.realtime.connection.startBulkSubscribe();
            for (let i = startBatch; i < startBatch + batchSize && i < total; i++) {
                const asset = new Asset(this, assets[i]);
                asset.loadAndSubscribe().then(() => {
                    onProgress();
                    this.add(asset);
                }).catch(err => {
                    onProgress();
                });
            }
            api.realtime.connection.endBulkSubscribe();

            startBatch += batchSize;
        }
    }

    /**
     * Gets the first script asset that contains the specified script
     *
     * @param {string} script - The script name
     * @returns {Asset} The script asset
     */
    getAssetForScript(script) {
        return this.findOne(asset => {
            return asset.get('type') === 'script' &&
                   asset.has('data.scripts.' + script);
        });
    }
}

export { Assets };
