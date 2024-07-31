import { findAssetReferencesInComponents, updateReferences } from '../entities/references.js';
import { globals as api } from '../globals.js';
import { utils } from '../utils.js';

const REGEX_MODEL_DATA_MAPPING = /^data\.mapping\.(\d+)\.material$/;

// Replace references in components or script attributes
function replaceEntityRefs(oldAsset, newAsset) {
    const oldId = parseInt(oldAsset.get('id'), 10);
    const newId = parseInt(newAsset.get('id'), 10);

    const records = [];

    const refs = findAssetReferencesInComponents(api.entities.root);
    if (refs[oldId]) {
        // remember previous values
        refs[oldId].forEach((ref) => {
            const entity = api.entities.get(ref.entityId);
            records.push({
                obj: entity,
                path: ref.path,
                value: entity.get(ref.path)
            });
        });

        // update references
        updateReferences(refs, oldId, newId);
    }

    return records;
}

function replaceAssetRefs(oldAsset, newAsset) {
    const oldId = parseInt(oldAsset.get('id'), 10);
    const newId = parseInt(newAsset.get('id'), 10);
    const records = [];

    const pathsByType = {};

    api.assets.list().forEach((asset) => {
        const type = asset.get('type');
        if (!pathsByType[type]) {
            pathsByType[type] = api.schema.assets.getFieldsOfType(type, 'asset');
        }

        // for models we also need to update meta.userMapping
        // if any materials change
        let modelUserMapping = null;

        // get paths and add i18n as well
        const paths = pathsByType[type].concat(['i18n.*']);
        paths.forEach((path) => {
            utils.expandPath(asset, path, (asset, path) => {
                const value = asset.get(path);
                if (Array.isArray(value)) {
                    if (!value.includes(oldId)) {
                        return;
                    }
                } else if (value !== oldId) {
                    return;
                }

                // remember previous values
                records.push({
                    obj: asset,
                    path: path,
                    value: value
                });

                const history = asset.history.enabled;
                asset.history.enabled = false;
                if (Array.isArray(value)) {
                    asset.set(path, value.map((id) => {
                        return oldId === id ? newId : id;
                    }));
                } else {
                    asset.set(path, newId);
                }
                asset.history.enabled = history;

                if (type === 'model') {
                    const match = path.match(REGEX_MODEL_DATA_MAPPING);
                    if (match) {
                        modelUserMapping = modelUserMapping || {};
                        modelUserMapping[match[1]] = true;
                    }
                }
            });
        });

        if (modelUserMapping) {
            const history = asset.history.enabled;
            asset.history.enabled = false;

            if (!asset.get('meta')) {
                records.push({
                    obj: asset,
                    path: 'meta',
                    value: {}
                });

                asset.set('meta', {});
            } else {
                records.push({
                    obj: asset,
                    path: 'meta.userMapping',
                    value: asset.has('meta.userMapping') ? asset.get('meta.userMapping') : undefined
                });
            }

            asset.set('meta.userMapping', modelUserMapping);

            asset.history.enabled = history;
        }
    });

    return records;
}

function replaceSceneSettingsRefs(oldAsset, newAsset) {
    const oldId = parseInt(oldAsset.get('id'), 10);
    const newId = parseInt(newAsset.get('id'), 10);
    const records = [];

    if (api.settings.scene.get('render.skybox') === oldId) {
        records.push({
            obj: api.settings.scene,
            path: 'render.skybox',
            value: oldId
        });

        const history = api.settings.scene.history.enabled;
        api.settings.scene.history.enabled = false;
        api.settings.scene.set('render.skybox', newId);
        api.settings.scene.history.enabled = history;
    }

    return records;
}

function replace(oldAsset, newAsset, options) {
    options = options || {};
    if (options.history === undefined) {
        options.history = true;
    }

    let records = [];

    if (api.entities && api.entities.root) {
        records = records.concat(replaceEntityRefs(oldAsset, newAsset));
    }
    records = records.concat(replaceAssetRefs(oldAsset, newAsset));

    if (api.settings) {
        records = records.concat(replaceSceneSettingsRefs(oldAsset, newAsset));
    }

    if (api.history && options.history) {
        api.history.add({
            name: 'replace asset references',
            undo: () => {
                if (!records) return;

                records.forEach((record) => {
                    const obj = record.obj.latest ? record.obj.latest() : record.obj;
                    if (!obj || !obj.has(record.path)) return;

                    const history = obj.history.enabled;
                    obj.history.enabled = false;
                    if (record.value === undefined) {
                        obj.unset(record.path);
                    } else {
                        obj.set(record.path, record.value);
                    }
                    obj.history.enabled = history;
                });
            },
            redo: () => {
                records = null;

                if (!oldAsset.latest()) return;
                if (!newAsset.latest()) return;

                records = replace(oldAsset, newAsset, { history: false });
            }
        });
    }

    return records;
}

export { replace };
