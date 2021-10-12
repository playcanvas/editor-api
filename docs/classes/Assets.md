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

[src/assets.js:61](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L61)

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

[src/assets.js:153](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L153)

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

[src/assets.js:164](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L164)

___

### list

▸ **list**(): [`Asset`](Asset.md)[]

Returns array of all assets

#### Returns

[`Asset`](Asset.md)[]

The assets

#### Defined in

[src/assets.js:174](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L174)

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

[src/assets.js:185](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L185)

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

[src/assets.js:312](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L312)

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

[src/assets.js:324](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L324)

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

[src/assets.js:441](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L441)

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

[src/assets.js:505](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L505)

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

[src/assets.js:526](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L526)

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

[src/assets.js:549](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L549)

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

[src/assets.js:575](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L575)

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

[src/assets.js:605](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L605)

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

[src/assets.js:624](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L624)

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

[src/assets.js:646](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L646)

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

[src/assets.js:668](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L668)

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

[src/assets.js:701](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L701)

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

[src/assets.js:733](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L733)

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

[src/assets.js:779](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L779)

___

### createSprite

▸ **createSprite**(`options?`): `Promise`<[`Asset`](Asset.md)\>

Creates new sprite asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | = Options |
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

[src/assets.js:804](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L804)

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

[src/assets.js:831](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L831)

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

[src/assets.js:854](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L854)

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

[src/assets.js:880](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L880)

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

[src/assets.js:219](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L219)

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

[src/assets.js:271](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L271)

___

### clear

▸ **clear**(): `void`

Removes all assets from the list

#### Returns

`void`

#### Defined in

[src/assets.js:292](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L292)

___

### loadAll

▸ **loadAll**(): `Promise`<`void`\>

Loads all assets in the current project / branch. Does not
subscribe to realtime changes.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/assets.js:335](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L335)

___

### loadAllAndSubscribe

▸ **loadAllAndSubscribe**(): `Promise`<`void`\>

Loads all assets in the current project / branch
and subscribes to changes.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/assets.js:384](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L384)

## Accessors

### defaultUploadCompletedCallback

• `get` **defaultUploadCompletedCallback**(): `Function`

Gets the default callback called when on asset upload succeeds.

#### Returns

`Function`

#### Defined in

[src/assets.js:904](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L904)

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

[src/assets.js:914](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L914)

___

### defaultUploadProgressCallback

• `get` **defaultUploadProgressCallback**(): `Function`

Gets the default callback called when on asset upload progress.

#### Returns

`Function`

#### Defined in

[src/assets.js:923](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L923)

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

[src/assets.js:933](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L933)

___

### defaultUploadErrorCallback

• `get` **defaultUploadErrorCallback**(): `Function`

Gets the default callback called when on asset upload fails.

#### Returns

`Function`

#### Defined in

[src/assets.js:942](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L942)

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

[src/assets.js:952](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L952)

___

### parseScriptCallback

• `get` **parseScriptCallback**(): `Function`

Gets the callback which parses script assets.

#### Returns

`Function`

#### Defined in

[src/assets.js:961](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L961)

• `set` **parseScriptCallback**(`value`): `void`

Sets the callback which parses script assets. When this
callback is set, new script assets will be parsed after they
are created. The function takes the asset as a parameter and returns
a promise when it is done parsing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Function` |

#### Returns

`void`

#### Defined in

[src/assets.js:973](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/assets.js#L973)
