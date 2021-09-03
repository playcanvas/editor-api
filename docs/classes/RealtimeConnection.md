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

[src/realtime/connection.js:20](https://github.com/playcanvas/editor-api/blob/9178f92/src/realtime/connection.js#L20)

## Methods

### connect

▸ **connect**(`url`): `void`

Connect to the realtime server

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The server URL |

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:39](https://github.com/playcanvas/editor-api/blob/9178f92/src/realtime/connection.js#L39)

___

### disconnect

▸ **disconnect**(): `void`

Disconnect from the server

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:77](https://github.com/playcanvas/editor-api/blob/9178f92/src/realtime/connection.js#L77)

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

[src/realtime/connection.js:91](https://github.com/playcanvas/editor-api/blob/9178f92/src/realtime/connection.js#L91)

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

[src/realtime/connection.js:100](https://github.com/playcanvas/editor-api/blob/9178f92/src/realtime/connection.js#L100)

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

[src/realtime/connection.js:113](https://github.com/playcanvas/editor-api/blob/9178f92/src/realtime/connection.js#L113)

___

### startBulkSubscribe

▸ **startBulkSubscribe**(): `void`

Start bulk subscribing to documents

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:120](https://github.com/playcanvas/editor-api/blob/9178f92/src/realtime/connection.js#L120)

___

### endBulkSubscribe

▸ **endBulkSubscribe**(): `void`

Stop bulk subscribing to documents

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:127](https://github.com/playcanvas/editor-api/blob/9178f92/src/realtime/connection.js#L127)

## Accessors

### connected

• `get` **connected**(): `boolean`

Whether the user is connected to the server

#### Returns

`boolean`

#### Defined in

[src/realtime/connection.js:266](https://github.com/playcanvas/editor-api/blob/9178f92/src/realtime/connection.js#L266)

___

### authenticated

• `get` **authenticated**(): `boolean`

Whether the server has authenticated the user

#### Returns

`boolean`

#### Defined in

[src/realtime/connection.js:275](https://github.com/playcanvas/editor-api/blob/9178f92/src/realtime/connection.js#L275)

___

### sharedb

• `get` **sharedb**(): `any`

Gets the sharedb instance

#### Returns

`any`

#### Defined in

[src/realtime/connection.js:284](https://github.com/playcanvas/editor-api/blob/9178f92/src/realtime/connection.js#L284)
