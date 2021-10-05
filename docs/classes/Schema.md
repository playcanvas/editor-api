[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Schema

# Class: Schema

Provides methods to access the Editor schema.

## Table of contents

### Constructors

- [constructor](Schema.md#constructor)

### Accessors

- [components](Schema.md#components)
- [assets](Schema.md#assets)

### Internal Methods

- [getType](Schema.md#gettype)

## Constructors

### constructor

• **new Schema**(`schema`)

Creates new instance of API

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | `any` | The Editor schema object |

#### Defined in

[src/schema.js:13](https://github.com/playcanvas/editor-api/blob/cd796c6/src/schema.js#L13)

## Accessors

### components

• `get` **components**(): [`ComponentSchema`](ComponentSchema.md)

Gets the component schema

#### Returns

[`ComponentSchema`](ComponentSchema.md)

#### Defined in

[src/schema.js:24](https://github.com/playcanvas/editor-api/blob/cd796c6/src/schema.js#L24)

___

### assets

• `get` **assets**(): [`AssetsSchema`](AssetsSchema.md)

Gets the assets schema

#### Returns

[`AssetsSchema`](AssetsSchema.md)

#### Defined in

[src/schema.js:33](https://github.com/playcanvas/editor-api/blob/cd796c6/src/schema.js#L33)

## Internal Methods

### getType

▸ **getType**(`field`, `fixedLength`): `string`

Converts the specified schema field to a type recursively.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `field` | `any` | The schema object or field of a parent schema object. |
| `fixedLength` | `boolean` | Whether the specified schema field has a fixed length if it's an array type. |

#### Returns

`string`

The type

#### Defined in

[src/schema.js:45](https://github.com/playcanvas/editor-api/blob/cd796c6/src/schema.js#L45)
