[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Entities

# Class: Entities

The entities editor API

## Hierarchy

- `Events`

  ↳ **`Entities`**

## Table of contents

### Constructors

- [constructor](Entities.md#constructor)

### Methods

- [add](Entities.md#add)
- [clear](Entities.md#clear)
- [create](Entities.md#create)
- [delete](Entities.md#delete)
- [duplicate](Entities.md#duplicate)
- [get](Entities.md#get)
- [list](Entities.md#list)
- [remove](Entities.md#remove)
- [reparent](Entities.md#reparent)
- [serverAdd](Entities.md#serveradd)
- [serverRemove](Entities.md#serverremove)

## Constructors

### constructor

• **new Entities**()

Creates new API instance

#### Overrides

Events.constructor

#### Defined in

[src/entities.js:26](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entities.js#L26)

## Methods

### add

▸ **add**(`entity`): `void`

Adds entity to list

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [`Entity`](Entity.md) | The entity |

#### Returns

`void`

#### Defined in

[src/entities.js:61](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entities.js#L61)

___

### clear

▸ **clear**(): `void`

Removes all entities from the list

#### Returns

`void`

#### Defined in

[src/entities.js:166](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entities.js#L166)

___

### create

▸ **create**(`data`, `options?`): [`Entity`](Entity.md)

Creates new entity and adds it to the hierarchy

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `options` | `Object` |
| `options.history` | `boolean` |
| `options.index` | `number` |
| `options.select` | `boolean` |

#### Returns

[`Entity`](Entity.md)

The new entity

#### Defined in

[src/entities.js:198](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entities.js#L198)

___

### delete

▸ **delete**(`entities`, `options?`): `void`

Delete specified entities

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entities` | [`Entity`](Entity.md) \| [`Entity`](Entity.md)[] | The entities |
| `options` | `Object` | - |
| `options.history` | `boolean` | - |

#### Returns

`void`

#### Defined in

[src/entities.js:209](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entities.js#L209)

___

### duplicate

▸ **duplicate**(`entities`, `options?`): `Promise`<[`Entity`](Entity.md)[]\>

Duplicates the specified entities under the same parent

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entities` | `any`[] | The entities |
| `options` | `Object` | - |
| `options.history` | `boolean` | - |
| `options.rename` | `boolean` | - |
| `options.select` | `boolean` | - |

#### Returns

`Promise`<[`Entity`](Entity.md)[]\>

The duplicated entities

#### Defined in

[src/entities.js:235](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entities.js#L235)

___

### get

▸ **get**(`id`): [`Entity`](Entity.md)

Gets entity by resource id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The entity's resource id |

#### Returns

[`Entity`](Entity.md)

The entity

#### Defined in

[src/entities.js:42](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entities.js#L42)

___

### list

▸ **list**(): [`Entity`](Entity.md)[]

Returns array of all entities

#### Returns

[`Entity`](Entity.md)[]

The entities

#### Defined in

[src/entities.js:52](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entities.js#L52)

___

### remove

▸ **remove**(`entity`, `entityReferences`): `void`

Removes entity from the list

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [`Entity`](Entity.md) | The entity |
| `entityReferences` | `any` | - |

#### Returns

`void`

#### Defined in

[src/entities.js:102](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entities.js#L102)

___

### reparent

▸ **reparent**(`data`, `options?`): `void`

Reparents entities under new parent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`ReparentArguments`](../interfaces/ReparentArguments.md)[] | The reparenting data |
| `options` | `Object` | - |
| `options.history` | `boolean` | - |
| `options.preserverTransform` | `boolean` | - |

#### Returns

`void`

#### Defined in

[src/entities.js:221](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entities.js#L221)

___

### serverAdd

▸ **serverAdd**(`entityData`): `void`

Called when an entity is added from the server

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entityData` | `any` | The entity data |

#### Returns

`void`

#### Defined in

[src/entities.js:88](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entities.js#L88)

___

### serverRemove

▸ **serverRemove**(`entity`): `void`

Called when an entity is removed from the server

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [`Entity`](Entity.md) | The entity |

#### Returns

`void`

#### Defined in

[src/entities.js:146](https://github.com/playcanvas/editor-api/blob/1a570fa/src/entities.js#L146)
