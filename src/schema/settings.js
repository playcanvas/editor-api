import { utils } from '../utils.js';

/**
 * Provides methods to access the settings schema
 */
class SettingsSchema {
    /** @typedef {import("../schema").Schema} Schema */

    /**
     * Creates new instance of API
     *
     * @category Internal
     * @param {Schema} schema - The schema API
     */
    constructor(schema) {
        this._schemaApi = schema;
        this._schema = this._schemaApi._schema.settings;
    }

    /**
     * @private
     * @param {*} obj - The object to get the default data from
     * @param {string} scope - The field scope
     * @returns {*} - The default data
     */
    _getDefaultData(obj, scope) {
        const result = {};
        for (const key in obj) {
            if (key.startsWith('$')) continue;
            if (!(obj[key] instanceof Object)) continue;

            if (obj[key].hasOwnProperty('$default')) {
                if (obj[key].$scope === scope) {
                    result[key] = utils.deepCopy(obj[key].$default);
                }
                continue;
            } else {
                const subDefaults = this._getDefaultData(obj[key], scope);
                if (Object.keys(subDefaults).length) {
                    result[key] = subDefaults;
                }
            }
        }
        return result;
    }

    /**
     * Get the default settings for the project
     *
     * @returns {*} The default settings for the project
     */
    getDefaultProjectSettings() {
        return this._getDefaultData(this._schema, 'project');
    }

    /**
     * Get the default settings for the user
     *
     * @returns {*} The default settings for the user
     */
    getDefaultUserSettings() {
        return this._getDefaultData(this._schema, 'user');
    }

    /**
     * Get the default settings for the project user
     *
     * @returns {*} The default settings for the user in the project
     */
    getDefaultProjectUserSettings() {
        return this._getDefaultData(this._schema, 'projectUser');
    }
}

export { SettingsSchema };
