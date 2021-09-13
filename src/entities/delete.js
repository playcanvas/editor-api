import { globals as api } from '../globals';
import { findEntityReferencesInComponents, updateReferences } from './references';

const USE_BACKEND_LIMIT = 500;

let evtMessenger = null;

// Gets the count of the entities and their children
function getTotalEntityCount(entities) {
    let count = 0;

    entities.forEach(entity => {
        entity.depthFirst(() => count++);
    });

    return count;
}

// When we have a lot of entities to delete
// do it in the backend
function deleteInBackend(entities) {
    const deferred = {
        resolve: null
    };

    const promise = new Promise((resolve) => {
        deferred.resolve = resolve;
    });

    const jobId = api.jobs.start(() => {
        deferred.resolve();
    });

    if (!evtMessenger) {
        evtMessenger = api.messenger.on('entity.delete', data => {
            const callback = api.jobs.finish(data.job_id);
            if (callback) {
                callback();
            }
        });
    }

    api.realtime.connection.sendMessage('pipeline', {
        name: 'entities-delete',
        data: {
            projectId: api.projectId,
            branchId: api.branchId,
            sceneId: api.realtime.scenes.current.uniqueId,
            jobId: jobId,
            entities: entities.map(e => e.get('resource_id'))
        }
    });

    return promise;
}

/**
 * Delete specified entities
 *
 * @private
 * @typedef {import("../entity").Entity} Entity
 * @param {Entity[]|Entity} entities - The entities
 * @param {object} [options] - Options
 * @param {boolean} [options.history] - Whether to record a history action. Defaults to true.
 */
async function deleteEntities(entities, options = {}) {
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

    if (api.messenger &&
        api.jobs &&
        api.realtime &&
        api.realtime.scenes.current &&
        getTotalEntityCount(entities) > USE_BACKEND_LIMIT) {

        if (options.history) {
            const ok = await api.confirmFn('Deleting this many entities is not undoable. Are you sure?');
            if (ok) {
                await deleteInBackend(entities);
            }
            return;
        }
    }

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
