import { ComponentSchema } from './schema/components';
import { AssetsSchema } from './schema/assets';

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
        this._componentSchema = new ComponentSchema(schema);
        this._assetsSchema = new AssetsSchema(schema);
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
     * Gets the assets schema
     *
     * @type {AssetsSchema}
     */
    get assets() {
        return this._assetsSchema;
    }
}

export { Schema };
