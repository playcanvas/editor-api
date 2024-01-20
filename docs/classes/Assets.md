[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Assets

# Class: Assets

The Assets Editor API

## Hierarchy

- `Events`

  ↳ **`Assets`**

## Table of contents

### Constructors

- [constructor](Assets.md#constructor)

### Properties

- [suspendEvents](Assets.md#suspendevents)

### Accessors

- [defaultUploadCompletedCallback](Assets.md#defaultuploadcompletedcallback)
- [defaultUploadProgressCallback](Assets.md#defaultuploadprogresscallback)
- [defaultUploadErrorCallback](Assets.md#defaultuploaderrorcallback)
- [parseScriptCallback](Assets.md#parsescriptcallback)

### Methods

- [on](Assets.md#on)
- [once](Assets.md#once)
- [emit](Assets.md#emit)
- [unbind](Assets.md#unbind)
- [addEmitter](Assets.md#addemitter)
- [removeEmitter](Assets.md#removeemitter)
- [get](Assets.md#get)
- [getUnique](Assets.md#getunique)
- [list](Assets.md#list)
- [listByTag](Assets.md#listbytag)
- [add](Assets.md#add)
- [remove](Assets.md#remove)
- [clear](Assets.md#clear)
- [filter](Assets.md#filter)
- [findOne](Assets.md#findone)
- [loadAll](Assets.md#loadall)
- [loadAllAndSubscribe](Assets.md#loadallandsubscribe)
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

## Public

### suspendEvents

• **suspendEvents**: `boolean`

If true the observer will not emit events when values are set.

#### Inherited from

Events.suspendEvents

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:37

___

### on

▸ **on**(`name`, `fn`): `EventHandle`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name |
| `fn` | `HandleEvent` | Callback function |

#### Returns

`EventHandle`

EventHandle

#### Inherited from

Events.on

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:43

___

### once

▸ **once**(`name`, `fn`): `EventHandle`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name |
| `fn` | `HandleEvent` | Callback function |

#### Returns

`EventHandle`

EventHandle

#### Inherited from

Events.once

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:49

___

### emit

▸ **emit**(`name`, `arg0?`, `arg1?`, `arg2?`, `arg3?`, `arg4?`, `arg5?`, `arg6?`, `arg7?`): `Events`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name |
| `arg0?` | `any` | First argument |
| `arg1?` | `any` | Second argument |
| `arg2?` | `any` | Third argument |
| `arg3?` | `any` | Fourth argument |
| `arg4?` | `any` | Fifth argument |
| `arg5?` | `any` | Sixth argument |
| `arg6?` | `any` | Seventh argument |
| `arg7?` | `any` | Eights argument |

#### Returns

`Events`

Self for chaining.

#### Inherited from

Events.emit

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:62

___

### unbind

▸ **unbind**(`name`, `fn`): `Events`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name |
| `fn` | `HandleEvent` | Callback function |

#### Returns

`Events`

- This

#### Inherited from

Events.unbind

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:68

___

### addEmitter

▸ **addEmitter**(`emitter`): `void`

Adds another emitter. Any events fired by this instance
will also be fired on the additional emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `Events` | The emitter |

#### Returns

`void`

#### Inherited from

Events.addEmitter

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:74

___

### removeEmitter

▸ **removeEmitter**(`emitter`): `void`

Removes emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `Events` | The emitter |

#### Returns

`void`

#### Inherited from

Events.removeEmitter

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:79

___

### constructor

• **new Assets**(`options?`): [`Assets`](Assets.md)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.autoSubscribe` | `boolean` | Whether to auto subscribe to asset changes when assets are loaded. |

#### Returns

[`Assets`](Assets.md)

#### Overrides

Events.constructor

#### Defined in

[src/assets.js:62](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L62)

___

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

[src/assets.js:154](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L154)

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

[src/assets.js:165](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L165)

___

### list

▸ **list**(): [`Asset`](Asset.md)[]

Returns array of all assets

#### Returns

[`Asset`](Asset.md)[]

The assets

#### Defined in

[src/assets.js:175](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L175)

___

### listByTag

▸ **listByTag**(`...tags`): [`Asset`](Asset.md)[]

Finds all assets with specified tags

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...tags` | `any`[] | The tags. If multiple tags are specified then assets that contain ANY of the specified tags will be included. If an argument is an array of tags then assets that contain ALL of the tags in the array will be included. |

#### Returns

[`Asset`](Asset.md)[]

The assets

#### Defined in

[src/assets.js:186](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L186)

___

### filter

▸ **filter**(`fn`): [`Asset`](Asset.md)[]

Gets assets that satisfy function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | The function (takes an asset as an argument and returns boolean). |

#### Returns

[`Asset`](Asset.md)[]

The assets

#### Defined in

[src/assets.js:313](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L313)

___

### findOne

▸ **findOne**(`fn`): [`Asset`](Asset.md)

Finds first asset that satisfies function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | A function that takes an asset as an argument and returns boolean. |

#### Returns

[`Asset`](Asset.md)

The asset

#### Defined in

[src/assets.js:325](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L325)

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

[src/assets.js:450](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L450)

___

### createAnimStateGraph

▸ **createAnimStateGraph**(`options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

Creates new anim state graph asset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.data` | `any` | The asset data. See [here](AssetProperties.md) for Animstategraph data. |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.onProgress` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | Function to report progress |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:514](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L514)

___

### createBundle

▸ **createBundle**(`options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

Creates new bundle asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.assets` | [`Asset`](Asset.md)[] | The assets that the bundle will contain |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | Function to report progress |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:535](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L535)

___

### createCss

▸ **createCss**(`options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

Creates new CSS asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.text` | `string` | The CSS |
| `options.folder` | `string` | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | Function to report progress |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:558](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L558)

___

### createCubemap

▸ **createCubemap**(`options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

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
| `options.onProgress` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | Function to report progress |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:584](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L584)

___

### createFolder

▸ **createFolder**(`options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

Creates a new folder asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.onProgress` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | Function to report progress |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:614](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L614)

___

### createHtml

▸ **createHtml**(`options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

Creates new HTML asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.text` | `string` | The HTML |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | Function to report progress |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:633](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L633)

___

### createJson

▸ **createJson**(`options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

Creates new JSON asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.json` | `any` | The JSON |
| `options.spaces` | `number` | The number of spaces used for indentation. Defaults to 0 (tightly packed output). |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | Function to report progress |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:657](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L657)

___

### createI18n

▸ **createI18n**(`options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

Creates new localization JSON asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options |
| `options.name` | `string` | The asset name |
| `options.localizationData` | `any` | The localization data. If null then default data will be used. |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | Function to report progress |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:682](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L682)

___

### createMaterial

▸ **createMaterial**(`options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

Creates new material asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.data` | `any` | The material data. Default values will be used for missing fields. See [here](AssetProperties.md) for material data. |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | Function to report progress |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:716](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L716)

___

### createScript

▸ **createScript**(`options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

Creates new script asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.filename` | `string` | The filename of the script. This will also be the name of the script asset. If not defined it will be generated from the name of the script. |
| `options.text` | `string` | The contents of the script. If none then boilerplate code will be used. |
| `options.data` | `any` | The script data. See [here](AssetProperties.md) for Script data. |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | Function to report progress |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:748](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L748)

___

### createShader

▸ **createShader**(`options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

Creates new shader asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.text` | `string` | The GLSL |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | Function to report progress |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:808](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L808)

___

### createSprite

▸ **createSprite**(`options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

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
| `options.onProgress` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | Function to report progress |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:833](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L833)

___

### createText

▸ **createText**(`options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

Creates new text asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.text` | `string` | The text |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | Function to report progress |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:860](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L860)

___

### createTemplate

▸ **createTemplate**(`options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

Creates new template asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.name` | `string` | The asset name |
| `options.entity` | [`Entity`](Entity.md) | The entity to create the template from |
| `options.folder` | [`Asset`](Asset.md) | The parent folder asset |
| `options.preload` | `boolean` | Whether to preload the asset. Defaults to true. |
| `options.onProgress` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | Function to report progress |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:883](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L883)

___

### delete

▸ **delete**(`assets`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

Deletes specified assets

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assets` | [`Asset`](Asset.md)[] | The assets |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Defined in

[src/assets.js:909](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L909)

___

### instantiateTemplates

▸ **instantiateTemplates**(`assets`, `parent`, `options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Entity`](Entity.md)[]\>

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

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Entity`](Entity.md)[]\>

The new entities

#### Defined in

[src/assets.js:941](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L941)

___

### defaultUploadCompletedCallback

• `get` **defaultUploadCompletedCallback**(): [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function )

Gets the default callback called when on asset upload succeeds.

#### Returns

[`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function )

#### Defined in

[src/assets.js:960](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L960)

• `set` **defaultUploadCompletedCallback**(`value`): `void`

Sets the default callback called when on asset upload succeeds.
The function takes 2 arguments: the upload id, and the new asset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) |

#### Returns

`void`

#### Defined in

[src/assets.js:951](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L951)

___

### defaultUploadProgressCallback

• `get` **defaultUploadProgressCallback**(): [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function )

Gets the default callback called when on asset upload progress.

#### Returns

[`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function )

#### Defined in

[src/assets.js:979](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L979)

• `set` **defaultUploadProgressCallback**(`value`): `void`

Sets the default callback called when on asset upload progress.
The function takes 2 arguments: the upload id and the progress.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) |

#### Returns

`void`

#### Defined in

[src/assets.js:970](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L970)

___

### defaultUploadErrorCallback

• `get` **defaultUploadErrorCallback**(): [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function )

Gets the default callback called when on asset upload fails.

#### Returns

[`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function )

#### Defined in

[src/assets.js:998](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L998)

• `set` **defaultUploadErrorCallback**(`value`): `void`

Sets the default callback called when on asset upload progress.
The function takes 2 arguments: the upload id, and the error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) |

#### Returns

`void`

#### Defined in

[src/assets.js:989](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L989)

___

### parseScriptCallback

• `get` **parseScriptCallback**(): [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function )

Gets the callback which parses script assets.

#### Returns

[`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function )

#### Defined in

[src/assets.js:1019](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L1019)

• `set` **parseScriptCallback**(`value`): `void`

Sets the callback which parses script assets. When this
callback is set, new script assets will be parsed after they
are created. The function takes the asset as a parameter and returns
a promise with a list of script names when it is done parsing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) |

#### Returns

`void`

#### Defined in

[src/assets.js:1010](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L1010)

## Internal

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

[src/assets.js:220](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L220)

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

[src/assets.js:272](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L272)

___

### clear

▸ **clear**(): `void`

Removes all assets from the list

#### Returns

`void`

#### Defined in

[src/assets.js:293](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L293)

___

### loadAll

▸ **loadAll**(`options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

Loads all assets in the current project / branch. Does not
subscribe to realtime changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.view` | `string` | The desired view for the REST API e.g 'designer', 'shader-editor'. This might limit the assets returned to a smaller subset depending on the view. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Defined in

[src/assets.js:339](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L339)

___

### loadAllAndSubscribe

▸ **loadAllAndSubscribe**(`options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

Loads all assets in the current project / branch
and subscribes to changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.view` | `string` | The desired view for the REST API e.g 'designer', 'shader-editor'. This might limit the assets returned to a smaller subset depending on the view. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Defined in

[src/assets.js:392](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/assets.js#L392)
