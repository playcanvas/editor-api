[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Clipboard

# Class: Clipboard

Represents a custom clipboard with a specific name
which stores a value in localStorage under that name

## Table of contents

### Constructors

- [constructor](Clipboard.md#constructor)

### Accessors

- [empty](Clipboard.md#empty)
- [value](Clipboard.md#value)

## Constructors

### constructor

• **new Clipboard**(`name`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the clipboard. |

#### Defined in

[src/clipboard.js:15](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/clipboard.js#L15)

## Accessors

### empty

• `get` **empty**(): `boolean`

Gets whether the clipboard is empty

#### Returns

`boolean`

#### Defined in

[src/clipboard.js:26](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/clipboard.js#L26)

___

### value

• `get` **value**(): `any`

Gets the value stored in the clipboard.

#### Returns

`any`

#### Defined in

[src/clipboard.js:35](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/clipboard.js#L35)

• `set` **value**(`value`): `void`

Sets the value to be stored in the clipboard. Pass null to clear the value from storage.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[src/clipboard.js:44](https://github.com/playcanvas/editor-api/blob/10ca2e4/src/clipboard.js#L44)
