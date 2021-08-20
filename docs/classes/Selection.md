[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Selection

# Class: Selection

Selection API. Allows selecting Entities, Assets etc.

## Hierarchy

- `Events`

  ↳ **`Selection`**

## Table of contents

### Internal Constructors

- [constructor](Selection.md#constructor)

### Methods

- [add](Selection.md#add)
- [remove](Selection.md#remove)
- [toggle](Selection.md#toggle)
- [has](Selection.md#has)
- [clear](Selection.md#clear)
- [set](Selection.md#set)

### Accessors

- [items](Selection.md#items)
- [enabled](Selection.md#enabled)
- [count](Selection.md#count)
- [history](Selection.md#history)

## Internal Constructors

### constructor

• **new Selection**()

Constructor

**`category`** Internal

#### Overrides

Events.constructor

#### Defined in

[src/selection.js:80](https://github.com/playcanvas/editor-api/blob/f0df60d/src/selection.js#L80)

## Methods

### add

▸ **add**(`item`, `options?`): `void`

Add item to selection

**`example`**
```javascript
// add root entity to selection
editor.selection.add(editor.entities.root);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `any` | The item |
| `options` | `Object` | Options |
| `options.history` | `boolean` | Whether to record a history action. Defaults to true. |

#### Returns

`void`

#### Defined in

[src/selection.js:114](https://github.com/playcanvas/editor-api/blob/f0df60d/src/selection.js#L114)

___

### remove

▸ **remove**(`item`, `options?`): `void`

Remove item from selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `any` | The item |
| `options` | `Object` | Options |
| `options.history` | `boolean` | Whether to record a history action. Defaults to true. * @example ```javascript // remove root entity from selection editor.selection.remove(editor.entities.root); ``` |

#### Returns

`void`

#### Defined in

[src/selection.js:150](https://github.com/playcanvas/editor-api/blob/f0df60d/src/selection.js#L150)

___

### toggle

▸ **toggle**(`item`, `options?`): `void`

Toggle item selection

**`example`**
```javascript
// toggle root entity selection
editor.selection.toogle(editor.entities.root);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `any` | The item |
| `options` | `Object` | Options |
| `options.history` | `boolean` | Whether to record a history action. Defaults to true. |

#### Returns

`void`

#### Defined in

[src/selection.js:185](https://github.com/playcanvas/editor-api/blob/f0df60d/src/selection.js#L185)

___

### has

▸ **has**(`item`): `boolean`

Checks if item is in selection

**`example`**
```javascript
const isRootSelected = editor.selection.has(editor.entities.root);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `any` | The item |

#### Returns

`boolean`

If item is in selection

#### Defined in

[src/selection.js:221](https://github.com/playcanvas/editor-api/blob/f0df60d/src/selection.js#L221)

___

### clear

▸ **clear**(`options?`): `void`

Clears selection

**`example`**
```javascript
editor.selection.clear();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Options |
| `options.history` | `boolean` | Whether to record a history action. Defaults to true. |

#### Returns

`void`

#### Defined in

[src/selection.js:235](https://github.com/playcanvas/editor-api/blob/f0df60d/src/selection.js#L235)

___

### set

▸ **set**(`items`, `options?`): `void`

Sets current selection

**`example`**
```javascript
// select root entity
editor.selection.set([editor.entities.root]);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | `any`[] | The items to select |
| `options` | `Object` | Options |
| `options.history` | `boolean` | Whether to record a history action. Defaults to true. |

#### Returns

`void`

#### Defined in

[src/selection.js:278](https://github.com/playcanvas/editor-api/blob/f0df60d/src/selection.js#L278)

## Accessors

### items

• `get` **items**(): `any`[]

Gets the selected items. This creates a new array every time it is called.

#### Returns

`any`[]

#### Defined in

[src/selection.js:312](https://github.com/playcanvas/editor-api/blob/f0df60d/src/selection.js#L312)

___

### enabled

• `get` **enabled**(): `boolean`

Enables / disables the selection methods

#### Returns

`boolean`

#### Defined in

[src/selection.js:321](https://github.com/playcanvas/editor-api/blob/f0df60d/src/selection.js#L321)

• `set` **enabled**(`value`): `void`

Enables / disables the selection methods

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/selection.js:325](https://github.com/playcanvas/editor-api/blob/f0df60d/src/selection.js#L325)

___

### count

• `get` **count**(): `number`

Gets the number of selected items

#### Returns

`number`

#### Defined in

[src/selection.js:334](https://github.com/playcanvas/editor-api/blob/f0df60d/src/selection.js#L334)

___

### history

• `get` **history**(): [`SelectionHistory`](SelectionHistory.md)

Gets the selection history

#### Returns

[`SelectionHistory`](SelectionHistory.md)

#### Defined in

[src/selection.js:343](https://github.com/playcanvas/editor-api/blob/f0df60d/src/selection.js#L343)
