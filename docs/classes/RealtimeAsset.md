[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / RealtimeAsset

# Class: RealtimeAsset

Represents an asset in sharedb

## Hierarchy

- `Events`

  ↳ **`RealtimeAsset`**

## Table of contents

### Constructors

- [constructor](RealtimeAsset.md#constructor)

### Properties

- [suspendEvents](RealtimeAsset.md#suspendevents)

### Accessors

- [loaded](RealtimeAsset.md#loaded)
- [data](RealtimeAsset.md#data)
- [id](RealtimeAsset.md#id)
- [uniqueId](RealtimeAsset.md#uniqueid)

### Methods

- [on](RealtimeAsset.md#on)
- [once](RealtimeAsset.md#once)
- [emit](RealtimeAsset.md#emit)
- [unbind](RealtimeAsset.md#unbind)
- [addEmitter](RealtimeAsset.md#addemitter)
- [removeEmitter](RealtimeAsset.md#removeemitter)
- [load](RealtimeAsset.md#load)
- [unload](RealtimeAsset.md#unload)
- [submitOp](RealtimeAsset.md#submitop)
- [whenNothingPending](RealtimeAsset.md#whennothingpending)

## Constructors

### constructor

• **new RealtimeAsset**(`uniqueId`, `realtime`, `connection`): [`RealtimeAsset`](RealtimeAsset.md)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uniqueId` | `number` | The unique asset id |
| `realtime` | [`Realtime`](Realtime.md) | The realtime API |
| `connection` | [`RealtimeConnection`](RealtimeConnection.md) | The realtime connection |

#### Returns

[`RealtimeAsset`](RealtimeAsset.md)

#### Overrides

Events.constructor

#### Defined in

[src/realtime/asset.js:20](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/asset.js#L20)

## Properties

### suspendEvents

• **suspendEvents**: `boolean`

If true the observer will not emit events when values are set.

#### Inherited from

Events.suspendEvents

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:37

## Accessors

### loaded

• `get` **loaded**(): `boolean`

Whether the asset is loaded

#### Returns

`boolean`

#### Defined in

[src/realtime/asset.js:131](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/asset.js#L131)

___

### data

• `get` **data**(): `any`

The asset data

#### Returns

`any`

#### Defined in

[src/realtime/asset.js:140](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/asset.js#L140)

___

### id

• `get` **id**(): `number`

The asset id - used in combination with branch id

#### Returns

`number`

#### Defined in

[src/realtime/asset.js:149](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/asset.js#L149)

___

### uniqueId

• `get` **uniqueId**(): `number`

The asset's unique id

#### Returns

`number`

#### Defined in

[src/realtime/asset.js:158](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/asset.js#L158)

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

▸ **load**(): `void`

Loads asset from sharedb and subscribes to changes.

#### Returns

`void`

#### Defined in

[src/realtime/asset.js:34](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/asset.js#L34)

___

### unload

▸ **unload**(): `void`

Unloads asset from sharedb and unsubscribes from changes.

#### Returns

`void`

#### Defined in

[src/realtime/asset.js:49](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/asset.js#L49)

___

### submitOp

▸ **submitOp**(`op`): `void`

Submits sharedb operation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `op` | `any` | The operation |

#### Returns

`void`

#### Defined in

[src/realtime/asset.js:68](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/asset.js#L68)

___

### whenNothingPending

▸ **whenNothingPending**(`callback`): `void`

Calls the callback when there are no changes pending to be
sent to the server

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | The callback |

#### Returns

`void`

#### Defined in

[src/realtime/asset.js:85](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/asset.js#L85)
