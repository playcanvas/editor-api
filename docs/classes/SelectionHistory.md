[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / SelectionHistory

# Class: SelectionHistory

Enables undo / redo of selection changes

## Table of contents

### Internal Constructors

- [constructor](SelectionHistory.md#constructor)

### Accessors

- [enabled](SelectionHistory.md#enabled)

## Internal Constructors

### constructor

• **new SelectionHistory**(`selection`)

Constructor

**`category`** Internal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selection` | [`Selection`](Selection.md) | The selection API |

#### Defined in

[src/selection.js:14](https://github.com/playcanvas/editor-api/blob/b3fdbb7/src/selection.js#L14)

## Accessors

### enabled

• `get` **enabled**(): `boolean`

Disables / enables selection undo / redo

#### Returns

`boolean`

#### Defined in

[src/selection.js:25](https://github.com/playcanvas/editor-api/blob/b3fdbb7/src/selection.js#L25)

• `set` **enabled**(`value`): `void`

Disables / enables selection undo / redo

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/selection.js:29](https://github.com/playcanvas/editor-api/blob/b3fdbb7/src/selection.js#L29)
