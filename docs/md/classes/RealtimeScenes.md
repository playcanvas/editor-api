[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / RealtimeScenes

# Class: RealtimeScenes

Provides methods to load scenes from sharedb

## Hierarchy

- `Events`

  ↳ **`RealtimeScenes`**

## Table of contents

### Constructors

- [constructor](RealtimeScenes.md#constructor)

### Accessors

- [current](RealtimeScenes.md#current)

### Methods

- [load](RealtimeScenes.md#load)
- [unload](RealtimeScenes.md#unload)

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

[src/realtime/scenes.js:17](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/scenes.js#L17)

## Accessors

### current

• `get` **current**(): [`RealtimeScene`](RealtimeScene.md)

The current scene

#### Returns

[`RealtimeScene`](RealtimeScene.md)

#### Defined in

[src/realtime/scenes.js:70](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/scenes.js#L70)

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

[src/realtime/scenes.js:31](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/scenes.js#L31)

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

[src/realtime/scenes.js:54](https://github.com/playcanvas/editor-api/blob/82b05e2/src/realtime/scenes.js#L54)
