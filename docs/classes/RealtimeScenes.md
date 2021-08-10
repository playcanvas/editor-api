[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / RealtimeScenes

# Class: RealtimeScenes

Provides methods to load scenes from sharedb

## Hierarchy

- `Events`

  ↳ **`RealtimeScenes`**

## Table of contents

### Constructors

- [constructor](RealtimeScenes.md#constructor)

### Methods

- [load](RealtimeScenes.md#load)
- [unload](RealtimeScenes.md#unload)

### Accessors

- [current](RealtimeScenes.md#current)

## Constructors

### constructor

• **new RealtimeScenes**(`realtime`, `connection`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `realtime` | [`Realtime`](Realtime.md) | The realtime API |
| `connection` | [`RealtimeConnection`](RealtimeConnection.md) | The realtime connection |

#### Overrides

Events.constructor

#### Defined in

[src/realtime/scenes.js:19](https://github.com/playcanvas/editor-api/blob/28bcf74/src/realtime/scenes.js#L19)

## Methods

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

[src/realtime/scenes.js:33](https://github.com/playcanvas/editor-api/blob/28bcf74/src/realtime/scenes.js#L33)

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

[src/realtime/scenes.js:56](https://github.com/playcanvas/editor-api/blob/28bcf74/src/realtime/scenes.js#L56)

## Accessors

### current

• `get` **current**(): [`RealtimeScene`](RealtimeScene.md)

The current scene

#### Returns

[`RealtimeScene`](RealtimeScene.md)

#### Defined in

[src/realtime/scenes.js:72](https://github.com/playcanvas/editor-api/blob/28bcf74/src/realtime/scenes.js#L72)
