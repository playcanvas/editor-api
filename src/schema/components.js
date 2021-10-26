import { utils } from '../utils';

/**
 * Provides methods to access the components schema
 */
class ComponentSchema {
    /** @typedef {import("../schema").Schema} Schema */

    /**
     * Creates new instance of API
     *
     * @category Internal
     * @param {Schema} schema - The schema API
     */
    constructor(schema) {
        this._schemaApi = schema;
        this._schema = this._schemaApi._schema.scene.entities.$of.components;
    }

    _resolveLazyDefaults(defaults) {
        // Any functions in the default property set are used to provide
        // lazy resolution, to handle cases where the values are not known
        // at startup time.
        Object.keys(defaults).forEach((key) => {
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
     * @example
     * ```javascript
     * const modelData = editor.schema.components.getDefaultData('model');
     * ```
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
     * @example
     * ```javascript
     * const buttonEntityFields = editor.schema.components.getFieldsOfType('button', 'entity');
     * ```
     */
    getFieldsOfType(componentName, type) {
        const result = [];

        const recurse = (schemaField, path) => {
            if (!schemaField) return;

            if (schemaField.$editorType === type || schemaField.$editorType === 'array:' + type) {
                result.push(path);
                return;
            }

            for (const field in schemaField) {
                if (field.startsWith('$')) continue;

                const p = (path ? path + '.' : '') + field;
                const fieldType = this._schemaApi.getType(schemaField[field]);
                if (fieldType === type || fieldType === 'array:' + type) {
                    result.push(p);
                } else if (fieldType === 'object' && schemaField[field].$of) {
                    recurse(schemaField[field].$of, p + '.*');
                }
            }
        };

        recurse(this._schema[componentName], '');

        return result;
    }

    /**
     * Gets a list of all the available components
     *
     * @returns {string[]} The components
     */
    list() {
        const result = Object.keys(this._schema);
        result.sort();

        // filter out zone (which is not really supported)
        const idx = result.indexOf('zone');
        if (idx !== -1) {
            result.splice(idx, 1);
        }

        return result;
    }
}

export { ComponentSchema };
