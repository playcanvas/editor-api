[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / RealtimeAssets

# Class: RealtimeAssets

Provides methods to load assets from sharedb

## Hierarchy

- `Events`

  ↳ **`RealtimeAssets`**

## Table of contents

### Constructors

- [constructor](RealtimeAssets.md#constructor)

### Methods

- [load](RealtimeAssets.md#load)
- [get](RealtimeAssets.md#get)
- [unload](RealtimeAssets.md#unload)

## Constructors

### constructor

• **new RealtimeAssets**(`realtime`, `connection`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `realtime` | [`Realtime`](Realtime.md) | The realtime API |
| `connection` | [`RealtimeConnection`](RealtimeConnection.md) | The realtime connection |

#### Overrides

Events.constructor

#### Defined in

[src/realtime/assets.js:20](https://github.com/playcanvas/editor-api/blob/9178f92/src/realtime/assets.js#L20)

## Methods

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

[src/realtime/assets.js:33](https://github.com/playcanvas/editor-api/blob/9178f92/src/realtime/assets.js#L33)

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

[src/realtime/assets.js:53](https://github.com/playcanvas/editor-api/blob/9178f92/src/realtime/assets.js#L53)

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

[src/realtime/assets.js:62](https://github.com/playcanvas/editor-api/blob/9178f92/src/realtime/assets.js#L62)
