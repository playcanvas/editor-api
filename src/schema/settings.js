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
     * @example
     * ```javascript
     * const projectSettings = editor.schema.settings.getDefaultProjectSettings();
     * ```
     */
    getDefaultProjectSettings() {
        return this._getDefaultData(this._schema, 'project');
    }

    /**
     * Get the default settings for the user
     *
     * @returns {*} The default settings for the user
     * @example
     * ```javascript
     * const userSettings = editor.schema.settings.getDefaultUserSettings();
     * ```
     */
    getDefaultUserSettings() {
        return this._getDefaultData(this._schema, 'user');
    }

    /**
     * Get the default settings for the user in the project
     *
     * @returns {*} The default settings for the user in the project
     * @example
     * ```javascript
     * const projectUserSettings = editor.schema.settings.getDefaultProjectUserSettings();
     * ```
     */
    getDefaultProjectUserSettings() {
        return this._getDefaultData(this._schema, 'projectUser');
    }
}

export { SettingsSchema };
