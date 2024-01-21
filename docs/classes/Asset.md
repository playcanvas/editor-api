[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Asset

# Class: Asset

Represents an Asset. For a list of Asset properties see [here](AssetProperties.md).

## Hierarchy

- `Events`

  ↳ **`Asset`**

## Table of contents

### Constructors

- [constructor](Asset.md#constructor)

### Properties

- [suspendEvents](Asset.md#suspendevents)

### Accessors

- [history](Asset.md#history)

### Methods

- [on](Asset.md#on)
- [once](Asset.md#once)
- [emit](Asset.md#emit)
- [unbind](Asset.md#unbind)
- [addEmitter](Asset.md#addemitter)
- [removeEmitter](Asset.md#removeemitter)
- [has](Asset.md#has)
- [get](Asset.md#get)
- [set](Asset.md#set)
- [unset](Asset.md#unset)
- [insert](Asset.md#insert)
- [removeValue](Asset.md#removevalue)
- [json](Asset.md#json)
- [latest](Asset.md#latest)
- [load](Asset.md#load)
- [loadAndSubscribe](Asset.md#loadandsubscribe)
- [delete](Asset.md#delete)
- [instantiateTemplate](Asset.md#instantiatetemplate)
- [replace](Asset.md#replace)
- [getFileUrl](Asset.md#getfileurl)

## Constructors

### constructor

• **new Asset**(`data?`): [`Asset`](Asset.md)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | The asset data |

#### Returns

[`Asset`](Asset.md)

#### Overrides

Events.constructor

#### Defined in

[src/asset.js:16](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/asset.js#L16)

## Properties

### suspendEvents

• **suspendEvents**: `boolean`

If true the observer will not emit events when values are set.

#### Inherited from

Events.suspendEvents

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:37

## Accessors

### history

• `get` **history**(): `ObserverHistory`

Gets observer history for this asset

#### Returns

`ObserverHistory`

#### Defined in

[src/asset.js:303](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/asset.js#L303)

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

### has

▸ **has**(`path`): `boolean`

Checks if path exists. For a list of Asset properties see [here](AssetProperties.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |

#### Returns

`boolean`

True if path exists

#### Defined in

[src/asset.js:118](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/asset.js#L118)

___

### get

▸ **get**(`path`): `any`

Gets value at path. For a list of Asset properties see [here](AssetProperties.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |

#### Returns

`any`

The value

#### Defined in

[src/asset.js:128](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/asset.js#L128)

___

### set

▸ **set**(`path`, `value`): `boolean`

Sets value at path. For a list of Asset properties see [here](AssetProperties.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |
| `value` | `any` | The value |

#### Returns

`boolean`

Whether the value was set

#### Defined in

[src/asset.js:139](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/asset.js#L139)

___

### unset

▸ **unset**(`path`): `boolean`

Unsets value at path. For a list of Asset properties see [here](AssetProperties.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |

#### Returns

`boolean`

Whether the value was unset

#### Defined in

[src/asset.js:149](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/asset.js#L149)

___

### insert

▸ **insert**(`path`, `value`, `index`): `boolean`

Inserts value in array at path, at specified index. For a list of Asset properties see [here](AssetProperties.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |
| `value` | `any` | The value |
| `index` | `number` | The index (if undefined the value will be inserted in the end) |

#### Returns

`boolean`

Whether the value was inserted

#### Defined in

[src/asset.js:161](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/asset.js#L161)

___

### removeValue

▸ **removeValue**(`path`, `value`): `boolean`

Remove value from array at path. For a list of Asset properties see [here](AssetProperties.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |
| `value` | `any` | The value |

#### Returns

`boolean`

Whether the value was removed

#### Defined in

[src/asset.js:172](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/asset.js#L172)

___

### json

▸ **json**(): `any`

Returns JSON representation of entity data

#### Returns

`any`

- The data

#### Defined in

[src/asset.js:181](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/asset.js#L181)

___

### latest

▸ **latest**(): [`Asset`](Asset.md)

Returns the latest version of the Asset from the Assets API.

#### Returns

[`Asset`](Asset.md)

The asset

#### Defined in

[src/asset.js:190](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/asset.js#L190)

___

### load

▸ **load**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

Loads asset from the server without subscribing to realtime changes.

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Defined in

[src/asset.js:197](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/asset.js#L197)

___

### loadAndSubscribe

▸ **loadAndSubscribe**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

Loads the asset's data from sharedb and subscribes to changes

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Defined in

[src/asset.js:222](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/asset.js#L222)

___

### delete

▸ **delete**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

Deletes this asset

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Defined in

[src/asset.js:265](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/asset.js#L265)

___

### instantiateTemplate

▸ **instantiateTemplate**(`parent`, `options`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Entity`](Entity.md)\>

Creates an instance of this template asset. Assumes this
asset is a template asset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | [`Entity`](Entity.md) | The parent entity |
| `options` | `Object` | Options |
| `options.index` | `number` | The desired index under the parent to instantiate the template. |
| `options.history` | `boolean` | Whether to record a history action. |
| `options.select` | `boolean` | Whether to select the new entity. |
| `options.extraData` | `any` | Extra data passed to the backend. Used by the Editor on specific cases. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Entity`](Entity.md)\>

The new entity.

#### Defined in

[src/asset.js:281](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/asset.js#L281)

___

### replace

▸ **replace**(`asset`, `options?`): `void`

Replaces any references to this asset with
references to the new asset specified.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asset` | [`Asset`](Asset.md) | The new asset. |
| `options` | `Object` | Options. |
| `options.history` | `boolean` | Whether to record a history action. |

#### Returns

`void`

#### Defined in

[src/asset.js:294](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/asset.js#L294)

___

### getFileUrl

▸ **getFileUrl**(`id`, `filename`): `string`

Gets the file URL for an asset file

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The asset id |
| `filename` | `string` | The desired filename |

#### Returns

`string`

The file URL

#### Defined in

[src/asset.js:314](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/asset.js#L314)
