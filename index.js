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

export * from './src/polyfills.js';
export * from './src/globals.js';
export * from './src/utils.js';
export * from './src/guid.js';
export * from './src/entities.js';
export * from './src/entity.js';
export * from './src/assets.js';
export * from './src/asset.js';
export * from './src/settings.js';
export * from './src/settings/scene.js';
export * from './src/history.js';
export * from './src/selection.js';
export * from './src/schema.js';
export * from './src/schema/components.js';
export * from './src/schema/assets.js';
export * from './src/realtime/connection.js';
export * from './src/realtime/scene.js';
export * from './src/realtime/scenes.js';
export * from './src/realtime/asset.js';
export * from './src/realtime/assets.js';
export * from './src/realtime.js';
export * from './src/messenger.js';
export * from './src/jobs.js';
export * from './src/localstorage.js';
export * from './src/clipboard.js';
