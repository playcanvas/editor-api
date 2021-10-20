[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / globals

# Class: globals

Global variables

## Table of contents

### Public Properties

- [history](globals.md#history)
- [selection](globals.md#selection)
- [schema](globals.md#schema)
- [assets](globals.md#assets)
- [entities](globals.md#entities)
- [projectId](globals.md#projectid)
- [branchId](globals.md#branchid)

### Internal Properties

- [realtime](globals.md#realtime)
- [messenger](globals.md#messenger)
- [jobs](globals.md#jobs)
- [clipboard](globals.md#clipboard)
- [accessToken](globals.md#accesstoken)
- [hasLegacyScripts](globals.md#haslegacyscripts)

### Methods

- [confirmFn](globals.md#confirmfn)

## Public Properties

### history

▪ `Static` **history**: [`History`](History.md)

The history API

#### Defined in

[src/globals.js:16](https://github.com/playcanvas/editor-api/blob/4a0a671/src/globals.js#L16)

___

### selection

▪ `Static` **selection**: [`Selection`](Selection.md)

The selection API

#### Defined in

[src/globals.js:23](https://github.com/playcanvas/editor-api/blob/4a0a671/src/globals.js#L23)

___

### schema

▪ `Static` **schema**: [`Schema`](Schema.md)

The schema API

#### Defined in

[src/globals.js:30](https://github.com/playcanvas/editor-api/blob/4a0a671/src/globals.js#L30)

___

### assets

▪ `Static` **assets**: [`Assets`](Assets.md)

The assets API

#### Defined in

[src/globals.js:45](https://github.com/playcanvas/editor-api/blob/4a0a671/src/globals.js#L45)

___

### entities

▪ `Static` **entities**: [`Entities`](Entities.md)

The entities API

#### Defined in

[src/globals.js:52](https://github.com/playcanvas/editor-api/blob/4a0a671/src/globals.js#L52)

___

### projectId

▪ `Static` **projectId**: `number`

The current project id

#### Defined in

[src/globals.js:91](https://github.com/playcanvas/editor-api/blob/4a0a671/src/globals.js#L91)

___

### branchId

▪ `Static` **branchId**: `string`

The current branch id

#### Defined in

[src/globals.js:98](https://github.com/playcanvas/editor-api/blob/4a0a671/src/globals.js#L98)

___

## Internal Properties

### realtime

▪ `Static` **realtime**: [`Realtime`](Realtime.md)

The realtime API

#### Defined in

[src/globals.js:38](https://github.com/playcanvas/editor-api/blob/4a0a671/src/globals.js#L38)

___

### messenger

▪ `Static` **messenger**: [`Messenger`](Messenger.md)

The messenger API

#### Defined in

[src/globals.js:60](https://github.com/playcanvas/editor-api/blob/4a0a671/src/globals.js#L60)

___

### jobs

▪ `Static` **jobs**: [`Jobs`](Jobs.md)

The jobs API

#### Defined in

[src/globals.js:68](https://github.com/playcanvas/editor-api/blob/4a0a671/src/globals.js#L68)

___

### clipboard

▪ `Static` **clipboard**: [`Clipboard`](Clipboard.md)

The main clipboard

#### Defined in

[src/globals.js:76](https://github.com/playcanvas/editor-api/blob/4a0a671/src/globals.js#L76)

___

### accessToken

▪ `Static` **accessToken**: `string`

The user's access token

#### Defined in

[src/globals.js:84](https://github.com/playcanvas/editor-api/blob/4a0a671/src/globals.js#L84)

___

### hasLegacyScripts

▪ `Static` **hasLegacyScripts**: `boolean`

Whether this project is using legacy scripts

#### Defined in

[src/globals.js:106](https://github.com/playcanvas/editor-api/blob/4a0a671/src/globals.js#L106)

## Methods

### confirmFn

▸ `Static` **confirmFn**(`text`, `options?`): `Promise`<`boolean`\>

Alert function called when user confirmation is needed
for an action. Defaults to the default browser popup but
can be overriden to show your custom popup instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The confirm dialog text |
| `options` | `Object` | Options for the popup |
| `options.yesText` | `string` | Text for 'yes' option |
| `options.noText` | `string` | Text for 'no' option |
| `options.noDismiss` | `boolean` | If true then user cannot dismiss the popup and will have to click yes or no |

#### Returns

`Promise`<`boolean`\>

True if the user confirmed, false otherwise

#### Defined in

[src/globals.js:120](https://github.com/playcanvas/editor-api/blob/4a0a671/src/globals.js#L120)
