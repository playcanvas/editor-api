import { globals as api } from './globals';
import { Events, Observer, ObserverHistory } from '@playcanvas/observer';
import { Guid } from './guid';

/**
 * Represents an Entity. For a list of Entity properties see [here](EntityProperties.md).
 */
class Entity extends Events {
    /** @typedef {import("./entities").Entities} Entities */

    /**
     * Creates new Entity
     *
     * @category Internal
     * @param {object} data - Optional entity data
     */
    constructor(data = {}) {
        super();

        let name = data.name;
        if (name === undefined || typeof name !== 'string') {
            name = 'New Entity';
        }
        const observerData = {
            name: name,
            tags: data.tags || [],
            enabled: data.enabled !== undefined ? !!data.enabled : true,
            resource_id: data.resource_id || Guid.create(),
            parent: typeof data.parent === 'string' ? data.parent : null,
            children: [],
            position: data.position || [0, 0, 0],
            rotation: data.rotation || [0, 0, 0],
            scale: data.scale || [1, 1, 1],
            components: {}
        };

        if (data.template_id) {
            observerData.template_id = data.template_id;
        }
        if (data.template_ent_ids) {
            observerData.template_ent_ids = data.template_ent_ids;
        }

        this._observer = new Observer(observerData);

        this._observer.addEmitter(this);

        const id = this._observer.get('resource_id');

        this._observer.latestFn = () => {
            const latest = api.entities.get(id);
            return latest && latest._observer;
        };

        this._observer.apiEntity = this;

        if (data.components) {
            for (const component in data.components) {
                this.addComponent(component, data.components[component]);
            }
        }

        this._history = {};
    }

    _initializeHistory() {
        if (this._observer.history) return;

        this._history = new ObserverHistory({
            item: this._observer,
            prefix: 'entity.' + this.get('resource_id') + '.',
            history: api.history
        });
        this._observer.history = this._history;
    }

    /**
     * Checks if path exists. See [here](EntityProperties.md) for a list of properties.
     *
     * @param {string} path - The path
     * @returns {boolean} True if path exists
     *
     * @example
     * ```javascript
     * console.log(entity.has('components.model'));
     * ```
     */
    has(path) {
        return this._observer.has(path);
    }

    /**
     * Gets value at path. See [here](EntityProperties.md) for a list of properties.
     *
     * @param {string} path - The path
     * @returns {any} The value
     * @example
     * ```javascript
     * console.log(entity.get('position'));
     * ```
     */
    get(path) {
        return this._observer.get(path);
    }

    /**
     * Sets value at path. See [here](EntityProperties.md) for a list of properties.
     *
     * @param {string} path - The path
     * @param {any} value - The value
     * @returns {boolean} Whether the value was set
     * @example
     * ```javascript
     * entity.set('position', [1, 0, 0]);
     * ```
     */
    set(path, value) {
        return this._observer.set(path, value);
    }

    /**
     * Unsets value at path. See [here](EntityProperties.md) for a list of properties.
     *
     * @param {string} path - The path
     * @returns {boolean} Whether the value was unset
     * @example
     * ```javascript
     * entity.unset('components.model');
     * ```
     */
    unset(path) {
        return this._observer.unset(path);
    }

    /**
     * Inserts value in array at path, at specified index. See [here](EntityProperties.md) for a list of properties.
     *
     * @param {string} path - The path
     * @param {any} value - The value
     * @param {number} index - The index (if undefined the value will be inserted in the end)
     * @returns {boolean} Whether the value was inserted
     * @example
     * ```javascript
     * entity.insert('tags', 'a_tag');
     * ```
     */
    insert(path, value, index) {
        return this._observer.insert(path, value, index);
    }

    /**
     * Remove value from array at path. See [here](EntityProperties.md) for a list of properties.
     *
     * @param {string} path - The path
     * @param {any} value - The value
     * @returns {boolean} Whether the value was removed
     * ```javascript
     * entity.removeValue('tags', 'a_tag');
     * ```
     */
    removeValue(path, value) {
        return this._observer.removeValue(path, value);
    }

    /**
     * Returns JSON representation of entity data
     *
     * @returns {object} - The data
     * ```javascript
     * console.log(entity.json());
     * ```
     */
    json() {
        return this._observer.json();
    }

    /**
     * Returns a JSON representation of entity data. The children array
     * of the entity gets recursively converted to an array of entity data
     * instead of containing children resource ids.
     *
     * @returns {object} - The data
     * ```javascript
     * const data = entity.jsonHierarchy();
     * console.log(data.children[0].name);
     * ```
     */
    jsonHierarchy() {
        const result = this.json();
        const children = this.children;
        for (let i = 0; i < children.length; i++) {
            result.children[i] = children[i] && children[i].jsonHierarchy();
        }

        return result;
    }

    /**
     * Returns true if this entity is a descendant of the specified parent entity.
     *
     * @param {Entity} parent - The parent
     * @returns {boolean} True if it is
     */
    isDescendantOf(parent) {
        let p = this.parent;
        while (p) {
            if (p === parent) {
                return true;
            }

            p = p.parent;
        }

        return false;
    }

    /**
     * Finds first entity by name using depth-first search
     *
     * @param {string} name - The name
     * @returns {Entity} The entity
     * @example
     * ```javascript
     * const door = editor.entities.root.findByName('Door');
     * ```
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
     * @example
     * ```javascript
     * // entities that have the following tag
     * const entities = editor.entities.root.listByTag('tag');
     * // entities that have any of the following tags
     * const entities = editor.entities.root.listByTag('tag', 'tag2');
     * // entities that have all of the following tags
     * const entities = editor.entities.root.listByTag(['tag', 'tag2']);
     * ```
     */
    listByTag(...tags) {
        return this.filter((entity) => {
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
     * @example
     * ```javascript
     * const doors = editor.entities.root.filter(entity => entity.get('name').startsWith('door'));
     * ```
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
     * @example
     * ```javascript
     * // get a list of all entities in the graph in depth first order
     * const entities = [];
     * editor.entities.root.depthFirst(entity => entities.push(entity));
     * ```
     */
    depthFirst(fn) {
        fn(this);

        const children = this.children;
        children.forEach((child) => {
            if (child) {
                child.depthFirst(fn);
            } else {
                fn(child);
            }
        });
    }

    /**
     * Adds a component to this Entity
     *
     * @param {string} component - The component name
     * @param {object} data - Default component data. Defaults values will be used for any missing fields.
     * For details on component properties see see [here](EntityProperties.md).
     * @example
     * ```javascript
     * editor.entities.root.addComponent('model', {
     *     type: 'box'
     * });
     * ```
     */
    addComponent(component, data = {}) {
        const defaultData = api.schema.components.getDefaultData(component);
        const componentData = Object.assign(defaultData, data);
        this.set(`components.${component}`, componentData);
    }

    /**
     * Removes a component from this Entity
     *
     * @param {string} component - The component name
     * @example
     * ```javascript
     * editor.entities.root.removeComponent('model');
     * ```
     */
    removeComponent(component) {
        this.unset(`components.${component}`);
    }

    /**
     * Adds entity as a child
     *
     * @category Internal
     * @param {Entity} entity - The entity
     * @returns {boolean} Whether the child was added
     */
    addChild(entity) {
        return this.insertChild(entity);
    }

    /**
     * Inserts entity as a child at specified index.
     *
     * @category Internal
     * @param {Entity} entity - The entity
     * @param {number} index - The index. If undefined the child will be added in the end.
     * @returns {boolean} Whether the child was added
     */
    insertChild(entity, index = undefined) {
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
     * @category Internal
     * @param {Entity} entity - The entity
     */
    removeChild(entity) {
        let history = entity.history.enabled;
        entity.history.enabled = false;
        try {
            entity._observer.set('parent', null, true); // silent set otherwise we run into C3 error
        } catch (err) {
            console.error(`Error when setting parent to null for entity ${entity.get('resource_id')}`);
            console.error(err);
        }
        entity.history.enabled = history;

        history = this.history.enabled;
        this.history.enabled = false;
        try {
            this.removeValue('children', entity.get('resource_id'));
        } catch (err) {
            console.error(`Error when removing ${entity.get('resource_id')} from children of entity ${this.get('resource_id')}`);
            console.error(err);
        }
        this.history.enabled = history;
    }

    /**
     * Deletes entity (and its children)
     *
     * @param {object} options - Options
     * @param {boolean} options.history - Whether to record a history action. Defaults to true.
     * @returns {Promise<void>} A promise
     * @example
     * ```javascript
     * editor.entities.root.findByName('door').delete();
     * ```
     *
     */
    delete(options = {}) {
        return api.entities.delete([this], options);
    }

    /**
     * Reparents entity under new parent
     *
     * @param {Entity} parent - The new parent
     * @param {number} index - The desired index. If undefined the entity will be added at the end of the parent's children.
     * @param {object} options - Options
     * @param {boolean} options.history - Whether to record a history action. Defaults to true.
     * @param {boolean} options.preserveTransform - Whether to preserve the original transform after reparenting
     * @example
     * ```javascript
     * const redHouse = editor.entities.root.findByName('red house');
     * const greenHouse = editor.entities.root.findByName('green house');
     * const door = redHouse.findByName('door');
     * door.reparent(greenHouse);
     * ```
     */
    reparent(parent, index = null, options = {}) {
        api.entities.reparent([{
            entity: this,
            parent: parent,
            index: index
        }], options);
    }

    /**
     * Duplicates entity under the same parent
     *
     * @param {object} [options] - Options
     * @param {boolean} [options.history] - Whether to record a history action. Defaults to true.
     * @param {boolean} [options.select] - Whether to select the new entity. Defaults to false.
     * @param {boolean} [options.rename] - Whether to rename the duplicated entity. Defaults to false.
     * @returns {Promise<Entity>} The new entity
     */
    async duplicate(options = {}) {
        const result = await api.entities.duplicate([this], options);
        return result[0];
    }

    /**
     * Returns the latest version of the Entity from the Entities API.
     *
     * @returns {Entity} The entity
     */
    latest() {
        return api.entities.get(this._observer.get('resource_id'));
    }

    /**
     * Adds a script to the script component of this entity.
     * If a script component does not exist, this method will add the script
     * component as well.
     *
     * @param {string} scriptName - The name of the script.
     * @param {object} options - Options
     * @param {object} options.attributes - The values of attributes. Each key is the name
     * of the attributes and each value is the value for that attribute. Leave undefined to
     * let the Editor set default values depending on the attribute types.
     * @param {boolean} options.history - Whether to add a history action. Defaults to true.
     * @param {number} options.index - The desired index in the entity's scripts order to add this script.
     * @returns {Promise<>} A promise
     */
    addScript(scriptName, options = {}) {
        return api.entities.addScript([this], scriptName, options);
    }

    /**
     * Removes a script from the entity's script component.
     *
     * @param {string} scriptName - The name of the script.
     * @param {object} options - Options
     * @param {boolean} options.history - Whether to record a history action. Defaults to true.
     */
    removeScript(scriptName, options = {}) {
        api.entities.removeScript([this], scriptName, options);
    }

    /**
     * @type {Entity}
     * @description The parent entity
     */
    get parent() {
        const id = this.get('parent');
        return id ? api.entities.get(id) : null;
    }

    /**
     * @type {Entity[]}
     * @description The children entities. Warning: this creates a new array every time it's called.
     */
    get children() {
        return this.get('children').map(id => api.entities.get(id));
    }

    /**
     * @type {ObserverHistory}
     * @description The history object for this entity
     */
    get history() {
        return this._history;
    }

    /**
     * @type {pc.Entity}
     * @description The entity in the 3D viewport of the Editor
     */
    get viewportEntity() {
        return this._observer ? this._observer.entity : null;
    }
}

export { Entity };
