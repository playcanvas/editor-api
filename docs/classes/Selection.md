[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Selection

# Class: Selection

Selection API. Allows selecting Entities, Assets etc.

## Hierarchy

- `Events`

  ↳ **`Selection`**

## Table of contents

### Constructors

- [constructor](Selection.md#constructor)

### Properties

- [suspendEvents](Selection.md#suspendevents)

### Accessors

- [items](Selection.md#items)
- [item](Selection.md#item)
- [enabled](Selection.md#enabled)
- [count](Selection.md#count)
- [history](Selection.md#history)

### Methods

- [on](Selection.md#on)
- [once](Selection.md#once)
- [emit](Selection.md#emit)
- [unbind](Selection.md#unbind)
- [addEmitter](Selection.md#addemitter)
- [removeEmitter](Selection.md#removeemitter)
- [add](Selection.md#add)
- [remove](Selection.md#remove)
- [toggle](Selection.md#toggle)
- [has](Selection.md#has)
- [clear](Selection.md#clear)
- [set](Selection.md#set)

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

### add

▸ **add**(`item`, `options?`): `void`

Add item to selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `any` | The item |
| `options` | `Object` | Options |
| `options.history` | `boolean` | Whether to record a history action. Defaults to true. |

#### Returns

`void`

**`Example`**

```javascript
// add root entity to selection
editor.selection.add(editor.entities.root);
```

#### Defined in

[src/selection.js:114](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/selection.js#L114)

___

### remove

▸ **remove**(`item`, `options?`): `void`

Remove item from selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `any` | The item |
| `options` | `Object` | Options |
| `options.history` | `boolean` | Whether to record a history action. Defaults to true. |

#### Returns

`void`

**`Example`**

```javascript
// remove root entity from selection
editor.selection.remove(editor.entities.root);
```

#### Defined in

[src/selection.js:150](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/selection.js#L150)

___

### toggle

▸ **toggle**(`item`, `options?`): `void`

Toggle item selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `any` | The item |
| `options` | `Object` | Options |
| `options.history` | `boolean` | Whether to record a history action. Defaults to true. |

#### Returns

`void`

**`Example`**

```javascript
// toggle root entity selection
editor.selection.toggle(editor.entities.root);
```

#### Defined in

[src/selection.js:185](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/selection.js#L185)

___

### has

▸ **has**(`item`): `boolean`

Checks if item is in selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `any` | The item |

#### Returns

`boolean`

If item is in selection

**`Example`**

```javascript
const isRootSelected = editor.selection.has(editor.entities.root);
```

#### Defined in

[src/selection.js:221](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/selection.js#L221)

___

### clear

▸ **clear**(`options?`): `void`

Clears selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.history` | `boolean` | Whether to record a history action. Defaults to true. |

#### Returns

`void`

**`Example`**

```javascript
editor.selection.clear();
```

#### Defined in

[src/selection.js:235](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/selection.js#L235)

___

### set

▸ **set**(`items`, `options?`): `void`

Sets current selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | `any`[] | The items to select |
| `options` | `Object` | Options |
| `options.history` | `boolean` | Whether to record a history action. Defaults to true. |

#### Returns

`void`

**`Example`**

```javascript
// select root entity
editor.selection.set([editor.entities.root]);
```

#### Defined in

[src/selection.js:278](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/selection.js#L278)

___

### items

• `get` **items**(): `any`[]

Gets the selected items. This creates a new array every time it is called.

#### Returns

`any`[]

**`Example`**

```javascript
editor.selection.items.add(editor.entities.root);
const selectedEntities = editor.selection.items;
```

#### Defined in

[src/selection.js:312](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/selection.js#L312)

___

### item

• `get` **item**(): `any`[]

Gets the first selected item. Short for this.items[0].

#### Returns

`any`[]

#### Defined in

[src/selection.js:321](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/selection.js#L321)

___

### enabled

• `set` **enabled**(`value`): `void`

Enables / disables the selection methods

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/selection.js:330](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/selection.js#L330)

___

### count

• `get` **count**(): `number`

Gets the number of selected items

#### Returns

`number`

#### Defined in

[src/selection.js:343](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/selection.js#L343)

___

### history

• `get` **history**(): [`SelectionHistory`](SelectionHistory.md)

Gets the selection history

#### Returns

[`SelectionHistory`](SelectionHistory.md)

#### Defined in

[src/selection.js:352](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/selection.js#L352)

## Internal

### constructor

• **new Selection**(): [`Selection`](Selection.md)

Constructor

#### Returns

[`Selection`](Selection.md)

#### Overrides

Events.constructor

#### Defined in

[src/selection.js:80](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/selection.js#L80)
