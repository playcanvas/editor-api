[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / RealtimeScene

# Class: RealtimeScene

Represents a scene in sharedb

## Hierarchy

- `Events`

  ↳ **`RealtimeScene`**

## Table of contents

### Constructors

- [constructor](RealtimeScene.md#constructor)

### Properties

- [suspendEvents](RealtimeScene.md#suspendevents)

### Accessors

- [loaded](RealtimeScene.md#loaded)
- [data](RealtimeScene.md#data)
- [id](RealtimeScene.md#id)
- [uniqueId](RealtimeScene.md#uniqueid)

### Methods

- [on](RealtimeScene.md#on)
- [once](RealtimeScene.md#once)
- [emit](RealtimeScene.md#emit)
- [unbind](RealtimeScene.md#unbind)
- [addEmitter](RealtimeScene.md#addemitter)
- [removeEmitter](RealtimeScene.md#removeemitter)
- [load](RealtimeScene.md#load)
- [unload](RealtimeScene.md#unload)
- [addEntity](RealtimeScene.md#addentity)
- [removeEntity](RealtimeScene.md#removeentity)
- [submitOp](RealtimeScene.md#submitop)
- [whenNothingPending](RealtimeScene.md#whennothingpending)

## Constructors

### constructor

• **new RealtimeScene**(`uniqueId`, `realtime`, `connection`): [`RealtimeScene`](RealtimeScene.md)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uniqueId` | `number` | The unique scene id |
| `realtime` | [`Realtime`](Realtime.md) | The realtime API |
| `connection` | [`RealtimeConnection`](RealtimeConnection.md) | The realtime connection |

#### Returns

[`RealtimeScene`](RealtimeScene.md)

#### Overrides

Events.constructor

#### Defined in

[src/realtime/scene.js:20](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/scene.js#L20)

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

Whether the scene is loaded

#### Returns

`boolean`

#### Defined in

[src/realtime/scene.js:143](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/scene.js#L143)

___

### data

• `get` **data**(): `any`

The scene data

#### Returns

`any`

#### Defined in

[src/realtime/scene.js:152](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/scene.js#L152)

___

### id

• `get` **id**(): `number`

The scene id - used in combination with the branch id

#### Returns

`number`

#### Defined in

[src/realtime/scene.js:161](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/scene.js#L161)

___

### uniqueId

• `get` **uniqueId**(): `number`

The scene's unique id

#### Returns

`number`

#### Defined in

[src/realtime/scene.js:170](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/scene.js#L170)

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

Loads scene from sharedb and subscribes to changes.

#### Returns

`void`

#### Defined in

[src/realtime/scene.js:34](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/scene.js#L34)

___

### unload

▸ **unload**(): `void`

Unloads scene from sharedb and unsubscribes from changes.

#### Returns

`void`

#### Defined in

[src/realtime/scene.js:49](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/scene.js#L49)

___

### addEntity

▸ **addEntity**(`entity`): `void`

Add entity to scene

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [`Entity`](Entity.md) | The entity |

#### Returns

`void`

#### Defined in

[src/realtime/scene.js:70](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/scene.js#L70)

___

### removeEntity

▸ **removeEntity**(`entity`): `void`

Removes entity from scene (not from children of another entity)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [`Entity`](Entity.md) | The entity |

#### Returns

`void`

#### Defined in

[src/realtime/scene.js:82](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/scene.js#L82)

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

[src/realtime/scene.js:94](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/scene.js#L94)

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

[src/realtime/scene.js:111](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/realtime/scene.js#L111)
