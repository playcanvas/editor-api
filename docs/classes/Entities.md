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

- [create](Entities.md#create)
- [delete](Entities.md#delete)
- [get](Entities.md#get)
- [list](Entities.md#list)
- [reparent](Entities.md#reparent)

## Constructors

### constructor

• **new Entities**()

Creates new API instance

#### Overrides

Events.constructor

#### Defined in

[src/entities.js:21](https://github.com/playcanvas/editor-api/blob/022e512/src/entities.js#L21)

## Methods

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

[src/entities.js:255](https://github.com/playcanvas/editor-api/blob/022e512/src/entities.js#L255)

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

[src/entities.js:365](https://github.com/playcanvas/editor-api/blob/022e512/src/entities.js#L365)

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

[src/entities.js:94](https://github.com/playcanvas/editor-api/blob/022e512/src/entities.js#L94)

___

### list

▸ **list**(): [`Entity`](Entity.md)[]

Returns array of all entities

#### Returns

[`Entity`](Entity.md)[]

The entities

#### Defined in

[src/entities.js:104](https://github.com/playcanvas/editor-api/blob/022e512/src/entities.js#L104)

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

[src/entities.js:474](https://github.com/playcanvas/editor-api/blob/022e512/src/entities.js#L474)
