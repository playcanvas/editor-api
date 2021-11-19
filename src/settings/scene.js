import { Events, Observer, ObserverHistory } from '@playcanvas/observer';
import { globals as api } from '../globals';

/**
 * Represents the settings for the currently loaded scene.
 * For a list of properties see [here](SceneSettingsProperties.md).
 */
class SceneSettings extends Events {
    /**
     * Creates new instance of the API
     *
     * @private
     */
    constructor() {
        super();

        this._initializeObserver();

        if (api.realtime) {
            api.realtime.on('load:scene', this._onLoadScene.bind(this));
        }
    }

    /**
     * Initialize internal observer and history.
     *
     * @private
     */
    _initializeObserver() {
        if (!this._observer) {
            this._observer = new Observer();
        }

        if (this._history) {
            this._history.destroy();
        }

        this._history = new ObserverHistory({
            item: this._observer,
            prefix: 'settings',
            history: api.history
        });
    }

    /**
     * Called when a scene is loaded.
     *
     * @private
     * @typedef {import("../realtime/scene").RealtimeScene} RealtimeScene
     * @param {RealtimeScene} scene - The loaded scene
     */
    _onLoadScene(scene) {
        this._initializeObserver();

        this._history.enabled = false;
        this._observer.patch(scene.data.settings);
        this._history.enabled = true;

        this.emit('load');
    }

    /**
     * Checks if path exists. See [here](SceneSettingsProperties.md) for a list of properties.
     *
     * @param {string} path - The path
     * @returns {boolean} True if path exists
     *
     * @example
     * ```javascript
     * console.log(editor.settings.scene.has('render.fog'));
     * ```
     */
    has(path) {
        return this._observer.has(path);
    }

    /**
     * Gets value at path. See [here](SceneSettingsProperties.md) for a list of properties.
     *
     * @param {string} path - The path
     * @returns {any} The value
     * @example
     * ```javascript
     * console.log(editor.settings.scene.get('render.fog'));
     * ```
     */
    get(path) {
        return this._observer.get(path);
    }

    /**
     * Sets value at path. See [here](SceneSettingsProperties.md) for a list of properties.
     *
     * @param {string} path - The path
     * @param {any} value - The value
     * @returns {boolean} Whether the value was set
     * @example
     * ```javascript
     * editor.settings.scene.set('render.fog', 'none');
     * ```
     */
    set(path, value) {
        return this._observer.set(path, value);
    }

    /**
     * Returns JSON representation of scene settings data
     *
     * @returns {object} - The data
     * ```javascript
     * console.log(editor.settings.scene.json());
     * ```
     */
    json() {
        return this._observer.json();
    }

    /**
     * Gets the history object for this entity
     *
     * @type {ObserverHistory}
     */
    get history() {
        return this._history;
    }
}

export { SceneSettings };
