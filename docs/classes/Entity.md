[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Entity

# Class: Entity

Represents an Entity

## Hierarchy

- `Events`

  ↳ **`Entity`**

## Table of contents

### Internal Constructors

- [constructor](Entity.md#constructor)

### Public Methods

- [has](Entity.md#has)
- [get](Entity.md#get)
- [set](Entity.md#set)
- [unset](Entity.md#unset)
- [insert](Entity.md#insert)
- [removeValue](Entity.md#removevalue)
- [json](Entity.md#json)
- [isDescendantOf](Entity.md#isdescendantof)
- [findByName](Entity.md#findbyname)
- [listByTag](Entity.md#listbytag)
- [filter](Entity.md#filter)
- [depthFirst](Entity.md#depthfirst)
- [addComponent](Entity.md#addcomponent)
- [removeComponent](Entity.md#removecomponent)
- [delete](Entity.md#delete)
- [reparent](Entity.md#reparent)
- [duplicate](Entity.md#duplicate)
- [latest](Entity.md#latest)

### Internal Methods

- [addChild](Entity.md#addchild)
- [insertChild](Entity.md#insertchild)
- [removeChild](Entity.md#removechild)

## Internal Constructors

### constructor

• **new Entity**(`data?`)

Creates new Entity

**`category`** Internal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | Optional entity data |

#### Overrides

Events.constructor

#### Defined in

[src/entity.js:16](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L16)

## Public Methods

### has

▸ **has**(`path`): `boolean`

Checks if path exists

**`example`**
```javascript
console.log(entity.has('components.model'));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |

#### Returns

`boolean`

True if path exists

#### Defined in

[src/entity.js:83](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L83)

___

### get

▸ **get**(`path`): `any`

Gets value at path

**`example`**
```javascript
console.log(entity.get('position'));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |

#### Returns

`any`

The value

#### Defined in

[src/entity.js:97](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L97)

___

### set

▸ **set**(`path`, `value`): `boolean`

Sets value at path

**`example`**
```javascript
entity.set('position', [1, 0, 0]);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |
| `value` | `any` | The value |

#### Returns

`boolean`

Whether the value was set

#### Defined in

[src/entity.js:112](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L112)

___

### unset

▸ **unset**(`path`): `boolean`

Unsets value at path

**`example`**
```javascript
entity.unset('components.model');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |

#### Returns

`boolean`

Whether the value was unset

#### Defined in

[src/entity.js:126](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L126)

___

### insert

▸ **insert**(`path`, `value`, `index`): `boolean`

Inserts value in array at path, at specified index

**`example`**
```javascript
entity.insert('tags', 'a_tag');
```

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

[src/entity.js:142](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L142)

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
```javascript
entity.removeValue('tags', 'a_tag');
```

#### Defined in

[src/entity.js:156](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L156)

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

[src/entity.js:168](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L168)

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

[src/entity.js:178](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L178)

___

### findByName

▸ **findByName**(`name`): [`Entity`](Entity.md)

Finds first entity by name using depth-first search

**`example`**
```javascript
const door = editor.entities.root.findByName('Door');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name |

#### Returns

[`Entity`](Entity.md)

The entity

#### Defined in

[src/entity.js:201](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L201)

___

### listByTag

▸ **listByTag**(...`tags`): [`Entity`](Entity.md)[]

Finds all entities with specified tags

**`example`**
```javascript
// entities that have the following tag
const entities = editor.entities.root.listByTag('tag');
// entities that have any of the following tags
const entities = editor.entities.root.listByTag('tag', 'tag2');
// entities that have all of the following tags
const entities = editor.entities.root.listByTag(['tag', 'tag2']);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...tags` | `any`[] | The tags. If multiple tags are specified then entities that contain ANY of the specified tags will be included. If an argument is an array of tags then entities that contain ALL of the tags in the array will be included. |

#### Returns

[`Entity`](Entity.md)[]

The entities

#### Defined in

[src/entity.js:236](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L236)

___

### filter

▸ **filter**(`fn`): [`Entity`](Entity.md)[]

Returns the entity and children that satisfy the function

**`example`**
```javascript
const doors = editor.entities.root.filter(entity => entity.get('name').startsWith('door'));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Function` | A function that takes an Entity and returns whether it should be included in the result |

#### Returns

[`Entity`](Entity.md)[]

The result

#### Defined in

[src/entity.js:275](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L275)

___

### depthFirst

▸ **depthFirst**(`fn`): `void`

Executes function for this entity and its children
in depth first order.

**`example`**
```javascript
// get a list of all entities in the graph in depth first order
const entities = [];
editor.entities.root.depthFirst(entity => entities.push(entity));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Function` | A function that takes an entity as an argument |

#### Returns

`void`

#### Defined in

[src/entity.js:305](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L305)

___

### addComponent

▸ **addComponent**(`component`, `data?`): `void`

Adds a component to this Entity

**`example`**
```javascript
editor.entities.root.addComponent('model', {
    type: 'box'
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `component` | `string` | The component name |
| `data` | `any` | Default component data |

#### Returns

`void`

#### Defined in

[src/entity.js:326](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L326)

___

### removeComponent

▸ **removeComponent**(`component`): `void`

Removes a component from this Entity

**`example`**
```javascript
editor.entities.root.removeComponent('model');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `component` | `string` | The component name |

#### Returns

`void`

#### Defined in

[src/entity.js:341](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L341)

___

### delete

▸ **delete**(`options?`): `void`

Deletes entity (and its children)

**`example`**
```javascript
editor.entities.root.findByName('door').delete();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.history` | `boolean` | Whether to record a history action. Defaults to true. |

#### Returns

`void`

#### Defined in

[src/entity.js:411](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L411)

___

### reparent

▸ **reparent**(`parent`, `index?`, `options?`): `void`

Reparents entity under new parent

**`example`**
```javascript
const redHouse = editor.entities.root.findByName('red house');
const greenHouse = editor.entities.root.findByName('green house');
const door = redHouse.findByName('door');
door.reparent(greenHouse);
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `parent` | [`Entity`](Entity.md) | `undefined` | The new parent |
| `index` | `number` | `null` | The desired index. If undefined the entity will be added at the end of the parent's children. |
| `options` | `Object` | `{}` | Options |
| `options.history` | `boolean` | `undefined` | Whether to record a history action. Defaults to true. |
| `options.preserverTransform` | `boolean` | `undefined` | Whether to preserve the original transform after reparenting |

#### Returns

`void`

#### Defined in

[src/entity.js:431](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L431)

___

### duplicate

▸ **duplicate**(`options?`): `Promise`<[`Entity`](Entity.md)\>

Duplicates entity under the same parent

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.history` | `boolean` |
| `options.select` | `boolean` |
| `options.rename` | `boolean` |

#### Returns

`Promise`<[`Entity`](Entity.md)\>

The new entity

#### Defined in

[src/entity.js:448](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L448)

___

### latest

▸ **latest**(): [`Entity`](Entity.md)

Returns the latest version of the Entity from the Entities API.

#### Returns

[`Entity`](Entity.md)

The entity

#### Defined in

[src/entity.js:458](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L458)

___

## Internal Methods

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

[src/entity.js:352](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L352)

___

### insertChild

▸ **insertChild**(`entity`, `index?`): `boolean`

Inserts entity as a child at specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [`Entity`](Entity.md) | The entity |
| `index` | `number` | The index. If undefined the child will be added in the end. |

#### Returns

`boolean`

Whether the child was added

#### Defined in

[src/entity.js:364](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L364)

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

[src/entity.js:388](https://github.com/playcanvas/editor-api/blob/9178f92/src/entity.js#L388)
