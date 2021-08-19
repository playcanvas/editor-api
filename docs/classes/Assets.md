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
- [createShader](Assets.md#createshader)
- [createSprite](Assets.md#createsprite)
- [createText](Assets.md#createtext)
- [createTemplate](Assets.md#createtemplate)

### Internal Methods

- [add](Assets.md#add)
- [remove](Assets.md#remove)
- [clear](Assets.md#clear)
- [loadAllAndSubscribe](Assets.md#loadallandsubscribe)

## Constructors

### constructor

• **new Assets**()

Constructor

#### Overrides

Events.constructor

#### Defined in

[src/assets.js:14](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L14)

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

[src/assets.js:41](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L41)

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

[src/assets.js:52](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L52)

___

### list

▸ **list**(): `any`[][]

Returns array of all assets

#### Returns

`any`[][]

The assets

#### Defined in

[src/assets.js:62](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L62)

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

[src/assets.js:73](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L73)

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

[src/assets.js:200](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L200)

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

[src/assets.js:212](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L212)

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

[src/assets.js:280](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L280)

___

### createAnimStateGraph

▸ **createAnimStateGraph**(`name`, `data?`, `folder?`): `Promise`<[`Asset`](Asset.md)\>

Creates new anim state graph asset

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The asset name |
| `data` | `any` | `null` | The asset data |
| `folder` | [`Asset`](Asset.md) | `null` | The parent folder asset |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:328](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L328)

___

### createBundle

▸ **createBundle**(`name`, `assets?`, `folder?`): `Promise`<[`Asset`](Asset.md)\>

Creates new bundle asset

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The asset name |
| `assets` | [`Asset`](Asset.md)[] | `[]` | The assets that the bundle will contain |
| `folder` | [`Asset`](Asset.md) | `null` | The parent folder asset |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:345](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L345)

___

### createCss

▸ **createCss**(`name`, `text?`, `folder?`): `Promise`<[`Asset`](Asset.md)\>

Creates new CSS asset

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The asset name |
| `text` | `string` | `'\n'` | The CSS |
| `folder` | `string` | `null` | The parent folder asset |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:364](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L364)

___

### createCubemap

▸ **createCubemap**(`name`, `textures?`, `settings?`, `folder?`): `Promise`<[`Asset`](Asset.md)\>

Creates new cubemap asset

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The asset name |
| `textures` | [`Asset`](Asset.md)[] | `[]` | The textures for each cubemap face in this order: right, left, up, down, front, back |
| `settings` | `Object` | `null` | Cubemap settings |
| `settings.minFilter` | `number` | `undefined` | Cubemap minFilter value. Defaults to pc.FILTER_LINEAR_MIPMAP_LINEAR. |
| `settings.magFilter` | `number` | `undefined` | Cubemap magFilter value. Defaults to pc.FILTER_LINEAR. |
| `settings.anisotropy` | `number` | `undefined` | Cubemap anisotropy value. Defaults to 1. |
| `folder` | [`Asset`](Asset.md) | `null` | The parent folder asset |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:387](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L387)

___

### createFolder

▸ **createFolder**(`name`, `folder?`): `Promise`<[`Asset`](Asset.md)\>

Creates a new folder asset

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The asset name |
| `folder` | [`Asset`](Asset.md) | `null` | The parent folder asset |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:416](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L416)

___

### createHtml

▸ **createHtml**(`name`, `text?`, `folder?`): `Promise`<[`Asset`](Asset.md)\>

Creates new HTML asset

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The asset name |
| `text` | `string` | `'\n'` | The HTML |
| `folder` | [`Asset`](Asset.md) | `null` | The parent folder asset |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:432](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L432)

___

### createJson

▸ **createJson**(`name`, `json?`, `folder?`): `Promise`<[`Asset`](Asset.md)\>

Creates new JSON asset

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The asset name |
| `json` | `any` | `{}` | The JSON |
| `folder` | [`Asset`](Asset.md) | `null` | The parent folder asset |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:450](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L450)

___

### createI18n

▸ **createI18n**(`name`, `localizationData?`, `folder?`): `Promise`<[`Asset`](Asset.md)\>

Creates new localization JSON asset

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The asset name |
| `localizationData` | `any` | `null` | The localization data. If null then default data will be used. |
| `folder` | [`Asset`](Asset.md) | `null` | The parent folder asset |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:468](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L468)

___

### createMaterial

▸ **createMaterial**(`name`, `data?`, `folder?`): `Promise`<[`Asset`](Asset.md)\>

Creates new material asset

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The asset name |
| `data` | `any` | `null` | The material data. Default values will be used for missing fields. |
| `folder` | [`Asset`](Asset.md) | `null` | The parent folder asset |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:493](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L493)

___

### createShader

▸ **createShader**(`name`, `text?`, `folder?`): `Promise`<[`Asset`](Asset.md)\>

Creates new shader asset

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The asset name |
| `text` | `string` | `'\n'` | The GLSL |
| `folder` | [`Asset`](Asset.md) | `null` | The parent folder asset |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:519](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L519)

___

### createSprite

▸ **createSprite**(`name`, `data?`, `folder?`): `Promise`<[`Asset`](Asset.md)\>

Creates new sprite asset

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The asset name |
| `data` | `Object` | `{}` | The sprite data |
| `data.pixelsPerUnit` | `number` | `undefined` | The sprite's pixels per unit value. Defaults to 100. |
| `data.frameKeys` | `number`[] | `undefined` | The sprite's frame keys |
| `data.textureAtlas` | [`Asset`](Asset.md) | `undefined` | The sprite's texture atlas asset |
| `data.renderMode` | `number` | `undefined` | The sprite's render mode. Defaults to pc.SPRITE_RENDERMODE_SIMPLE. |
| `folder` | [`Asset`](Asset.md) | `null` | The parent folder asset |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:541](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L541)

___

### createText

▸ **createText**(`name`, `text?`, `folder?`): `Promise`<[`Asset`](Asset.md)\>

Creates new text asset

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The asset name |
| `text` | `string` | `'\n'` | The text |
| `folder` | [`Asset`](Asset.md) | `null` | The parent folder asset |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:564](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L564)

___

### createTemplate

▸ **createTemplate**(`name`, `entity`, `folder?`): `Promise`<[`Asset`](Asset.md)\>

Creates new template asset

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The asset name |
| `entity` | [`Entity`](Entity.md) | `undefined` | The entity to create the template from |
| `folder` | [`Asset`](Asset.md) | `null` | The parent folder asset |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:583](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L583)

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

[src/assets.js:107](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L107)

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

[src/assets.js:159](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L159)

___

### clear

▸ **clear**(): `void`

Removes all assets from the list

#### Returns

`void`

#### Defined in

[src/assets.js:180](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L180)

___

### loadAllAndSubscribe

▸ **loadAllAndSubscribe**(): `Promise`<`void`\>

Loads all assets in the current project / branch
and subscribes to changes

#### Returns

`Promise`<`void`\>

#### Defined in

[src/assets.js:223](https://github.com/playcanvas/editor-api/blob/daa97d2/src/assets.js#L223)
