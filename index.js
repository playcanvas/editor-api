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

export * from './src/polyfills';
export * from './src/globals';
export * from './src/utils';
export * from './src/guid';
export * from './src/entities';
export * from './src/entity';
export * from './src/assets';
export * from './src/asset';
export * from './src/settings';
export * from './src/settings/scene';
export * from './src/history';
export * from './src/selection';
export * from './src/schema';
export * from './src/schema/components';
export * from './src/schema/assets';
export * from './src/realtime/connection';
export * from './src/realtime/scene';
export * from './src/realtime/scenes';
export * from './src/realtime/asset';
export * from './src/realtime/assets';
export * from './src/realtime';
export * from './src/messenger';
export * from './src/jobs';
export * from './src/localstorage';
export * from './src/clipboard';
