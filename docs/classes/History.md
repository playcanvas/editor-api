[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / History

# Class: History

The history API responsible for undo / redo.

## Hierarchy

- `Events`

  ↳ **`History`**

## Table of contents

### Constructors

- [constructor](History.md#constructor)

### Properties

- [suspendEvents](History.md#suspendevents)

### Accessors

- [currentAction](History.md#currentaction)
- [lastAction](History.md#lastaction)
- [canUndo](History.md#canundo)
- [canRedo](History.md#canredo)

### Methods

- [on](History.md#on)
- [once](History.md#once)
- [emit](History.md#emit)
- [unbind](History.md#unbind)
- [addEmitter](History.md#addemitter)
- [removeEmitter](History.md#removeemitter)
- [add](History.md#add)
- [addAndExecute](History.md#addandexecute)
- [undo](History.md#undo)
- [redo](History.md#redo)
- [clear](History.md#clear)

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

▸ **add**(`action`): `void`

Adds history action

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | [`HistoryAction`](../interfaces/HistoryAction.md) | The action |

#### Returns

`void`

**`Example`**

```javascript
const prevSelection = editor.selection.items;
editor.history.add({
    name: 'clear selection',
    redo: () => { editor.selection.clear({ history: false }); },
    undo: () => { editor.selection.set(prevSelection, { history: false }); },
});
```

#### Defined in

[src/history.js:45](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/history.js#L45)

___

### addAndExecute

▸ **addAndExecute**(`action`): `void`

Adds history action and execute redo

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | [`HistoryAction`](../interfaces/HistoryAction.md) | The action |

#### Returns

`void`

**`Example`**

```javascript
const prevSelection = editor.selection.items;
editor.history.addAndExecute({
    name: 'clear selection',
    redo: () => { editor.selection.clear({ history: false }); },
    undo: () => { editor.selection.set(prevSelection, { history: false }); },
});
```

#### Defined in

[src/history.js:63](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/history.js#L63)

___

### undo

▸ **undo**(): `void`

Undo last action

#### Returns

`void`

**`Example`**

```javascript
editor.history.undo();
```

#### Defined in

[src/history.js:75](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/history.js#L75)

___

### redo

▸ **redo**(): `void`

Redo last action

#### Returns

`void`

**`Example`**

```javascript
editor.history.redo();
```

#### Defined in

[src/history.js:87](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/history.js#L87)

___

### clear

▸ **clear**(): `void`

Clear history

#### Returns

`void`

**`Example`**

```javascript
editor.history.clear();
```

#### Defined in

[src/history.js:99](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/history.js#L99)

___

### currentAction

• `get` **currentAction**(): [`HistoryAction`](../interfaces/HistoryAction.md)

Gets the current action

#### Returns

[`HistoryAction`](../interfaces/HistoryAction.md)

#### Defined in

[src/history.js:108](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/history.js#L108)

___

### lastAction

• `get` **lastAction**(): [`HistoryAction`](../interfaces/HistoryAction.md)

Gets the last action

#### Returns

[`HistoryAction`](../interfaces/HistoryAction.md)

#### Defined in

[src/history.js:117](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/history.js#L117)

___

### canUndo

• `set` **canUndo**(`value`): `void`

Whether there are any actions to undo

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/history.js:126](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/history.js#L126)

___

### canRedo

• `set` **canRedo**(`value`): `void`

Whether there are actions to redo

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/history.js:139](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/history.js#L139)

## Internal

### constructor

• **new History**(): [`History`](History.md)

Creates new instance of the API

#### Returns

[`History`](History.md)

#### Overrides

Events.constructor

#### Defined in

[src/history.js:21](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/history.js#L21)
