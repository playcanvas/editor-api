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

[src/realtime/connection.js:16](https://github.com/playcanvas/editor-api/blob/3c9e682/src/realtime/connection.js#L16)

## Accessors

### authenticated

• `get` **authenticated**(): `boolean`

Whether the server has authenticated the user

#### Returns

`boolean`

#### Defined in

[src/realtime/connection.js:266](https://github.com/playcanvas/editor-api/blob/3c9e682/src/realtime/connection.js#L266)

___

### connected

• `get` **connected**(): `boolean`

Whether the user is connected to the server

#### Returns

`boolean`

#### Defined in

[src/realtime/connection.js:257](https://github.com/playcanvas/editor-api/blob/3c9e682/src/realtime/connection.js#L257)

___

### sharedb

• `get` **sharedb**(): `any`

Gets the sharedb instance

#### Returns

`any`

#### Defined in

[src/realtime/connection.js:275](https://github.com/playcanvas/editor-api/blob/3c9e682/src/realtime/connection.js#L275)

## Methods

### connect

▸ **connect**(): `void`

Connect to the realtime server

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:32](https://github.com/playcanvas/editor-api/blob/3c9e682/src/realtime/connection.js#L32)

___

### disconnect

▸ **disconnect**(): `void`

Disconnect from the server

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:68](https://github.com/playcanvas/editor-api/blob/3c9e682/src/realtime/connection.js#L68)

___

### endBulkSubscribe

▸ **endBulkSubscribe**(): `void`

Stop bulk subscribing to documents

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:118](https://github.com/playcanvas/editor-api/blob/3c9e682/src/realtime/connection.js#L118)

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

[src/realtime/connection.js:104](https://github.com/playcanvas/editor-api/blob/3c9e682/src/realtime/connection.js#L104)

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

[src/realtime/connection.js:91](https://github.com/playcanvas/editor-api/blob/3c9e682/src/realtime/connection.js#L91)

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

[src/realtime/connection.js:82](https://github.com/playcanvas/editor-api/blob/3c9e682/src/realtime/connection.js#L82)

___

### startBulkSubscribe

▸ **startBulkSubscribe**(): `void`

Start bulk subscribing to documents

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:111](https://github.com/playcanvas/editor-api/blob/3c9e682/src/realtime/connection.js#L111)
