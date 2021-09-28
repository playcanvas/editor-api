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
- [loadAllAndSubscribe](Assets.md#loadallandsubscribe)

## Constructors

### constructor

• **new Assets**()

Constructor

#### Overrides

Events.constructor

#### Defined in

[src/assets.js:15](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L15)

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

[src/assets.js:42](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L42)

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

[src/assets.js:53](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L53)

___

### list

▸ **list**(): `any`[][]

Returns array of all assets

#### Returns

`any`[][]

The assets

#### Defined in

[src/assets.js:63](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L63)

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

[src/assets.js:74](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L74)

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

[src/assets.js:201](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L201)

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

[src/assets.js:213](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L213)

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

[src/assets.js:281](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L281)

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

[src/assets.js:320](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L320)

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

[src/assets.js:337](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L337)

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

[src/assets.js:356](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L356)

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

[src/assets.js:379](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L379)

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

[src/assets.js:408](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L408)

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

[src/assets.js:424](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L424)

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

[src/assets.js:442](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L442)

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

[src/assets.js:460](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L460)

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

[src/assets.js:485](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L485)

___

### createScript

▸ **createScript**(`name`, `filename`, `text?`, `folder?`): `Promise`<[`Asset`](Asset.md)\>

Creates new script asset

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name of the script. This will be the name of the class inside the script if boilerplate code is used. |
| `filename` | `string` | `undefined` | The filename of the script. This will also be the name of the script asset. If not defined it will be generated from the name of the script. |
| `text` | `string` | `null` | The contents of the script. If none then boilerplate code will be used. |
| `folder` | [`Asset`](Asset.md) | `null` | The parent folder asset |

#### Returns

`Promise`<[`Asset`](Asset.md)\>

The new asset

#### Defined in

[src/assets.js:513](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L513)

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

[src/assets.js:549](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L549)

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

[src/assets.js:571](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L571)

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

[src/assets.js:594](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L594)

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

[src/assets.js:613](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L613)

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

[src/assets.js:638](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L638)

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

[src/assets.js:108](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L108)

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

[src/assets.js:160](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L160)

___

### clear

▸ **clear**(): `void`

Removes all assets from the list

#### Returns

`void`

#### Defined in

[src/assets.js:181](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L181)

___

### loadAllAndSubscribe

▸ **loadAllAndSubscribe**(): `Promise`<`void`\>

Loads all assets in the current project / branch
and subscribes to changes

#### Returns

`Promise`<`void`\>

#### Defined in

[src/assets.js:224](https://github.com/playcanvas/editor-api/blob/548f133/src/assets.js#L224)
