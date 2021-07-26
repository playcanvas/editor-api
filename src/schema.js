import { ComponentSchema } from './schema/components';

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
    }

    /**
     * Gets the component schema
     *
     * @type {ComponentSchema}
     */
    get components() {
        return this._componentSchema;
    }
}

export { Schema };
