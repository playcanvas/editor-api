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

[src/asset.js:247](https://github.com/playcanvas/editor-api/blob/28bcf74/src/asset.js#L247)

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

[src/asset.js:112](https://github.com/playcanvas/editor-api/blob/28bcf74/src/asset.js#L112)

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

[src/asset.js:122](https://github.com/playcanvas/editor-api/blob/28bcf74/src/asset.js#L122)

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

[src/asset.js:133](https://github.com/playcanvas/editor-api/blob/28bcf74/src/asset.js#L133)

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

[src/asset.js:143](https://github.com/playcanvas/editor-api/blob/28bcf74/src/asset.js#L143)

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

[src/asset.js:155](https://github.com/playcanvas/editor-api/blob/28bcf74/src/asset.js#L155)

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

[src/asset.js:166](https://github.com/playcanvas/editor-api/blob/28bcf74/src/asset.js#L166)

___

### json

▸ **json**(): `any`

Returns JSON representation of entity data

#### Returns

`any`

- The data

#### Defined in

[src/asset.js:175](https://github.com/playcanvas/editor-api/blob/28bcf74/src/asset.js#L175)

___

### latest

▸ **latest**(): [`Asset`](Asset.md)

Returns the latest version of the Asset from the Assets API.

#### Returns

[`Asset`](Asset.md)

The asset

#### Defined in

[src/asset.js:184](https://github.com/playcanvas/editor-api/blob/28bcf74/src/asset.js#L184)

___

### loadAndSubscribe

▸ **loadAndSubscribe**(): `Promise`<`any`\>

Loads the asset's data from sharedb and subscribes to changes

#### Returns

`Promise`<`any`\>

#### Defined in

[src/asset.js:191](https://github.com/playcanvas/editor-api/blob/28bcf74/src/asset.js#L191)

## Constructors

### constructor

• **new Asset**(`assetsApi`, `data?`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetsApi` | [`Assets`](Assets.md) | The asset api |
| `data` | `any` | The asset data |

#### Overrides

Events.constructor

#### Defined in

[src/asset.js:16](https://github.com/playcanvas/editor-api/blob/28bcf74/src/asset.js#L16)

## Accessors

### history

• `get` **history**(): `any`

Gets observer history for this assset

#### Returns

`any`

#### Defined in

[src/asset.js:236](https://github.com/playcanvas/editor-api/blob/28bcf74/src/asset.js#L236)
