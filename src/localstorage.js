/**
 * Wrapper around native local storage
 *
 * @category Internal
 */
class LocalStorage {
    /**
     * Constructor
     */
    constructor() {
        this._cache = {};
    }

    /**
     * Gets a key from localStorage
     *
     * @param {string} key - The key
     * @returns {object} The value
     */
    get(key) {
        const value = localStorage.getItem(key);
        if (value) {
            if (!this._cache[key] || this._cache[key].value !== value) {
                try {
                    this._cache[key] = {
                        value: value,
                        json: JSON.parse(value)
                    };
                } catch (e) {
                    console.error(e);
                }
            }

            return this._cache[key].json;
        }

        delete this._cache[key];

        return value;
    }

    /**
     * Stores a key-value to localStorage
     *
     * @param {string} key - The key
     * @param {object} value - The value
     */
    set(key, value) {
        const text = JSON.stringify(value);
        localStorage.setItem(key, text);
        this._cache[key] = {
            value: text,
            json: value
        };
    }

    /**
     * Removes a key from localStorage
     *
     * @param {string} key - The key
     */
    unset(key) {
        localStorage.removeItem(key);
    }

    /**
     * Checks if key exists in local storage
     *
     * @param {string} key - The key
     * @returns {boolean} True or false
     */
    has(key) {
        return !!localStorage.getItem(key);
    }
}

export { LocalStorage };
