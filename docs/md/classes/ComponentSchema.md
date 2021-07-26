[PlayCanvas Editor API](../docs/md/README.md) / [Exports](../modules.md) / ComponentSchema

# Class: ComponentSchema

Provides methods to access the components schema

## Table of contents

### Constructors

- [constructor](ComponentSchema.md#constructor)

### Methods

- [getDefaultData](ComponentSchema.md#getdefaultdata)
- [getFieldsOfType](ComponentSchema.md#getfieldsoftype)

## Constructors

### constructor

• **new ComponentSchema**(`schema`)

Creates new instance of API

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | [`Schema`](Schema.md) | The schema API |

#### Defined in

[src/schema/components.js:14](https://github.com/playcanvas/editor-api/blob/81ce39f/src/schema/components.js#L14)

## Methods

### getDefaultData

▸ **getDefaultData**(`component`): `any`

Gets default data for a component

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `component` | `string` | The component name |

#### Returns

`any`

The default data

#### Defined in

[src/schema/components.js:37](https://github.com/playcanvas/editor-api/blob/81ce39f/src/schema/components.js#L37)

___

### getFieldsOfType

▸ **getFieldsOfType**(`componentName`, `type`): `string`[]

Gets a list of fields of a particular type for a component

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `componentName` | `string` | The component name |
| `type` | `string` | The desired type |

#### Returns

`string`[]

A list of fields

#### Defined in

[src/schema/components.js:59](https://github.com/playcanvas/editor-api/blob/81ce39f/src/schema/components.js#L59)
