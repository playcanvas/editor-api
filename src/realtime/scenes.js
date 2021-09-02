import { RealtimeScene } from './scene';
import { Events } from '@playcanvas/observer';

/**
 * Provides methods to load scenes from sharedb
 *
 * @category Internal
 */
class RealtimeScenes extends Events {
    /** @typedef {import("../realtime").Realtime} Realtime */
    /** @typedef {import("./connection").RealtimeConnection} RealtimeConnection */

    /**
     * Constructor
     *
     * @param {Realtime} realtime - The realtime API
     * @param {RealtimeConnection} connection - The realtime connection
     */
    constructor(realtime, connection) {
        super();
        this._realtime = realtime;
        this._connection = connection;
        this._scenes = {};
        this._currentScene = null;
    }

    /**
     * Loads a scene
     *
     * @param {number} sceneId - The scene id
     * @returns {RealtimeScene} The scene
     */
    load(sceneId) {
        this._currentScene = this._scenes[sceneId];

        if (!this._currentScene) {
            this._currentScene = new RealtimeScene(sceneId, this._realtime, this._connection);
            this._scenes[sceneId] = this._currentScene;
        }

        if (!this._currentScene.loaded) {
            this._currentScene.load();
            this._currentScene.once('load', () => {
                this._realtime.emit('load:scene', this._currentScene);
            });
        }

        return this._currentScene;
    }

    /**
     * Unloads a scene
     *
     * @param {number} sceneId - The scene id
     */
    unload(sceneId) {
        if (this._scenes[sceneId]) {
            this._scenes[sceneId].unload();
            if (this._currentScene === this._scenes[sceneId]) {
                this._currentScene = null;
            }

            delete this._scenes[sceneId];
        }
    }

    /**
     * The current scene
     *
     * @type {RealtimeScene}
     */
    get current() {
        return this._currentScene;
    }
}

export { RealtimeScenes };
