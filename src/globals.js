/**
 * Global variables
 */
class globals {
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
     * The settings API
     *
     * @type {import("./settings").Settings}
     */
    static settings;

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
     * The main clipboard
     *
     * @type {import("./clipboard").Clipboard}
     * @category Internal
     */
    static clipboard;

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

    /**
     * Alert function called when user confirmation is needed
     * for an action. Defaults to the default browser popup but
     * can be overriden to show your custom popup instead.
     *
     * @param {string} text - The confirm dialog text
     * @param {object} options - Options for the popup
     * @param {string} options.yesText - Text for 'yes' option
     * @param {string} options.noText - Text for 'no' option
     * @param {boolean} options.noDismiss - If true then user cannot dismiss the popup and will have to click yes or no
     * @returns {Promise<boolean>} True if the user confirmed, false otherwise
     */
    static confirmFn(text, options = {}) {
        return new Promise((resolve) => {
            resolve(confirm(text)); // eslint-disable-line
        });
    }
}

export { globals };
