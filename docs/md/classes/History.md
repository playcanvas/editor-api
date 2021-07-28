[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / History

# Class: History

The history API responsible for undo / redo.

## Hierarchy

- `Events`

  ↳ **`History`**

## Table of contents

### Constructors

- [constructor](History.md#constructor)

### Accessors

- [canRedo](History.md#canredo)
- [canUndo](History.md#canundo)
- [currentAction](History.md#currentaction)
- [lastAction](History.md#lastaction)

### Methods

- [add](History.md#add)
- [clear](History.md#clear)
- [redo](History.md#redo)
- [undo](History.md#undo)

## Constructors

### constructor

• **new History**()

Creates new instance of the API

#### Overrides

Events.constructor

#### Defined in

[src/history.js:19](https://github.com/playcanvas/editor-api/blob/82b05e2/src/history.js#L19)

## Accessors

### canRedo

• `get` **canRedo**(): `boolean`

Whether there are actions to redo

#### Returns

`boolean`

#### Defined in

[src/history.js:95](https://github.com/playcanvas/editor-api/blob/82b05e2/src/history.js#L95)

• `set` **canRedo**(`value`): `void`

Whether there are actions to redo

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/history.js:99](https://github.com/playcanvas/editor-api/blob/82b05e2/src/history.js#L99)

___

### canUndo

• `get` **canUndo**(): `boolean`

Whether there are any actions to undo

#### Returns

`boolean`

#### Defined in

[src/history.js:82](https://github.com/playcanvas/editor-api/blob/82b05e2/src/history.js#L82)

• `set` **canUndo**(`value`): `void`

Whether there are any actions to undo

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/history.js:86](https://github.com/playcanvas/editor-api/blob/82b05e2/src/history.js#L86)

___

### currentAction

• `get` **currentAction**(): [`HistoryAction`](../interfaces/HistoryAction.md)

Gets the current action

#### Returns

[`HistoryAction`](../interfaces/HistoryAction.md)

#### Defined in

[src/history.js:64](https://github.com/playcanvas/editor-api/blob/82b05e2/src/history.js#L64)

___

### lastAction

• `get` **lastAction**(): [`HistoryAction`](../interfaces/HistoryAction.md)

Gets the last action

#### Returns

[`HistoryAction`](../interfaces/HistoryAction.md)

#### Defined in

[src/history.js:73](https://github.com/playcanvas/editor-api/blob/82b05e2/src/history.js#L73)

## Methods

### add

▸ **add**(`action`): `void`

Adds history action

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | [`HistoryAction`](../interfaces/HistoryAction.md) | The action |

#### Returns

`void`

#### Defined in

[src/history.js:34](https://github.com/playcanvas/editor-api/blob/82b05e2/src/history.js#L34)

___

### clear

▸ **clear**(): `void`

Clear history

#### Returns

`void`

#### Defined in

[src/history.js:55](https://github.com/playcanvas/editor-api/blob/82b05e2/src/history.js#L55)

___

### redo

▸ **redo**(): `void`

Redo last action

#### Returns

`void`

#### Defined in

[src/history.js:48](https://github.com/playcanvas/editor-api/blob/82b05e2/src/history.js#L48)

___

### undo

▸ **undo**(): `void`

Undo last action

#### Returns

`void`

#### Defined in

[src/history.js:41](https://github.com/playcanvas/editor-api/blob/82b05e2/src/history.js#L41)
