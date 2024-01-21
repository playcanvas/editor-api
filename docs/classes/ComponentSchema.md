[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / ComponentSchema

# Class: ComponentSchema

Provides methods to access the components schema

## Table of contents

### Constructors

- [constructor](ComponentSchema.md#constructor)

### Methods

- [getDefaultData](ComponentSchema.md#getdefaultdata)
- [getFieldsOfType](ComponentSchema.md#getfieldsoftype)
- [list](ComponentSchema.md#list)

## Public

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

**`Example`**

```javascript
const modelData = editor.schema.components.getDefaultData('model');
```

#### Defined in

[src/schema/components.js:43](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/schema/components.js#L43)

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

**`Example`**

```javascript
const buttonEntityFields = editor.schema.components.getFieldsOfType('button', 'entity');
```

#### Defined in

[src/schema/components.js:69](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/schema/components.js#L69)

___

### list

▸ **list**(): `string`[]

Gets a list of all the available components

#### Returns

`string`[]

The components

#### Defined in

[src/schema/components.js:103](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/schema/components.js#L103)

## Internal

### constructor

• **new ComponentSchema**(`schema`): [`ComponentSchema`](ComponentSchema.md)

Creates new instance of API

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | [`Schema`](Schema.md) | The schema API |

#### Returns

[`ComponentSchema`](ComponentSchema.md)

#### Defined in

[src/schema/components.js:15](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/schema/components.js#L15)
