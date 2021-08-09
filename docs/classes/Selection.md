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

[src/selection.js:82](https://github.com/playcanvas/editor-api/blob/867701a/src/selection.js#L82)

## Methods

### add

▸ **add**(`item`): `void`

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

#### Returns

`void`

#### Defined in

[src/selection.js:114](https://github.com/playcanvas/editor-api/blob/867701a/src/selection.js#L114)

___

### remove

▸ **remove**(`item`): `void`

Remove item from selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `any` | The item * @example ```javascript // remove root entity from selection editor.selection.remove(editor.entities.root); ``` |

#### Returns

`void`

#### Defined in

[src/selection.js:139](https://github.com/playcanvas/editor-api/blob/867701a/src/selection.js#L139)

___

### toggle

▸ **toggle**(`item`): `void`

Toggle item selection

**`example`**
```javascript
// toggle root entity selection
editor.selection.toogle(editor.entities.root);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `any` |

#### Returns

`void`

#### Defined in

[src/selection.js:162](https://github.com/playcanvas/editor-api/blob/867701a/src/selection.js#L162)

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

[src/selection.js:188](https://github.com/playcanvas/editor-api/blob/867701a/src/selection.js#L188)

___

### clear

▸ **clear**(): `void`

Clears selection

**`example`**
```javascript
editor.selection.clear();
```

#### Returns

`void`

#### Defined in

[src/selection.js:200](https://github.com/playcanvas/editor-api/blob/867701a/src/selection.js#L200)

## Accessors

### items

• `get` **items**(): `any`[]

Gets / sets the selected items

**`example`**
```javascript
editor.selection.items.add(editor.entities.root);
const selectedEntities = editor.selection.items;
```

#### Returns

`any`[]

#### Defined in

[src/selection.js:231](https://github.com/playcanvas/editor-api/blob/867701a/src/selection.js#L231)

• `set` **items**(`value`): `void`

Gets / sets the selected items

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any`[] |

#### Returns

`void`

#### Defined in

[src/selection.js:235](https://github.com/playcanvas/editor-api/blob/867701a/src/selection.js#L235)

___

### enabled

• `get` **enabled**(): `boolean`

Enables / disables the selection methods

#### Returns

`boolean`

#### Defined in

[src/selection.js:255](https://github.com/playcanvas/editor-api/blob/867701a/src/selection.js#L255)

• `set` **enabled**(`value`): `void`

Enables / disables the selection methods

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/selection.js:259](https://github.com/playcanvas/editor-api/blob/867701a/src/selection.js#L259)

___

### count

• `get` **count**(): `number`

Gets the number of selected items

#### Returns

`number`

#### Defined in

[src/selection.js:268](https://github.com/playcanvas/editor-api/blob/867701a/src/selection.js#L268)

___

### history

• `get` **history**(): [`SelectionHistory`](SelectionHistory.md)

Gets the selection history

#### Returns

[`SelectionHistory`](SelectionHistory.md)

#### Defined in

[src/selection.js:277](https://github.com/playcanvas/editor-api/blob/867701a/src/selection.js#L277)
