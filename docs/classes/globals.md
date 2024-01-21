[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / globals

# Class: globals

Global variables

## Table of contents

### Properties

- [history](globals.md#history)
- [selection](globals.md#selection)
- [schema](globals.md#schema)
- [realtime](globals.md#realtime)
- [assets](globals.md#assets)
- [entities](globals.md#entities)
- [settings](globals.md#settings)
- [messenger](globals.md#messenger)
- [jobs](globals.md#jobs)
- [clipboard](globals.md#clipboard)
- [accessToken](globals.md#accesstoken)
- [projectId](globals.md#projectid)
- [branchId](globals.md#branchid)
- [hasLegacyScripts](globals.md#haslegacyscripts)

### Methods

- [confirmFn](globals.md#confirmfn)

## Public

### history

▪ `Static` **history**: [`History`](History.md)

The history API

#### Defined in

[src/globals.js:10](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/globals.js#L10)

___

### selection

▪ `Static` **selection**: [`Selection`](Selection.md)

The selection API

#### Defined in

[src/globals.js:17](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/globals.js#L17)

___

### schema

▪ `Static` **schema**: [`Schema`](Schema.md)

The schema API

#### Defined in

[src/globals.js:24](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/globals.js#L24)

___

### assets

▪ `Static` **assets**: [`Assets`](Assets.md)

The assets API

#### Defined in

[src/globals.js:39](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/globals.js#L39)

___

### entities

▪ `Static` **entities**: [`Entities`](Entities.md)

The entities API

#### Defined in

[src/globals.js:46](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/globals.js#L46)

___

### settings

▪ `Static` **settings**: [`Settings`](Settings.md)

The settings API

#### Defined in

[src/globals.js:53](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/globals.js#L53)

___

### projectId

▪ `Static` **projectId**: `number`

The current project id

#### Defined in

[src/globals.js:92](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/globals.js#L92)

___

### branchId

▪ `Static` **branchId**: `string`

The current branch id

#### Defined in

[src/globals.js:99](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/globals.js#L99)

___

### confirmFn

▸ **confirmFn**(`text`, `options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`boolean`\>

Alert function called when user confirmation is needed
for an action. Defaults to the default browser popup but
can be overridden to show your custom popup instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The confirm dialog text |
| `options` | `Object` | Options for the popup |
| `options.yesText` | `string` | Text for 'yes' option |
| `options.noText` | `string` | Text for 'no' option |
| `options.noDismiss` | `boolean` | If true then user cannot dismiss the popup and will have to click yes or no |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`boolean`\>

True if the user confirmed, false otherwise

#### Defined in

[src/globals.js:121](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/globals.js#L121)

## Internal

### realtime

▪ `Static` **realtime**: [`Realtime`](Realtime.md)

The realtime API

#### Defined in

[src/globals.js:32](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/globals.js#L32)

___

### messenger

▪ `Static` **messenger**: [`Messenger`](Messenger.md)

The messenger API

#### Defined in

[src/globals.js:61](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/globals.js#L61)

___

### jobs

▪ `Static` **jobs**: [`Jobs`](Jobs.md)

The jobs API

#### Defined in

[src/globals.js:69](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/globals.js#L69)

___

### clipboard

▪ `Static` **clipboard**: [`Clipboard`](Clipboard.md)

The main clipboard

#### Defined in

[src/globals.js:77](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/globals.js#L77)

___

### accessToken

▪ `Static` **accessToken**: `string`

The user's access token

#### Defined in

[src/globals.js:85](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/globals.js#L85)

___

### hasLegacyScripts

▪ `Static` **hasLegacyScripts**: `boolean`

Whether this project is using legacy scripts

#### Defined in

[src/globals.js:107](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/globals.js#L107)
