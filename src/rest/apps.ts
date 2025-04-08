import { Ajax } from '../ajax';

/**
 * Creates a new app
 *
 * @param {object} data - The app data to create
 * @returns {Ajax} - A request that responds with the app data
 */
export const appCreate = (data: object) => {
    return Ajax.post({
        url: '/api/apps',
        auth: true,
        data
    });
};

/**
 * Deletes the app with the given ID
 *
 * @param {number} appId - The ID of the app to delete
 * @returns {Ajax} - A request that responds when the app is deleted
 */
export const appDelete = (appId: number) => {
    return Ajax.delete({
        url: `/api/apps/${appId}`,
        auth: true
    });
};

/**
 * Get list of apps
 *
 * @param {string} tags - The tags to filter the apps by
 * @returns {Ajax} - A request that responds with the list of apps
 */
export const appList = (tags: string) => {
    return Ajax.get({
        url: `/api/apps?tags=${tags}`,
        auth: true
    });
};

/**
 * Fetches the app with the given ID
 *
 * @param {number} appId - The ID of the app to get
 * @returns {Ajax} - A request that responds with the app data
 */
export const appGet = (appId: number) => {
    return Ajax.get({
        url: `/api/apps/${appId}`,
        auth: true
    });
};

/**
 * Downloads the app with the given ID
 *
 * @param {object} data - The app data to download
 * @returns {Ajax} - A request that responds with the app data
 */
export const appDownload = (data: object) => {
    return Ajax.post({
        url: '/api/apps/download',
        auth: true,
        data
    });
};
