import { globals as api } from './globals';
import { Entity } from './entity';
import { Events, ObserverList } from './pcui';

/**
 * The entities editor API
 */
class Entities extends Events {
    /**
     * Creates new API instance
     */
    constructor() {
        super();

        this._root = null;

        this._entities = new ObserverList({
            index: 'resource_id'
        });
    }

    /**
     * Return a map of all entity reference properties in the graph. This will
     * include references of the entity and also references of its children
     *
     * @private
     * @param {Entity} entity - The entity
     * @returns {object} The entity references
     */
    _findReferences(entity) {
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
     * @param {object} entityReferences - A map of entity references
     * @param {string} oldValue - The entity id that we want to replace
     * @param {string} newValue - The new entity id that we want our references to point to
     */
    _updateReferences(entityReferences, oldValue, newValue) {
        const referencesToEntity = entityReferences[oldValue];
        if (!referencesToEntity) return;

        referencesToEntity.forEach(reference => {
            const entity = this.get(reference.entityId);
            if (entity) {
                entity.set(reference.path, newValue);
            }
        });
    }

    /**
     * Gets entity by resource id
     *
     * @param {string} id - The entity's resource id
     * @returns {Entity} The entity
     */
    get(id) {
        const e = this._entities.get(id);
        return e ? e.apiEntity : null;
    }

    /**
     * Returns array of all entities
     *
     * @returns {Entity[]} The entities
     */
    list() {
        return this._entities.array().map(e => e.apiEntity);
    }

    /**
     * Adds entity to list
     *
     * @param {Entity} entity - The entity
     */
    add(entity) {
        const id = entity.get('resource_id');

        if (this.get(id)) {
            console.error(`Cannot add duplicate Entity ${id}`);
            return;
        }

        this._entities.add(entity._observer);
        if (!entity.get('parent')) {
            if (this._root) {
                console.error(`More than one root entities in Scene. Current root is Entity "${this._root.get('name')}" [${this._root.get('resource_id')}] but Entity "${entity.get('name')}" [${id}] also has a null parent`);
            } else {
                this._root = entity;
            }
        }

        this.emit('add', entity, this._root === entity);
    }

    /**
     * Called when an entity is added from the server
     *
     * @param {object} entityData - The entity data
     */
    serverAdd(entityData) {
        const entity = new Entity(this, entityData);
        entity.set('parent', entityData.parent);
        entity.set('children', entityData.children);
        this.add(entity);
    }

    /**
     * Removes entity from the list
     *
     * @param {Entity} entity - The entity
     * @param {object} [entityReferences] - A map of entity references to nullify
     * when this entity is removed
     */
    remove(entity, entityReferences) {
        if (entityReferences) {
            this._updateReferences(entityReferences, entity.get('resource_id'), null);
        }

        // remove children first
        entity.children.forEach(child => {
            this.remove(child, entityReferences);
        });

        // remove from selection
        if (api.selection && api.selection.has(entity)) {
            const history = api.selection.history.enabled;
            api.selection.history.enabled = false;
            api.selection.remove(entity);
            api.selection.history.enabled = history;
        }

        // remove from parent
        if (entity.parent) {
            entity.parent.removeChild(entity);
        }

        // remove from observer list
        this._entities.remove(entity._observer);
        entity._observer.destroy();

        // reset root
        if (this._root === entity) {
            this._root = null;
        }

        // sharedb
        if (api.realtime && api.realtime.scenes.current) {
            api.realtime.scenes.current.removeEntity(entity);
        }

        this.emit('remove', entity);
    }

    /**
     * Called when an entity is removed from the server
     *
     * @param {Entity} entity - The entity
     */
    serverRemove(entity) {
        if (api.selection && api.selection.has(entity)) {
            const history = api.selection.history.enabled;
            api.selection.history.enabled = false;
            api.selection.remove(entity);
            api.selection.history.enabled = history;
        }

        this._entities.remove(entity._observer);
        entity._observer.destroy();

        if (this._root === entity) {
            this._root = null;
        }

        this.emit('remove', entity);
    }

    /**
     * Removes all entities from the list
     */
    clear() {
        this._root = null;
        const entities = this.list();
        this._entities.clear();

        if (api.selection) {
            if (api.selection.items[0] instanceof Entity)  {
                const history = api.selection.history.enabled;
                api.selection.history.enabled = false;
                api.selection.clear();
                api.selection.history.enabled = history;
            }
        }

        entities.forEach(entity => {
            entity._observer.destroy();
            this.emit('remove', entity);
        });

        this.emit('clear');
    }

    /**
     * Creates new entity and adds it to the hierarchy
     *
     * @param {object} [data] - Optional initial data for the entity
     * @param {object} [options] - Options
     * @param {boolean} [options.history] - Whether to record a history action. Defaults to true.
     * @param {boolean} [options.select] - Whether to select new Entity. Defaults to false.
     * @returns {Entity} The new entity
     */
    create(data, options = {}) {
        data = data || {};

        if (options.history !== false) {
            options.history = true;
        }

        if (!data.parent) {
            data.parent = this._root ? this._root.get('resource_id') : null;
        }

        if (data.parent instanceof Entity) {
            data.parent = data.parent.get('resource_id');
        }


        if (data.parent && !this.get(data.parent)) {
            console.error(`Cannot create entity because parent ${data.parent} was not found`);
            return null;
        }

        let entity = new Entity(this, data);

        this.add(entity);

        // sharedb
        if (api.realtime && api.realtime.scenes.current) {
            api.realtime.scenes.current.addEntity(entity);
        }

        const parent = this.get(data.parent);
        if (parent) {
            parent.addChild(entity);
        }

        // use same resource id in redo's
        data.resource_id = entity.get('resource_id');

        // add children
        if (data.children) {
            data.children.forEach(childData => {
                childData.parent = entity;
                const child = this.create(childData, {
                    history: false,
                    select: false
                });

                // use same resource_id in subsequent redo's
                childData.resource_id = child.get('resource_id');
            });
        }

        let prevSelection;

        // remember previous selection
        if (options.history && api.history) {
            if (options.select && api.selection) {
                prevSelection = api.selection.items;
            }
        }

        // select new entity
        if (options.select && api.selection) {
            const history = api.selection.history.enabled;
            api.selection.history.enabled = false;
            api.selection.items = [entity];
            api.selection.history.enabled = history;
        }

        if (options.history && api.history) {
            api.history.add({
                name: 'new entity ' + entity.get('resource_id'),
                // undo new entity
                undo: () => {
                    entity = entity.latest();
                    if (!entity) return;

                    this.delete([entity], {
                        history: false
                    });

                    if (prevSelection) {
                        const history = api.selection.history.enabled;
                        api.selection.history.enabled = false;
                        api.selection.items = prevSelection;
                        api.selection.history.enabled = history;
                    }
                },
                // redo new entity
                redo: () => {
                    entity = this.create(data, {
                        history: false,
                        select: options.select
                    });
                }
            });
        }

        // TODO: post creation callaback

        return entity;
    }

    /**
     * Delete specified entities
     *
     * @param {Entity[]} entities - The entities
     * @param {object} [options] - Options
     * @param {boolean} [options.history] - Whether to record a history action. Defaults to true.
     */
    delete(entities, options = {}) {
        if (options.history !== false) {
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
        const entityReferences = this._findReferences(this.root);

        entities.forEach(entity => {
            this.remove(entity, entityReferences);
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
                        entity = this.create(data, {
                            history: false
                        });

                        return entity;
                    });

                    entities.forEach(entity => {
                        this._updateReferences(entityReferences, entity.get('resource_id'), entity.get('resource_id'));

                    });

                    if (api.selection) {
                        const history = api.selection.history.enabled;
                        api.selection.history.enabled = false;
                        api.selection.items = entities;
                        api.selection.history.enabled = history;
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

                    this.delete(entities, {
                        history: false
                    });
                }
            })
        }
    }

    /**
     * @type {Entity}
     * Gets the root Entity
     */
    get root() {
        return this._root;
    }
}

export { Entities };
