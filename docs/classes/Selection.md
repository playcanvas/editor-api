[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Selection

# Class: Selection

Selection API. Allows selecting Entities, Assets etc.

## Hierarchy

- `Events`

  ↳ **`Selection`**

## Table of contents

### Constructors

- [constructor](Selection.md#constructor)

### Methods

- [add](Selection.md#add)
- [remove](Selection.md#remove)
- [toggle](Selection.md#toggle)
- [has](Selection.md#has)
- [clear](Selection.md#clear)

### Accessors

- [items](Selection.md#items)
- [enabled](Selection.md#enabled)
- [count](Selection.md#count)
- [history](Selection.md#history)

## Constructors

### constructor

• **new Selection**()

Creates new instance of API

#### Overrides

Events.constructor

#### Defined in

[src/selection.js:74](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/selection.js#L74)

## Methods

### add

▸ **add**(`item`): `void`

Add item to selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `any` | The item |

#### Returns

`void`

#### Defined in

[src/selection.js:101](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/selection.js#L101)

___

### remove

▸ **remove**(`item`): `void`

Remove item from selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `any` | The item |

#### Returns

`void`

#### Defined in

[src/selection.js:121](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/selection.js#L121)

___

### toggle

▸ **toggle**(`item`): `void`

Toggle item selection

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `any` |

#### Returns

`void`

#### Defined in

[src/selection.js:139](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/selection.js#L139)

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

#### Defined in

[src/selection.js:161](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/selection.js#L161)

___

### clear

▸ **clear**(): `void`

Clears selection

#### Returns

`void`

#### Defined in

[src/selection.js:168](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/selection.js#L168)

## Accessors

### items

• `get` **items**(): `any`[]

Gets / sets the selected items

#### Returns

`any`[]

#### Defined in

[src/selection.js:194](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/selection.js#L194)

• `set` **items**(`value`): `void`

Gets / sets the selected items

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any`[] |

#### Returns

`void`

#### Defined in

[src/selection.js:198](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/selection.js#L198)

___

### enabled

• `get` **enabled**(): `boolean`

Enables / disables the selection methods

#### Returns

`boolean`

#### Defined in

[src/selection.js:218](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/selection.js#L218)

• `set` **enabled**(`value`): `void`

Enables / disables the selection methods

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/selection.js:222](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/selection.js#L222)

___

### count

• `get` **count**(): `number`

Gets the number of selected items

#### Returns

`number`

#### Defined in

[src/selection.js:231](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/selection.js#L231)

___

### history

• `get` **history**(): [`SelectionHistory`](SelectionHistory.md)

Gets the selection history

#### Returns

[`SelectionHistory`](SelectionHistory.md)

#### Defined in

[src/selection.js:240](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/selection.js#L240)
