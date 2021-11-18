import { utils } from '../utils';

/**
 * Provides methods to access the Assets schema
 */
class AssetsSchema {
    /** @typedef {import("../schema").Schema} Schema */

    /**
     *
     * @category Internal
     * @param {Schema} schema - The schema API
     */
    constructor(schema) {
        this._schemaApi = schema;
        this._schema = this._schemaApi._schema;
    }

    /**
     * Gets default data for asset type
     *
     * @param {string} type - The asset type
     * @returns {object} The default data
     */
    getDefaultData(type) {
        const field = type + 'Data';

        if (!field || !this._schema[field]) return null;

        const result = {};

        const schema = this._schema[field];
        for (const key in schema) {
            if (key.startsWith('$')) continue;
            const block = schema[key];
            if (block.hasOwnProperty('$default')) {
                result[key] = utils.deepCopy(block.$default);
            }
        }

        return result;
    }

    /**
     * Gets a list of fields of a particular type for an asset type
     *
     * @param {string} assetType - The type of the asset.
     * @param {string} type - The desired type
     * @returns {string[]} A list of fields
     * @example
     * ```javascript
     * const materialAssetPaths = editor.schema.assets.getFieldsOfType('material', 'asset');
     * ```
     */
    getFieldsOfType(assetType, type) {
        const result = [];

        const recurse = (schemaField, path, prefix = '') => {
            if (!schemaField) return;

            if (schemaField.$editorType === type || schemaField.$editorType === 'array:' + type) {
                result.push(prefix + path);
                return;
            }

            for (const field in schemaField) {
                if (field.startsWith('$')) continue;

                const p = (path ? path + '.' : '') + field;
                const fieldType = this._schemaApi.getType(schemaField[field]);
                if (fieldType === type || fieldType === 'array:' + type) {
                    result.push(prefix + p);
                } else if (fieldType === 'object' && schemaField[field].$of) {
                    recurse(schemaField[field].$of, p + '.*', prefix);
                } else if (fieldType === 'array:object' && Array.isArray(schemaField[field].$type)) {
                    recurse(schemaField[field].$type[0], p + '.*', prefix);
                }
            }
        };

        recurse(this._schema[assetType + 'Data'], '', 'data.');

        return result;
    }
}

export { AssetsSchema };
