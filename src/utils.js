/**
 * Contains various utility methods
 *
 * @category Internal
 */
class utils {
    /**
     * @private
     */
    constructor() {

    }

    /**
     * Deep copy an object
     *
     * @param {object} data - The data to copy
     * @returns {object} A copy of the data
     */
    static deepCopy(data) {
        if (data == null || typeof(data) !== 'object')
            return data;

        if (data instanceof Array) {
            var arr = [];
            for (let i = 0; i < data.length; i++) {
                arr[i] = this.deepCopy(data[i]);
            }
            return arr;
        }

        const obj = {};
        for (const key in data) {
            if (data.hasOwnProperty(key))
                obj[key] = this.deepCopy(data[key]);
        }
        return obj;
    }
}

export { utils };
