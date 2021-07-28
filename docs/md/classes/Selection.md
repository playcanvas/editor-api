[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Selection

# Class: Selection

Selection API. Allows selecting Entities, Assets etc.

## Hierarchy

- `Events`

  ↳ **`Selection`**

## Table of contents

### Constructors

- [constructor](Selection.md#constructor)

### Accessors

- [count](Selection.md#count)
- [enabled](Selection.md#enabled)
- [history](Selection.md#history)
- [items](Selection.md#items)

### Methods

- [add](Selection.md#add)
- [clear](Selection.md#clear)
- [has](Selection.md#has)
- [remove](Selection.md#remove)
- [set](Selection.md#set)
- [toggle](Selection.md#toggle)

## Constructors

### constructor

• **new Selection**()

Creates new instance of API

#### Overrides

Events.constructor

#### Defined in

[src/selection.js:72](https://github.com/playcanvas/editor-api/blob/022e512/src/selection.js#L72)

## Accessors

### count

• `get` **count**(): `number`

Gets the number of selected items

#### Returns

`number`

#### Defined in

[src/selection.js:292](https://github.com/playcanvas/editor-api/blob/022e512/src/selection.js#L292)

___

### enabled

• `get` **enabled**(): `boolean`

Enables / disables the selection methods

#### Returns

`boolean`

#### Defined in

[src/selection.js:279](https://github.com/playcanvas/editor-api/blob/022e512/src/selection.js#L279)

• `set` **enabled**(`value`): `void`

Enables / disables the selection methods

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/selection.js:283](https://github.com/playcanvas/editor-api/blob/022e512/src/selection.js#L283)

___

### history

• `get` **history**(): [`SelectionHistory`](SelectionHistory.md)

Gets the selection history

#### Returns

[`SelectionHistory`](SelectionHistory.md)

#### Defined in

[src/selection.js:301](https://github.com/playcanvas/editor-api/blob/022e512/src/selection.js#L301)

___

### items

• `get` **items**(): `any`[]

Gets the selected items. This creates a new array every time it is called.

#### Returns

`any`[]

#### Defined in

[src/selection.js:270](https://github.com/playcanvas/editor-api/blob/022e512/src/selection.js#L270)

## Methods

### add

▸ **add**(`item`, `options?`): `void`

Add item to selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `any` | The item |
| `options` | `Object` | - |
| `options.history` | `boolean` | - |

#### Returns

`void`

#### Defined in

[src/selection.js:101](https://github.com/playcanvas/editor-api/blob/022e512/src/selection.js#L101)

___

### clear

▸ **clear**(`options?`): `void`

Clears selection

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.history` | `boolean` |

#### Returns

`void`

#### Defined in

[src/selection.js:204](https://github.com/playcanvas/editor-api/blob/022e512/src/selection.js#L204)

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

[src/selection.js:194](https://github.com/playcanvas/editor-api/blob/022e512/src/selection.js#L194)

___

### remove

▸ **remove**(`item`, `options?`): `void`

Remove item from selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `any` | The item |
| `options` | `Object` | - |
| `options.history` | `boolean` | - |

#### Returns

`void`

#### Defined in

[src/selection.js:132](https://github.com/playcanvas/editor-api/blob/022e512/src/selection.js#L132)

___

### set

▸ **set**(`items`, `options?`): `void`

Sets current selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | `any`[] | The items to select |
| `options` | `Object` | - |
| `options.history` | `boolean` | - |

#### Returns

`void`

#### Defined in

[src/selection.js:241](https://github.com/playcanvas/editor-api/blob/022e512/src/selection.js#L241)

___

### toggle

▸ **toggle**(`item`, `options?`): `void`

Toggle item selection

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `any` |
| `options` | `Object` |
| `options.history` | `boolean` |

#### Returns

`void`

#### Defined in

[src/selection.js:162](https://github.com/playcanvas/editor-api/blob/022e512/src/selection.js#L162)
