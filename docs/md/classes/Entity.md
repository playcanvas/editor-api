[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Entity

# Class: Entity

Represents an Entity

## Table of contents

### Constructors

- [constructor](Entity.md#constructor)

### Methods

- [addChild](Entity.md#addchild)
- [addComponent](Entity.md#addcomponent)
- [delete](Entity.md#delete)
- [depthFirst](Entity.md#depthfirst)
- [duplicate](Entity.md#duplicate)
- [filter](Entity.md#filter)
- [findByName](Entity.md#findbyname)
- [get](Entity.md#get)
- [has](Entity.md#has)
- [insert](Entity.md#insert)
- [insertChild](Entity.md#insertchild)
- [isDescendantOf](Entity.md#isdescendantof)
- [json](Entity.md#json)
- [latest](Entity.md#latest)
- [listByTag](Entity.md#listbytag)
- [removeChild](Entity.md#removechild)
- [removeComponent](Entity.md#removecomponent)
- [removeValue](Entity.md#removevalue)
- [reparent](Entity.md#reparent)
- [set](Entity.md#set)
- [unset](Entity.md#unset)

## Constructors

### constructor

• **new Entity**(`entitiesApi`, `data?`)

Creates new Entity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entitiesApi` | [`Entities`](Entities.md) | The Entities API |
| `data` | `any` | - |

#### Defined in

[src/entity.js:15](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L15)

## Methods

### addChild

▸ **addChild**(`entity`): `boolean`

Adds entity as a child

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [`Entity`](Entity.md) | The entity |

#### Returns

`boolean`

Whether the child was added

#### Defined in

[src/entity.js:279](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L279)

___

### addComponent

▸ **addComponent**(`component`, `data`): `void`

Adds a component to this Entity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `component` | `string` | The component name |
| `data` | `any` | - |

#### Returns

`void`

#### Defined in

[src/entity.js:258](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L258)

___

### delete

▸ **delete**(`options?`): `void`

Deletes entity (and its children)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.history` | `boolean` |

#### Returns

`void`

#### Defined in

[src/entity.js:331](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L331)

___

### depthFirst

▸ **depthFirst**(`fn`): `void`

Executes function for this entity and its children
in depth first order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Function` | A function that takes an entity as an argument |

#### Returns

`void`

#### Defined in

[src/entity.js:243](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L243)

___

### duplicate

▸ **duplicate**(`options?`): `Promise`<[`Entity`](Entity.md)\>

Duplicates entity under the same parent

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.history` | `boolean` |
| `options.rename` | `boolean` |
| `options.select` | `boolean` |

#### Returns

`Promise`<[`Entity`](Entity.md)\>

The new entity

#### Defined in

[src/entity.js:361](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L361)

___

### filter

▸ **filter**(`fn`): [`Entity`](Entity.md)[]

Returns the entity and children that satisfy the function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Function` | A function that takes an Entity and returns whether it should be included in the result |

#### Returns

[`Entity`](Entity.md)[]

The result

#### Defined in

[src/entity.js:219](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L219)

___

### findByName

▸ **findByName**(`name`): [`Entity`](Entity.md)

Finds first entity by name using depth-first search

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name |

#### Returns

[`Entity`](Entity.md)

The entity

#### Defined in

[src/entity.js:158](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L158)

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

[src/entity.js:76](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L76)

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

[src/entity.js:66](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L66)

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

[src/entity.js:109](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L109)

___

### insertChild

▸ **insertChild**(`entity`, `index`): `boolean`

Inserts entity as a child at specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [`Entity`](Entity.md) | The entity |
| `index` | `number` | - |

#### Returns

`boolean`

Whether the child was added

#### Defined in

[src/entity.js:290](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L290)

___

### isDescendantOf

▸ **isDescendantOf**(`parent`): `boolean`

Returns true if this entity is a descendant of the specified parent entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | [`Entity`](Entity.md) | The parent |

#### Returns

`boolean`

True if it is

#### Defined in

[src/entity.js:139](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L139)

___

### json

▸ **json**(): `any`

Returns JSON representation of entity data

#### Returns

`any`

- The data

#### Defined in

[src/entity.js:129](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L129)

___

### latest

▸ **latest**(): [`Entity`](Entity.md)

Returns the latest version of the Entity from the Entities API.

#### Returns

[`Entity`](Entity.md)

The entity

#### Defined in

[src/entity.js:371](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L371)

___

### listByTag

▸ **listByTag**(...`tags`): [`Entity`](Entity.md)[]

Finds all entities with specified tags

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...tags` | `any`[] | The tags. If multiple tags are specified then entities that contain ANY of the specified tags will be included. If an argument is an array of tags then entities that contain ALL of the tags in the array will be included. |

#### Returns

[`Entity`](Entity.md)[]

The entities

#### Defined in

[src/entity.js:184](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L184)

___

### removeChild

▸ **removeChild**(`entity`): `void`

Removes entity from children

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [`Entity`](Entity.md) | The entity |

#### Returns

`void`

#### Defined in

[src/entity.js:313](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L313)

___

### removeComponent

▸ **removeComponent**(`component`): `void`

Removes a component from this Entity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `component` | `string` | The component name |

#### Returns

`void`

#### Defined in

[src/entity.js:269](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L269)

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

[src/entity.js:120](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L120)

___

### reparent

▸ **reparent**(`parent`, `index`, `options?`): `void`

Reparents entity under new parent

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | [`Entity`](Entity.md) | The new parent |
| `index` | `number` | - |
| `options` | `Object` | - |
| `options.history` | `boolean` | - |
| `options.preserverTransform` | `boolean` | - |

#### Returns

`void`

#### Defined in

[src/entity.js:344](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L344)

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

[src/entity.js:87](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L87)

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

[src/entity.js:97](https://github.com/playcanvas/editor-api/blob/08f5d47/src/entity.js#L97)
