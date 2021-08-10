/**
 * Global variables
 */
class globals {

    /**
     * @private
     */
    constructor() { }

    /**
     * The history API
     *
     * @type {import("./history").History}
     */
    static history;

    /**
     * The selection API
     *
     * @type {import("./selection").Selection}
     */
    static selection;

    /**
     * The schema API
     *
     * @type {import("./schema").Schema}
     */
    static schema;

    /**
     * The realtime API
     *
     * @category Internal
     * @type {import("./realtime").Realtime}
     */
    static realtime;

    /**
     * The assets API
     *
     * @type {import("./assets").Assets}
     */
    static assets;

    /**
     * Global URLs
     *
     * @category Internal
     * @type {object}
     * @property {string} realtime - The realtime server URL
     */
    static url = {
        realtime: null
    };

    /**
     * The user's access token
     *
     * @category Internal
     * @type {string}
     */
    static accessToken;

    /**
     * The current project id
     *
     * @type {number}
     */
    static projectId;

    /**
     * The current branch id
     *
     * @type {string}
     */
    static branchId;

    /**
     * Whether this project is using legacy scripts
     *
     * @type {boolean}
     */
    static hasLegacyScripts;
}

export { globals };
