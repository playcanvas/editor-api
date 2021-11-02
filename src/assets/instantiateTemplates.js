import { globals as api } from '../globals';

let evtMessenger;

async function instantiateTemplates(assets, parent, options) {
    parent = parent || api.entities.root;
    if (!parent) {
        throw new Error('Invalid parent');
    }

    // setup promise
    const deferred = {
        resolve: null,
        reject: null
    };

    const promise = new Promise((resolve, reject) => {
        deferred.resolve = resolve;
        deferred.reject = reject;
    });

    // start job
    const jobId = api.jobs.start((msg) => {
        // resolve promise
        if (msg.status === 'success') {
            const newEntityIds = msg.multTaskResults.map(d => d.newRootId);
            api.entities.waitToExist(newEntityIds, 5000, entities => {
                deferred.resolve(entities);
            });
        } else {
            deferred.reject();
        }
    });

    // subscribe to messenger for backend response
    if (!evtMessenger) {
        evtMessenger = api.messenger.on('template.instance', msg => {
            const callback = api.jobs.finish(msg.job_id);
            if (callback) {
                callback(msg);
            }
        });
    }

    // start backend job
    api.realtime.connection.sendMessage('pipeline', {
        name: 'template-instance',
        data: {
            projectId: api.projectId,
            branchId: api.branchId,
            parentId: parent.get('resource_id'),
            sceneId: api.realtime.scenes.current.uniqueId,
            jobId: jobId,
            children: parent.get('children'),
            childIndex: options.index,
            templates: assets.map(asset => {
                return {
                    id: parseInt(asset.get('uniqueId'), 10),
                    opts: options.extraData
                };
            })
        }
    });

    let entities = await promise;

    // record history action
    if (api.history && (options.history || options.history === undefined)) {
        api.history.add({
            name: 'instantiate templates',
            undo: () => {
                // delete entities
                entities = entities.map(e => e.latest()).filter(e => !!e);
                if (entities.length) {
                    api.entities.delete(entities, { history: false })
                    .catch(err => {
                        console.error(err);
                    });
                }
            },
            redo: () => {
                parent = parent.latest();
                if (!parent) return;

                const newOptions = Object.assign({}, options);
                newOptions.history = false;

                // re-instantiate templates
                instantiateTemplates(assets, parent, newOptions)
                .then(newEntities => {
                    entities = newEntities;
                })
                .catch(err => {
                    console.error(err);
                });
            }
        });
    }

    if (options.select) {
        api.selection.set(entities, { history: false });
    }

    return entities;
}

export { instantiateTemplates };
