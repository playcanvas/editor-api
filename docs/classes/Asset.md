[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Asset

# Class: Asset

Represents an Asset

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
- [loadAndSubscribe](Asset.md#loadandsubscribe)

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

[src/asset.js:249](https://github.com/playcanvas/editor-api/blob/f0df60d/src/asset.js#L249)

___

### has

▸ **has**(`path`): `boolean`

Checks if path exists

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |

#### Returns

`boolean`

True if path exists

#### Defined in

[src/asset.js:110](https://github.com/playcanvas/editor-api/blob/f0df60d/src/asset.js#L110)

___

### get

▸ **get**(`path`): `any`

Gets value at path

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |

#### Returns

`any`

The value

#### Defined in

[src/asset.js:120](https://github.com/playcanvas/editor-api/blob/f0df60d/src/asset.js#L120)

___

### set

▸ **set**(`path`, `value`): `boolean`

Sets value at path

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |
| `value` | `any` | The value |

#### Returns

`boolean`

Whether the value was set

#### Defined in

[src/asset.js:131](https://github.com/playcanvas/editor-api/blob/f0df60d/src/asset.js#L131)

___

### unset

▸ **unset**(`path`): `boolean`

Unsets value at path

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |

#### Returns

`boolean`

Whether the value was unset

#### Defined in

[src/asset.js:141](https://github.com/playcanvas/editor-api/blob/f0df60d/src/asset.js#L141)

___

### insert

▸ **insert**(`path`, `value`, `index`): `boolean`

Inserts value in array at path, at specified index

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

[src/asset.js:153](https://github.com/playcanvas/editor-api/blob/f0df60d/src/asset.js#L153)

___

### removeValue

▸ **removeValue**(`path`, `value`): `boolean`

Remove value from array at path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |
| `value` | `any` | The value |

#### Returns

`boolean`

Whether the value was removed

#### Defined in

[src/asset.js:164](https://github.com/playcanvas/editor-api/blob/f0df60d/src/asset.js#L164)

___

### json

▸ **json**(): `any`

Returns JSON representation of entity data

#### Returns

`any`

- The data

#### Defined in

[src/asset.js:173](https://github.com/playcanvas/editor-api/blob/f0df60d/src/asset.js#L173)

___

### latest

▸ **latest**(): [`Asset`](Asset.md)

Returns the latest version of the Asset from the Assets API.

#### Returns

[`Asset`](Asset.md)

The asset

#### Defined in

[src/asset.js:182](https://github.com/playcanvas/editor-api/blob/f0df60d/src/asset.js#L182)

___

### loadAndSubscribe

▸ **loadAndSubscribe**(): `Promise`<`void`\>

Loads the asset's data from sharedb and subscribes to changes

#### Returns

`Promise`<`void`\>

#### Defined in

[src/asset.js:189](https://github.com/playcanvas/editor-api/blob/f0df60d/src/asset.js#L189)

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

[src/asset.js:15](https://github.com/playcanvas/editor-api/blob/f0df60d/src/asset.js#L15)

## Accessors

### history

• `get` **history**(): `any`

Gets observer history for this assset

#### Returns

`any`

#### Defined in

[src/asset.js:238](https://github.com/playcanvas/editor-api/blob/f0df60d/src/asset.js#L238)
