import { utils } from '../utils';

/**
 * Provides methods to access the components schema
 */
class ComponentSchema {
    /** @typedef {import("../schema").Schema} Schema */

    /**
     * Creates new instance of API
     *
     * @param {Schema} schema - The schema API
     */
    constructor(schema) {
        this._schema = schema.scene.entities.$of.components;
    }

    _resolveLazyDefaults(defaults) {
        // Any functions in the default property set are used to provide
        // lazy resolution, to handle cases where the values are not known
        // at startup time.
        Object.keys(defaults).forEach(key => {
            const value = defaults[key];

            if (typeof value === 'function') {
                defaults[key] = value();
            }
        });
    }

    /**
     * Gets default data for a component
     *
     * @param {string} component - The component name
     * @returns {object} The default data
     */
    getDefaultData(component) {
        const result = {};
        for (const fieldName in this._schema[component]) {
            if (fieldName.startsWith('$')) continue;
            const field = this._schema[component][fieldName];
            if (field.hasOwnProperty('$default')) {
                result[fieldName] = utils.deepCopy(field.$default);
            }
        }

        this._resolveLazyDefaults(result);

        return result;
    }

    /**
     * Gets a list of fields of a particular type for a component
     *
     * @param {string} componentName - The component name
     * @param {string} type - The desired type
     * @returns {string[]} A list of fields
     */
    getFieldsOfType(componentName, type) {
        const result = [];

        for (const field in this._schema[componentName]) {
            if (this._schema[componentName][field].$editorType === type) {
                result.push(field);
            }
        }

        return result;
    }
}

export { ComponentSchema };
