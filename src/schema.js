import { AssetsSchema } from './schema/assets.js';
import { ComponentSchema } from './schema/components.js';
import { SceneSchema } from './schema/scene.js';
import { SettingsSchema } from './schema/settings.js';

/**
 * Provides methods to access the Editor schema.
 */
class Schema {
    /**
     * Creates new instance of API
     *
     * @param {object} schema - The Editor schema object
     */
    constructor(schema) {
        this._schema = schema;
        this._assetsSchema = new AssetsSchema(this);
        this._componentSchema = new ComponentSchema(this);
        this._sceneSchema = new SceneSchema(this);
        this._settingsSchema = new SettingsSchema(this);
    }

    /**
     * Gets the assets schema
     *
     * @type {AssetsSchema}
     */
    get assets() {
        return this._assetsSchema;
    }

    /**
     * Gets the component schema
     *
     * @type {ComponentSchema}
     */
    get components() {
        return this._componentSchema;
    }

    /**
     * Gets the scene schema
     *
     * @type {SceneSchema}
     */
    get scene() {
        return this._sceneSchema;
    }

    /**
     * Gets the settings schema
     *
     * @type {SettingsSchema}
     */
    get settings() {
        return this._settingsSchema;
    }

    /**
     * Converts the specified schema field to a type recursively.
     *
     * @category Internal
     * @param {object} field - The schema object or field of a parent schema object.
     * @param {boolean} fixedLength - Whether the specified schema field has a fixed length if it's an array type.
     * @returns {string} The type
     */
    getType(field, fixedLength) {
        if (typeof field === 'string') {
            if (field === 'map' || field === 'mixed') {
                field = 'object';
            }

            return field.toLowerCase();
        }

        if (field.$editorType) {
            return field.$editorType;
        }

        if (Array.isArray(field)) {
            if (field[0] === 'number' && fixedLength) {
                if (fixedLength === 2) {
                    return 'vec2';
                } else if (fixedLength === 3) {
                    return 'vec3';
                } else if (fixedLength === 4) {
                    return 'vec4';
                }
            }

            return `array:${this.getType(field[0])}`;
        }

        if (field.$type) {
            return this.getType(field.$type, field.$length);
        }

        return 'object';
    }
}

export { Schema };
