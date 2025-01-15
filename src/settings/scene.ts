import { Events, Observer, ObserverHistory } from '@playcanvas/observer';

import { globals as api } from '../globals';
import type { RealtimeScene } from '../realtime/scene';

type SceneSettingsObserver = Observer & { history: ObserverHistory };

/**
 * Represents the settings for the currently loaded scene.
 *
 * Here is a list of properties that can be accessed using the `get` and `set` methods:
 *
 * | Path                            | Type            | Description                                                                                        | Default Value |
 * | ------------------------------- | --------------- | -------------------------------------------------------------------------------------------------- | ------------- |
 * | `physics`                       | `object`        | Physics related settings for the scene.                                                            |               |
 * | `physics.gravity`               | `Array<number>` | An array of 3 numbers that represents the gravity force.                                           |               |
 * | `render`                        | `object`        | Render settings for the scene.                                                                     |               |
 * | `render.exposure`               | `number`        | The exposure value tweaks the overall brightness of the scene.                                     |               |
 * | `render.fog`                    | `string`        | The type of fog used in the scene. Can be one of `pc.FOG_NONE`, `pc.FOG_LINEAR`, `pc.FOG_EXP`, `pc.FOG_EXP2`. |  |
 * | `render.fog_color`              | `Array<number>` | An array of 3 numbers representing the color of the fog.                                           |               |
 * | `render.fog_density`            | `number`        | The density of the fog. This property is only valid if the fog property is set to `pc.FOG_EXP` or `pc.FOG_EXP2`. |  |
 * | `render.fog_end`                | `number`        | The distance from the viewpoint where linear fog reaches its maximum. This property is only valid if the fog property is set to `pc.FOG_LINEAR`. |  |
 * | `render.fog_start`              | `number`        | The distance from the viewpoint where linear fog begins. This property is only valid if the fog property is set to `pc.FOG_LINEAR`. |  |
 * | `render.gamma_correction`       | `number`        | The gamma correction to apply when rendering the scene. Can be one of `pc.GAMMA_NONE`, `pc.GAMMA_SRGB`. |  |
 * | `render.global_ambient`         | `Array<number>` | An array of 3 numbers representing the color of the scene's ambient light.                          |               |
 * | `render.lightmapMaxResolution`  | `number`        | The maximum lightmap resolution.                                                                   |               |
 * | `render.lightmapMode`           | `number`        | The lightmap baking mode. Can be one of `pc.BAKE_COLOR`, `pc.BAKE_COLORDIR`.                       |               |
 * | `render.lightmapSizeMultiplier` | `number`        | The lightmap resolution multiplier.                                                                |               |
 * | `render.skybox`                 | `number`        | The `id` of the cubemap texture to be used as the scene's skybox.                                  |               |
 * | `render.skyboxIntensity`        | `number`        | Multiplier for skybox intensity.                                                                   |               |
 * | `render.skyboxMip`              | `number`        | The mip level of the skybox to be displayed. Only valid for prefiltered cubemap skyboxes.         |               |
 * | `render.skyboxRotation`         | `Array<number>` | An array of 3 numbers representing the rotation of the skybox.                                     | `[0,0,0]`     |
 * | `render.tonemapping`            | `number`        | The tonemapping transform to apply when writing fragments to the frame buffer. Can be: `pc.TONEMAP_LINEAR`, `pc.TONEMAP_FILMIC`, `pc.TONEMAP_HEJL`, `pc.TONEMAP_ACES`. |  |
 */
class SceneSettings extends Events {
    private _observer: SceneSettingsObserver;

    private _history: ObserverHistory;

    /**
     * Creates new instance of the API
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
     */
    private _initializeObserver() {
        if (!this._observer) {
            this._observer = new Observer() as SceneSettingsObserver;
        }

        if (this._history) {
            this._history.destroy();
        }

        this._history = new ObserverHistory({
            item: this._observer,
            prefix: 'settings.',
            history: api.history
        });
        this._observer.history = this._history as ObserverHistory;
    }

    /**
     * Called when a scene is loaded.
     *
     * @param scene - The loaded scene
     */
    private _onLoadScene(scene: RealtimeScene) {
        this._initializeObserver();

        this._history.enabled = false;
        this._observer.patch(scene.data.settings);
        this._history.enabled = true;

        this.emit('load');
    }

    /**
     * Checks if path exists. See the {@link SceneSettings} overview for a full list of properties.
     *
     * @param path - The path
     * @returns True if path exists
     * @example
     * ```javascript
     * console.log(editor.settings.scene.has('render.fog'));
     * ```
     */
    has(path: string) {
        return this._observer.has(path);
    }

    /**
     * Gets value at path. See the {@link SceneSettings} overview for a full list of properties.
     *
     * @param path - The path
     * @returns The value
     * @example
     * ```javascript
     * console.log(editor.settings.scene.get('render.fog'));
     * ```
     */
    get(path: string) {
        return this._observer.get(path);
    }

    /**
     * Sets value at path. See the {@link SceneSettings} overview for a full list of properties.
     *
     * @param path - The path
     * @param value - The value
     * @returns Whether the value was set
     * @example
     * ```javascript
     * editor.settings.scene.set('render.fog', 'none');
     * ```
     */
    set(path: string, value: any) {
        return this._observer.set(path, value);
    }

    /**
     * Returns JSON representation of scene settings data
     *
     * @returns - The data
     * @example
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
