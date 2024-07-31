/**
 * The Editor module provides a comprehensive API for automating and extending
 * the functionality of the PlayCanvas Editor. It allows developers to programmatically
 * interact with the Editor, facilitating tasks such as scene manipulation, asset
 * management, and custom tool integration. This module is essential for developers
 * looking to streamline their workflow, create custom editing tools, or integrate
 * external data and systems into the PlayCanvas Editor environment.
 *
 * @module Editor
 */

export * from './polyfills.js';
export * from './globals.js';
export * from './utils.js';
export * from './guid.js';
export * from './entities.js';
export * from './entity.js';
export * from './assets.js';
export * from './asset.js';
export * from './settings.js';
export * from './settings/scene.js';
export * from './history.js';
export * from './selection.js';
export * from './schema.js';
export * from './schema/components.js';
export * from './schema/assets.js';
export * from './realtime/connection.js';
export * from './realtime/scene.js';
export * from './realtime/scenes.js';
export * from './realtime/asset.js';
export * from './realtime/assets.js';
export * from './realtime.js';
export * from './messenger.js';
export * from './jobs.js';
export * from './localstorage.js';
export * from './clipboard.js';
