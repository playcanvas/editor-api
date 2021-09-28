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
- [duplicate](Entities.md#duplicate)
- [copyToClipboard](Entities.md#copytoclipboard)
- [pasteFromClipboard](Entities.md#pastefromclipboard)
- [waitToExist](Entities.md#waittoexist)

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

[src/entities.js:31](https://github.com/playcanvas/editor-api/blob/548f133/src/entities.js#L31)

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

[src/entities.js:51](https://github.com/playcanvas/editor-api/blob/548f133/src/entities.js#L51)

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

[src/entities.js:66](https://github.com/playcanvas/editor-api/blob/548f133/src/entities.js#L66)

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

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `data` | `any` | `null` | Optional initial data for the entity |
| `options` | `Object` | `{}` | Options |
| `options.index` | `number` | `undefined` | The child index that this entity will have under its parent. |
| `options.history` | `boolean` | `undefined` | Whether to record a history action. Defaults to true. |
| `options.select` | `boolean` | `undefined` | Whether to select new Entity. Defaults to false. |

#### Returns

[`Entity`](Entity.md)

The new entity

#### Defined in

[src/entities.js:230](https://github.com/playcanvas/editor-api/blob/548f133/src/entities.js#L230)

___

### delete

▸ **delete**(`entities`, `options?`): `Promise`<`void`\>

Delete specified entities

**`example`**
```javascript
await editor.entities.delete([entity1, entity2]);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entities` | [`Entity`](Entity.md) \| [`Entity`](Entity.md)[] | The entities |
| `options` | `Object` | Options |
| `options.history` | `boolean` | Whether to record a history action. Defaults to true. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/entities.js:246](https://github.com/playcanvas/editor-api/blob/548f133/src/entities.js#L246)

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

[src/entities.js:267](https://github.com/playcanvas/editor-api/blob/548f133/src/entities.js#L267)

___

### duplicate

▸ **duplicate**(`entities`, `options?`): `Promise`<[`Entity`](Entity.md)[]\>

Duplicates the specified entities under the same parent

**`example`**
const duplicated = await editor.entities.duplicate(entities);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entities` | [`Entity`](Entity.md)[] | The entities |
| `options` | `Object` | - |
| `options.history` | `boolean` | - |
| `options.select` | `boolean` | - |
| `options.rename` | `boolean` | - |

#### Returns

`Promise`<[`Entity`](Entity.md)[]\>

The duplicated entities

#### Defined in

[src/entities.js:283](https://github.com/playcanvas/editor-api/blob/548f133/src/entities.js#L283)

___

### copyToClipboard

▸ **copyToClipboard**(`entities`): `void`

Copy specified entities to localStorage clipboard. Can be used
to paste these entities later on.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entities` | [`Entity`](Entity.md)[] | The entities |

#### Returns

`void`

#### Defined in

[src/entities.js:295](https://github.com/playcanvas/editor-api/blob/548f133/src/entities.js#L295)

___

### pasteFromClipboard

▸ **pasteFromClipboard**(`parent`, `options?`): `Promise`<[`Entity`](Entity.md)[]\>

Paste entities copied into clipboard
under the specified parent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | [`Entity`](Entity.md) | The parent |
| `options` | `Object` | Options |
| `options.history` | `boolean` | Whether to record a history action. Defaults to true. |

#### Returns

`Promise`<[`Entity`](Entity.md)[]\>

The new entities

#### Defined in

[src/entities.js:308](https://github.com/playcanvas/editor-api/blob/548f133/src/entities.js#L308)

___

### waitToExist

▸ **waitToExist**(`entityIds`, `timeoutMs`, `callback`): `Function`

Waits for specified entity ids to be added to the scene.
Once they are the callback is called with the entities as its argument.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entityIds` | `string`[] | The ids of the entities to wait for |
| `timeoutMs` | `number` | Number of ms to wait before stopping to wait |
| `callback` | `Function` | The callback to call when all entities have been added. The signature is (Entity[]) => void. |

#### Returns

`Function`

Returns a cancel function which can be called to cancel calling the
callback when the entities are added.

#### Defined in

[src/entities.js:323](https://github.com/playcanvas/editor-api/blob/548f133/src/entities.js#L323)

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

[src/entities.js:76](https://github.com/playcanvas/editor-api/blob/548f133/src/entities.js#L76)

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

[src/entities.js:104](https://github.com/playcanvas/editor-api/blob/548f133/src/entities.js#L104)

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

[src/entities.js:119](https://github.com/playcanvas/editor-api/blob/548f133/src/entities.js#L119)

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

[src/entities.js:164](https://github.com/playcanvas/editor-api/blob/548f133/src/entities.js#L164)

___

### clear

▸ **clear**(): `void`

Removes all entities from the list

#### Returns

`void`

#### Defined in

[src/entities.js:186](https://github.com/playcanvas/editor-api/blob/548f133/src/entities.js#L186)
