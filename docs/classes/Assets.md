[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Assets

# Class: Assets

The Assets Editor API

## Hierarchy

- `Events`

  ↳ **`Assets`**

## Table of contents

### Constructors

- [constructor](Assets.md#constructor)

### Public Methods

- [get](Assets.md#get)
- [getUnique](Assets.md#getunique)
- [list](Assets.md#list)
- [listByTag](Assets.md#listbytag)
- [filter](Assets.md#filter)
- [findOne](Assets.md#findone)
- [getAssetForScript](Assets.md#getassetforscript)
- [createAnimStateGraph](Assets.md#createanimstategraph)
- [createBundle](Assets.md#createbundle)
- [createCss](Assets.md#createcss)
- [createCubemap](Assets.md#createcubemap)
- [createFolder](Assets.md#createfolder)
- [createHtml](Assets.md#createhtml)
- [createJson](Assets.md#createjson)
- [createI18n](Assets.md#createi18n)
- [createMaterial](Assets.md#creatematerial)
- [createScript](Assets.md#createscript)
- [createShader](Assets.md#createshader)
- [createSprite](Assets.md#createsprite)
- [createText](Assets.md#createtext)
- [createTemplate](Assets.md#createtemplate)
- [delete](Assets.md#delete)
- [instantiateTemplates](Assets.md#instantiatetemplates)

### Internal Methods

- [add](Assets.md#add)
- [remove](Assets.md#remove)
- [clear](Assets.md#clear)
- [loadAll](Assets.md#loadall)
- [loadAllAndSubscribe](Assets.md#loadallandsubscribe)

### Accessors

- [defaultUploadCompletedCallback](Assets.md#defaultuploadcompletedcallback)
- [defaultUploadProgressCallback](Assets.md#defaultuploadprogresscallback)
- [defaultUploadErrorCallback](Assets.md#defaultuploaderrorcallback)
- [parseScriptCallback](Assets.md#parsescriptcallback)

## Constructors

### constructor

• **new Assets**(`options?`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.autoSubscribe` | `boolean` | Whether to auto subscribe to asset changes when assets are loaded. |

#### Overrides

Events.constructor

#### Defined in

[src/assets.js:62](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L62)

## Public Methods

### get

▸ **get**(`id`): [`Asset`](Asset.md)

Gets asset by id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The asset id |

#### Returns

[`Asset`](Asset.md)

The asset

#### Defined in

[src/assets.js:154](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L154)

___

### getUnique

▸ **getUnique**(`uniqueId`): [`Asset`](Asset.md)

Gets asset by its unique id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uniqueId` | `number` | The unique id |

#### Returns

[`Asset`](Asset.md)

The asset

#### Defined in

[src/assets.js:165](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L165)

___

### list

▸ **list**(): [`Asset`](Asset.md)[]

Returns array of all assets

#### Returns

[`Asset`](Asset.md)[]

The assets

#### Defined in

[src/assets.js:175](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L175)

___

### listByTag

▸ **listByTag**(...`tags`): [`Asset`](Asset.md)[]

Finds all assets with specified tags

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...tags` | `any`[] | The tags. If multiple tags are specified then assets that contain ANY of the specified tags will be included. If an argument is an array of tags then assets that contain ALL of the tags in the array will be included. |

#### Returns

[`Asset`](Asset.md)[]

The assets

#### Defined in

[src/assets.js:186](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L186)

___

### filter

▸ **filter**(`fn`): [`Asset`](Asset.md)[]

Gets assets that satisfy function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Function` | The function (takes an asset as an argument and returns boolean). |

#### Returns

[`Asset`](Asset.md)[]

The assets

#### Defined in

[src/assets.js:313](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L313)

___

### findOne

▸ **findOne**(`fn`): [`Asset`](Asset.md)

Finds first asset that satisfies function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Function` | A function that takes an asset as an argument and returns boolean. |

#### Returns

[`Asset`](Asset.md)

The asset

#### Defined in

[src/assets.js:325](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L325)

___

### getAssetForScript

▸ **getAssetForScript**(`script`): [`Asset`](Asset.md)

Gets the first script asset that contains the specified script

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `script` | `string` | The script name |

#### Returns

[`Asset`](Asset.md)

The script asset

#### Defined in

[src/assets.js:442](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L442)

___

### createAnimStateGraph

▸ **createAnimStateGraph**(`options?`): `Promise`<[`Asset`](Asset.md)\>

Creates new anim state graph asset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.data` | `any` | The asset data. See [here](AssetProperties.md) for Animstategraph data. |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.onProgress` | `Function` | Function to report progress |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:506](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L506)

___

### createBundle

▸ **createBundle**(`options?`): `Promise`<[`Asset`](Asset.md)\>

Creates new bundle asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.assets` | [`Asset`](Asset.md)[] | The assets that the bundle will contain |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | `Function` | Function to report progress |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:527](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L527)

___

### createCss

▸ **createCss**(`options?`): `Promise`<[`Asset`](Asset.md)\>

Creates new CSS asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.text` | `string` | The CSS |
| `options.folder` | `string` | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | `Function` | Function to report progress |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:550](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L550)

___

### createCubemap

▸ **createCubemap**(`options?`): `Promise`<[`Asset`](Asset.md)\>

Creates new cubemap asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.textures` | [`Asset`](Asset.md)[] | The textures for each cubemap face in this order: right, left, up, down, front, back |
| `options.minFilter` | `number` | Cubemap minFilter value. Defaults to pc.FILTER_LINEAR_MIPMAP_LINEAR. |
| `options.magFilter` | `number` | Cubemap magFilter value. Defaults to pc.FILTER_LINEAR. |
| `options.anisotropy` | `number` | Cubemap anisotropy value. Defaults to 1. |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | `Function` | Function to report progress |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:576](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L576)

___

### createFolder

▸ **createFolder**(`options?`): `Promise`<[`Asset`](Asset.md)\>

Creates a new folder asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.onProgress` | `Function` | Function to report progress |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:606](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L606)

___

### createHtml

▸ **createHtml**(`options?`): `Promise`<[`Asset`](Asset.md)\>

Creates new HTML asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.text` | `string` | The HTML |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | `Function` | Function to report progress |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:625](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L625)

___

### createJson

▸ **createJson**(`options?`): `Promise`<[`Asset`](Asset.md)\>

Creates new JSON asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.json` | `any` | The JSON |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | `Function` | Function to report progress |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:647](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L647)

___

### createI18n

▸ **createI18n**(`options?`): `Promise`<[`Asset`](Asset.md)\>

Creates new localization JSON asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options |
| `options.name` | `string` | The asset name |
| `options.localizationData` | `any` | The localization data. If null then default data will be used. |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | `Function` | Function to report progress |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:669](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L669)

___

### createMaterial

▸ **createMaterial**(`options?`): `Promise`<[`Asset`](Asset.md)\>

Creates new material asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.data` | `any` | The material data. Default values will be used for missing fields. See [here](AssetProperties.md) for material data. |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | `Function` | Function to report progress |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:702](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L702)

___

### createScript

▸ **createScript**(`options?`): `Promise`<[`Asset`](Asset.md)\>

Creates new script asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.filename` | `string` | The filename of the script. This will also be the name of the script asset. If not defined it will be generated from the name of the script. |
| `options.text` | `string` | The contents of the script. If none then boilerplate code will be used. |
| `options.data` | `any` | The script data. See [here](AssetProperties.md) for Script data. |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:734](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L734)

___

### createShader

▸ **createShader**(`options?`): `Promise`<[`Asset`](Asset.md)\>

Creates new shader asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.text` | `string` | The GLSL |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | `Function` | Function to report progress |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:794](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L794)

___

### createSprite

▸ **createSprite**(`options?`): `Promise`<[`Asset`](Asset.md)\>

Creates new sprite asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.pixelsPerUnit` | `number` | The sprite's pixels per unit value. Defaults to 100. |
| `options.frameKeys` | `number`[] | The sprite's frame keys |
| `options.textureAtlas` | [`Asset`](Asset.md) | The sprite's texture atlas asset |
| `options.renderMode` | `number` | The sprite's render mode. Defaults to pc.SPRITE_RENDERMODE_SIMPLE. |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | `Function` | Function to report progress |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:819](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L819)

___

### createText

▸ **createText**(`options?`): `Promise`<[`Asset`](Asset.md)\>

Creates new text asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.text` | `string` | The text |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | `Function` | Function to report progress |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:846](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L846)

___

### createTemplate

▸ **createTemplate**(`options?`): `Promise`<[`Asset`](Asset.md)\>

Creates new template asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.entity` | [`Entity`](Entity.md) | The entity to create the template from |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | `Function` | Function to report progress |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:869](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L869)

___

### delete

▸ **delete**(`assets`): `Promise`<`void`\>

Deletes specified assets

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assets` | [`Asset`](Asset.md)[] | The assets |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/assets.js:895](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L895)

___

### instantiateTemplates

▸ **instantiateTemplates**(`assets`, `parent`, `options?`): `Promise`<[`Entity`](Entity.md)[]\>

Instantiates the specified template assets under the specified
parent entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assets` | [`Asset`](Asset.md)[] | The template assets. |
| `parent` | [`Entity`](Entity.md) | The parent entity |
| `options` | `Object` | Options |
| `options.index` | `number` | The desired index under the parent to instantiate the templates. |
| `options.history` | `boolean` | Whether to record a history action. |
| `options.select` | `boolean` | Whether to select the new entities. |
| `options.extraData` | `any` | Extra data passed to the backend. Used by the Editor on specific cases. |

#### Returns

`Promise`<[`Entity`](Entity.md)[]\>

The new entities

#### Defined in

[src/assets.js:927](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L927)

___

## Internal Methods

### add

▸ **add**(`asset`): `void`

Adds asset to the list

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asset` | [`Asset`](Asset.md) | The asset |

#### Returns

`void`

#### Defined in

[src/assets.js:220](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L220)

___

### remove

▸ **remove**(`asset`): `void`

Removes asset from the list

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asset` | [`Asset`](Asset.md) | The asset |

#### Returns

`void`

#### Defined in

[src/assets.js:272](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L272)

___

### clear

▸ **clear**(): `void`

Removes all assets from the list

#### Returns

`void`

#### Defined in

[src/assets.js:293](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L293)

___

### loadAll

▸ **loadAll**(): `Promise`<`void`\>

Loads all assets in the current project / branch. Does not
subscribe to realtime changes.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/assets.js:336](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L336)

___

### loadAllAndSubscribe

▸ **loadAllAndSubscribe**(): `Promise`<`void`\>

Loads all assets in the current project / branch
and subscribes to changes.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/assets.js:385](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L385)

## Accessors

### defaultUploadCompletedCallback

• `get` **defaultUploadCompletedCallback**(): `Function`

Gets the default callback called when on asset upload succeeds.

#### Returns

`Function`

#### Defined in

[src/assets.js:936](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L936)

• `set` **defaultUploadCompletedCallback**(`value`): `void`

Sets the default callback called when on asset upload succeeds.
The function takes 2 arguments: the upload id, and the new asset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Function` |

#### Returns

`void`

#### Defined in

[src/assets.js:946](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L946)

___

### defaultUploadProgressCallback

• `get` **defaultUploadProgressCallback**(): `Function`

Gets the default callback called when on asset upload progress.

#### Returns

`Function`

#### Defined in

[src/assets.js:955](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L955)

• `set` **defaultUploadProgressCallback**(`value`): `void`

Sets the default callback called when on asset upload progress.
The function takes 2 arguments: the upload id and the progress.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Function` |

#### Returns

`void`

#### Defined in

[src/assets.js:965](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L965)

___

### defaultUploadErrorCallback

• `get` **defaultUploadErrorCallback**(): `Function`

Gets the default callback called when on asset upload fails.

#### Returns

`Function`

#### Defined in

[src/assets.js:974](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L974)

• `set` **defaultUploadErrorCallback**(`value`): `void`

Sets the default callback called when on asset upload progress.
The function takes 2 arguments: the upload id, and the error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Function` |

#### Returns

`void`

#### Defined in

[src/assets.js:984](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L984)

___

### parseScriptCallback

• `get` **parseScriptCallback**(): `Function`

Gets the callback which parses script assets.

#### Returns

`Function`

#### Defined in

[src/assets.js:993](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L993)

• `set` **parseScriptCallback**(`value`): `void`

Sets the callback which parses script assets. When this
callback is set, new script assets will be parsed after they
are created. The function takes the asset as a parameter and returns
a promise with a list of script names when it is done parsing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Function` |

#### Returns

`void`

#### Defined in

[src/assets.js:1005](https://github.com/playcanvas/editor-api/blob/1e69a27/src/assets.js#L1005)
