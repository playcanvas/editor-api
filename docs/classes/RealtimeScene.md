[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / RealtimeScene

# Class: RealtimeScene

Represents a scene in sharedb

## Hierarchy

- `Events`

  ↳ **`RealtimeScene`**

## Table of contents

### Constructors

- [constructor](RealtimeScene.md#constructor)

### Methods

- [load](RealtimeScene.md#load)
- [unload](RealtimeScene.md#unload)
- [addEntity](RealtimeScene.md#addentity)
- [removeEntity](RealtimeScene.md#removeentity)
- [submitOp](RealtimeScene.md#submitop)
- [whenNothingPending](RealtimeScene.md#whennothingpending)

### Accessors

- [loaded](RealtimeScene.md#loaded)
- [data](RealtimeScene.md#data)
- [id](RealtimeScene.md#id)
- [uniqueId](RealtimeScene.md#uniqueid)

## Constructors

### constructor

• **new RealtimeScene**(`uniqueId`, `realtime`, `connection`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uniqueId` | `number` | The unique scene id |
| `realtime` | [`Realtime`](Realtime.md) | The realtime API |
| `connection` | [`RealtimeConnection`](RealtimeConnection.md) | The realtime connection |

#### Overrides

Events.constructor

#### Defined in

[src/realtime/scene.js:20](https://github.com/playcanvas/editor-api/blob/ffe57c6/src/realtime/scene.js#L20)

## Methods

### load

▸ **load**(): `void`

Loads scene from sharedb and subscribes to changes.

#### Returns

`void`

#### Defined in

[src/realtime/scene.js:34](https://github.com/playcanvas/editor-api/blob/ffe57c6/src/realtime/scene.js#L34)

___

### unload

▸ **unload**(): `void`

Unloads scene from sharedb and unsubscribes from changes.

#### Returns

`void`

#### Defined in

[src/realtime/scene.js:49](https://github.com/playcanvas/editor-api/blob/ffe57c6/src/realtime/scene.js#L49)

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

[src/realtime/scene.js:70](https://github.com/playcanvas/editor-api/blob/ffe57c6/src/realtime/scene.js#L70)

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

[src/realtime/scene.js:82](https://github.com/playcanvas/editor-api/blob/ffe57c6/src/realtime/scene.js#L82)

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

[src/realtime/scene.js:94](https://github.com/playcanvas/editor-api/blob/ffe57c6/src/realtime/scene.js#L94)

___

### whenNothingPending

▸ **whenNothingPending**(`callback`): `void`

Calls the callback when there are no changes pending to be
sent to the server

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | `Function` | The callback |

#### Returns

`void`

#### Defined in

[src/realtime/scene.js:111](https://github.com/playcanvas/editor-api/blob/ffe57c6/src/realtime/scene.js#L111)

## Accessors

### loaded

• `get` **loaded**(): `boolean`

Whether the scene is loaded

#### Returns

`boolean`

#### Defined in

[src/realtime/scene.js:143](https://github.com/playcanvas/editor-api/blob/ffe57c6/src/realtime/scene.js#L143)

___

### data

• `get` **data**(): `any`

The scene data

#### Returns

`any`

#### Defined in

[src/realtime/scene.js:152](https://github.com/playcanvas/editor-api/blob/ffe57c6/src/realtime/scene.js#L152)

___

### id

• `get` **id**(): `number`

The scene id - used in combination with the branch id

#### Returns

`number`

#### Defined in

[src/realtime/scene.js:161](https://github.com/playcanvas/editor-api/blob/ffe57c6/src/realtime/scene.js#L161)

___

### uniqueId

• `get` **uniqueId**(): `number`

The scene's unique id

#### Returns

`number`

#### Defined in

[src/realtime/scene.js:170](https://github.com/playcanvas/editor-api/blob/ffe57c6/src/realtime/scene.js#L170)
