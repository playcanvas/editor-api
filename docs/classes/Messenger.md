[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Messenger

# Class: Messenger

The Messenger API. The messenger receives messages
when various things happen e.g. an asset is created etc.

## Hierarchy

- `Events`

  ↳ **`Messenger`**

## Table of contents

### Constructors

- [constructor](Messenger.md#constructor)

### Methods

- [connect](Messenger.md#connect)

### Accessors

- [isConnected](Messenger.md#isconnected)

## Constructors

### constructor

• **new Messenger**(`messenger`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `messenger` | `any` | The instance of the Messenger client - this is a different class which requires the Messenger client library to be downloaded. |

#### Overrides

Events.constructor

#### Defined in

[src/messenger.js:17](https://github.com/playcanvas/editor-api/blob/ef0d9ab/src/messenger.js#L17)

## Methods

### connect

▸ **connect**(`url`): `void`

Connects to the messenger server.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The server URL |

#### Returns

`void`

#### Defined in

[src/messenger.js:46](https://github.com/playcanvas/editor-api/blob/ef0d9ab/src/messenger.js#L46)

## Accessors

### isConnected

• `get` **isConnected**(): `boolean`

Returns true if we are connected to the messenger server.

#### Returns

`boolean`

#### Defined in

[src/messenger.js:56](https://github.com/playcanvas/editor-api/blob/ef0d9ab/src/messenger.js#L56)
