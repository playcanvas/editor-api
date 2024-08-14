import { utils } from '../utils.js';

/**
 * Provides methods to access the render schema
 */
class SceneSchema {
    /** @typedef {import("../schema.js").Schema} Schema */

    /**
     * Creates new instance of API
     *
     * @category Internal
     * @param {Schema} schema - The schema API
     */
    constructor(schema) {
        this._schemaApi = schema;
        this._schema = this._schemaApi._schema.scene;
    }

    _getDefaultData(obj) {
        const result = {};
        for (const key in obj) {
            if (key.startsWith('$')) continue;
            if (!(obj[key] instanceof Object)) continue;

            if (obj[key].hasOwnProperty('$default')) {
                result[key] = utils.deepCopy(obj[key].$default);
                continue;
            } else {
                const subDefaults = this._getDefaultData(obj[key]);
                if (Object.keys(subDefaults).length) {
                    result[key] = subDefaults;
                }
            }
        }
        return result;
    }

    /**
     * Get the default physics scene settings for the project
     *
     * @returns {*} The default physics scene settings
     * @example
     * ```javascript
     * const scenePhysicsSettings = editor.schema.scene.getDefaultPhysicsSettings();
     * ```
     */
    getDefaultPhysicsSettings() {
        return this._getDefaultData(this._schema.settings.physics);
    }

    /**
     * Get the default render scene settings for the project
     *
     * @returns {*} The default physics scene settings
     * @example
     * ```javascript
     * const sceneRenderSettings = editor.schema.scene.getDefaultRenderSettings();
     * ```
     */
    getDefaultRenderSettings() {
        return this._getDefaultData(this._schema.settings.render);
    }
}

export { SceneSchema };
