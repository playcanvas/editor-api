[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Asset

# Class: Asset

Represents an Asset. For a list of Asset properties see [here](AssetProperties.md).

## Hierarchy

- `Events`

  ↳ **`Asset`**

## Table of contents

### Methods

- [getFileUrl](Asset.md#getfileurl)
- [has](Asset.md#has)
- [get](Asset.md#get)
- [set](Asset.md#set)
- [unset](Asset.md#unset)
- [insert](Asset.md#insert)
- [removeValue](Asset.md#removevalue)
- [json](Asset.md#json)
- [latest](Asset.md#latest)
- [load](Asset.md#load)
- [loadAndSubscribe](Asset.md#loadandsubscribe)
- [delete](Asset.md#delete)
- [instantiateTemplate](Asset.md#instantiatetemplate)
- [replace](Asset.md#replace)

### Constructors

- [constructor](Asset.md#constructor)

### Accessors

- [history](Asset.md#history)

## Methods

### getFileUrl

▸ `Static` **getFileUrl**(`id`, `filename`): `string`

Gets the file URL for an asset file

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The asset id |
| `filename` | `string` | The desired filename |

#### Returns

`string`

The file URL

#### Defined in

[src/asset.js:307](https://github.com/playcanvas/editor-api/blob/1e69a27/src/asset.js#L307)

___

### has

▸ **has**(`path`): `boolean`

Checks if path exists. For a list of Asset properties see [here](AssetProperties.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |

#### Returns

`boolean`

True if path exists

#### Defined in

[src/asset.js:111](https://github.com/playcanvas/editor-api/blob/1e69a27/src/asset.js#L111)

___

### get

▸ **get**(`path`): `any`

Gets value at path. For a list of Asset properties see [here](AssetProperties.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |

#### Returns

`any`

The value

#### Defined in

[src/asset.js:121](https://github.com/playcanvas/editor-api/blob/1e69a27/src/asset.js#L121)

___

### set

▸ **set**(`path`, `value`): `boolean`

Sets value at path. For a list of Asset properties see [here](AssetProperties.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |
| `value` | `any` | The value |

#### Returns

`boolean`

Whether the value was set

#### Defined in

[src/asset.js:132](https://github.com/playcanvas/editor-api/blob/1e69a27/src/asset.js#L132)

___

### unset

▸ **unset**(`path`): `boolean`

Unsets value at path. For a list of Asset properties see [here](AssetProperties.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |

#### Returns

`boolean`

Whether the value was unset

#### Defined in

[src/asset.js:142](https://github.com/playcanvas/editor-api/blob/1e69a27/src/asset.js#L142)

___

### insert

▸ **insert**(`path`, `value`, `index`): `boolean`

Inserts value in array at path, at specified index. For a list of Asset properties see [here](AssetProperties.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |
| `value` | `any` | The value |
| `index` | `number` | The index (if undefined the value will be inserted in the end) |

#### Returns

`boolean`

Whether the value was inserted

#### Defined in

[src/asset.js:154](https://github.com/playcanvas/editor-api/blob/1e69a27/src/asset.js#L154)

___

### removeValue

▸ **removeValue**(`path`, `value`): `boolean`

Remove value from array at path. For a list of Asset properties see [here](AssetProperties.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |
| `value` | `any` | The value |

#### Returns

`boolean`

Whether the value was removed

#### Defined in

[src/asset.js:165](https://github.com/playcanvas/editor-api/blob/1e69a27/src/asset.js#L165)

___

### json

▸ **json**(): `any`

Returns JSON representation of entity data

#### Returns

`any`

- The data

#### Defined in

[src/asset.js:174](https://github.com/playcanvas/editor-api/blob/1e69a27/src/asset.js#L174)

___

### latest

▸ **latest**(): [`Asset`](Asset.md)

Returns the latest version of the Asset from the Assets API.

#### Returns

[`Asset`](Asset.md)

The asset

#### Defined in

[src/asset.js:183](https://github.com/playcanvas/editor-api/blob/1e69a27/src/asset.js#L183)

___

### load

▸ **load**(): `Promise`<`void`\>

Loads asset from the server without subscribing to realtime changes.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/asset.js:190](https://github.com/playcanvas/editor-api/blob/1e69a27/src/asset.js#L190)

___

### loadAndSubscribe

▸ **loadAndSubscribe**(): `Promise`<`void`\>

Loads the asset's data from sharedb and subscribes to changes

#### Returns

`Promise`<`void`\>

#### Defined in

[src/asset.js:215](https://github.com/playcanvas/editor-api/blob/1e69a27/src/asset.js#L215)

___

### delete

▸ **delete**(): `Promise`<`void`\>

Deletes this asset

#### Returns

`Promise`<`void`\>

#### Defined in

[src/asset.js:258](https://github.com/playcanvas/editor-api/blob/1e69a27/src/asset.js#L258)

___

### instantiateTemplate

▸ **instantiateTemplate**(`parent`, `options`): `Promise`<[`Entity`](Entity.md)\>

Creates an instance of this template asset. Assumes this
asset is a template asset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | [`Entity`](Entity.md) | The parent entity |
| `options` | `Object` | Options |
| `options.index` | `number` | The desired index under the parent to instantiate the template. |
| `options.history` | `boolean` | Whether to record a history action. |
| `options.select` | `boolean` | Whether to select the new entity. |
| `options.extraData` | `any` | Extra data passed to the backend. Used by the Editor on specific cases. |

#### Returns

`Promise`<[`Entity`](Entity.md)\>

The new entity.

#### Defined in

[src/asset.js:274](https://github.com/playcanvas/editor-api/blob/1e69a27/src/asset.js#L274)

___

### replace

▸ **replace**(`asset`, `options?`): `void`

Replaces any references to this asset with
references to the new asset specified.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asset` | [`Asset`](Asset.md) | The new asset. |
| `options` | `Object` | Options. |
| `options.history` | `boolean` | Whether to record a history action. |

#### Returns

`void`

#### Defined in

[src/asset.js:287](https://github.com/playcanvas/editor-api/blob/1e69a27/src/asset.js#L287)

## Constructors

### constructor

• **new Asset**(`data?`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | The asset data |

#### Overrides

Events.constructor

#### Defined in

[src/asset.js:16](https://github.com/playcanvas/editor-api/blob/1e69a27/src/asset.js#L16)

## Accessors

### history

• `get` **history**(): `any`

Gets observer history for this assset

#### Returns

`any`

#### Defined in

[src/asset.js:296](https://github.com/playcanvas/editor-api/blob/1e69a27/src/asset.js#L296)
