[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Entity

# Class: Entity

Represents an Entity. For a list of Entity properties see [here](EntityProperties.md).

## Hierarchy

- `Events`

  ↳ **`Entity`**

## Table of contents

### Constructors

- [constructor](Entity.md#constructor)

### Properties

- [suspendEvents](Entity.md#suspendevents)

### Accessors

- [parent](Entity.md#parent)
- [children](Entity.md#children)
- [history](Entity.md#history)
- [viewportEntity](Entity.md#viewportentity)

### Methods

- [on](Entity.md#on)
- [once](Entity.md#once)
- [emit](Entity.md#emit)
- [unbind](Entity.md#unbind)
- [addEmitter](Entity.md#addemitter)
- [removeEmitter](Entity.md#removeemitter)
- [has](Entity.md#has)
- [get](Entity.md#get)
- [set](Entity.md#set)
- [unset](Entity.md#unset)
- [insert](Entity.md#insert)
- [removeValue](Entity.md#removevalue)
- [json](Entity.md#json)
- [jsonHierarchy](Entity.md#jsonhierarchy)
- [isDescendantOf](Entity.md#isdescendantof)
- [findByName](Entity.md#findbyname)
- [listByTag](Entity.md#listbytag)
- [filter](Entity.md#filter)
- [depthFirst](Entity.md#depthfirst)
- [addComponent](Entity.md#addcomponent)
- [removeComponent](Entity.md#removecomponent)
- [addChild](Entity.md#addchild)
- [insertChild](Entity.md#insertchild)
- [removeChild](Entity.md#removechild)
- [delete](Entity.md#delete)
- [reparent](Entity.md#reparent)
- [duplicate](Entity.md#duplicate)
- [latest](Entity.md#latest)
- [addScript](Entity.md#addscript)
- [removeScript](Entity.md#removescript)

## Public

### suspendEvents

• **suspendEvents**: `boolean`

If true the observer will not emit events when values are set.

#### Inherited from

Events.suspendEvents

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:37

___

### on

▸ **on**(`name`, `fn`): `EventHandle`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name |
| `fn` | `HandleEvent` | Callback function |

#### Returns

`EventHandle`

EventHandle

#### Inherited from

Events.on

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:43

___

### once

▸ **once**(`name`, `fn`): `EventHandle`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name |
| `fn` | `HandleEvent` | Callback function |

#### Returns

`EventHandle`

EventHandle

#### Inherited from

Events.once

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:49

___

### emit

▸ **emit**(`name`, `arg0?`, `arg1?`, `arg2?`, `arg3?`, `arg4?`, `arg5?`, `arg6?`, `arg7?`): `Events`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name |
| `arg0?` | `any` | First argument |
| `arg1?` | `any` | Second argument |
| `arg2?` | `any` | Third argument |
| `arg3?` | `any` | Fourth argument |
| `arg4?` | `any` | Fifth argument |
| `arg5?` | `any` | Sixth argument |
| `arg6?` | `any` | Seventh argument |
| `arg7?` | `any` | Eights argument |

#### Returns

`Events`

Self for chaining.

#### Inherited from

Events.emit

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:62

___

### unbind

▸ **unbind**(`name`, `fn`): `Events`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name |
| `fn` | `HandleEvent` | Callback function |

#### Returns

`Events`

- This

#### Inherited from

Events.unbind

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:68

___

### addEmitter

▸ **addEmitter**(`emitter`): `void`

Adds another emitter. Any events fired by this instance
will also be fired on the additional emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `Events` | The emitter |

#### Returns

`void`

#### Inherited from

Events.addEmitter

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:74

___

### removeEmitter

▸ **removeEmitter**(`emitter`): `void`

Removes emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `Events` | The emitter |

#### Returns

`void`

#### Inherited from

Events.removeEmitter

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:79

___

### has

▸ **has**(`path`): `boolean`

Checks if path exists. See [here](EntityProperties.md) for a list of properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |

#### Returns

`boolean`

True if path exists

**`Example`**

```javascript
console.log(entity.has('components.model'));
```

#### Defined in

[src/entity.js:88](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L88)

___

### get

▸ **get**(`path`): `any`

Gets value at path. See [here](EntityProperties.md) for a list of properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |

#### Returns

`any`

The value

**`Example`**

```javascript
console.log(entity.get('position'));
```

#### Defined in

[src/entity.js:102](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L102)

___

### set

▸ **set**(`path`, `value`): `boolean`

Sets value at path. See [here](EntityProperties.md) for a list of properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |
| `value` | `any` | The value |

#### Returns

`boolean`

Whether the value was set

**`Example`**

```javascript
entity.set('position', [1, 0, 0]);
```

#### Defined in

[src/entity.js:117](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L117)

___

### unset

▸ **unset**(`path`): `boolean`

Unsets value at path. See [here](EntityProperties.md) for a list of properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |

#### Returns

`boolean`

Whether the value was unset

**`Example`**

```javascript
entity.unset('components.model');
```

#### Defined in

[src/entity.js:131](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L131)

___

### insert

▸ **insert**(`path`, `value`, `index`): `boolean`

Inserts value in array at path, at specified index. See [here](EntityProperties.md) for a list of properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |
| `value` | `any` | The value |
| `index` | `number` | The index (if undefined the value will be inserted in the end) |

#### Returns

`boolean`

Whether the value was inserted

**`Example`**

```javascript
entity.insert('tags', 'a_tag');
```

#### Defined in

[src/entity.js:147](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L147)

___

### removeValue

▸ **removeValue**(`path`, `value`): `boolean`

Remove value from array at path. See [here](EntityProperties.md) for a list of properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |
| `value` | `any` | The value |

#### Returns

`boolean`

Whether the value was removed
```javascript
entity.removeValue('tags', 'a_tag');
```

#### Defined in

[src/entity.js:161](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L161)

___

### json

▸ **json**(): `any`

Returns JSON representation of entity data

#### Returns

`any`

- The data
```javascript
console.log(entity.json());
```

#### Defined in

[src/entity.js:173](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L173)

___

### jsonHierarchy

▸ **jsonHierarchy**(): `any`

Returns a JSON representation of entity data. The children array
of the entity gets recursively converted to an array of entity data
instead of containing children resource ids.

#### Returns

`any`

- The data
```javascript
const data = entity.jsonHierarchy();
console.log(data.children[0].name);
```

#### Defined in

[src/entity.js:188](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L188)

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

[src/entity.js:204](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L204)

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

**`Example`**

```javascript
const door = editor.entities.root.findByName('Door');
```

#### Defined in

[src/entity.js:227](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L227)

___

### listByTag

▸ **listByTag**(`...tags`): [`Entity`](Entity.md)[]

Finds all entities with specified tags

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...tags` | `any`[] | The tags. If multiple tags are specified then entities that contain ANY of the specified tags will be included. If an argument is an array of tags then entities that contain ALL of the tags in the array will be included. |

#### Returns

[`Entity`](Entity.md)[]

The entities

**`Example`**

```javascript
// entities that have the following tag
const entities = editor.entities.root.listByTag('tag');
// entities that have any of the following tags
const entities = editor.entities.root.listByTag('tag', 'tag2');
// entities that have all of the following tags
const entities = editor.entities.root.listByTag(['tag', 'tag2']);
```

#### Defined in

[src/entity.js:262](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L262)

___

### filter

▸ **filter**(`fn`): [`Entity`](Entity.md)[]

Returns the entity and children that satisfy the function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | A function that takes an Entity and returns whether it should be included in the result |

#### Returns

[`Entity`](Entity.md)[]

The result

**`Example`**

```javascript
const doors = editor.entities.root.filter(entity => entity.get('name').startsWith('door'));
```

#### Defined in

[src/entity.js:301](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L301)

___

### depthFirst

▸ **depthFirst**(`fn`): `void`

Executes function for this entity and its children
in depth first order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | A function that takes an entity as an argument |

#### Returns

`void`

**`Example`**

```javascript
// get a list of all entities in the graph in depth first order
const entities = [];
editor.entities.root.depthFirst(entity => entities.push(entity));
```

#### Defined in

[src/entity.js:331](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L331)

___

### addComponent

▸ **addComponent**(`component`, `data?`): `void`

Adds a component to this Entity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `component` | `string` | The component name |
| `data` | `any` | Default component data. Defaults values will be used for any missing fields. For details on component properties see see [here](EntityProperties.md). |

#### Returns

`void`

**`Example`**

```javascript
editor.entities.root.addComponent('model', {
    type: 'box'
});
```

#### Defined in

[src/entity.js:357](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L357)

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

**`Example`**

```javascript
editor.entities.root.removeComponent('model');
```

#### Defined in

[src/entity.js:372](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L372)

___

### delete

▸ **delete**(`options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

Deletes entity (and its children)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.history` | `boolean` | Whether to record a history action. Defaults to true. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

A promise

**`Example`**

```javascript
editor.entities.root.findByName('door').delete();
```

#### Defined in

[src/entity.js:458](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L458)

___

### reparent

▸ **reparent**(`parent`, `index?`, `options?`): `void`

Reparents entity under new parent

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `parent` | [`Entity`](Entity.md) | `undefined` | The new parent |
| `index` | `number` | `null` | The desired index. If undefined the entity will be added at the end of the parent's children. |
| `options` | `Object` | `{}` | Options |
| `options.history` | `boolean` | `undefined` | Whether to record a history action. Defaults to true. |
| `options.preserveTransform` | `boolean` | `undefined` | Whether to preserve the original transform after reparenting |

#### Returns

`void`

**`Example`**

```javascript
const redHouse = editor.entities.root.findByName('red house');
const greenHouse = editor.entities.root.findByName('green house');
const door = redHouse.findByName('door');
door.reparent(greenHouse);
```

#### Defined in

[src/entity.js:478](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L478)

___

### duplicate

▸ **duplicate**(`options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Entity`](Entity.md)\>

Duplicates entity under the same parent

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | Options |
| `options.history` | `boolean` | Whether to record a history action. Defaults to true. |
| `options.select` | `boolean` | Whether to select the new entity. Defaults to false. |
| `options.rename` | `boolean` | Whether to rename the duplicated entity. Defaults to false. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Entity`](Entity.md)\>

The new entity

#### Defined in

[src/entity.js:495](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L495)

___

### latest

▸ **latest**(): [`Entity`](Entity.md)

Returns the latest version of the Entity from the Entities API.

#### Returns

[`Entity`](Entity.md)

The entity

#### Defined in

[src/entity.js:505](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L505)

___

### addScript

▸ **addScript**(`scriptName`, `options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\>

Adds a script to the script component of this entity.
If a script component does not exist, this method will add the script
component as well.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scriptName` | `string` | The name of the script. |
| `options` | `Object` | Options |
| `options.attributes` | `any` | The values of attributes. Each key is the name of the attributes and each value is the value for that attribute. Leave undefined to let the Editor set default values depending on the attribute types. |
| `options.history` | `boolean` | Whether to add a history action. Defaults to true. |
| `options.index` | `number` | The desired index in the entity's scripts order to add this script. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\>

A promise

#### Defined in

[src/entity.js:523](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L523)

___

### removeScript

▸ **removeScript**(`scriptName`, `options?`): `void`

Removes a script from the entity's script component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scriptName` | `string` | The name of the script. |
| `options` | `Object` | Options |
| `options.history` | `boolean` | Whether to record a history action. Defaults to true. |

#### Returns

`void`

#### Defined in

[src/entity.js:534](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L534)

___

### parent

• `get` **parent**(): [`Entity`](Entity.md)

#### Returns

[`Entity`](Entity.md)

**`Description`**

The parent entity

#### Defined in

[src/entity.js:542](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L542)

___

### children

• `get` **children**(): [`Entity`](Entity.md)[]

#### Returns

[`Entity`](Entity.md)[]

**`Description`**

The children entities. Warning: this creates a new array every time it's called.

#### Defined in

[src/entity.js:551](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L551)

___

### history

• `get` **history**(): `ObserverHistory`

#### Returns

`ObserverHistory`

**`Description`**

The history object for this entity

#### Defined in

[src/entity.js:559](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L559)

___

### viewportEntity

• `get` **viewportEntity**(): `Entity`

#### Returns

`Entity`

**`Description`**

The entity in the 3D viewport of the Editor

#### Defined in

[src/entity.js:567](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L567)

## Internal

### constructor

• **new Entity**(`data?`): [`Entity`](Entity.md)

Creates new Entity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | Optional entity data |

#### Returns

[`Entity`](Entity.md)

#### Overrides

Events.constructor

#### Defined in

[src/entity.js:17](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L17)

___

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

[src/entity.js:383](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L383)

___

### insertChild

▸ **insertChild**(`entity`, `index?`): `boolean`

Inserts entity as a child at specified index.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `entity` | [`Entity`](Entity.md) | `undefined` | The entity |
| `index` | `number` | `undefined` | The index. If undefined the child will be added in the end. |

#### Returns

`boolean`

Whether the child was added

#### Defined in

[src/entity.js:395](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L395)

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

[src/entity.js:424](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/entity.js#L424)
