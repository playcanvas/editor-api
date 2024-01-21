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

### Properties

- [suspendEvents](Messenger.md#suspendevents)

### Accessors

- [isConnected](Messenger.md#isconnected)

### Methods

- [on](Messenger.md#on)
- [once](Messenger.md#once)
- [emit](Messenger.md#emit)
- [unbind](Messenger.md#unbind)
- [addEmitter](Messenger.md#addemitter)
- [removeEmitter](Messenger.md#removeemitter)
- [connect](Messenger.md#connect)

## Constructors

### constructor

• **new Messenger**(`messenger`): [`Messenger`](Messenger.md)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `messenger` | `any` | The instance of the Messenger client - this is a different class which requires the Messenger client library to be downloaded. |

#### Returns

[`Messenger`](Messenger.md)

#### Overrides

Events.constructor

#### Defined in

[src/messenger.js:17](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/messenger.js#L17)

## Properties

### suspendEvents

• **suspendEvents**: `boolean`

If true the observer will not emit events when values are set.

#### Inherited from

Events.suspendEvents

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:37

## Accessors

### isConnected

• `get` **isConnected**(): `boolean`

Returns true if we are connected to the messenger server.

#### Returns

`boolean`

#### Defined in

[src/messenger.js:56](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/messenger.js#L56)

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

Connects to the messenger server.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The server URL |

#### Returns

`void`

#### Defined in

[src/messenger.js:46](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/messenger.js#L46)
