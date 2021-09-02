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
     * The entities API
     *
     * @type {import("./entities").Entities}
     */
    static entities;

    /**
     * The messenger API
     *
     * @type {import("./messenger").Messenger}
     * @category Internal
     */
    static messenger;

    /**
     * The jobs API
     *
     * @type {import("./jobs").Jobs}
     * @category Internal
     */
    static jobs;

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
     * @category Internal
     */
    static hasLegacyScripts;
}

export { globals };
