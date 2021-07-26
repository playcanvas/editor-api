[PlayCanvas Editor API](../docs/md/README.md) / [Exports](../modules.md) / Entities

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
- [get](Entities.md#get)
- [list](Entities.md#list)
- [remove](Entities.md#remove)
- [serverAdd](Entities.md#serveradd)
- [serverRemove](Entities.md#serverremove)

## Constructors

### constructor

• **new Entities**()

Creates new API instance

#### Overrides

Events.constructor

#### Defined in

[src/entities.js:12](https://github.com/playcanvas/editor-api/blob/0ebab58/src/entities.js#L12)

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

[src/entities.js:104](https://github.com/playcanvas/editor-api/blob/0ebab58/src/entities.js#L104)

___

### clear

▸ **clear**(): `void`

Removes all entities from the list

#### Returns

`void`

#### Defined in

[src/entities.js:209](https://github.com/playcanvas/editor-api/blob/0ebab58/src/entities.js#L209)

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
| `options.select` | `boolean` |

#### Returns

[`Entity`](Entity.md)

The new entity

#### Defined in

[src/entities.js:240](https://github.com/playcanvas/editor-api/blob/0ebab58/src/entities.js#L240)

___

### delete

▸ **delete**(`entities`, `options?`): `void`

Delete specified entities

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entities` | [`Entity`](Entity.md)[] | The entities |
| `options` | `Object` | - |
| `options.history` | `boolean` | - |

#### Returns

`void`

#### Defined in

[src/entities.js:350](https://github.com/playcanvas/editor-api/blob/0ebab58/src/entities.js#L350)

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

[src/entities.js:85](https://github.com/playcanvas/editor-api/blob/0ebab58/src/entities.js#L85)

___

### list

▸ **list**(): [`Entity`](Entity.md)[]

Returns array of all entities

#### Returns

[`Entity`](Entity.md)[]

The entities

#### Defined in

[src/entities.js:95](https://github.com/playcanvas/editor-api/blob/0ebab58/src/entities.js#L95)

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

[src/entities.js:143](https://github.com/playcanvas/editor-api/blob/0ebab58/src/entities.js#L143)

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

[src/entities.js:129](https://github.com/playcanvas/editor-api/blob/0ebab58/src/entities.js#L129)

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

[src/entities.js:188](https://github.com/playcanvas/editor-api/blob/0ebab58/src/entities.js#L188)
