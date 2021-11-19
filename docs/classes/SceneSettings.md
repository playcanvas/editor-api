[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / SceneSettings

# Class: SceneSettings

Represents the settings for the currently loaded scene.
For a list of properties see [here](SceneSettingsProperties.md).

## Hierarchy

- `Events`

  ↳ **`SceneSettings`**

## Table of contents

### Methods

- [has](SceneSettings.md#has)
- [get](SceneSettings.md#get)
- [set](SceneSettings.md#set)
- [json](SceneSettings.md#json)

### Accessors

- [history](SceneSettings.md#history)

## Methods

### has

▸ **has**(`path`): `boolean`

Checks if path exists. See [here](SceneSettingsProperties.md) for a list of properties.

**`example`**
```javascript
console.log(editor.settings.scene.has('render.fog'));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |

#### Returns

`boolean`

True if path exists

#### Defined in

[src/settings/scene.js:73](https://github.com/playcanvas/editor-api/blob/a50e91b/src/settings/scene.js#L73)

___

### get

▸ **get**(`path`): `any`

Gets value at path. See [here](SceneSettingsProperties.md) for a list of properties.

**`example`**
```javascript
console.log(editor.settings.scene.get('render.fog'));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |

#### Returns

`any`

The value

#### Defined in

[src/settings/scene.js:87](https://github.com/playcanvas/editor-api/blob/a50e91b/src/settings/scene.js#L87)

___

### set

▸ **set**(`path`, `value`): `boolean`

Sets value at path. See [here](SceneSettingsProperties.md) for a list of properties.

**`example`**
```javascript
editor.settings.scene.set('render.fog', 'none');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path |
| `value` | `any` | The value |

#### Returns

`boolean`

Whether the value was set

#### Defined in

[src/settings/scene.js:102](https://github.com/playcanvas/editor-api/blob/a50e91b/src/settings/scene.js#L102)

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

[src/settings/scene.js:114](https://github.com/playcanvas/editor-api/blob/a50e91b/src/settings/scene.js#L114)

## Accessors

### history

• `get` **history**(): `any`

Gets the history object for this entity

#### Returns

`any`

#### Defined in

[src/settings/scene.js:123](https://github.com/playcanvas/editor-api/blob/a50e91b/src/settings/scene.js#L123)
