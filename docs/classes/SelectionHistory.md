[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / SelectionHistory

# Class: SelectionHistory

Enables undo / redo of selection changes

## Table of contents

### Constructors

- [constructor](SelectionHistory.md#constructor)

### Accessors

- [enabled](SelectionHistory.md#enabled)

## Public

### enabled

• `set` **enabled**(`value`): `void`

Disables / enables selection undo / redo

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/selection.js:25](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/selection.js#L25)

## Internal

### constructor

• **new SelectionHistory**(`selection`): [`SelectionHistory`](SelectionHistory.md)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selection` | [`Selection`](Selection.md) | The selection API |

#### Returns

[`SelectionHistory`](SelectionHistory.md)

#### Defined in

[src/selection.js:14](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/selection.js#L14)
