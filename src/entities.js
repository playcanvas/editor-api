import { globals as api } from './globals';
import { Entity } from './entity';
import { Events, ObserverList } from './pcui';
import { createEntity } from './entities/create';
import { duplicateEntities } from './entities/duplicate';
import { reparentEntities } from './entities/reparent';
import { deleteEntities } from './entities/delete';
import { updateReferences } from './entities/references';

/**
 * Data to reparent an entity under a new parent
 *
 * @typedef {object} ReparentArguments
 * @property {Entity} entity - The entity to reparent
 * @property {Entity} parent - The new parent for the entity
 * @property {number} index - The child index of the entity under the new parent
 */

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

        entity._initializeHistory();

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
            updateReferences(this, entityReferences, entity.get('resource_id'), null);
        }

        // remove children first
        entity.children.forEach(child => {
            this.remove(child, entityReferences);
        });

        // remove from selection
        if (api.selection && api.selection.has(entity)) {
            api.selection.remove(entity, {
                history: false
            });
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
            api.selection.remove(entity, {
                history: false
            });
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
     * @param {number} [options.index] - The child index that this entity will have under its parent.
     * @param {boolean} [options.history] - Whether to record a history action. Defaults to true.
     * @param {boolean} [options.select] - Whether to select new Entity. Defaults to false.
     * @returns {Entity} The new entity
     */
    create(data, options = {}) {
        return createEntity(this, data, options);
    }

    /**
     * Delete specified entities
     *
     * @param {Entity[]|Entity} entities - The entities
     * @param {object} [options] - Options
     * @param {boolean} [options.history] - Whether to record a history action. Defaults to true.
     */
    delete(entities, options = {}) {
        return deleteEntities(this, entities, options);
    }

    /**
     * Reparents entities under new parent.
     *
     * @param {ReparentArguments[]} data - The reparenting data
     * @param {object} [options] - Options
     * @param {boolean} [options.preserverTransform] - Whether to preserve the transform of the entities
     * @param {boolean} [options.history] - Whether to record history. Defaults to true
     */
    reparent(data, options = {}) {
        return reparentEntities(data, options);
    }

    /**
     * Duplicates the specified entities under the same parent
     *
     * @param {Entitiy[]} entities - The entities
     * @param {object} [options] - Options
     * @param {boolean} [options.history] - Whether to record a history action. Defaults to true.
     * @param {boolean} [options.select] - Whether to select the new entities. Defaults to false.
     * @param {boolean} [options.rename] - Whether to rename the duplicated entities. Defaults to false.
     * @returns {Entity[]} The duplicated entities
     */
    async duplicate(entities, options = {}) {
        const result = await duplicateEntities(this, entities, options);
        return result;
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
