import { globals as api } from '../globals';

const entityFieldsCache = {};


/**
 * Return a map of all entity reference properties in the graph. This will
 * include references of the entity and also references of its children
 *
 * @private
 * @typedef {import("../entity").Entity} Entity
 * @param {Entity} entity - The entity
 * @returns {object} The entity references
 */
function findEntityReferencesInComponents(entity) {
    const result = {};

    function addReference(entity, path, value) {
        if (!result[value]) {
            result[value] = [];
        }

        result[value].push({
            entityId: entity.get('resource_id'),
            path: path
        });
    }

    function handleScriptAttribute(entity, path, attributeDefinition, attributeValue) {
        if (!attributeValue) return;
        if (attributeDefinition.array) {
            attributeValue.forEach((id, i) => {
                if (id) {
                    addReference(entity, `${path}.${i}`, id);
                }
            });
        } else {
            if (attributeValue) {
                addReference(entity, path, attributeValue);
            }
        }
    }

    function handleEntityReference(entity, path) {
        const value = entity.get(path);
        if (!value) return;
        if (Array.isArray(value)) {
            value.forEach((id, i) => {
                if (id) {
                    addReference(entity, path + '.' + i, id);
                }
            });
        } else {
            addReference(entity, path, value);
        }
    }

    entity.depthFirst((entity) => {
        const componentNames = Object.keys(entity.get('components') || {});
        componentNames.forEach((component) => {
            if (!entityFieldsCache[component]) {
                entityFieldsCache[component] = api.schema.components.getFieldsOfType(component, 'entity');
            }

            entityFieldsCache[component].forEach((field) => {
                // TODO: handle paths that contain '*'
                const path = `components.${component}.${field}`;
                handleEntityReference(entity, path);
            });

            // get script attributes
            if (!api.hasLegacyScripts && api.assets && component === 'script') {
                const scriptComponent = entity.get(`components.script`);
                for (const scriptName in scriptComponent.scripts) {
                    // get script asset
                    const scriptAsset = api.assets.getAssetForScript(scriptName);
                    if (!scriptAsset) continue;

                    // go through the script component attribute values
                    for (const attributeName in scriptComponent.scripts[scriptName].attributes) {
                        const attributeValue = scriptComponent.scripts[scriptName].attributes[attributeName];
                        // early out if the value is null
                        if (!attributeValue || (Array.isArray(attributeValue) && !attributeValue.length)) continue;

                        const attributeDef = scriptAsset.get(`data.scripts.${scriptName}.attributes.${attributeName}`);
                        if (!attributeDef) continue;

                        const componentAttributePath = `components.script.scripts.${scriptName}.attributes.${attributeName}`;

                        if (attributeDef.type === 'json') {
                            if (!Array.isArray(attributeDef.schema)) continue;

                            if (attributeDef.array) {
                                for (let i = 0; i < attributeValue.length; i++) {
                                    attributeDef.schema.forEach((field) => {
                                        if (field.type !== 'entity') return;

                                        handleScriptAttribute(entity, `${componentAttributePath}.${i}.${field.name}`, field, attributeValue[i]?.[field.name]);
                                    });
                                }
                            } else {
                                attributeDef.schema.forEach((field) => {
                                    if (field.type !== 'entity') return;

                                    handleScriptAttribute(entity, `${componentAttributePath}.${field.name}`, field, attributeValue[field.name]);
                                });
                            }
                        } else if (attributeDef.type === 'entity') {
                            handleScriptAttribute(entity, componentAttributePath, attributeDef, attributeValue);
                        }
                    }
                }
            }
        });
    });

    return result;
}

/**
 * Updates entity references to the old entity to point to the new entity
 *
 * @private
 * @param {object} entityReferences - A map of entity references
 * @param {string} oldValue - The entity id that we want to replace
 * @param {string} newValue - The new entity id that we want our references to point to
 */
function updateReferences(entityReferences, oldValue, newValue) {
    const referencesToEntity = entityReferences[oldValue];
    if (!referencesToEntity) return;

    referencesToEntity.forEach((reference) => {
        const entity = api.entities.get(reference.entityId);
        if (entity) {
            const history = entity.history.enabled;
            entity.history.enabled = false;
            if (entity.has(reference.path)) {
                entity.set(reference.path, newValue);
            }
            entity.history.enabled = history;
        }
    });
}


export {
    findEntityReferencesInComponents,
    updateReferences
};
