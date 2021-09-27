[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / History

# Class: History

The history API responsible for undo / redo.

## Hierarchy

- `Events`

  ↳ **`History`**

## Table of contents

### Internal Constructors

- [constructor](History.md#constructor)

### Methods

- [add](History.md#add)
- [undo](History.md#undo)
- [redo](History.md#redo)
- [clear](History.md#clear)

### Accessors

- [currentAction](History.md#currentaction)
- [lastAction](History.md#lastaction)
- [canUndo](History.md#canundo)
- [canRedo](History.md#canredo)

## Internal Constructors

### constructor

• **new History**()

Creates new instance of the API

**`category`** Internal

#### Overrides

Events.constructor

#### Defined in

[src/history.js:21](https://github.com/playcanvas/editor-api/blob/80233d8/src/history.js#L21)

## Methods

### add

▸ **add**(`action`): `void`

Adds history action

**`example`**
```javascript
const prevSelection = editor.selection.items;
editor.history.add({
    name: 'clear selection',
    redo: () => { editor.selection.clear({ history: false }); },
    undo: () => { editor.selection.set(prevSelection, { history: false }); },
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | [`HistoryAction`](../interfaces/HistoryAction.md) | The action |

#### Returns

`void`

#### Defined in

[src/history.js:45](https://github.com/playcanvas/editor-api/blob/80233d8/src/history.js#L45)

___

### undo

▸ **undo**(): `void`

Undo last action

**`example`**
```javascript
editor.history.undo();
```

#### Returns

`void`

#### Defined in

[src/history.js:57](https://github.com/playcanvas/editor-api/blob/80233d8/src/history.js#L57)

___

### redo

▸ **redo**(): `void`

Redo last action

**`example`**
```javascript
editor.history.redo();
```

#### Returns

`void`

#### Defined in

[src/history.js:69](https://github.com/playcanvas/editor-api/blob/80233d8/src/history.js#L69)

___

### clear

▸ **clear**(): `void`

Clear history

**`example`**
```javascript
editor.history.clear();
```

#### Returns

`void`

#### Defined in

[src/history.js:81](https://github.com/playcanvas/editor-api/blob/80233d8/src/history.js#L81)

## Accessors

### currentAction

• `get` **currentAction**(): [`HistoryAction`](../interfaces/HistoryAction.md)

Gets the current action

#### Returns

[`HistoryAction`](../interfaces/HistoryAction.md)

#### Defined in

[src/history.js:90](https://github.com/playcanvas/editor-api/blob/80233d8/src/history.js#L90)

___

### lastAction

• `get` **lastAction**(): [`HistoryAction`](../interfaces/HistoryAction.md)

Gets the last action

#### Returns

[`HistoryAction`](../interfaces/HistoryAction.md)

#### Defined in

[src/history.js:99](https://github.com/playcanvas/editor-api/blob/80233d8/src/history.js#L99)

___

### canUndo

• `get` **canUndo**(): `boolean`

Whether there are any actions to undo

#### Returns

`boolean`

#### Defined in

[src/history.js:108](https://github.com/playcanvas/editor-api/blob/80233d8/src/history.js#L108)

• `set` **canUndo**(`value`): `void`

Whether there are any actions to undo

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/history.js:112](https://github.com/playcanvas/editor-api/blob/80233d8/src/history.js#L112)

___

### canRedo

• `get` **canRedo**(): `boolean`

Whether there are actions to redo

#### Returns

`boolean`

#### Defined in

[src/history.js:121](https://github.com/playcanvas/editor-api/blob/80233d8/src/history.js#L121)

• `set` **canRedo**(`value`): `void`

Whether there are actions to redo

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/history.js:125](https://github.com/playcanvas/editor-api/blob/80233d8/src/history.js#L125)
