import { Events } from '@playcanvas/observer';
import { SceneSettings } from './settings/scene';

/**
 * The settings editor API
 */
class Settings extends Events {
    /**
     * Creates new API instance
     */
    constructor() {
        super();

        this._sceneSettings = new SceneSettings();
    }

    /**
     * Gets the settings for the currently loaded scene.
     *
     * @type {SceneSettings}
     */
    get scene() {
        return this._sceneSettings;
    }
}

export { Settings };
