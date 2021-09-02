import { Asset } from './asset';
import { globals as api } from './globals';
import { Events, ObserverList } from '@playcanvas/observer';
import { uploadFile } from './assets/upload';
import { createTemplate } from './assets/createTemplate';
import { createScript } from './assets/createScript';

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
     * @category Internal
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
     * @category Internal
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
     *
     * @category Internal
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
     *
     * @category Internal
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
                const asset = new Asset(assets[i]);
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

    /**
     * Creates new asset
     *
     * @private
     * @param {object} data - The asset fields
     * @param {object} settings - Import settings
     * @returns {Promise<Asset>} The new asset
     */
    async _create(data, settings = {}) {
        if (data.folder) {
            data.folderId = data.folder.get('id');
        }

        const result = await uploadFile(data, settings);
        let asset = this.get(result.id);
        if (!asset) {
            asset = await new Promise(resolve => {
                this.once(`add[${result.id}]`, a => resolve(a));
            });
        }

        return asset;
    }

    /**
     * Creates new anim state graph asset
     *
     * @param {string} name - The asset name
     * @param {object} data - The asset data
     * @param {Asset} folder - The parent folder asset
     * @returns {Promise<Asset>} The new asset
     */
    createAnimStateGraph(name, data = null, folder = null) {
        return this._create({
            name: name || 'New Anim State Graph',
            type: 'animstategraph',
            data: data || api.schema.assets.getDefaultData('animstategraph'),
            folder: folder
        });
    }

    /**
     * Creates new bundle asset
     *
     * @param {string} name - The asset name
     * @param {Asset[]} assets - The assets that the bundle will contain
     * @param {Asset} folder - The parent folder asset
     * @returns {Promise<Asset>} The new asset
     */
    createBundle(name, assets = [], folder = null) {
        return this._create({
            name: name || 'New Bundle',
            type: 'bundle',
            folder: folder,
            data: {
                assets: assets.map(a => a.get('id'))
            }
        });
    }

    /**
     * Creates new CSS asset
     *
     * @param {string} name - The asset name
     * @param {string} text - The CSS
     * @param {string} folder - The parent folder asset
     * @returns {Promise<Asset>} The new asset
     */
    createCss(name, text = '\n', folder = null) {
        return this._create({
            name: name || 'New Css',
            type: 'css',
            folder: folder,
            filename: 'asset.css',
            file: new Blob([text], { type: 'text/css' })
        });
    }

    /**
     * Creates new cubemap asset
     *
     * @param {string} name - The asset name
     * @param {Asset[]} textures - The textures for each cubemap face in this order:
     * right, left, up, down, front, back
     * @param {object} settings - Cubemap settings
     * @param {number} settings.minFilter - Cubemap minFilter value. Defaults to pc.FILTER_LINEAR_MIPMAP_LINEAR.
     * @param {number} settings.magFilter - Cubemap magFilter value. Defaults to pc.FILTER_LINEAR.
     * @param {number} settings.anisotropy - Cubemap anisotropy value. Defaults to 1.
     * @param {Asset} folder - The parent folder asset
     * @returns {Promise<Asset>} The new asset
     */
    createCubemap(name, textures = [], settings = null, folder = null) {
        textures = textures.slice(0, 6);
        for (let i = 0; i < 6; i++) {
            textures[i] = (textures[i] ? textures[i].get('id') : null);
        }

        settings = settings || {};

        return this._create({
            name: name || 'New Cubemap',
            type: 'cubemap',
            folder: folder,
            data: {
                name: name || 'New Cubemap',
                textures: textures,
                minFilter: settings.minFilter !== undefined ? settings.minFilter : 5, // linear mipmap linear
                magFilter: settings.magFilter !== undefined ? settings.magFilter : 1, // linear
                anisotropy: settings.anisotropy !== undefined ? settings.anisotropy : 1
            }
        });
    }

    /**
     * Creates a new folder asset
     *
     * @param {string} name - The asset name
     * @param {Asset} folder - The parent folder asset
     * @returns {Promise<Asset>} The new asset
     */
    createFolder(name, folder = null) {
        return this._create({
            name: name || 'New Folder',
            type: 'folder',
            folder: folder
        });
    }

    /**
     * Creates new HTML asset
     *
     * @param {string} name - The asset name
     * @param {string} text - The HTML
     * @param {Asset} folder - The parent folder asset
     * @returns {Promise<Asset>} The new asset
     */
    createHtml(name, text = '\n', folder = null) {
        return this._create({
            name: name || 'New Html',
            type: 'html',
            folder: folder,
            filename: 'asset.html',
            file: new Blob([text], { type: 'text/html' })
        });
    }

    /**
     * Creates new JSON asset
     *
     * @param {string} name - The asset name
     * @param {object} json - The JSON
     * @param {Asset} folder - The parent folder asset
     * @returns {Promise<Asset>} The new asset
     */
    createJson(name, json = {}, folder = null) {
        return this._create({
            name: name || 'New Json',
            type: 'json',
            folder: folder,
            filename: 'asset.json',
            file: new Blob([JSON.stringify(json)], { type: 'application/json' })
        });
    }

    /**
     * Creates new localization JSON asset
     *
     * @param {string} name - The asset name
     * @param {object} localizationData - The localization data. If null then default data will be used.
     * @param {Asset} folder - The parent folder asset
     * @returns {Promise<Asset>} The new asset
     */
    createI18n(name, localizationData = null, folder = null) {
        return this.createJson(name, localizationData || {
            "header": {
                "version": 1
            },
            "data": [{
                "info": {
                    "locale": "en-US"
                },
                "messages": {
                    "key": "Single key translation",
                    "key plural": ["One key translation", "Translation for {number} keys"]
                }
            }]
        }, folder);
    }

    /**
     * Creates new material asset
     *
     * @param {string} name - The asset name
     * @param {object} data - The material data. Default values will be used for missing fields.
     * @param {Asset} folder - The parent folder asset
     * @returns {Promise<Asset>} The new asset
     */
    createMaterial(name, data = null, folder = null) {
        const defaultData = api.schema.assets.getDefaultData('material');
        if (data) {
            for (const key in defaultData) {
                if (data[key]) {
                    defaultData[key] = data[key];
                }
            }
        }

        return this._create({
            name: name || 'New Material',
            type: 'material',
            folder: folder,
            data: defaultData
        });
    }

    /**
     * Creates new script asset
     *
     * @param {string} name - The name of the script. This will be the name of the class inside the script if boilerplate code is used.
     * @param {string} filename - The filename of the script. This will also be the name of the script asset. If not defined it will be generated
     * from the name of the script.
     * @param {string} text - The contents of the script. If none then boilerplate code will be used.
     * @param {Asset} folder - The parent folder asset
     * @returns {Promise<Asset>} The new asset
     */
    async createScript(name, filename, text = null, folder = null) {
        if (!name) {
            throw new Error('createScript: missing required name');
        }

        const result = createScript(name, filename, text);

        const asset = await this._create({
            name: result.filename,
            type: 'script',
            folder: folder,
            filename: result.filename,
            file: new Blob([result.content], { type: 'text/javascript' }),
            data: {
                scripts: { },
                loading: false,
                loadingType: 0 // load script as asset
            }
        });

        const url = asset.get('file.url');
        if (url) {
            asset.parseScript();
        } else {
            asset.once('file.url:set', url => asset.parseScript());
        }
    }

    /**
     * Creates new shader asset
     *
     * @param {string} name - The asset name
     * @param {string} text - The GLSL
     * @param {Asset} folder - The parent folder asset
     * @returns {Promise<Asset>} The new asset
     */
    createShader(name, text = '\n', folder = null) {
        return this._create({
            name: name || 'New Shader',
            type: 'shader',
            folder: folder,
            filename: 'asset.glsl',
            file: new Blob([text], { type: 'text/x-glsl' })
        });
    }

    /**
     * Creates new sprite asset
     *
     * @param {string} name - The asset name
     * @param {object} data - The sprite data
     * @param {number} data.pixelsPerUnit - The sprite's pixels per unit value. Defaults to 100.
     * @param {number[]} data.frameKeys - The sprite's frame keys
     * @param {Asset} data.textureAtlas - The sprite's texture atlas asset
     * @param {number} data.renderMode - The sprite's render mode. Defaults to pc.SPRITE_RENDERMODE_SIMPLE.
     * @param {Asset} folder - The parent folder asset
     * @returns {Promise<Asset>} The new asset
     */
    createSprite(name, data = {}, folder = null) {
        const args = {};
        args.pixelsPerUnit = data.pixelsPerUnit !== undefined ? data.pixelsPerUnit : 100;
        args.frameKeys = data.frameKeys ? data.frameKeys.map(val => val.toString()) : [];
        args.textureAtlasAsset = data.textureAtlas ? data.textureAtlas.get('id') : null;
        args.renderMode = data.renderMode !== undefined ? data.renderMode : 0;

        return this._create({
            name: name || 'New Sprite',
            type: 'sprite',
            folder: folder,
            data: args
        });
    }

    /**
     * Creates new text asset
     *
     * @param {string} name - The asset name
     * @param {string} text - The text
     * @param {Asset} folder - The parent folder asset
     * @returns {Promise<Asset>} The new asset
     */
    createText(name, text = '\n', folder = null) {
        return this._create({
            name: name || 'New Text',
            type: 'text',
            folder: folder,
            filename: 'asset.txt',
            file: new Blob([text], { type: 'text/plain' })
        });
    }

    /**
     * Creates new template asset
     *
     * @typedef {import("./entity").Entity} Entity
     * @param {string} name - The asset name
     * @param {Entity} entity - The entity to create the template from
     * @param {Asset} folder - The parent folder asset
     * @returns {Promise<Asset>} The new asset
     */
    async createTemplate(name, entity, folder = null) {
        const {
            entities,
            oldToNewIds
        } = createTemplate(entity);

        const asset = await this._create({
            name: name || entity.get('name'),
            type: 'template',
            folder: folder,
            data: { entities }
        });

        const history = entity.history.enabled;
        entity.history.enabled = false;
        entity.set('template_id', parseInt(asset.get('id'), 10));
        entity.set('template_ent_ids', oldToNewIds);
        entity.history.enabled = history;
    }

    /**
     * Deletes specified assets
     *
     * @param {Asset[]} assets - The assets
     */
    async delete(assets) {
        const response = await fetch('/api/assets', {
            body: JSON.stringify({
                assets: assets.map(a => a.get('id')),
                branchId: api.branchId
            }),
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(response.status + ': ' + response.statusText);
        }

        assets.forEach(a => this.remove(a));
    }
}

export { Assets };
