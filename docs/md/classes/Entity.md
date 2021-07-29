[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Entity

# Class: Entity

Represents an Entity

## Hierarchy

- `Events`

  ↳ **`Entity`**

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

#### Overrides

Events.constructor

#### Defined in

[src/entity.js:16](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L16)

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

[src/entity.js:283](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L283)

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

[src/entity.js:262](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L262)

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

[src/entity.js:335](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L335)

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

[src/entity.js:247](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L247)

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

[src/entity.js:365](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L365)

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

[src/entity.js:223](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L223)

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

[src/entity.js:162](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L162)

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

[src/entity.js:80](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L80)

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

[src/entity.js:70](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L70)

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

[src/entity.js:113](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L113)

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

[src/entity.js:294](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L294)

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

[src/entity.js:143](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L143)

___

### json

▸ **json**(): `any`

Returns JSON representation of entity data

#### Returns

`any`

- The data

#### Defined in

[src/entity.js:133](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L133)

___

### latest

▸ **latest**(): [`Entity`](Entity.md)

Returns the latest version of the Entity from the Entities API.

#### Returns

[`Entity`](Entity.md)

The entity

#### Defined in

[src/entity.js:375](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L375)

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

[src/entity.js:188](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L188)

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

[src/entity.js:317](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L317)

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

[src/entity.js:273](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L273)

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

[src/entity.js:124](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L124)

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

[src/entity.js:348](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L348)

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

[src/entity.js:91](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L91)

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

[src/entity.js:101](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entity.js#L101)
