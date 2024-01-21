[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / RealtimeAssets

# Class: RealtimeAssets

Provides methods to load assets from sharedb

## Hierarchy

- `Events`

  ↳ **`RealtimeAssets`**

## Table of contents

### Constructors

- [constructor](RealtimeAssets.md#constructor)

### Properties

- [suspendEvents](RealtimeAssets.md#suspendevents)

### Methods

- [on](RealtimeAssets.md#on)
- [once](RealtimeAssets.md#once)
- [emit](RealtimeAssets.md#emit)
- [unbind](RealtimeAssets.md#unbind)
- [addEmitter](RealtimeAssets.md#addemitter)
- [removeEmitter](RealtimeAssets.md#removeemitter)
- [load](RealtimeAssets.md#load)
- [get](RealtimeAssets.md#get)
- [unload](RealtimeAssets.md#unload)

## Constructors

### constructor

• **new RealtimeAssets**(`realtime`, `connection`): [`RealtimeAssets`](RealtimeAssets.md)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `realtime` | [`Realtime`](Realtime.md) | The realtime API |
| `connection` | [`RealtimeConnection`](RealtimeConnection.md) | The realtime connection |

#### Returns

[`RealtimeAssets`](RealtimeAssets.md)

#### Overrides

Events.constructor

#### Defined in

[src/realtime/assets.js:19](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/assets.js#L19)

## Properties

### suspendEvents

• **suspendEvents**: `boolean`

If true the observer will not emit events when values are set.

#### Inherited from

Events.suspendEvents

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:37

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

▸ **load**(`id`): [`RealtimeAsset`](RealtimeAsset.md)

Loads an asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The asset's unique id |

#### Returns

[`RealtimeAsset`](RealtimeAsset.md)

The asset

#### Defined in

[src/realtime/assets.js:32](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/assets.js#L32)

___

### get

▸ **get**(`id`): [`RealtimeAsset`](RealtimeAsset.md)

Gets an already loaded asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The asset's unique id |

#### Returns

[`RealtimeAsset`](RealtimeAsset.md)

The asset

#### Defined in

[src/realtime/assets.js:52](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/assets.js#L52)

___

### unload

▸ **unload**(`id`): `void`

Unloads an asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The asset's unique id |

#### Returns

`void`

#### Defined in

[src/realtime/assets.js:61](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/assets.js#L61)
