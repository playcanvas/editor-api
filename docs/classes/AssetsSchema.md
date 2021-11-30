[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / AssetsSchema

# Class: AssetsSchema

Provides methods to access the Assets schema

## Table of contents

### Internal Constructors

- [constructor](AssetsSchema.md#constructor)

### Methods

- [getDefaultData](AssetsSchema.md#getdefaultdata)
- [getFieldsOfType](AssetsSchema.md#getfieldsoftype)

## Internal Constructors

### constructor

• **new AssetsSchema**(`schema`)

**`category`** Internal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | [`Schema`](Schema.md) | The schema API |

#### Defined in

[src/schema/assets.js:14](https://github.com/playcanvas/editor-api/blob/1e69a27/src/schema/assets.js#L14)

## Methods

### getDefaultData

▸ **getDefaultData**(`type`): `any`

Gets default data for asset type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The asset type |

#### Returns

`any`

The default data

#### Defined in

[src/schema/assets.js:25](https://github.com/playcanvas/editor-api/blob/1e69a27/src/schema/assets.js#L25)

___

### getFieldsOfType

▸ **getFieldsOfType**(`assetType`, `type`): `string`[]

Gets a list of fields of a particular type for an asset type

**`example`**
```javascript
const materialAssetPaths = editor.schema.assets.getFieldsOfType('material', 'asset');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetType` | `string` | The type of the asset. |
| `type` | `string` | The desired type |

#### Returns

`string`[]

A list of fields

#### Defined in

[src/schema/assets.js:55](https://github.com/playcanvas/editor-api/blob/1e69a27/src/schema/assets.js#L55)
