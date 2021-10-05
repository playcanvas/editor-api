import { globals as api } from '../globals';

function getSetting(settings, name, defaultValue) {
    return settings[name] !== undefined ? settings[name] : defaultValue;
}

function createFormData(data, settings) {
    const form = new FormData();

    form.append('branchId', api.branchId);
    if (data.folderId) {
        form.append('parent', data.folderId.toString());
    }

    if (data.filename) {
        form.append('filename', data.filename);
    }

    if (data.file && data.file.size) {
        form.append('file', data.file, data.filename || data.name);
    }

    if (data.type === 'texture' || data.type === 'textureatlas') {
        form.append('pow2', getSetting(settings, 'pow2', true));
        form.append('searchRelatedAssets', getSetting(settings, 'searchRelatedAssets', true));
    } else if (data.type === 'scene') {
        form.append('searchRelatedAssets', getSetting(settings, 'searchRelatedAssets', true));
        form.append('overwriteModel', getSetting(settings, 'overwriteModel', true));
        form.append('overwriteAnimation', getSetting(settings, 'overwriteAnimation', true));
        form.append('overwriteMaterial', getSetting(settings, 'overwriteMaterial', true));
        form.append('overwriteTexture', getSetting(settings, 'overwriteTexture', true));
        form.append('pow2', getSetting(settings, 'pow2', true));
        form.append('preserveMapping', getSetting(settings, 'preserveMapping', true));
        form.append('useGlb', getSetting(settings, 'useGlb', true));
        form.append('animSampleRate', getSetting(settings, 'animSampleRate', 10));
        form.append('animCurveTolerance', getSetting(settings, 'animCurveTolerance', 0));
        form.append('animEnableCubic', getSetting(settings, 'animEnableCubic', false));
        form.append('animUseFbxFilename', getSetting(settings, 'animUseFbxFilename', false));
    }

    return form;
}

function appendCreateFields(form, data) {
    form.append('projectId', api.projectId);
    form.append('type', data.type);

    if (data.name) {
        form.append('name', data.name);
    }

    // tags
    if (data.tags) {
        form.append('tags', data.tags.join('\n'));
    }

    // source_asset_id
    if (data.sourceAssetId) {
        form.append('source_asset_id', data.sourceAssetId);
    }

    // data
    if (data.data) {
        form.append('data', JSON.stringify(data.data));
    }

    // meta
    if (data.meta) {
        form.append('meta', JSON.stringify(data.meta));
    }

    form.append('preload', getSetting(data, 'preload', true));

    return form;
}

/**
 * Uploads an asset file in order to create a new asset
 * or update an existing asset.
 *
 * @param {object} data - The data
 * @param {object} settings - Import settings
 * @returns {object} The JSON response from the server
 */
async function uploadFile(data, settings = {}) {
    let method;
    let url;

    const form = createFormData(data, settings);
    if (data.id) {
        method = 'PUT';
        url = '/api/assets/' + data.id;
    } else {
        appendCreateFields(form, data);
        method = 'POST';
        url = '/api/assets';
    }

    const response = await fetch(url, {
        body: form,
        method: method
    });

    if (!response.ok) {
        throw new Error(response.status + ': ' + response.statusText);
    }

    const json = await response.json();
    return json;
}

export { uploadFile };
