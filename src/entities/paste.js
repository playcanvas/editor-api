import { globals as api } from '../globals';
import { Observer } from '@playcanvas/observer';
import { Guid } from '../guid';
import { Entity } from '../entity';

const USE_BACKEND_LIMIT = 500;
const REGEX_CONTAINS_STAR = /\.\*\./;

let ASSET_PATHS;

/**
 * Try to find an assetId in this project that
 * corresponds to the specified assetId that may come from
 * a different project.
 *
 * @param {number} assetId - The asset id we are trying to remap
 * @param {object} assetsIndex - The assets index stored in localStorage that contains paths of assets
 * @returns {number} The asset id in this project
 */
function remapAsset(assetId, assetsIndex) {
    if (!assetId) return null;

    // return the old asset id if not found
    const result = parseInt(assetId, 10);

    const assetData = assetsIndex[assetId];
    if (!assetData)
        return result;

    const len = assetData.path.length;
    const name = assetData.path[len - 1];
    const type = assetData.type;

    const pathToId = [];

    const assets = api.assets.list();
    const assetLen = assets.length;

    // change path names to folder ids
    for (let i = 0; i < len - 1; i++) {
        const folder = null;

        for (let j = 0; j < assetLen; j++) {
            asset = assets[j];
            if (asset.get('name') === assetData.path[i] && asset.get('type') === 'folder') {
                folder = asset;
                break;
            }
        }

        if (!folder)
            return result;

        pathToId.push(parseInt(folder.get('id'), 10));
    }

    const pathToIdLen = pathToId.length;

    // search for asset of same name, type
    // and path as original
    for (let i = 0; i < assetLen; i++) {
        const asset = assets[i];

        if (asset.get('name') === name &&
            asset.get('type') === type &&
            !asset.get('source')) {
            const path = asset.get('path');
            const pathLen = path && path.length;
            if (path && pathLen === pathToIdLen) {
                let pathsEqual = true;
                for (let j = 0; j < pathLen; j++) {
                    if (path[j] !== pathToId[j]) {
                        pathsEqual = false;
                        break;
                    }
                }

                if (!pathsEqual)
                    continue;
            }

            result = parseInt(asset.get('id'), 10);
            break;
        }
    }

    return result;
}

function remapScriptAttribute(assetAttr, componentAttr, entity, path, localStorageData, entityMapping) {
    if (assetAttr.type === 'asset') {
        if (localStorageData.project === api.projectId) return;

        // remap asset ids
        if (assetAttr.array) {
            for (let i = 0; i < componentAttr.length; i++) {
                entity.set(`${path}.${i}`, localStorageData.assets[componentAttr[i]]);
            }
        } else {
            entity.set(path, localStorageData.assets[componentAttr]);
        }
    } else if (assetAttr.type === 'entity') {
        // try to remap entities
        if (assetAttr.array) {
            for (let i = 0; i < componentAttr.length; i++) {
                if (componentAttr[i] && entityMapping[componentAttr[i]]) {
                    entity.set(`${path}.${i}`, entityMapping[componentAttr[i]]);
                }
            }
        } else {
            if (entityMapping[componentAttr]) {
                entity.set(path, entityMapping[componentAttr]);
            }
        }
    }
}

/**
 * Remaps the resource ids of the entities and their entity references in localStorage
 * with new resource ids, also remaps asset ids.
 *
 * @param {Observer} entity - The entity we are remapping
 * @param {Entity} parent - The parent of the pasted entity
 * @param {object} data - The data in localStorage
 * @param {object} entityMapping - An index that maps old resource ids to new resource ids
 * @param {object} assetMapping - An index that maps old asset ids to new asset ids
 */
function remapEntitiesAndAssets(entity, parent, data, entityMapping, assetMapping) {
    const resourceId = entity.get('resource_id');

    const newResourceId = entityMapping[resourceId];
    entity.set('resource_id', newResourceId);

    // set new resource id for parent
    const parentId = entity.get('parent');
    if (parentId) {
        entity.set('parent', entityMapping[parentId]);
    } else {
        entity.set('parent', parent.get('resource_id'));
    }

    // if this is a template instance remap template_ent_ids
    const templateEntIds = entity.get('template_ent_ids');
    if (templateEntIds) {
        const newTemplateEntIds = {};
        for (const oldId in templateEntIds) {
            if (entityMapping[oldId]) {
                newTemplateEntIds[entityMapping[oldId]] = templateEntIds[oldId];
            }
        }
        entity.set('template_ent_ids', newTemplateEntIds);
    }

    // set children to empty array because these
    // are going to get added later on
    entity.set('children', []);

    // remap assets and entities
    if (data.project !== api.projectId) {
        if (!ASSET_PATHS) {
            // get asset paths for all components
            ASSET_PATHS = [];
            api.schema.components.list().forEach(component => {
                const paths = api.schema.components.getFieldsOfType(component, 'asset');
                paths.forEach(path => {
                    ASSET_PATHS.push('components.' + component + '.' + path);
                });
            });
        }

        for (let i = 0; i < ASSET_PATHS.length; i++) {
            const path = ASSET_PATHS[i];
            if (REGEX_CONTAINS_STAR.test(path)) {
                const parts = path.split('.*.');
                if (!entity.has(parts[0])) continue;

                const obj = entity.get(parts[0]);
                if (!obj) continue;

                for (const key in obj) {
                    const fullKey = parts[0] + '.' + key + '.' + parts[1];
                    if (!entity.has(fullKey)) continue;

                    const assets = entity.get(fullKey);
                    if (!assets) continue;

                    if (assets instanceof Array) {
                        for (let j = 0; j < assets.length; j++) {
                            assets[j] = assetMapping[assets[j]];
                        }
                        entity.set(fullKey, assets);
                    } else {
                        entity.set(fullKey, assetMapping[assets]);
                    }
                }
            } else if (entity.has(path)) {
                const assets = entity.get(path);
                if (!assets) continue;

                if (assets instanceof Array) {
                    for (let j = 0; j < assets.length; j++) {
                        assets[j] = assetMapping[assets[j]];
                    }
                    entity.set(path, assets);
                } else {
                    entity.set(path, assetMapping[assets]);
                }
            }
        }
    }

    // remap script asset attributes
    if (entity.has('components.script.scripts')) {
        if (entity.has('components.script')) {
            // remove script component if legacy scripts flag is different between the two projects
            if (api.hasLegacyScripts !== data.legacy_scripts) {
                entity.unset('components.script');
            } else {
                const scripts = entity.get('components.script.scripts');
                // legacy scripts
                if (api.hasLegacyScripts) {
                    for (let i = 0; i < scripts.length; i++) {
                        const script = scripts[i];
                        if (!script.attributes) continue;

                        for (const name in script.attributes) {
                            const attr = script.attributes[name];
                            if (!attr) continue;

                            if (attr.type === 'asset' && data.project !== api.projectId) {
                                if (attr.value) {
                                    if (attr.value instanceof Array) {
                                        for (j = 0; j < attr.value.length; j++) {
                                            entity.set('components.script.scripts.' + i + '.attributes.' + name + '.value.' + j, assetMapping[attr.value[j]]);
                                        }
                                    } else {
                                        entity.set('components.script.scripts.' + i + '.attributes.' + name + '.value', assetMapping[attr.value]);
                                    }
                                }

                                if (attr.defaultValue) {
                                    if (attr.defaultValue instanceof Array) {
                                        for (j = 0; j < attr.defaultValue.length; j++) {
                                            entity.set('components.script.scripts.' + i + '.attributes.' + name + '.defaultValue.' + j, assetMapping[attr.value[j]]);
                                        }
                                    } else {
                                        entity.set('components.script.scripts.' + i + '.attributes.' + name + '.defaultValue', assetMapping[attr.value]);
                                    }
                                }
                            } else if (attr.type === 'entity') {
                                if (entityMapping[attr.value])
                                    entity.set('components.script.scripts.' + i + '.attributes.' + name + '.value', entityMapping[attr.value]);
                                if (entityMapping[attr.defaultValue])
                                    entity.set('components.script.scripts.' + i + '.attributes.' + name + '.defaultValue', entityMapping[attr.defaultValue]);
                            }
                        }
                    }
                } else {
                    // scripts 2.0
                    if (scripts) {
                        for (const script in scripts) {
                            const asset = api.assets.getAssetForScript(script);
                            if (!asset) continue;

                            const attrs = scripts[script].attributes;
                            if (!attrs) continue;

                            for (const key in attrs) {
                                const attrData = asset.get('data.scripts.' + script + '.attributes.' + key);
                                if (attrData) {
                                    // handle json script attributes
                                    if (attrData.type === 'json' && Array.isArray(attrData.schema)) {
                                        // json attribute array
                                        if (attrData.array) {
                                            for (let j = 0; j < attrs[key].length; j++) {
                                                if (!attrs[key][j]) continue;

                                                for (let k = 0; k < attrData.schema.length; k++) {
                                                    const field = attrData.schema[k];
                                                    if (attrs[key][j][field.name]) {
                                                        remapScriptAttribute(field, attrs[key][j][field.name], entity, `components.script.scripts.${script}.attributes.${key}.${j}.${field.name}`, data, entityMapping);
                                                    }
                                                }
                                            }
                                        } else {
                                            // regular json attribute
                                            for (let k = 0; k < attrData.schema.length; k++) {
                                                const field = attrData.schema[k];
                                                if (attrs[key][field.name]) {
                                                    remapScriptAttribute(field, attrs[key][field.name], entity, `components.script.scripts.${script}.attributes.${key}.${field.name}`, data, entityMapping);
                                                }
                                            }
                                        }
                                    } else {
                                        // non json attribute
                                        remapScriptAttribute(attrData, attrs[key], entity, `components.script.scripts.${script}.attributes.${key}`, data, entityMapping);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    }

    // remap entity references in components
    const components = entity.get('components');
    Object.entries(components).forEach(([componentName, component]) => {
        const entityFields = api.schema.components.getFieldsOfType(componentName, 'entity');

        entityFields.forEach(fieldName => {
            const oldEntityId = component[fieldName];
            const newEntityId = entityMapping[oldEntityId];
            if (newEntityId) {
                entity.set('components.' + componentName + '.' + fieldName, newEntityId);
            }
        });
    });
}

async function pasteInBackend(data, parent) {

}

/**
 * Paste entities copied into clipboard
 * under the specified parent.
 *
 * @param {Entity} parent - The parent
 * @param {object} options - Options
 * @param {boolean} options.history - Whether to record a history action. Defaults to true.
 */
async function pasteEntities(parent, options = {}) {
    if (options.history === undefined) {
        options.history = true;
    }

    // parse data from local storage
    const data = api.clipboard.value;
    if (!data || data.type !== 'entity') return;

    // paste on root if no parent specified
    if (!parent) {
        parent = api.entities.root;
    }

    if (data.project === api.projectId &&
        (data.branch !== api.branchId ||
            Object.keys(data.hierarchy).length > USE_BACKEND_LIMIT)) {
        // TODO support pasting in different projects
        await pasteInBackend(data, parent);
        return;
    }

    // remap assets
    const remappedAssets = {};
    if (data.assets) {
        for (const key in data.assets) {
            remappedAssets[key] = remapAsset(key, data.assets);
        }
    }

    // change resource ids
    const mapping = {};
    for (const guid in data.hierarchy) {
        mapping[guid] = Guid.create();
    }

    for (const guid in data.hierarchy) {
        // create new guids for any missing entities in template_ent_ids
        if (data.hierarchy[guid].template_ent_ids) {
            for (const key in data.hierarchy[guid].template_ent_ids) {
                if (!mapping[key]) {
                    mapping[key] = Guid.create();
                }
            }
        }
    }

    // add all entities with different resource ids
    const selectedEntities = [];
    const newEntities = {};

    for (const resourceId in data.hierarchy) {
        // create new observer for entity
        const observer = new Observer(data.hierarchy[resourceId]);

        // select the entity if its parent is not selected
        const select = !data.hierarchy[observer.get('parent')];

        // change resource ids
        remapEntitiesAndAssets(observer, parent, data, mapping, remappedAssets);

        const json = observer.json();
        newEntities[json.resource_id] = json;

        const entity = api.entities.create(json, {
            history: false,
            select: false
        });

        if (select)
            selectedEntities.push(entity);
    }

    if (selectedEntities.length) {
        api.selection.set(selectedEntities, { history: false });
    }

    // add history
    if (options.history && api.history) {
        let deletedHierarchy = null;
        let previousSelection = null;

        api.history.add({
            name: 'paste entities',
            undo: () => {
                parent = parent.latest();
                if (!parent) return;

                deletedHierarchy = [];
                previousSelection = api.selection.items;

                // get latest data for each new entity
                for (const id in newEntities) {
                    const e = api.entities.get(id);
                    if (!e) continue;

                    // put top level entities in deletedHierarchy
                    if (!(e.parent.get('resource_id') in newEntities)) {
                        deletedHierarchy.push(e.jsonHierarchy());
                    }
                }

                if (deletedHierarchy.length) {
                    api.entities.delete(
                        deletedHierarchy.map(data => api.entities.get(data.resource_id)), {
                            history: false
                        }
                    );
                }
            },
            redo: () => {
                parent = parent.latest();
                if (!parent) return;

                // re-insert delete hierarchy
                for (const entity of deletedHierarchy) {
                    api.entities.create(entity, { history: false, select: false });
                }

                deletedHierarchy = null;

                // restore selection
                previousSelection = previousSelection
                .map(item => item.latest())
                .filter(item => !!item);

                api.selection.set(previousSelection, { history: false });

                previousSelection = null;
            }
        });
    }
}

export { pasteEntities };
