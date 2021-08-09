[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / RealtimeConnection

# Class: RealtimeConnection

Handles connecting and communicating with the Realtime server.

## Hierarchy

- `Events`

  ↳ **`RealtimeConnection`**

## Table of contents

### Constructors

- [constructor](RealtimeConnection.md#constructor)

### Methods

- [connect](RealtimeConnection.md#connect)
- [disconnect](RealtimeConnection.md#disconnect)
- [sendMessage](RealtimeConnection.md#sendmessage)
- [send](RealtimeConnection.md#send)
- [getDocument](RealtimeConnection.md#getdocument)
- [startBulkSubscribe](RealtimeConnection.md#startbulksubscribe)
- [endBulkSubscribe](RealtimeConnection.md#endbulksubscribe)

### Accessors

- [connected](RealtimeConnection.md#connected)
- [authenticated](RealtimeConnection.md#authenticated)
- [sharedb](RealtimeConnection.md#sharedb)

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

[src/realtime/connection.js:21](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/realtime/connection.js#L21)

## Methods

### connect

▸ **connect**(): `void`

Connect to the realtime server

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:36](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/realtime/connection.js#L36)

___

### disconnect

▸ **disconnect**(): `void`

Disconnect from the server

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:72](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/realtime/connection.js#L72)

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

[src/realtime/connection.js:86](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/realtime/connection.js#L86)

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

[src/realtime/connection.js:95](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/realtime/connection.js#L95)

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

[src/realtime/connection.js:108](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/realtime/connection.js#L108)

___

### startBulkSubscribe

▸ **startBulkSubscribe**(): `void`

Start bulk subscribing to documents

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:115](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/realtime/connection.js#L115)

___

### endBulkSubscribe

▸ **endBulkSubscribe**(): `void`

Stop bulk subscribing to documents

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:122](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/realtime/connection.js#L122)

## Accessors

### connected

• `get` **connected**(): `boolean`

Whether the user is connected to the server

#### Returns

`boolean`

#### Defined in

[src/realtime/connection.js:261](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/realtime/connection.js#L261)

___

### authenticated

• `get` **authenticated**(): `boolean`

Whether the server has authenticated the user

#### Returns

`boolean`

#### Defined in

[src/realtime/connection.js:270](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/realtime/connection.js#L270)

___

### sharedb

• `get` **sharedb**(): `any`

Gets the sharedb instance

#### Returns

`any`

#### Defined in

[src/realtime/connection.js:279](https://github.com/playcanvas/editor-api/blob/6c8e33e/src/realtime/connection.js#L279)
