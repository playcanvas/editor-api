[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Entities

# Class: Entities

The entities editor API

## Hierarchy

- `Events`

  ↳ **`Entities`**

## Table of contents

### Internal Constructors

- [constructor](Entities.md#constructor)

### Public Methods

- [get](Entities.md#get)
- [list](Entities.md#list)
- [create](Entities.md#create)
- [delete](Entities.md#delete)
- [reparent](Entities.md#reparent)

### Internal Methods

- [add](Entities.md#add)
- [serverAdd](Entities.md#serveradd)
- [remove](Entities.md#remove)
- [serverRemove](Entities.md#serverremove)
- [clear](Entities.md#clear)

## Internal Constructors

### constructor

• **new Entities**()

Creates new API instance

**`category`** Internal

#### Overrides

Events.constructor

#### Defined in

[src/entities.js:23](https://github.com/playcanvas/editor-api/blob/867701a/src/entities.js#L23)

## Public Methods

### get

▸ **get**(`id`): [`Entity`](Entity.md)

Gets entity by resource id

**`example`**
```javascript
const entity = editor.entities.get(resourceId);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The entity's resource id |

#### Returns

[`Entity`](Entity.md)

The entity

#### Defined in

[src/entities.js:100](https://github.com/playcanvas/editor-api/blob/867701a/src/entities.js#L100)

___

### list

▸ **list**(): [`Entity`](Entity.md)[]

Returns array of all entities

**`example`**
```javascript
const entities = editor.entities.list();
console.log(entities.length);
```

#### Returns

[`Entity`](Entity.md)[]

The entities

#### Defined in

[src/entities.js:115](https://github.com/playcanvas/editor-api/blob/867701a/src/entities.js#L115)

___

### create

▸ **create**(`data?`, `options?`): [`Entity`](Entity.md)

Creates new entity and adds it to the hierarchy

**`example`**
```javascript
const root = editor.entities.create({
    name: 'parent',
});

const child = editor.entities.create({
    name: 'child',
    parent: root,
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | Optional initial data for the entity |
| `options` | `Object` | Options |
| `options.history` | `boolean` | Whether to record a history action. Defaults to true. |
| `options.select` | `boolean` | Whether to select new Entity. Defaults to false. |

#### Returns

[`Entity`](Entity.md)

The new entity

#### Defined in

[src/entities.js:278](https://github.com/playcanvas/editor-api/blob/867701a/src/entities.js#L278)

___

### delete

▸ **delete**(`entities`, `options?`): `void`

Delete specified entities

**`example`**
```javascript
editor.entities.delete([entity1, entity2]);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entities` | [`Entity`](Entity.md) \| [`Entity`](Entity.md)[] | The entities |
| `options` | `Object` | Options |
| `options.history` | `boolean` | Whether to record a history action. Defaults to true. |

#### Returns

`void`

#### Defined in

[src/entities.js:391](https://github.com/playcanvas/editor-api/blob/867701a/src/entities.js#L391)

___

### reparent

▸ **reparent**(`data`, `options?`): `void`

Reparents entities under new parent.

**`example`**
```javascript
const child = editor.entities.create();
const parent = editor.entities.create();
editor.entities.reparent([{
    entity: child,
    parent: parent
}])
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`ReparentArguments`](../interfaces/ReparentArguments.md)[] | The reparenting data |
| `options` | `Object` | Options |
| `options.preserveTransform` | `boolean` | Whether to preserve the transform of the entities. Defaults to false. |
| `options.history` | `boolean` | Whether to record history. Defaults to true |

#### Returns

`void`

#### Defined in

[src/entities.js:509](https://github.com/playcanvas/editor-api/blob/867701a/src/entities.js#L509)

___

## Internal Methods

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

[src/entities.js:125](https://github.com/playcanvas/editor-api/blob/867701a/src/entities.js#L125)

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

[src/entities.js:151](https://github.com/playcanvas/editor-api/blob/867701a/src/entities.js#L151)

___

### remove

▸ **remove**(`entity`, `entityReferences?`): `void`

Removes entity from the list

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `entity` | [`Entity`](Entity.md) | `undefined` | The entity |
| `entityReferences` | `any` | `null` | A map of entity references to nullify when this entity is removed |

#### Returns

`void`

#### Defined in

[src/entities.js:166](https://github.com/playcanvas/editor-api/blob/867701a/src/entities.js#L166)

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

[src/entities.js:212](https://github.com/playcanvas/editor-api/blob/867701a/src/entities.js#L212)

___

### clear

▸ **clear**(): `void`

Removes all entities from the list

#### Returns

`void`

#### Defined in

[src/entities.js:235](https://github.com/playcanvas/editor-api/blob/867701a/src/entities.js#L235)
