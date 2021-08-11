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
        this._schema = schema;
    }

    /**
     * Gets default data for asset type
     *
     * @param {string} type - The asset type
     * @returns {object} The default data
     */
    getDefaultData(type) {
        let field;
        if (type === 'animstategraph') {
            field = 'animStateGraphData';
        } else if (type === 'material') {
            field = 'materialData';
        }

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
}

export { AssetsSchema };
