import { globals as api } from '../globals';

/**
 * Return a map of all entity reference properties in the graph. This will
 * include references of the entity and also references of its children
 *
 * @private
 * @param {Entity} entity - The entity
 * @returns {object} The entity references
 */
function findReferences(entity) {
    const result = {};

    const entityFieldsCache = {};

    entity.depthFirst(entity => {
        const componentNames = Object.keys(entity.get('components') || {});
        componentNames.forEach(component => {
            if (!entityFieldsCache[component]) {
                entityFieldsCache[component] = api.schema.components.getFieldsOfType(component, 'entity');
            }

            entityFieldsCache[component].forEach(field => {
                const path = `components.${component}.${field}`;
                const id = entity.get(path);
                if (!result[id]) {
                    result[id] = [];
                }
                result[id].push({
                    entityId: entity.get('resource_id'),
                    path: path
                });
            });
        });
    });

    return result;
}

/**
 * Updates entity references to the old entity to point to the new entity
 *
 * @private
 * @typedef {import("../entities").Entities} Entities
 * @param {Entities} entitiesApi - The entities API
 * @param {object} entityReferences - A map of entity references
 * @param {string} oldValue - The entity id that we want to replace
 * @param {string} newValue - The new entity id that we want our references to point to
 */
function updateReferences(entitiesApi, entityReferences, oldValue, newValue) {
    const referencesToEntity = entityReferences[oldValue];
    if (!referencesToEntity) return;

    referencesToEntity.forEach(reference => {
        const entity = entitiesApi.get(reference.entityId);
        if (entity) {
            const history = entity.history.enabled;
            entity.history.enabled = false;
            entity.set(reference.path, newValue);
            entity.history.enabled = history;
        }
    });
}


export {
    findReferences,
    updateReferences
}
