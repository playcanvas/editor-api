[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / RealtimeScenes

# Class: RealtimeScenes

Provides methods to load scenes from sharedb

## Hierarchy

- `Events`

  ↳ **`RealtimeScenes`**

## Table of contents

### Constructors

- [constructor](RealtimeScenes.md#constructor)

### Properties

- [suspendEvents](RealtimeScenes.md#suspendevents)

### Accessors

- [current](RealtimeScenes.md#current)

### Methods

- [on](RealtimeScenes.md#on)
- [once](RealtimeScenes.md#once)
- [emit](RealtimeScenes.md#emit)
- [unbind](RealtimeScenes.md#unbind)
- [addEmitter](RealtimeScenes.md#addemitter)
- [removeEmitter](RealtimeScenes.md#removeemitter)
- [load](RealtimeScenes.md#load)
- [unload](RealtimeScenes.md#unload)

## Constructors

### constructor

• **new RealtimeScenes**(`realtime`, `connection`): [`RealtimeScenes`](RealtimeScenes.md)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `realtime` | [`Realtime`](Realtime.md) | The realtime API |
| `connection` | [`RealtimeConnection`](RealtimeConnection.md) | The realtime connection |

#### Returns

[`RealtimeScenes`](RealtimeScenes.md)

#### Overrides

Events.constructor

#### Defined in

[src/realtime/scenes.js:19](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/scenes.js#L19)

## Properties

### suspendEvents

• **suspendEvents**: `boolean`

If true the observer will not emit events when values are set.

#### Inherited from

Events.suspendEvents

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:37

## Accessors

### current

• `get` **current**(): [`RealtimeScene`](RealtimeScene.md)

The current scene

#### Returns

[`RealtimeScene`](RealtimeScene.md)

#### Defined in

[src/realtime/scenes.js:72](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/scenes.js#L72)

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

### load

▸ **load**(`sceneId`): [`RealtimeScene`](RealtimeScene.md)

Loads a scene

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sceneId` | `number` | The scene id |

#### Returns

[`RealtimeScene`](RealtimeScene.md)

The scene

#### Defined in

[src/realtime/scenes.js:33](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/scenes.js#L33)

___

### unload

▸ **unload**(`sceneId`): `void`

Unloads a scene

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sceneId` | `number` | The scene id |

#### Returns

`void`

#### Defined in

[src/realtime/scenes.js:56](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/scenes.js#L56)
