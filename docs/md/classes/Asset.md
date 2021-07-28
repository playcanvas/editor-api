[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Asset

# Class: Asset

Represents an Asset

## Table of contents

### Constructors

- [constructor](Asset.md#constructor)

### Accessors

- [history](Asset.md#history)

### Methods

- [get](Asset.md#get)
- [has](Asset.md#has)
- [insert](Asset.md#insert)
- [json](Asset.md#json)
- [latest](Asset.md#latest)
- [removeValue](Asset.md#removevalue)
- [set](Asset.md#set)
- [unset](Asset.md#unset)
- [getFileUrl](Asset.md#getfileurl)

## Constructors

### constructor

• **new Asset**(`assetsApi`, `data`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetsApi` | [`Assets`](Assets.md) | The asset api |
| `data` | `any` | The asset data |

#### Defined in

[src/asset.js:15](https://github.com/playcanvas/editor-api/blob/08f5d47/src/asset.js#L15)

## Accessors

### history

• `get` **history**(): `any`

Gets observer history for this assset

#### Returns

`any`

#### Defined in

[src/asset.js:182](https://github.com/playcanvas/editor-api/blob/08f5d47/src/asset.js#L182)

## Methods

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

[src/asset.js:111](https://github.com/playcanvas/editor-api/blob/08f5d47/src/asset.js#L111)

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

[src/asset.js:101](https://github.com/playcanvas/editor-api/blob/08f5d47/src/asset.js#L101)

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

[src/asset.js:144](https://github.com/playcanvas/editor-api/blob/08f5d47/src/asset.js#L144)

___

### json

▸ **json**(): `any`

Returns JSON representation of entity data

#### Returns

`any`

- The data

#### Defined in

[src/asset.js:164](https://github.com/playcanvas/editor-api/blob/08f5d47/src/asset.js#L164)

___

### latest

▸ **latest**(): [`Asset`](Asset.md)

Returns the latest version of the Asset from the Assets API.

#### Returns

[`Asset`](Asset.md)

The asset

#### Defined in

[src/asset.js:173](https://github.com/playcanvas/editor-api/blob/08f5d47/src/asset.js#L173)

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

[src/asset.js:155](https://github.com/playcanvas/editor-api/blob/08f5d47/src/asset.js#L155)

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

[src/asset.js:122](https://github.com/playcanvas/editor-api/blob/08f5d47/src/asset.js#L122)

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

[src/asset.js:132](https://github.com/playcanvas/editor-api/blob/08f5d47/src/asset.js#L132)

___

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

[src/asset.js:193](https://github.com/playcanvas/editor-api/blob/08f5d47/src/asset.js#L193)
