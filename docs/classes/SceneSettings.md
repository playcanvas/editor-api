[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / SceneSettings

# Class: SceneSettings

Represents the settings for the currently loaded scene.
For a list of properties see [here](SceneSettingsProperties.md).

## Hierarchy

- `Events`

  ↳ **`SceneSettings`**

## Table of contents

### Properties

- [suspendEvents](SceneSettings.md#suspendevents)

### Accessors

- [history](SceneSettings.md#history)

### Methods

- [on](SceneSettings.md#on)
- [once](SceneSettings.md#once)
- [emit](SceneSettings.md#emit)
- [unbind](SceneSettings.md#unbind)
- [addEmitter](SceneSettings.md#addemitter)
- [removeEmitter](SceneSettings.md#removeemitter)
- [has](SceneSettings.md#has)
- [get](SceneSettings.md#get)
- [set](SceneSettings.md#set)
- [json](SceneSettings.md#json)

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

Gets the history object for this entity

#### Returns

`ObserverHistory`

#### Defined in

[src/settings/scene.js:124](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/settings/scene.js#L124)

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

Checks if path exists. See [here](SceneSettingsProperties.md) for a list of properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |

#### Returns

`boolean`

True if path exists

**`Example`**

```javascript
console.log(editor.settings.scene.has('render.fog'));
```

#### Defined in

[src/settings/scene.js:74](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/settings/scene.js#L74)

___

### get

▸ **get**(`path`): `any`

Gets value at path. See [here](SceneSettingsProperties.md) for a list of properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |

#### Returns

`any`

The value

**`Example`**

```javascript
console.log(editor.settings.scene.get('render.fog'));
```

#### Defined in

[src/settings/scene.js:88](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/settings/scene.js#L88)

___

### set

▸ **set**(`path`, `value`): `boolean`

Sets value at path. See [here](SceneSettingsProperties.md) for a list of properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |
| `value` | `any` | The value |

#### Returns

`boolean`

Whether the value was set

**`Example`**

```javascript
editor.settings.scene.set('render.fog', 'none');
```

#### Defined in

[src/settings/scene.js:103](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/settings/scene.js#L103)

___

### json

▸ **json**(): `any`

Returns JSON representation of scene settings data

#### Returns

`any`

- The data
```javascript
console.log(editor.settings.scene.json());
```

#### Defined in

[src/settings/scene.js:115](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/settings/scene.js#L115)
