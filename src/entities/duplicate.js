import { globals as api } from '../globals';
import { findEntityReferencesInComponents, updateReferences } from './references';
import { Guid } from '../guid';

/** @typedef {import("../entity").Entity} Entity */

const TIME_WAIT_ENTITIES = 5000;
let evtMessenger = null;

const USE_BACKEND_LIMIT = 500;

/**
 * When an entity that has properties that contain references to some entities
 * within its subtree is duplicated, update the references to the corresponding entities within
 * the newly created duplicate subtree.
 *
 * @private
 * @param {Entity} newEntity - The new (duplicated) entity
 * @param {Entity} oldEntity - The old entity
 * @param {object} duplicatedIdsMap - Map of old id -> new id
 */
function updateDuplicatedEntityReferences(newEntity, oldEntity, duplicatedIdsMap) {
    // remap template_ent_ids for template instances
    const templateEntIds = newEntity.get('template_ent_ids');
    if (templateEntIds) {
        const newTemplateEntIds = {};
        for (const oldId in templateEntIds) {
            if (duplicatedIdsMap[oldId]) {
                newTemplateEntIds[duplicatedIdsMap[oldId]] = templateEntIds[oldId];
            }
        }

        const history = newEntity.history.enabled;
        newEntity.history.enabled = false;
        newEntity.set('template_ent_ids', newTemplateEntIds);
        newEntity.history.enabled = history;
    }

    // update entity references
    const entityReferences = findEntityReferencesInComponents(newEntity);
    for (const id in entityReferences) {
        const prevEntity = api.entities.get(id);
        // only update references to this entity if it is in the old entity's subtree
        if (!prevEntity || (prevEntity !== oldEntity && !prevEntity.isDescendantOf(oldEntity))) {
            delete entityReferences[id];
        }
    }

    if (Object.keys(entityReferences).length) {
        for (const oldId in duplicatedIdsMap) {
            updateReferences(entityReferences, oldId, duplicatedIdsMap[oldId]);
        }
    }
}

function splitEntityNameAndNumber(entityName) {
    let name = '';
    let number = 1;

    // step from end of string character by character checking to see if we have a trailing number
    // stopping when the string we are constructing is no longer a valid number
    let numberString = '';
    let foundNumber = true;
    for (let i = entityName.length - 1; i >= 0; i--) {
        const char = entityName.charAt(i);
        if (foundNumber) {
            numberString = char + numberString;
            foundNumber = /^\d+$/.test(numberString);
            if (foundNumber) {
                number = parseInt(numberString, 10);
            }
        }
        if (foundNumber === false) {
            name = char + name;
        }
    }

    return {
        name,
        number
    };
}

function isEntityNameTaken(name, entities) {
    for (let j = 0; j < entities.length; j++) {
        const entity = entities[j];
        const entityName = entities[j].get('name');
        if (entity && entityName === name) {
            return true;
        }
    }
    return false;
}

function getUniqueNameForDuplicatedEntity(entityName, entities) {
    // if entityName === '1box23' then name === '1box' and number === 23,  if entityName === '1' then name === '' and number === 1
    const { name, number } = splitEntityNameAndNumber(entityName);

    let startIndex = number + 1;
    let newUniqueName = name + startIndex;
    while (isEntityNameTaken(newUniqueName, entities)) {
        newUniqueName = name + startIndex++;
    }
    return newUniqueName;
}

/**
 * Duplicates an entity in the scene
 *
 * @private
 * @param {Entity} entity - The entity
 * @param {Entity} parent - The parent of the new entity
 * @param {number} ind - The index in the parent's children array where we want to insert the new entity
 * @param {object} duplicatedIdsMap - A guid->guid map that contains references from the source resource ids to the new resource ids
 * @param {boolean} useUniqueName - Controls whether duplicated entity will have a unique name
 * @returns {Entity} The new entity
 */
function duplicateEntity(entity, parent, ind, duplicatedIdsMap, useUniqueName) {
    const originalResourceId = entity.get('resource_id');
    const data = entity.json();
    const children = data.children;

    data.children = [];
    if (useUniqueName) {
        data.name = getUniqueNameForDuplicatedEntity(data.name, parent.children);
    }
    data.resource_id = Guid.create();
    data.parent = parent.get('resource_id');

    entity = api.entities.create(data, {
        history: false,
        select: false,
        index: ind
    });

    duplicatedIdsMap[originalResourceId] = entity.get('resource_id');

    const templateEntIds = entity.get('template_ent_ids');
    if (templateEntIds) {
        for (const key in templateEntIds) {
            if (!api.entities.get(key)) {
                duplicatedIdsMap[key] = Guid.create();
            }
        }
    }

    // add children too
    children.forEach(function (childId) {
        duplicateEntity(api.entities.get(childId), entity, undefined, duplicatedIdsMap);
    });

    return entity;
}

function duplicateInBackend(entities, options) {
    const originalEntities = entities;
    let cancelWaitForEntities;

    let deferred = {
        resolve: null,
        reject: null
    };

    const promise = new Promise((resolve, reject) => {
        deferred.resolve = resolve;
        deferred.reject = reject;
    });

    if (!evtMessenger) {
        evtMessenger = api.messenger.on('entity.copy', (data) => {
            const callback = api.jobs.finish(data.job_id);
            if (!callback) return;

            const result = data.multTaskResults.map(d => d.newRootId);
            callback(result);
        });
    }

    function redo() {
        const jobId = api.jobs.start((newEntityIds) => {
            const cancel = api.entities.waitToExist(newEntityIds, TIME_WAIT_ENTITIES, (newEntities) => {
                entities = newEntities;

                if (deferred) {
                    deferred.resolve(newEntities);
                    deferred = null;
                }
            });

            cancelWaitForEntities = () => {
                cancel();
                if (deferred) {
                    deferred.reject();
                    deferred = null;
                }
            };
        });

        api.realtime.connection.sendMessage('pipeline', {
            name: 'entities-duplicate',
            data: {
                projectId: api.projectId,
                branchId: api.branchId,
                sceneId: api.realtime.scenes.current.uniqueId,
                jobId: jobId,
                entities: originalEntities.map(e => e.get('resource_id'))
            }
        });
    }

    redo();

    // add history
    if (options.history && api.history) {
        api.history.add({
            name: 'duplicate entities',
            redo: redo,
            undo: () => {
                if (cancelWaitForEntities) {
                    cancelWaitForEntities();
                    cancelWaitForEntities = null;
                }

                api.entities.delete(entities, {
                    history: false
                });
            }
        });
    }

    return promise;
}

/**
 * Duplicates entities under the same parent
 *
 * @private
 * @typedef {import("../entities").Entities} Entities
 * @param {Entity[]} entities - The entities
 * @param {object} [options] - Options
 * @param {boolean} [options.history] - Whether to record a history action. Defaults to true.
 * @param {boolean} [options.select] - Whether to select the new entities. Defaults to false.
 * @param {boolean} [options.rename] - Whether to rename the duplicated entities. Defaults to false.
 * @returns {Promise<Entity[]>} The duplicated entities
 */
async function duplicateEntities(entities, options) {
    if (options.history === undefined) {
        options.history = true;
    }

    const root = api.entities.root;

    // make sure we are not duplicating the root
    if (entities.includes(root)) {
        console.error('Cannot duplicate the root Entity');
        return;
    }

    // build index
    const records = {};
    entities.forEach((entity) => {
        const id = entity.get('resource_id');
        records[id] = {
            entity: entity,
            index: entity.parent.children.indexOf(entity)
        };
    });

    // only duplicate top level parents
    let i = entities.length;
    while (i--) {
        let parent = entities[i].parent;
        while (parent && parent !== root) {
            if (records[parent.get('resource_id')]) {
                delete records[entities[i].get('resource_id')];
                entities.splice(i, 1);
                break;
            }

            parent = parent.parent;
        }
    }

    // original order is a dictionary that contains
    // resource_id -> [index_before_sort, index_after_sort]
    // for each entity. It used to return our results in the
    // original order passed by the user because when we duplicate
    // we change the order of the entities to their order within their parent
    const originalOrder = {};
    entities.forEach((e, i) => {
        originalOrder[e.get('resource_id')] = [i, null];
    });

    // sort by order within parent
    entities.sort((a, b) => {
        return records[b.get('resource_id')].index - records[a.get('resource_id')].index;
    });

    entities.forEach((e, i) => {
        originalOrder[e.get('resource_id')][1] = i;
    });

    let newEntities = [];

    // If we have a lot of entities duplicate in the backend
    if (api.messenger && api.jobs && entities.length > USE_BACKEND_LIMIT) {
        newEntities = await duplicateInBackend(entities, options);
    } else {
        // remember previous selection
        let previousSelection;
        if (options.history && api.history && api.selection && options.select) {
            previousSelection = api.selection.items;
        }

        // duplicate
        entities.forEach((entity) => {
            const duplicatedIdsMap = {};

            const newEntity = duplicateEntity(
                entity,
                entity.parent,
                records[entity.get('resource_id')].index + 1,
                duplicatedIdsMap,
                options.rename
            );

            updateDuplicatedEntityReferences(newEntity, entity, duplicatedIdsMap);

            newEntities.push(newEntity);
        });

        if (options.history && api.history) {
            let previous;

            api.history.add({
                name: 'duplicate entities',
                undo: () => {
                    // remember previous entities
                    previous = {};
                    newEntities.forEach((entity) => {
                        entity.depthFirst((e) => {
                            previous[e.get('resource_id')] = e.json();
                        });
                    });

                    api.entities.delete(newEntities, {
                        history: false
                    });

                    if (previousSelection) {
                        api.selection.set(previousSelection, {
                            history: false
                        });
                    }
                },
                redo: () => {
                    function recreateEntityData(data) {
                        data = Object.assign({}, data);
                        data.children = data.children.map(id => recreateEntityData(previous[id]));
                        return data;
                    }

                    newEntities = newEntities.map((entity, index) => {
                        const data = recreateEntityData(previous[entity.get('resource_id')]);
                        entity = api.entities.create(data, {
                            history: false,
                            select: false,
                            index: records[entities[index].get('resource_id')].index + 1
                        });

                        return entity;
                    });

                    if (options.select && api.selection) {
                        api.selection.set(newEntities, { history: false });
                    }

                    previous = null;
                }
            });
        }
    }

    // select duplicated
    if (options.select && api.selection) {
        api.selection.set(newEntities, {
            history: false
        });
    }

    // return duplicated entities in their original order
    const result = new Array(newEntities.length);
    for (const id in originalOrder) {
        const pair = originalOrder[id];
        result[pair[0]] = newEntities[pair[1]];
    }

    return result;
}

export { duplicateEntities };
