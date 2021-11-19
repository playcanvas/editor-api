[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / AssetUploadArguments

# Interface: AssetUploadArguments<\>

## Table of contents

### Properties

- [folder](AssetUploadArguments.md#folder)
- [filename](AssetUploadArguments.md#filename)
- [file](AssetUploadArguments.md#file)
- [type](AssetUploadArguments.md#type)
- [name](AssetUploadArguments.md#name)
- [tags](AssetUploadArguments.md#tags)
- [sourceAssetId](AssetUploadArguments.md#sourceassetid)
- [data](AssetUploadArguments.md#data)
- [preload](AssetUploadArguments.md#preload)
- [id](AssetUploadArguments.md#id)

## Properties

### folder

• **folder**: [`Asset`](../classes/Asset.md)

The parent folder asset where the asset should be placed.

#### Defined in

[src/assets.js:13](https://github.com/playcanvas/editor-api/blob/a50e91b/src/assets.js#L13)

___

### filename

• **filename**: `string`

The filename of the uploaded file.

#### Defined in

[src/assets.js:14](https://github.com/playcanvas/editor-api/blob/a50e91b/src/assets.js#L14)

___

### file

• **file**: `File`

The file being uploaded.

#### Defined in

[src/assets.js:15](https://github.com/playcanvas/editor-api/blob/a50e91b/src/assets.js#L15)

___

### type

• **type**: `string`

The type of the asset we are uploading. See [here](AssetProperties.md) for available asset types.

#### Defined in

[src/assets.js:16](https://github.com/playcanvas/editor-api/blob/a50e91b/src/assets.js#L16)

___

### name

• **name**: `string`

The name of the asset.

#### Defined in

[src/assets.js:17](https://github.com/playcanvas/editor-api/blob/a50e91b/src/assets.js#L17)

___

### tags

• **tags**: `string`[]

The tags of the asset.

#### Defined in

[src/assets.js:18](https://github.com/playcanvas/editor-api/blob/a50e91b/src/assets.js#L18)

___

### sourceAssetId

• **sourceAssetId**: `number`

The id of the source asset.

#### Defined in

[src/assets.js:19](https://github.com/playcanvas/editor-api/blob/a50e91b/src/assets.js#L19)

___

### data

• **data**: `any`

The asset data. This depends on the asset type. See [here](AssetProperties.md) for asset data depending on the type.

#### Defined in

[src/assets.js:20](https://github.com/playcanvas/editor-api/blob/a50e91b/src/assets.js#L20)

___

### preload

• **preload**: `boolean`

Whether to preload the asset. Defaults to true.

#### Defined in

[src/assets.js:21](https://github.com/playcanvas/editor-api/blob/a50e91b/src/assets.js#L21)

___

### id

• **id**: `number`

If an asset id is specified then this asset will be updated instead of creating a new asset.

#### Defined in

[src/assets.js:22](https://github.com/playcanvas/editor-api/blob/a50e91b/src/assets.js#L22)
