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

    getDefaultProjectSettings() {
        return this._getDefaultData(this._schema, 'project');
    }

    getDefaultUserSettings() {
        return this._getDefaultData(this._schema, 'user');
    }

    getDefaultProjectUserSettings() {
        return this._getDefaultData(this._schema, 'projectUser');
    }
}

export { SettingsSchema };
