[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / RealtimeConnection

# Class: RealtimeConnection

Handles connecting and communicating with the Realtime server.

## Hierarchy

- `Events`

  ↳ **`RealtimeConnection`**

## Table of contents

### Constructors

- [constructor](RealtimeConnection.md#constructor)

### Properties

- [suspendEvents](RealtimeConnection.md#suspendevents)

### Accessors

- [connected](RealtimeConnection.md#connected)
- [authenticated](RealtimeConnection.md#authenticated)
- [sharedb](RealtimeConnection.md#sharedb)

### Methods

- [on](RealtimeConnection.md#on)
- [once](RealtimeConnection.md#once)
- [emit](RealtimeConnection.md#emit)
- [unbind](RealtimeConnection.md#unbind)
- [addEmitter](RealtimeConnection.md#addemitter)
- [removeEmitter](RealtimeConnection.md#removeemitter)
- [connect](RealtimeConnection.md#connect)
- [disconnect](RealtimeConnection.md#disconnect)
- [sendMessage](RealtimeConnection.md#sendmessage)
- [send](RealtimeConnection.md#send)
- [getDocument](RealtimeConnection.md#getdocument)
- [startBulkSubscribe](RealtimeConnection.md#startbulksubscribe)
- [endBulkSubscribe](RealtimeConnection.md#endbulksubscribe)

## Constructors

### constructor

• **new RealtimeConnection**(`realtime`): [`RealtimeConnection`](RealtimeConnection.md)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `realtime` | [`Realtime`](Realtime.md) | The realtime API |

#### Returns

[`RealtimeConnection`](RealtimeConnection.md)

#### Overrides

Events.constructor

#### Defined in

[src/realtime/connection.js:20](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/connection.js#L20)

## Properties

### suspendEvents

• **suspendEvents**: `boolean`

If true the observer will not emit events when values are set.

#### Inherited from

Events.suspendEvents

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:37

## Accessors

### connected

• `get` **connected**(): `boolean`

Whether the user is connected to the server

#### Returns

`boolean`

#### Defined in

[src/realtime/connection.js:228](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/connection.js#L228)

___

### authenticated

• `get` **authenticated**(): `boolean`

Whether the server has authenticated the user

#### Returns

`boolean`

#### Defined in

[src/realtime/connection.js:237](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/connection.js#L237)

___

### sharedb

• `get` **sharedb**(): `any`

Gets the sharedb instance

#### Returns

`any`

#### Defined in

[src/realtime/connection.js:246](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/connection.js#L246)

## Methods

### on

▸ **on**(`name`, `fn`): `EventHandle`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name |
| `fn` | `HandleEvent` | Callback function |

#### Returns

`EventHandle`

EventHandle

#### Inherited from

Events.on

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:43

___

### once

▸ **once**(`name`, `fn`): `EventHandle`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name |
| `fn` | `HandleEvent` | Callback function |

#### Returns

`EventHandle`

EventHandle

#### Inherited from

Events.once

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:49

___

### emit

▸ **emit**(`name`, `arg0?`, `arg1?`, `arg2?`, `arg3?`, `arg4?`, `arg5?`, `arg6?`, `arg7?`): `Events`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name |
| `arg0?` | `any` | First argument |
| `arg1?` | `any` | Second argument |
| `arg2?` | `any` | Third argument |
| `arg3?` | `any` | Fourth argument |
| `arg4?` | `any` | Fifth argument |
| `arg5?` | `any` | Sixth argument |
| `arg6?` | `any` | Seventh argument |
| `arg7?` | `any` | Eights argument |

#### Returns

`Events`

Self for chaining.

#### Inherited from

Events.emit

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:62

___

### unbind

▸ **unbind**(`name`, `fn`): `Events`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name |
| `fn` | `HandleEvent` | Callback function |

#### Returns

`Events`

- This

#### Inherited from

Events.unbind

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:68

___

### addEmitter

▸ **addEmitter**(`emitter`): `void`

Adds another emitter. Any events fired by this instance
will also be fired on the additional emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `Events` | The emitter |

#### Returns

`void`

#### Inherited from

Events.addEmitter

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:74

___

### removeEmitter

▸ **removeEmitter**(`emitter`): `void`

Removes emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `Events` | The emitter |

#### Returns

`void`

#### Inherited from

Events.removeEmitter

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:79

___

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

[src/realtime/connection.js:39](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/connection.js#L39)

___

### disconnect

▸ **disconnect**(): `void`

Disconnect from the server

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:77](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/connection.js#L77)

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

[src/realtime/connection.js:91](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/connection.js#L91)

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

[src/realtime/connection.js:100](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/connection.js#L100)

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

[src/realtime/connection.js:113](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/connection.js#L113)

___

### startBulkSubscribe

▸ **startBulkSubscribe**(): `void`

Start bulk subscribing to documents

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:120](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/connection.js#L120)

___

### endBulkSubscribe

▸ **endBulkSubscribe**(): `void`

Stop bulk subscribing to documents

#### Returns

`void`

#### Defined in

[src/realtime/connection.js:127](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/connection.js#L127)
