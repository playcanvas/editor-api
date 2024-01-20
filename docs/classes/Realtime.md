[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Realtime

# Class: Realtime

Provides methods to communicate and load / save data to the realtime server

## Hierarchy

- `Events`

  ↳ **`Realtime`**

## Table of contents

### Properties

- [suspendEvents](Realtime.md#suspendevents)

### Accessors

- [connection](Realtime.md#connection)
- [scenes](Realtime.md#scenes)
- [assets](Realtime.md#assets)

### Methods

- [on](Realtime.md#on)
- [once](Realtime.md#once)
- [emit](Realtime.md#emit)
- [unbind](Realtime.md#unbind)
- [addEmitter](Realtime.md#addemitter)
- [removeEmitter](Realtime.md#removeemitter)

## Properties

### suspendEvents

• **suspendEvents**: `boolean`

If true the observer will not emit events when values are set.

#### Inherited from

Events.suspendEvents

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:37

## Accessors

### connection

• `get` **connection**(): [`RealtimeConnection`](RealtimeConnection.md)

Gets the realtime connection

#### Returns

[`RealtimeConnection`](RealtimeConnection.md)

#### Defined in

[src/realtime.js:24](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime.js#L24)

___

### scenes

• `get` **scenes**(): [`RealtimeScenes`](RealtimeScenes.md)

Gets the realtime scenes API

#### Returns

[`RealtimeScenes`](RealtimeScenes.md)

#### Defined in

[src/realtime.js:33](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime.js#L33)

___

### assets

• `get` **assets**(): [`RealtimeAssets`](RealtimeAssets.md)

Gets the realtime assets API

#### Returns

[`RealtimeAssets`](RealtimeAssets.md)

#### Defined in

[src/realtime.js:42](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime.js#L42)

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
