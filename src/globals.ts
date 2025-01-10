import type { Assets } from './assets';
import type { Clipboard } from './clipboard';
import type { Entities } from './entities';
import type { History } from './history';
import type { Jobs } from './jobs';
import type { Messenger } from './messenger';
import type { Realtime } from './realtime';
import type { Schema } from './schema';
import type { Selection } from './selection';
import type { Settings } from './settings';

/**
 * Global variables
 */
class globals {
    /**
     * The history API
     */
    static history: History;

    /**
     * The selection API
     */
    static selection: Selection;

    /**
     * The schema API
     */
    static schema: Schema;

    /**
     * The realtime API
     * @category Internal
     */
    static realtime: Realtime;

    /**
     * The assets API
     */
    static assets: Assets;

    /**
     * The entities API
     */
    static entities: Entities;

    /**
     * The settings API
     */
    static settings: Settings;

    /**
     * The messenger API
     * @category Internal
     */
    static messenger: Messenger;

    /**
     * The jobs API
     * @category Internal
     */
    static jobs: Jobs;

    /**
     * The main clipboard
     * @category Internal
     */
    static clipboard: Clipboard;

    /**
     * The user's access token
     * @category Internal
     */
    static accessToken: string;

    /**
     * The current project id
     */
    static projectId: number;

    /**
     * The current branch id
     */
    static branchId: string;

    /**
     * Whether this project is using legacy scripts
     * @category Internal
     */
    static hasLegacyScripts: boolean;

    /**
     * Alert function called when user confirmation is needed
     * for an action. Defaults to the default browser popup but
     * can be overridden to show your custom popup instead.
     *
     * @param {string} text - The confirm dialog text
     * @param {object} options - Options for the popup
     * @param {string} options.yesText - Text for 'yes' option
     * @param {string} options.noText - Text for 'no' option
     * @param {boolean} options.noDismiss - If true then user cannot dismiss the popup and will have to click yes or no
     * @returns {Promise<boolean>} True if the user confirmed, false otherwise
     */
    static confirmFn(text: string, options: { yesText?: string, noText?: boolean, noDismiss?: boolean }): Promise<boolean> {
        return new Promise((resolve) => {
            // eslint-disable-next-line no-alert
            resolve(confirm(text));
        });
    }
}

export { globals };
