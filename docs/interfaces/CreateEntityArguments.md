[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / CreateEntityArguments

# Interface: CreateEntityArguments<\>

## Table of contents

### Properties

- [name](CreateEntityArguments.md#name)
- [components](CreateEntityArguments.md#components)
- [parent](CreateEntityArguments.md#parent)
- [children](CreateEntityArguments.md#children)
- [tags](CreateEntityArguments.md#tags)
- [enabled](CreateEntityArguments.md#enabled)
- [resource\_id](CreateEntityArguments.md#resource_id)
- [position](CreateEntityArguments.md#position)
- [rotation](CreateEntityArguments.md#rotation)
- [scale](CreateEntityArguments.md#scale)

## Properties

### name

• **name**: `string`

The entity name

#### Defined in

[src/entities.js:17](https://github.com/playcanvas/editor-api/blob/6dc44e0/src/entities.js#L17)

___

### components

• **components**: `any`

Component data. See [here](EntityProperties.md) for details on component data.

#### Defined in

[src/entities.js:18](https://github.com/playcanvas/editor-api/blob/6dc44e0/src/entities.js#L18)

___

### parent

• **parent**: `string` \| [`Entity`](../classes/Entity.md)

The parent Entity or its resource_id. If undefined then the root Entity will be used as the parent.

#### Defined in

[src/entities.js:19](https://github.com/playcanvas/editor-api/blob/6dc44e0/src/entities.js#L19)

___

### children

• **children**: [`CreateEntityArguments`](CreateEntityArguments.md)[]

Data for child entities.

#### Defined in

[src/entities.js:20](https://github.com/playcanvas/editor-api/blob/6dc44e0/src/entities.js#L20)

___

### tags

• **tags**: `string`[]

Tags for the Entity.

#### Defined in

[src/entities.js:21](https://github.com/playcanvas/editor-api/blob/6dc44e0/src/entities.js#L21)

___

### enabled

• **enabled**: `boolean`

Whether the Entity should be enabled.

#### Defined in

[src/entities.js:22](https://github.com/playcanvas/editor-api/blob/6dc44e0/src/entities.js#L22)

___

### resource\_id

• **resource\_id**: `string`

The resource_id of the Entity. Leave undefined to generate a new one.

#### Defined in

[src/entities.js:23](https://github.com/playcanvas/editor-api/blob/6dc44e0/src/entities.js#L23)

___

### position

• **position**: `number`[]

The position of the Entity in local space.

#### Defined in

[src/entities.js:24](https://github.com/playcanvas/editor-api/blob/6dc44e0/src/entities.js#L24)

___

### rotation

• **rotation**: `number`[]

The rotation of the Entity in local space (euler angles in degrees).

#### Defined in

[src/entities.js:25](https://github.com/playcanvas/editor-api/blob/6dc44e0/src/entities.js#L25)

___

### scale

• **scale**: `number`[]

The scale of the Entity in local space.

#### Defined in

[src/entities.js:26](https://github.com/playcanvas/editor-api/blob/6dc44e0/src/entities.js#L26)
