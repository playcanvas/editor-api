[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / LocalStorage

# Class: LocalStorage

Wrapper around native local storage

## Table of contents

### Constructors

- [constructor](LocalStorage.md#constructor)

### Methods

- [get](LocalStorage.md#get)
- [set](LocalStorage.md#set)
- [unset](LocalStorage.md#unset)
- [has](LocalStorage.md#has)

## Constructors

### constructor

• **new LocalStorage**()

Constructor

#### Defined in

[src/localstorage.js:10](https://github.com/playcanvas/editor-api/blob/43e144d/src/localstorage.js#L10)

## Methods

### get

▸ **get**(`key`): `any`

Gets a key from localStorage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key |

#### Returns

`any`

The value

#### Defined in

[src/localstorage.js:20](https://github.com/playcanvas/editor-api/blob/43e144d/src/localstorage.js#L20)

___

### set

▸ **set**(`key`, `value`): `void`

Stores a key-value to localStorage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key |
| `value` | `any` | The value |

#### Returns

`void`

#### Defined in

[src/localstorage.js:48](https://github.com/playcanvas/editor-api/blob/43e144d/src/localstorage.js#L48)

___

### unset

▸ **unset**(`key`): `void`

Removes a key from localStorage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key |

#### Returns

`void`

#### Defined in

[src/localstorage.js:62](https://github.com/playcanvas/editor-api/blob/43e144d/src/localstorage.js#L62)

___

### has

▸ **has**(`key`): `boolean`

Checks if key exists in local storage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key |

#### Returns

`boolean`

True or false

#### Defined in

[src/localstorage.js:72](https://github.com/playcanvas/editor-api/blob/43e144d/src/localstorage.js#L72)
