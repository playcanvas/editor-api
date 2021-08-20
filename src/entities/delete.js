import { globals as api } from '../globals';
import { findEntityReferencesInComponents, updateReferences } from './references';

/**
 * Delete specified entities
 *
 * @private
 * @typedef {import("../entity").Entity} Entity
 * @param {Entity[]|Entity} entities - The entities
 * @param {object} [options] - Options
 * @param {boolean} [options.history] - Whether to record a history action. Defaults to true.
 */
function deleteEntities(entities, options = {}) {
    if (options.history === undefined) {
        options.history = true;
    }

    if (!Array.isArray(entities)) {
        entities = [entities];
    }

    // first only gather top level entities
    const ids = new Set();
    entities.forEach(entity => ids.add(entity.get('resource_id')));

    entities = entities.filter(entity => {
        entity = entity.latest();
        if (!entity) return false;

        let parent = entity.parent;
        let parentInSelection = false;
        while (parent) {
            if (ids.has(parent.get('resource_id'))) {
                parentInSelection = true;
                break;
            }
            parent = parent.parent;
        }

        return !parentInSelection;
    });

    // TODO: if we have a lot of entities delete in backend

    // remember previous entities
    let previous;
    if (options.history && api.history) {
        previous = {};
        entities.forEach(entity => {
            entity.depthFirst(e => {
                previous[e.get('resource_id')] = e.json();
            });
        });
    }

    // find entity references
    const entityReferences = findEntityReferencesInComponents(api.entities.root);

    entities.forEach(entity => {
        api.entities.remove(entity, entityReferences);
    });

    if (previous) {
        api.history.add({
            name: 'delete entities',
            undo: () => {
                function recreateEntityData(data) {
                    data = Object.assign({}, data);
                    data.children = data.children.map(id => recreateEntityData(previous[id]));
                    return data;
                }

                entities = entities.map(entity => {
                    const data = recreateEntityData(previous[entity.get('resource_id')]);
                    entity = api.entities.create(data, {
                        history: false
                    });

                    return entity;
                });

                entities.forEach(entity => {
                    updateReferences(entityReferences, entity.get('resource_id'), entity.get('resource_id'));
                });

                if (api.selection) {
                    api.selection.set(entities, {
                        history: false
                    });
                }

                previous = null;
            },
            redo: () => {
                previous = {};
                entities = entities.map(e => e.latest()).filter(e => !!e);

                entities.forEach(entity => {
                    entity.depthFirst(e => {
                        previous[e.get('resource_id')] = e.json();
                    });
                });

                api.entities.delete(entities, {
                    history: false
                });
            }
        });
    }
}

export { deleteEntities };
