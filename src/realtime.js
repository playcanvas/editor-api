import { RealtimeConnection } from './realtime/connection';
import { RealtimeScenes } from './realtime/scenes';
import { Events } from './pcui';

/**
 * Provides methods to communicate and load / save data to the realtime server
 *
 * @category Internal
 */
class Realtime extends Events {
    constructor() {
        super();
        this._connection = new RealtimeConnection(this);
        this._scenes = new RealtimeScenes(this, this.connection);
    }

    /**
     * Gets the realtime connection
     *
     * @type {RealtimeConnection}
     */
    get connection() {
        return this._connection;
    }

    /**
     * Gets the realtime scenes API
     *
     * @type {RealtimeScenes}
     */
    get scenes() {
        return this._scenes;
    }
}


export { Realtime };
