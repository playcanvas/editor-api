[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / RealtimeConnection

# Class: RealtimeConnection

Handles connecting and communicating with the Realtime server.

## Hierarchy

- `Events`

  ↳ **`RealtimeConnection`**

## Table of contents

### Constructors

- [constructor](RealtimeConnection.md#constructor)

### Accessors

- [authenticated](RealtimeConnection.md#authenticated)
- [connected](RealtimeConnection.md#connected)
- [sharedb](RealtimeConnection.md#sharedb)

### Methods

- [connect](RealtimeConnection.md#connect)
- [disconnect](RealtimeConnection.md#disconnect)
- [endBulkSubscribe](RealtimeConnection.md#endbulksubscribe)
- [getDocument](RealtimeConnection.md#getdocument)
- [send](RealtimeConnection.md#send)
- [sendMessage](RealtimeConnection.md#sendmessage)
- [startBulkSubscribe](RealtimeConnection.md#startbulksubscribe)

## Constructors

### constructor

• **new RealtimeConnection**(`realtime`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `realtime` | [`Realtime`](Realtime.md) | The realtime API |

#### Overrides

Events.constructor

#### Defined in

[src/realtime/connection.js:19](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/connection.js#L19)

## Accessors

### authenticated

• `get` **authenticated**(): `boolean`

Whether the server has authenticated the user

#### Returns

`boolean`

#### Defined in

[src/realtime/connection.js:268](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/connection.js#L268)

___

### connected

• `get` **connected**(): `boolean`

Whether the user is connected to the server

#### Returns

`boolean`

#### Defined in

[src/realtime/connection.js:259](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/connection.js#L259)

___

### sharedb

• `get` **sharedb**(): `any`

Gets the sharedb instance

#### Returns

`any`

#### Defined in

[src/realtime/connection.js:277](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/connection.js#L277)

## Methods

### connect

▸ **connect**(): `void`

Connect to the realtime server

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:34](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/connection.js#L34)

___

### disconnect

▸ **disconnect**(): `void`

Disconnect from the server

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:70](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/connection.js#L70)

___

### endBulkSubscribe

▸ **endBulkSubscribe**(): `void`

Stop bulk subscribing to documents

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:120](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/connection.js#L120)

___

### getDocument

▸ **getDocument**(`collection`, `id`): `any`

Gets a sharedb document

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `string` | The collection name |
| `id` | `string` | The document id |

#### Returns

`any`

The sharedb document

#### Defined in

[src/realtime/connection.js:106](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/connection.js#L106)

___

### send

▸ **send**(`data`): `void`

Sends a string to the server

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | The message data |

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:93](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/connection.js#L93)

___

### sendMessage

▸ **sendMessage**(`name`, `data`): `void`

Send message to server

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The message name |
| `data` | `any` | The message data |

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:84](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/connection.js#L84)

___

### startBulkSubscribe

▸ **startBulkSubscribe**(): `void`

Start bulk subscribing to documents

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:113](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/connection.js#L113)
