[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / RealtimeAsset

# Class: RealtimeAsset

Represents an asset in sharedb

## Hierarchy

- `Events`

  ↳ **`RealtimeAsset`**

## Table of contents

### Constructors

- [constructor](RealtimeAsset.md#constructor)

### Methods

- [load](RealtimeAsset.md#load)
- [unload](RealtimeAsset.md#unload)
- [submitOp](RealtimeAsset.md#submitop)
- [whenNothingPending](RealtimeAsset.md#whennothingpending)

### Accessors

- [loaded](RealtimeAsset.md#loaded)
- [data](RealtimeAsset.md#data)
- [id](RealtimeAsset.md#id)
- [uniqueId](RealtimeAsset.md#uniqueid)

## Constructors

### constructor

• **new RealtimeAsset**(`uniqueId`, `realtime`, `connection`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uniqueId` | `number` | The unique asset id |
| `realtime` | [`Realtime`](Realtime.md) | The realtime API |
| `connection` | [`RealtimeConnection`](RealtimeConnection.md) | The realtime connection |

#### Overrides

Events.constructor

#### Defined in

[src/realtime/asset.js:21](https://github.com/playcanvas/editor-api/blob/28bcf74/src/realtime/asset.js#L21)

## Methods

### load

▸ **load**(): `void`

Loads asset from sharedb and subscribes to changes.

#### Returns

`void`

#### Defined in

[src/realtime/asset.js:35](https://github.com/playcanvas/editor-api/blob/28bcf74/src/realtime/asset.js#L35)

___

### unload

▸ **unload**(): `void`

Unloads scene from sharedb and unsubscribes from changes.

#### Returns

`void`

#### Defined in

[src/realtime/asset.js:50](https://github.com/playcanvas/editor-api/blob/28bcf74/src/realtime/asset.js#L50)

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

[src/realtime/asset.js:71](https://github.com/playcanvas/editor-api/blob/28bcf74/src/realtime/asset.js#L71)

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

[src/realtime/asset.js:88](https://github.com/playcanvas/editor-api/blob/28bcf74/src/realtime/asset.js#L88)

## Accessors

### loaded

• `get` **loaded**(): `boolean`

Whether the asset is loaded

#### Returns

`boolean`

#### Defined in

[src/realtime/asset.js:133](https://github.com/playcanvas/editor-api/blob/28bcf74/src/realtime/asset.js#L133)

___

### data

• `get` **data**(): `any`

The asset data

#### Returns

`any`

#### Defined in

[src/realtime/asset.js:142](https://github.com/playcanvas/editor-api/blob/28bcf74/src/realtime/asset.js#L142)

___

### id

• `get` **id**(): `number`

The asset id - used in combination with branch id

#### Returns

`number`

#### Defined in

[src/realtime/asset.js:151](https://github.com/playcanvas/editor-api/blob/28bcf74/src/realtime/asset.js#L151)

___

### uniqueId

• `get` **uniqueId**(): `number`

The asset's unique id

#### Returns

`number`

#### Defined in

[src/realtime/asset.js:160](https://github.com/playcanvas/editor-api/blob/28bcf74/src/realtime/asset.js#L160)
