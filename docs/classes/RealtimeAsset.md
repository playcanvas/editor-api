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

[src/realtime/asset.js:19](https://github.com/playcanvas/editor-api/blob/d967346/src/realtime/asset.js#L19)

## Methods

### load

▸ **load**(): `void`

Loads asset from sharedb and subscribes to changes.

#### Returns

`void`

#### Defined in

[src/realtime/asset.js:33](https://github.com/playcanvas/editor-api/blob/d967346/src/realtime/asset.js#L33)

___

### unload

▸ **unload**(): `void`

Unloads scene from sharedb and unsubscribes from changes.

#### Returns

`void`

#### Defined in

[src/realtime/asset.js:48](https://github.com/playcanvas/editor-api/blob/d967346/src/realtime/asset.js#L48)

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

[src/realtime/asset.js:69](https://github.com/playcanvas/editor-api/blob/d967346/src/realtime/asset.js#L69)

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

[src/realtime/asset.js:86](https://github.com/playcanvas/editor-api/blob/d967346/src/realtime/asset.js#L86)

## Accessors

### loaded

• `get` **loaded**(): `boolean`

Whether the asset is loaded

#### Returns

`boolean`

#### Defined in

[src/realtime/asset.js:131](https://github.com/playcanvas/editor-api/blob/d967346/src/realtime/asset.js#L131)

___

### data

• `get` **data**(): `any`

The asset data

#### Returns

`any`

#### Defined in

[src/realtime/asset.js:140](https://github.com/playcanvas/editor-api/blob/d967346/src/realtime/asset.js#L140)

___

### id

• `get` **id**(): `number`

The asset id - used in combination with branch id

#### Returns

`number`

#### Defined in

[src/realtime/asset.js:149](https://github.com/playcanvas/editor-api/blob/d967346/src/realtime/asset.js#L149)

___

### uniqueId

• `get` **uniqueId**(): `number`

The asset's unique id

#### Returns

`number`

#### Defined in

[src/realtime/asset.js:158](https://github.com/playcanvas/editor-api/blob/d967346/src/realtime/asset.js#L158)
