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
}

export { globals };
