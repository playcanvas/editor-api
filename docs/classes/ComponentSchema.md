[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / ComponentSchema

# Class: ComponentSchema

Provides methods to access the components schema

## Table of contents

### Internal Constructors

- [constructor](ComponentSchema.md#constructor)

### Methods

- [getDefaultData](ComponentSchema.md#getdefaultdata)
- [getFieldsOfType](ComponentSchema.md#getfieldsoftype)
- [list](ComponentSchema.md#list)

## Internal Constructors

### constructor

• **new ComponentSchema**(`schema`)

Creates new instance of API

**`category`** Internal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | [`Schema`](Schema.md) | The schema API |

#### Defined in

[src/schema/components.js:15](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/schema/components.js#L15)

## Methods

### getDefaultData

▸ **getDefaultData**(`component`): `any`

Gets default data for a component

**`example`**
```javascript
const modelData = editor.schema.components.getDefaultData('model');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `component` | `string` | The component name |

#### Returns

`any`

The default data

#### Defined in

[src/schema/components.js:43](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/schema/components.js#L43)

___

### getFieldsOfType

▸ **getFieldsOfType**(`componentName`, `type`): `string`[]

Gets a list of fields of a particular type for a component

**`example`**
```javascript
const buttonEntityFields = editor.schema.components.getFieldsOfType('button', 'entity');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `componentName` | `string` | The component name |
| `type` | `string` | The desired type |

#### Returns

`string`[]

A list of fields

#### Defined in

[src/schema/components.js:69](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/schema/components.js#L69)

___

### list

▸ **list**(): `string`[]

Gets a list of all the available components

#### Returns

`string`[]

The components

#### Defined in

[src/schema/components.js:103](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/schema/components.js#L103)
