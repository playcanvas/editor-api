[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Realtime

# Class: Realtime

Provides methods to communicate and load / save data to the realtime server

## Hierarchy

- `Events`

  ↳ **`Realtime`**

## Table of contents

### Constructors

- [constructor](Realtime.md#constructor)

### Accessors

- [connection](Realtime.md#connection)
- [scenes](Realtime.md#scenes)
- [assets](Realtime.md#assets)

## Constructors

### constructor

• **new Realtime**()

#### Overrides

Events.constructor

#### Defined in

[src/realtime.js:12](https://github.com/playcanvas/editor-api/blob/6dc44e0/src/realtime.js#L12)

## Accessors

### connection

• `get` **connection**(): [`RealtimeConnection`](RealtimeConnection.md)

Gets the realtime connection

#### Returns

[`RealtimeConnection`](RealtimeConnection.md)

#### Defined in

[src/realtime.js:24](https://github.com/playcanvas/editor-api/blob/6dc44e0/src/realtime.js#L24)

___

### scenes

• `get` **scenes**(): [`RealtimeScenes`](RealtimeScenes.md)

Gets the realtime scenes API

#### Returns

[`RealtimeScenes`](RealtimeScenes.md)

#### Defined in

[src/realtime.js:33](https://github.com/playcanvas/editor-api/blob/6dc44e0/src/realtime.js#L33)

___

### assets

• `get` **assets**(): [`RealtimeAssets`](RealtimeAssets.md)

Gets the realtime assets API

#### Returns

[`RealtimeAssets`](RealtimeAssets.md)

#### Defined in

[src/realtime.js:42](https://github.com/playcanvas/editor-api/blob/6dc44e0/src/realtime.js#L42)
