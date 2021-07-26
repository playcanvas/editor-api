import { globals as api } from './globals';
import { Observer } from './pcui';

/**
 * Represents an Entity
 */
class Entity {
    /** @typedef {import("./entities").Entities} Entities */

    /**
     * Creates new Entity
     *
     * @param {Entities} entitiesApi - The Entities API
     * @param {object} [data] - Optional entity data
     */
    constructor(entitiesApi, data = {}) {
        this._entitiesApi = entitiesApi;

        this._history = {};

        this._observer = new Observer({
            name: data.name || 'New Entity',
            tags: data.tags || [],
            enabled: data.enabled || true,
            resource_id: data.resource_id || pc.guid.create(),
            parent: typeof data.parent === 'string' ? data.parent : null,
            children: [],
            position: data.position || [0, 0, 0],
            rotation: data.rotation || [0, 0, 0],
            scale: data.scale || [1, 1, 1],
            components: {}
        });

        const id = this._observer.get('resource_id');
        this._observer.latestFn = () => {
            const latest = this._entitiesApi.get(id);
            return latest && latest._observer;
        };

        this._observer.apiEntity = this;

        if (data.components) {
            for (const component in data.components) {
                this.addComponent(component, data.components[component]);
            }
        }
    }

    /**
     * Checks if path exists
     *
     * @param {string} path - The path
     * @returns {boolean} True if path exists
     */
    has(path) {
        return this._observer.has(path);
    }

    /**
     * Gets value at path
     *
     * @param {string} path - The path
     * @returns {any} The value
     */
    get(path) {
        return this._observer.get(path);
    }

    /**
     * Sets value at path
     *
     * @param {string} path - The path
     * @param {any} value - The value
     * @returns {boolean} Whether the value was set
     */
    set(path, value) {
        return this._observer.set(path, value);
    }

    /**
     * Unsets value at path
     *
     * @param {string} path - The path
     * @returns {boolean} Whether the value was unset
     */
    unset(path) {
        return this._observer.unset(path);
    }

    /**
     * Inserts value in array at path, at specified index
     *
     * @param {string} path - The path
     * @param {any} value - The value
     * @param {number} index - The index (if undefined the value will be inserted in the end)
     * @returns {boolean} Whether the value was inserted
     */
    insert(path, value, index) {
        return this._observer.insert(path, value, index);
    }

    /**
     * Remove value from array at path.
     *
     * @param {string} path - The path
     * @param {any} value - The value
     * @returns {boolean} Whether the value was removed
     */
    removeValue(path, value) {
        return this._observer.removeValue(path, value);
    }

    /**
     * Returns JSON representation of entity data
     *
     * @returns {object} - The data
     */
    json() {
        return this._observer.json();
    }

    /**
     * Finds first entity by name using depth-first search
     *
     * @param {string} name - The name
     * @returns {Entity} The entity
     */
    findByName(name) {
        if (this.get('name') === name) {
            return this;
        }

        const children = this.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (child) {
                const found = child.findByName(name);
                if (found) {
                    return found;
                }
            }
        }

        return null;
    }

    /**
     * Finds all entities with specified tags
     *
     * @param  {...string|...string[]} tags - The tags. If multiple tags are specified then entities that contain ANY of the specified
     * tags will be included. If an argument is an array of tags then entities that contain ALL of the tags in the array will be included.
     * @returns {Entity[]} The entities
     */
    listByTag(...tags) {
        return this.filter(entity => {
            const t = entity.get('tags');
            for (let i = 0; i < tags.length; i++) {
                if (Array.isArray(tags[i])) {
                    let countTags = 0;
                    for (let j = 0; j < tags[i].length; j++) {
                        if (t.includes(tags[i][j])) {
                            countTags++;
                        } else {
                            break;
                        }
                    }

                    if (countTags === tags[i].length) {
                        return true;
                    }
                } else {
                    if (t.includes(tags[i])) {
                        return true;
                    }
                }
            }

            return false;
        });
    }

    /**
     * Returns the entity and children that satisfy the function
     *
     * @param {Function} fn - A function that takes an Entity and returns whether it should be included
     * in the result
     * @returns {Entity[]} The result
     */
    filter(fn) {
        let result = [];

        if (fn(this)) {
            result.push(this);
        }

        const children = this.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (child) {
                result = result.concat(child.filter(fn));
            }
        }

        return result;
    }

    /**
     * Executes function for this entity and its children
     * in depth first order.
     *
     * @param {Function} fn - A function that takes an entity as an argument
     */
    depthFirst(fn) {
        fn(this);

        const children = this.children;
        children.forEach(child => {
            child.depthFirst(fn);
        });
    }

    /**
     * Adds a component to this Entity
     *
     * @param {string} component - The component name
     * @param {object} [data] - Default component data
     */
    addComponent(component, data) {
        const defaultData = api.schema.components.getDefaultData(component);
        const componentData = Object.assign(defaultData, data);
        this.set(`components.${component}`, componentData);
    }

    /**
     * Removes a component from this Entity
     *
     * @param {string} component - The component name
     */
    removeComponent(component) {
        this.unset(`components.${component}`);
    }

    /**
     * Adds entity as a child
     *
     * @param {Entity} entity - The entity
     * @returns {boolean} Whether the child was added
     */
    addChild(entity) {
        return this.insertChild(entity);
    }

    /**
     * Inserts entity as a child at specified index.
     *
     * @param {Entity} entity - The entity
     * @param {number} [index] - The index. If undefined the child will be added in the end.
     * @returns {boolean} Whether the child was added
     */
    insertChild(entity, index) {
        let history = this.history.enabled;
        this.history.enabled = false;
        const result = this.insert('children', entity.get('resource_id'), index);
        this.history.enabled = history;

        if (result) {
            history = entity.history.enabled;
            entity.history.enabled = false;
            entity.set('parent', this.get('resource_id'));
            entity.history.enabled = history;
            return true;
        }

        console.error(`Cannot add duplicate child ${entity.get('resource_id')} under parent ${this.get('resource_id')}`);
        return false;
    }

    /**
     * Removes entity from children
     *
     * @param {Entity} entity - The entity
     */
    removeChild(entity) {
        let history = entity.history.enabled;
        entity.history.enabled = false;
        entity._observer.set('parent', null, true); // silent set otherwise we run into C3 error
        entity.history.enabled = history;

        history = this.history.enabled;
        this.history.enabled = false;
        this.removeValue('children', entity.get('resource_id'))
        this.history.enabled = history;
    }

    /**
     * Deletes entity (and its children)
     *
     * @param {object} [options] - Options
     * @param {boolean} [options.history] - Whether to record a history action. Defaults to true.
     */
    delete(options = {}) {
        this._entitiesApi.delete([this], options);
    }

    /**
     * Returns the latest version of the Entity from the Entities API.
     *
     * @returns {Entity} The entity
     */
    latest() {
        return this._entitiesApi.get(this._observer.get('resource_id'));
    }

    /**
     * @type {Entity}
     * @description The parent entity
     */
    get parent() {
        const id = this.get('parent');
        return id ? this._entitiesApi.get(id) : null;
    }

    /**
     * @type {Entity[]}
     * @description The children entities. Warning: this creates a new array every time it's called.
     */
    get children() {
        return this.get('children').map(id => this._entitiesApi.get(id));
    }

    get history() {
        return this._observer.history || this._history;
    }
}

export { Entity };
