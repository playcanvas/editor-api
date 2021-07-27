[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / RealtimeScene

# Class: RealtimeScene

Represents a scene in sharedb

## Hierarchy

- `Events`

  ↳ **`RealtimeScene`**

## Table of contents

### Constructors

- [constructor](RealtimeScene.md#constructor)

### Accessors

- [data](RealtimeScene.md#data)
- [id](RealtimeScene.md#id)
- [loaded](RealtimeScene.md#loaded)
- [uniqueId](RealtimeScene.md#uniqueid)

### Methods

- [addEntity](RealtimeScene.md#addentity)
- [load](RealtimeScene.md#load)
- [removeEntity](RealtimeScene.md#removeentity)
- [submitOp](RealtimeScene.md#submitop)
- [unload](RealtimeScene.md#unload)
- [whenNothingPending](RealtimeScene.md#whennothingpending)

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

[src/realtime/scene.js:18](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/scene.js#L18)

## Accessors

### data

• `get` **data**(): `any`

The scene data

#### Returns

`any`

#### Defined in

[src/realtime/scene.js:150](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/scene.js#L150)

___

### id

• `get` **id**(): `number`

The scene id - used in combination with the branch id

#### Returns

`number`

#### Defined in

[src/realtime/scene.js:159](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/scene.js#L159)

___

### loaded

• `get` **loaded**(): `boolean`

Whether the scene is loaded

#### Returns

`boolean`

#### Defined in

[src/realtime/scene.js:141](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/scene.js#L141)

___

### uniqueId

• `get` **uniqueId**(): `number`

The scene's unique id

#### Returns

`number`

#### Defined in

[src/realtime/scene.js:168](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/scene.js#L168)

## Methods

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

[src/realtime/scene.js:68](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/scene.js#L68)

___

### load

▸ **load**(): `void`

Loads scene from sharedb and subscribes to changes.

#### Returns

`void`

#### Defined in

[src/realtime/scene.js:32](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/scene.js#L32)

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

[src/realtime/scene.js:80](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/scene.js#L80)

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

[src/realtime/scene.js:92](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/scene.js#L92)

___

### unload

▸ **unload**(): `void`

Unloads scene from sharedb and unsubscribes from changes.

#### Returns

`void`

#### Defined in

[src/realtime/scene.js:47](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/scene.js#L47)

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

[src/realtime/scene.js:109](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/scene.js#L109)
