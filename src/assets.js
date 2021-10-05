import { Asset } from './asset';
import { globals as api } from './globals';
import { Events, ObserverList } from '@playcanvas/observer';
import { uploadFile } from './assets/upload';
import { createTemplate } from './assets/createTemplate';
import { createScript } from './assets/createScript';

/**
 * Arguments passed when uploading an asset file.
 *
 * @typedef {object} AssetUploadArguments
 * @property {Asset} folder - The parent folder asset where the asset should be placed.
 * @property {string} filename - The filename of the uploaded file.
 * @property {File} file - The file being uploaded.
 * @property {string} type - The type of the asset we are uploading. See [here](AssetProperties.md) for available asset types.
 * @property {string} name - The name of the asset.
 * @property {string[]} tags - The tags of the asset.
 * @property {number} sourceAssetId - The id of the source asset.
 * @property {object} data - The asset data. This depends on the asset type. See [here](AssetProperties.md) for asset data depending on the type.
 * @property {boolean} preload - Whether to preload the asset. Defaults to true.
 * @property {number} id - If an asset id is specified then this asset will be updated instead of creating a new asset.
 */

/**
 * Import settings used when uploading a texture asset.
 *
 * @typedef {object} TextureImportSettings
 * @property {boolean} pow2 - Whether to resize the texture to power of 2.
 * @property {boolean} searchRelatedAssets - Whether to search for target assets to update
 * throughout the whole project instead of just the same folder.
 */

/**
 * Import settings used when uploading a scene (fbx etc.).
 *
 * @typedef {object} SceneImportSettings
 * @property {boolean} searchRelatedAssets - Whether to search for target assets to update
 * throughout the whole project instead of just the same folder. Defaults to true.
 * @property {boolean} overwriteModel - Whether to overwrite existing model or create a new one. Defaults to true.
 * @property {boolean} overwriteAnimation - Whether to overwrite existing animations or create new ones. Defaults to true.
 * @property {boolean} overwriteMaterial - Whether to overwrite existing materials or create new ones. Defaults to true.
 * @property {boolean} overwriteTexture - Whether to overwrite existing textures or create new ones. Defaults to true.
 * @property {boolean} pow2 - Whether to resize embedded textures to power of 2. Defaults to true.
 * @property {boolean} useGlb - Whether to convert models to GLB. Defaults to true.
 * @property {boolean} animSampleRate - The desired animation sample rate. Defaults to 10.
 * @property {boolean} animCurveTolerance - The animation curve tolerance. Defaults to 0.
 * @property {boolean} animEnableCubic - Whether to enable cubic curves. Defaults to false.
 * @property {boolean} animUseFbxFilename - Whether to use the fbx filename for animation names. Defaults to false.
 */

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
                if ((a._data.name || '').toLowerCase() > (b._data.name || '').toLowerCase()) {
                    return 1;
                } else if ((a._data.name || '').toLowerCase() < (b._data.name || '').toLowerCase()) {
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
            name = (name || '').toLowerCase();
            oldName = (oldName || '').toLowerCase();

            const ind = this._assets.data.indexOf(asset._observer);
            let pos = this._assets.positionNextClosest(asset._observer, (a, b) => {
                const f = (b._data.type === 'folder') - (a._data.type === 'folder');

                if (f !== 0)
                    return f;

                if ((a === b ? oldName : (a._data.name || '').toLowerCase()) > name) {
                    return 1;
                } else if ((a === b ? oldName : (a._data.name || '').toLowerCase()) < name) {
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
     * @param {AssetUploadArguments} data - The asset fields
     * @param {TextureImportSettings|SceneImportSettings} settings - Import settings
     * @returns {Promise<Asset>} The new asset
     */
    async upload(data, settings = {}) {
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
     * Creates new anim state graph asset.
     *
     * @param {object} options - Options
     * @param {string} options.name - The asset name
     * @param {boolean} options.preload - Whether to preload the asset. Defaults to true.
     * @param {object} options.data - The asset data. See [here](AssetProperties.md) for Animstategraph data.
     * @param {Asset} options.folder - The parent folder asset
     * @returns {Promise<Asset>} The new asset
     */
    createAnimStateGraph(options = {}) {
        return this.upload({
            name: options.name || 'New Anim State Graph',
            type: 'animstategraph',
            data: options.data || api.schema.assets.getDefaultData('animstategraph'),
            folder: options.folder,
            preload: options.preload
        });
    }

    /**
     * Creates new bundle asset
     *
     * @param {object} options - Options
     * @param {string} options.name - The asset name
     * @param {Asset[]} options.assets - The assets that the bundle will contain
     * @param {Asset} options.folder - The parent folder asset
     * @param {boolean} options.preload - Whether to preload the asset. Defaults to true.
     * @returns {Promise<Asset>} The new asset
     */
    createBundle(options = {}) {
        return this.upload({
            name: options.name || 'New Bundle',
            type: 'bundle',
            folder: options.folder,
            data: {
                assets: options.assets.map(a => a.get('id'))
            },
            preload: options.preload
        });
    }

    /**
     * Creates new CSS asset
     *
     * @param {object} options - Options
     * @param {string} options.name - The asset name
     * @param {string} options.text - The CSS
     * @param {string} options.folder - The parent folder asset
     * @param {boolean} options.preload - Whether to preload the asset. Defaults to true.
     * @returns {Promise<Asset>} The new asset
     */
    createCss(options = {}) {
        return this.upload({
            name: options.name || 'New Css',
            type: 'css',
            folder: options.folder,
            filename: 'asset.css',
            file: new Blob([options.text || '\n'], { type: 'text/css' }),
            preload: options.preload
        });
    }

    /**
     * Creates new cubemap asset
     *
     * @param {object} options - Options
     * @param {string} options.name - The asset name
     * @param {Asset[]} options.textures - The textures for each cubemap face in this order:
     * right, left, up, down, front, back
     * @param {number} options.minFilter - Cubemap minFilter value. Defaults to pc.FILTER_LINEAR_MIPMAP_LINEAR.
     * @param {number} options.magFilter - Cubemap magFilter value. Defaults to pc.FILTER_LINEAR.
     * @param {number} options.anisotropy - Cubemap anisotropy value. Defaults to 1.
     * @param {Asset} options.folder - The parent folder asset
     * @param {boolean} options.preload - Whether to preload the asset. Defaults to true.
     * @returns {Promise<Asset>} The new asset
     */
    createCubemap(options = {}) {
        const textures = options.textures.slice(0, 6);
        for (let i = 0; i < 6; i++) {
            textures[i] = (textures[i] ? textures[i].get('id') : null);
        }

        return this.upload({
            name: options.name || 'New Cubemap',
            type: 'cubemap',
            folder: options.folder,
            preload: options.preload,
            data: {
                name: options.name || 'New Cubemap',
                textures: textures,
                minFilter: options.minFilter !== undefined ? options.minFilter : 5, // linear mipmap linear
                magFilter: options.magFilter !== undefined ? options.magFilter : 1, // linear
                anisotropy: options.anisotropy !== undefined ? options.anisotropy : 1
            }
        });
    }

    /**
     * Creates a new folder asset
     *
     * @param {object} options - Options
     * @param {string} options.name - The asset name
     * @param {Asset} options.folder - The parent folder asset
     * @returns {Promise<Asset>} The new asset
     */
    createFolder(options = {}) {
        return this.upload({
            name: options.name || 'New Folder',
            type: 'folder',
            folder: options.folder
        });
    }

    /**
     * Creates new HTML asset
     *
     * @param {object} options - Options
     * @param {string} options.name - The asset name
     * @param {string} options.text - The HTML
     * @param {Asset} options.folder - The parent folder asset
     * @param {boolean} options.preload - Whether to preload the asset. Defaults to true.
     * @returns {Promise<Asset>} The new asset
     */
    createHtml(options = {}) {
        return this.upload({
            name: options.name || 'New Html',
            type: 'html',
            folder: options.folder,
            preload: options.preload,
            filename: 'asset.html',
            file: new Blob([options.text || '\n'], { type: 'text/html' })
        });
    }

    /**
     * Creates new JSON asset
     *
     * @param {object} options - Options
     * @param {string} options.name - The asset name
     * @param {object} options.json - The JSON
     * @param {Asset} options.folder - The parent folder asset
     * @param {boolean} options.preload - Whether to preload the asset. Defaults to true.
     * @returns {Promise<Asset>} The new asset
     */
    createJson(options = {}) {
        return this.upload({
            name: options.name || 'New Json',
            type: 'json',
            folder: options.folder,
            preload: options.preload,
            filename: 'asset.json',
            file: new Blob([JSON.stringify(options.json || {})], { type: 'application/json' })
        });
    }

    /**
     * Creates new localization JSON asset
     *
     * @param {object} options - The options
     * @param {string} options.name - The asset name
     * @param {object} options.localizationData - The localization data. If null then default data will be used.
     * @param {Asset} options.folder - The parent folder asset
     * @param {boolean} options.preload - Whether to preload the asset. Defaults to true.
     * @returns {Promise<Asset>} The new asset
     */
    createI18n(options = {}) {
        return this.createJson({
            name: options.name,
            json: options.localizationData || {
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
            },
            folder: options.folder,
            preload: options.preload
        });
    }

    /**
     * Creates new material asset
     *
     * @param {object} options - Options
     * @param {string} options.name - The asset name
     * @param {object} options.data - The material data. Default values will be used for missing fields. See [here](AssetProperties.md) for material data.
     * @param {Asset} options.folder - The parent folder asset
     * @param {boolean} options.preload - Whether to preload the asset. Defaults to true.
     * @returns {Promise<Asset>} The new asset
     */
    createMaterial(options = {}) {
        const defaultData = api.schema.assets.getDefaultData('material');
        if (options.data) {
            for (const key in defaultData) {
                if (options.data[key]) {
                    defaultData[key] = options.data[key];
                }
            }
        }

        return this.upload({
            name: options.name || 'New Material',
            type: 'material',
            folder: options.folder,
            data: defaultData,
            preload: options.preload
        });
    }

    /**
     * Creates new script asset
     *
     * @param {object} options - Options
     * @param {string} options.name - The name of the script. This will be the name of the class inside the script if boilerplate code is used.
     * @param {string} options.filename - The filename of the script. This will also be the name of the script asset. If not defined it will be generated
     * from the name of the script.
     * @param {string} options.text - The contents of the script. If none then boilerplate code will be used.
     * @param {object} options.data - The script data. See [here](AssetProperties.md) for Script data.
     * @param {Asset} optionsfolder - The parent folder asset
     * @param {boolean} options.preload - Whether to preload the asset. Defaults to true.
     * @returns {Promise<Asset>} The new asset
     */
    createScript(options = {}) {
        if (!options.name) {
            throw new Error('createScript: missing required name');
        }

        const result = createScript(options.name, options.filename, options.text);

        return this.upload({
            name: result.filename,
            type: 'script',
            folder: options.folder,
            filename: result.filename,
            file: new Blob([result.content], { type: 'text/javascript' }),
            preload: options.preload,
            data: options.data || {
                scripts: { },
                loading: false,
                loadingType: 0 // load script as asset
            }
        });
    }

    /**
     * Creates new shader asset
     *
     * @param {object} options - Options
     * @param {string} options.name - The asset name
     * @param {string} options.text - The GLSL
     * @param {Asset} options.folder - The parent folder asset
     * @param {boolean} options.preload - Whether to preload the asset. Defaults to true.
     * @returns {Promise<Asset>} The new asset
     */
    createShader(options = {}) {
        return this.upload({
            name: options.name || 'New Shader',
            type: 'shader',
            folder: options.folder,
            preload: options.preload,
            filename: 'asset.glsl',
            file: new Blob([options.text || '\n'], { type: 'text/x-glsl' })
        });
    }

    /**
     * Creates new sprite asset
     *
     * @param {object} options = Options
     * @param {string} options.name - The asset name
     * @param {number} options.pixelsPerUnit - The sprite's pixels per unit value. Defaults to 100.
     * @param {number[]} options.frameKeys - The sprite's frame keys
     * @param {Asset} options.textureAtlas - The sprite's texture atlas asset
     * @param {number} options.renderMode - The sprite's render mode. Defaults to pc.SPRITE_RENDERMODE_SIMPLE.
     * @param {Asset} options.folder - The parent folder asset
     * @param {boolean} options.preload - Whether to preload the asset. Defaults to true.
     * @returns {Promise<Asset>} The new asset
     */
    createSprite(options = {}) {
        const data = {};
        data.pixelsPerUnit = options.pixelsPerUnit !== undefined ? options.pixelsPerUnit : 100;
        data.frameKeys = options.frameKeys ? options.frameKeys.map(val => val.toString()) : [];
        data.textureAtlasAsset = options.textureAtlas ? options.textureAtlas.get('id') : null;
        data.renderMode = options.renderMode !== undefined ? options.renderMode : 0;

        return this.upload({
            name: options.name || 'New Sprite',
            type: 'sprite',
            folder: options.folder,
            preload: options.preload,
            data: data
        });
    }

    /**
     * Creates new text asset
     *
     * @param {object} options - Options
     * @param {string} options.name - The asset name
     * @param {string} options.text - The text
     * @param {Asset} options.folder - The parent folder asset
     * @param {boolean} options.preload - Whether to preload the asset. Defaults to true.
     * @returns {Promise<Asset>} The new asset
     */
    createText(options = {}) {
        return this.upload({
            name: options.name || 'New Text',
            type: 'text',
            folder: options.folder,
            preload: options.preload,
            filename: 'asset.txt',
            file: new Blob([options.text || '\n'], { type: 'text/plain' })
        });
    }

    /**
     * Creates new template asset
     *
     * @typedef {import("./entity").Entity} Entity
     * @param {object} options - Options
     * @param {string} options.name - The asset name
     * @param {Entity} options.entity - The entity to create the template from
     * @param {Asset} options.folder - The parent folder asset
     * @param {boolean} options.preload - Whether to preload the asset. Defaults to true.
     * @returns {Promise<Asset>} The new asset
     */
    async createTemplate(options = {}) {
        const {
            entities,
            oldToNewIds
        } = createTemplate(options.entity);

        const asset = await this.upload({
            name: options.name || options.entity.get('name'),
            type: 'template',
            folder: options.folder,
            preload: options.preload,
            data: { entities }
        });

        const history = options.entity.history.enabled;
        options.entity.history.enabled = false;
        options.entity.set('template_id', parseInt(asset.get('id'), 10));
        options.entity.set('template_ent_ids', oldToNewIds);
        options.entity.history.enabled = history;
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
