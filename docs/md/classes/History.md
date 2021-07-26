[PlayCanvas Editor API](../docs/md/README.md) / [Exports](../modules.md) / History

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

[src/history.js:10](https://github.com/playcanvas/editor-api/blob/81ce39f/src/history.js#L10)

## Accessors

### canRedo

• `get` **canRedo**(): `boolean`

Whether there are actions to redo

#### Returns

`boolean`

#### Defined in

[src/history.js:89](https://github.com/playcanvas/editor-api/blob/81ce39f/src/history.js#L89)

• `set` **canRedo**(`value`): `void`

Whether there are actions to redo

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/history.js:93](https://github.com/playcanvas/editor-api/blob/81ce39f/src/history.js#L93)

___

### canUndo

• `get` **canUndo**(): `boolean`

Whether there are any actions to undo

#### Returns

`boolean`

#### Defined in

[src/history.js:76](https://github.com/playcanvas/editor-api/blob/81ce39f/src/history.js#L76)

• `set` **canUndo**(`value`): `void`

Whether there are any actions to undo

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/history.js:80](https://github.com/playcanvas/editor-api/blob/81ce39f/src/history.js#L80)

___

### currentAction

• `get` **currentAction**(): `any`

Gets the current action

#### Returns

`any`

#### Defined in

[src/history.js:58](https://github.com/playcanvas/editor-api/blob/81ce39f/src/history.js#L58)

___

### lastAction

• `get` **lastAction**(): `any`

Gets the last action

#### Returns

`any`

#### Defined in

[src/history.js:67](https://github.com/playcanvas/editor-api/blob/81ce39f/src/history.js#L67)

## Methods

### add

▸ **add**(`action`): `void`

Adds history action

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `Object` | The action |
| `action.name` | `string` | The action name |
| `action.redo` | `Function` | The redo function |
| `action.undo` | `Function` | The undo function |

#### Returns

`void`

#### Defined in

[src/history.js:28](https://github.com/playcanvas/editor-api/blob/81ce39f/src/history.js#L28)

___

### clear

▸ **clear**(): `void`

Clear history

#### Returns

`void`

#### Defined in

[src/history.js:49](https://github.com/playcanvas/editor-api/blob/81ce39f/src/history.js#L49)

___

### redo

▸ **redo**(): `void`

Redo last action

#### Returns

`void`

#### Defined in

[src/history.js:42](https://github.com/playcanvas/editor-api/blob/81ce39f/src/history.js#L42)

___

### undo

▸ **undo**(): `void`

Undo last action

#### Returns

`void`

#### Defined in

[src/history.js:35](https://github.com/playcanvas/editor-api/blob/81ce39f/src/history.js#L35)
