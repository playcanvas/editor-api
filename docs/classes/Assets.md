[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Assets

# Class: Assets

The Assets Editor API

## Hierarchy

- `Events`

  ↳ **`Assets`**

## Table of contents

### Constructors

- [constructor](Assets.md#constructor)

### Methods

- [get](Assets.md#get)
- [getUnique](Assets.md#getunique)
- [list](Assets.md#list)
- [listByTag](Assets.md#listbytag)
- [add](Assets.md#add)
- [remove](Assets.md#remove)
- [clear](Assets.md#clear)
- [filter](Assets.md#filter)
- [findOne](Assets.md#findone)
- [loadAllAndSubscribe](Assets.md#loadallandsubscribe)
- [getAssetForScript](Assets.md#getassetforscript)

## Constructors

### constructor

• **new Assets**()

Constructor

#### Overrides

Events.constructor

#### Defined in

[src/assets.js:12](https://github.com/playcanvas/editor-api/blob/28bcf74/src/assets.js#L12)

## Methods

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

[src/assets.js:39](https://github.com/playcanvas/editor-api/blob/28bcf74/src/assets.js#L39)

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

[src/assets.js:50](https://github.com/playcanvas/editor-api/blob/28bcf74/src/assets.js#L50)

___

### list

▸ **list**(): `any`[][]

Returns array of all assets

#### Returns

`any`[][]

The assets

#### Defined in

[src/assets.js:60](https://github.com/playcanvas/editor-api/blob/28bcf74/src/assets.js#L60)

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

[src/assets.js:71](https://github.com/playcanvas/editor-api/blob/28bcf74/src/assets.js#L71)

___

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

[src/assets.js:104](https://github.com/playcanvas/editor-api/blob/28bcf74/src/assets.js#L104)

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

[src/assets.js:155](https://github.com/playcanvas/editor-api/blob/28bcf74/src/assets.js#L155)

___

### clear

▸ **clear**(): `void`

Removes all assets from the list

#### Returns

`void`

#### Defined in

[src/assets.js:174](https://github.com/playcanvas/editor-api/blob/28bcf74/src/assets.js#L174)

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

[src/assets.js:194](https://github.com/playcanvas/editor-api/blob/28bcf74/src/assets.js#L194)

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

[src/assets.js:206](https://github.com/playcanvas/editor-api/blob/28bcf74/src/assets.js#L206)

___

### loadAllAndSubscribe

▸ **loadAllAndSubscribe**(): `Promise`<`void`\>

Loads all assets in the current project / branch
and subscribes to changes

#### Returns

`Promise`<`void`\>

#### Defined in

[src/assets.js:215](https://github.com/playcanvas/editor-api/blob/28bcf74/src/assets.js#L215)

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

[src/assets.js:272](https://github.com/playcanvas/editor-api/blob/28bcf74/src/assets.js#L272)
