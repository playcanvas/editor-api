import { Events, Observer, ObserverHistory } from '@playcanvas/observer';

import { globals as api } from './globals';
import { Guid } from './guid';

/**
 * Represents an observer for an entity, extending the base Observer.
 */
export type EntityObserver = Observer & {
    /**
     * The API entity associated with this observer.
     */
    apiEntity: Entity;

    /**
     * The history of changes made to the observer.
     */
    history: ObserverHistory;

    /**
     * A function that returns the latest observer.
     */
    latestFn: () => Observer;
};

/**
 * Represents an Entity.
 *
 * What follows is a reference for all possible asset paths that can be passed to functions such as {@link Entity#get} and {@link Entity#set}.
 *
 * Common Entity Properties:
 *
 * | Path               | Type            | Description                                                                                                     | Default Value |
 * | :----------------- | :-------------- | :-------------------------------------------------------------------------------------------------------------- | :------------ |
 * | `children`         | `Array<string>` | An array that contains the `resource_id`'s of the entity's children.                                            | `[]`          |
 * | `enabled`          | `boolean`       | Whether the entity is enabled.                                                                                  | `true`        |
 * | `name`             | `string`        | The name of the entity.                                                                                         |               |
 * | `parent`           | `string`        | The `resource_id` of the parent entity.                                                                         |               |
 * | `position`         | `Array<number>` | The position of the entity in local space (x, y, z).                                                            | `[0,0,0]`     |
 * | `resource_id`      | `string`        | The unique GUID of the entity.                                                                                  |               |
 * | `rotation`         | `Array<number>` | The rotation of the entity in local space (rx, ry, rz euler angles in degrees).                                 | `[0,0,0]`     |
 * | `scale`            | `Array<number>` | The scale of the entity in local space (sx, sy, sz).                                                            | `[1,1,1]`     |
 * | `tags`             | `Array<string>` | The tags of the entity.                                                                                         | `[]`          |
 * | `template_ent_ids` | `object`        | A dictionary of <`resource_id`, `resource_id`> pairs that maps the entity (and its children) to the respective Entities in the template asset. | |
 * | `template_id`      | `number`        | The `id` of the Template asset that this entity is linked to.                                                   |               |
 * | `components`       | `object`        | A dictionary that contains the components of the entity and their data.                                         |               |
 *
 * Anim Component Properties:
 *
 * | Path                                      | Type      | Description                                                                                                               | Default Value |
 * | :---------------------------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------ | :------------ |
 * | `components.anim`                         | `object`  | The data for the anim component.                                                                                          |               |
 * | `components.anim.activate`                | `boolean` | If true, the component will start playing the anim state graph on load.                                                   | `true`        |
 * | `components.anim.animationAssets`         | `object`  | A dictionary that holds the animation assets used by this component. Each key is a string representing a path to a state. | `{}`          |
 * | `components.anim.animationAssets.*.asset` | `number`  | The `id` of the animation asset.                                                                                          | `null`        |
 * | `components.anim.enabled`                 | `boolean` | Whether the component is enabled.                                                                                         | `true`        |
 * | `components.anim.masks`                   | `object`  | The layer masks associated with this component.                                                                           | `{}`          |
 * | `components.anim.masks.*.mask`            | `object`  | A set of paths to bones in the current model that should be animated by the layer.                                        | `{}`          |
 * | `components.anim.masks.*.mask.*.children` | `boolean` | Whether the children of this bone should also be included in the mask.                                                    |               |
 * | `components.anim.masks.*.mask.*.value`    | `boolean` | Whether this bone should also be included in the mask.                                                                    |               |
 * | `components.anim.rootBone`                | `string`  | The `resource_id` of the entity that this anim component should use as the root of the animation hierarchy.               | `null`        |
 * | `components.anim.speed`                   | `number`  | A multiplier for animation playback speed. 0 will freeze animation playback, and 1 represents the normal playback speed.  | `1`           |
 *
 * Animation Component Properties:
 *
 * | Path                            | Type            | Description                                                                                                       | Default Value |
 * | :------------------------------ | :-------------- | :---------------------------------------------------------------------------------------------------------------- | :------------ |
 * | `components.animation`          | `object`        | The data for the (legacy) animation component.                                                                    |               |
 * | `components.animation.activate` | `boolean`       | If true, the component will start playing the animation on load.                                                  | `true`        |
 * | `components.animation.assets`   | `Array<number>` | An array of Animation asset `id`'s.                                                                               | `[]`          |
 * | `components.animation.enabled`  | `boolean`       | Whether the component is enabled.                                                                                 | `true`        |
 * | `components.animation.loop`     | `boolean`       | If true, the animation will continue to loop back to the start on completion. Otherwise, it will stop on its final frame. | `true` |
 * | `components.animation.speed`    | `number`        | A multiplier for animation playback speed. 0 will freeze animation playback, and 1 is the normal playback speed.  | `1`           |
 *
 * AudioListener Component Properties:
 *
 * | Path                                 | Type      | Description                               | Default Value |
 * | :----------------------------------- | :-------- | :---------------------------------------- | :------------ |
 * | `components.audiolistener`           | `object`  | The data for the audiolistener component. |               |
 * | `components.audiolistener.enabled`   | `boolean` | Whether the component is enabled.         | `true`        |
 *
 * Button Component Properties:
 *
 * | Path                                      | Type             | Description                                                                                                             | Default Value |
 * | :---------------------------------------- | :--------------- | :---------------------------------------------------------------------------------------------------------------------- | :------------ |
 * | `components.button`                       | `object`         | The data for the button component.                                                                                      |               |
 * | `components.button.active`                | `boolean`        | If false, the button will be visible but will not respond to hover or touch interactions.                               | `true`        |
 * | `components.button.enabled`               | `boolean`        | Whether the component is enabled.                                                                                       | `true`        |
 * | `components.button.fadeDuration`          | `number`         | Duration to be used when fading between tints, in milliseconds.                                                         | `0`           |
 * | `components.button.hitPadding`            | `Array<number>`  | An array of 4 numbers controlling the padding to be used in hit-test calculations.                                      | `[0,0,0,0]`   |
 * | `components.button.hoverSpriteAsset`      | `number`         | The `id` of the sprite asset to be used as the button image when the user hovers over it.                               | `null`        |
 * | `components.button.hoverSpriteFrame`      | `number`         | Frame to be used from the hover sprite.                                                                                 | `0`           |
 * | `components.button.hoverTint`             | `Array<number>`  | Array of 4 numbers controlling the color to be used on the button image when the user hovers over it.                    | `[1,1,1,1]`   |
 * | `components.button.imageEntity`           | `string`         | The `resource_id` of the entity to be used as the button background. Must have an element component of type `image`.    | `null`        |
 * | `components.button.inactiveSpriteAsset`   | `number`         | The `id` of the sprite asset to be used as the button image when the button is not interactive.                         | `null`        |
 * | `components.button.inactiveSpriteFrame`   | `number`         | Frame to be used from the inactive sprite.                                                                              | `0`           |
 * | `components.button.inactiveTint`          | `Array<number>`  | Array of 4 numbers controlling the color to be used on the button image when the button is not interactive.              | `[1,1,1,1]`   |
 * | `components.button.pressedSpriteAsset`    | `number`         | The `id` of the sprite asset to be used as the button image when the user presses it.                                   | `null`        |
 * | `components.button.pressedSpriteFrame`    | `number`         | Frame to be used from the pressed sprite.                                                                               | `0`           |
 * | `components.button.pressedTint`           | `Array<number>`  | Array of 4 numbers controlling the color to be used on the button image when the user presses it.                        | `[1,1,1,1]`   |
 * | `components.button.transitionMode`        | `number`         | Controls how the button responds when the user hovers over it/presses it.                                               | `0`           |
 *
 * Camera Component Properties:
 *
 * | Path                                 | Type            | Description                                                                                                                                | Default Value   |
 * | :----------------------------------- | :-------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :-------------- |
 * | `components.camera`                  | `object`        | The data for the camera component.                                                                                                         |                 |
 * | `components.camera.clearColor`       | `Array<number>` | The color used to clear the camera's render target.                                                                                        | `[0.118,0.118,0.118,1]` |
 * | `components.camera.clearColorBuffer` | `boolean`       | If true, the camera will explicitly clear its render target to the chosen clear color before rendering the scene.                          | `true`          |
 * | `components.camera.clearDepthBuffer` | `boolean`       | If true, the camera will explicitly clear the depth buffer of its render target before rendering the scene.                                | `true`          |
 * | `components.camera.enabled`          | `boolean`       | Whether the component is enabled.                                                                                                          | `true`          |
 * | `components.camera.farClip`          | `number`        | The distance in camera space from the camera's eye point to the far plane.                                                                 | `1000`          |
 * | `components.camera.fov`              | `number`        | The angle (in degrees) between top and bottom clip planes of a perspective camera.                                                         | `45`            |
 * | `components.camera.frustumCulling`   | `boolean`       | Controls the culling of mesh instances against the camera frustum. If true, culling is enabled. If false, all mesh instances are rendered. | `true`          |
 * | `components.camera.layers`           | `Array<number>` | An array of layer id's that this camera will render.                                                                                       | `[0,1,2,3,4]`   |
 * | `components.camera.nearClip`         | `number`        | The distance in camera space from the camera's eye point to the near plane.                                                                | `0.1`           |
 * | `components.camera.orthoHeight`      | `number`        | The distance in world units between the top and bottom clip planes of an orthographic camera.                                              | `4`             |
 * | `components.camera.priority`         | `number`        | A number that defines the order in which camera views are rendered by the engine. Smaller numbers are rendered first.                      | `0`             |
 * | `components.camera.projection`       | `number`        | The projection type of the camera. Can be `pc.PROJECTION_PERSPECTIVE` or `pc.PROJECTION_ORTHOGRAPHIC`.                                     | `0`             |
 * | `components.camera.rect`             | `Array<number>` | An array that represents the viewport onto the camera's attached render target defined by normalized coordinates.                          | `[0,0,1,1]`     |
 *
 * Collision Component Properties:
 *
 * | Path                                 | Type            | Description                                                                                              | Default Value   |
 * | :----------------------------------- | :-------------- | :------------------------------------------------------------------------------------------------------- | :-------------- |
 * | `components.collision`               | `object`        | The data for the collision component.                                                                    |                 |
 * | `components.collision.asset`         | `number`        | The `id` of the model asset that will be used as a source for the triangle-based collision mesh.         | `null`          |
 * | `components.collision.axis`          | `number`        | Aligns the capsule/cylinder with the local-space X, Y or Z axis of the entity.                           | `1`             |
 * | `components.collision.enabled`       | `boolean`       | Whether the component is enabled.                                                                        | `true`          |
 * | `components.collision.halfExtents`   | `Array<number>` | The half-extents of the collision box: local space half-width, half-height, and half-depth.               | `[0.5,0.5,0.5]` |
 * | `components.collision.height`        | `number`        | The tip-to-tip height of the capsule/cylinder.                                                           | `2`             |
 * | `components.collision.radius`        | `number`        | The radius of the capsule/cylinder body.                                                                 | `0.5`           |
 * | `components.collision.renderAsset`   | `number`        | The `id` of the render asset that will be used as a source for the triangle-based collision mesh.        | `null`          |
 * | `components.collision.type`          | `string`        | The type of collision primitive. Can be: box, sphere, capsule, cylinder, mesh.                           | `"box"`         |
 *
 * Element Component Properties:
 *
 * | Path                                    | Type             | Description                                                                                              | Default Value   |
 * | :-------------------------------------- | :--------------- | :------------------------------------------------------------------------------------------------------- | :-------------- |
 * | `components.element`                    | `object`         | The data for the element component.                                                                      |                 |
 * | `components.element.alignment`          | `Array<number>`  | An array of 2 numbers controlling the horizontal and vertical alignment of the text relative to its element transform. | `[0.5,0.5]`     |
 * | `components.element.anchor`             | `Array<number>`  | An array of 4 numbers controlling the left, bottom, right and top anchors of the element.                | `[0.5,0.5,0.5,0.5]` |
 * | `components.element.autoFitHeight`      | `boolean`        | If true then the font size of the element will scale automatically so that it fits the element's height. | `false`         |
 * | `components.element.autoFitWidth`       | `boolean`        | If true then the font size and the line height of the element will scale automatically so that it fits the element's width. | `false`       |
 * | `components.element.autoHeight`         | `boolean`        | Make the height of the element match the height of the text content automatically.                       | `false`         |
 * | `components.element.autoWidth`          | `boolean`        | Make the width of the element match the width of the text content automatically.                         | `false`         |
 * | `components.element.batchGroupId`       | `number`         | The batch group id that this element belongs to.                                                         | `null`          |
 * | `components.element.color`              | `Array<number>`  | An array of 3 numbers controlling the color of the element.                                              | `[1,1,1]`       |
 * | `components.element.enableMarkup`       | `boolean`        | Flag for enabling markup processing. Only works for text types.                                          | `false`         |
 * | `components.element.enabled`            | `boolean`        | Whether the component is enabled.                                                                        | `true`          |
 * | `components.element.fontAsset`          | `number`         | The `id` of the font asset used by the element.                                                          | `null`          |
 * | `components.element.fontSize`           | `number`         | The size of the font used by the element.                                                                | `32`            |
 * | `components.element.height`             | `number`         | The height of the element.                                                                               | `32`            |
 * | `components.element.key`                | `string`         | The localization key of the element.                                                                     | `null`          |
 * | `components.element.layers`             | `Array<number>`  | An array of layer id's that this element belongs to.                                                     | `[4]`           |
 * | `components.element.lineHeight`         | `number`         | The height of each line of text.                                                                         | `32`            |
 * | `components.element.margin`             | `Array<number>`  | An array of 4 numbers controlling the spacing between each edge of the element and the respective anchor. | `[-16,-16,-16,-16]` |
 * | `components.element.mask`               | `boolean`        | Switch image element into a mask.                                                                        | `false`         |
 * | `components.element.materialAsset`      | `number`         | The `id` of the material asset used by this element.                                                     | `null`          |
 * | `components.element.maxFontSize`        | `number`         | The maximum size of the font that the element can scale to when using `autoFitWidth` or `autoFitHeight`. | `32`            |
 * | `components.element.maxLines`           | `number`         | The maximum number of lines that this element can display.                                               | `null`          |
 * | `components.element.minFontSize`        | `number`         | The minimum size of the font that the element can scale to when using `autoFitWidth` or `autoFitHeight`. | `8`             |
 * | `components.element.opacity`            | `number`         | The opacity of the element.                                                                              | `1`             |
 * | `components.element.outlineColor`       | `Array<number>`  | An array of 4 numbers controlling the text outline effect color and opacity.                             | `[0,0,0,1]`     |
 * | `components.element.outlineThickness`   | `number`         | The text outline effect width. Ranges from 0 to 1. To disable outline effect set to 0.                  | `0`             |
 * | `components.element.pivot`              | `Array<number>`  | An array of 2 numbers controlling the origin of the element.                                             | `[0.5,0.5]`     |
 * | `components.element.pixelsPerUnit`      | `number`         | The number of pixels that correspond to one PlayCanvas unit.                                             | `null`          |
 * | `components.element.rect`               | `Array<number>`  | An array of 4 numbers controlling the u, v, width and height of the rectangle that represents the portion of the texture that this image maps to. | `[0,0,1,1]` |
 * | `components.element.shadowColor`        | `Array<number>`  | An array of 4 numbers controlling the text shadow cast effect color and opacity.                         | `[0,0,0,1]`     |
 * | `components.element.shadowOffset`       | `Array<number>`  | An array of 2 numbers controlling the horizontal and vertical shift of the text shadow cast effect.     | `[0,0]`         |
 * | `components.element.spacing`            | `number`         | The spacing between each letter of the text.                                                             | `1`             |
 * | `components.element.spriteAsset`        | `number`         | The `id` of the sprite asset to be used by the element.                                                  | `null`          |
 * | `components.element.spriteFrame`        | `number`         | The frame from the sprite asset to render.                                                               | `0`             |
 * | `components.element.text`               | `string`         | The text content of the element.                                                                         | `""`            |
 * | `components.element.textureAsset`       | `number`         | The `id` of the texture asset to be used by the element.                                                 | `null`          |
 * | `components.element.type`               | `string`         | The type of the element. Can be: `pc.ELEMENTTYPE_GROUP`, `pc.ELEMENTTYPE_IMAGE`, `pc.ELEMENTTYPE_TEXT`.  | `"text"`        |
 * | `components.element.useInput`           | `boolean`        | Enable this if you want the element to receive input events.                                             | `false`         |
 * | `components.element.width`              | `number`         | The width of the element.                                                                                | `32`            |
 * | `components.element.wrapLines`          | `boolean`        | Whether to automatically wrap lines based on the element width.                                          | `true`          |
 *
 * LayoutChild Component Properties:
 *
 * | Path                                         | Type       | Description                                                                                                                              | Default Value |
 * | :------------------------------------------- | :--------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :------------ |
 * | `components.layoutchild`                     | `object`   | The data for the layoutchild component.                                                                                                  |               |
 * | `components.layoutchild.enabled`             | `boolean`  | Whether the component is enabled.                                                                                                        | `true`        |
 * | `components.layoutchild.excludeFromLayout`   | `boolean`  | When enabled, the child will be excluded from all layout calculations.                                                                   | `false`       |
 * | `components.layoutchild.fitHeightProportion` | `number`   | The amount of additional vertical space that the element should take up, if necessary to satisfy a Stretch/Shrink fitting calculation.   | `0`           |
 * | `components.layoutchild.fitWidthProportion`  | `number`   | The amount of additional horizontal space that the element should take up, if necessary to satisfy a Stretch/Shrink fitting calculation. | `0`           |
 * | `components.layoutchild.maxHeight`           | `number`   | The maximum height the element should be rendered at.                                                                                    | `null`        |
 * | `components.layoutchild.maxWidth`            | `number`   | The maximum width the element should be rendered at.                                                                                     | `null`        |
 * | `components.layoutchild.minHeight`           | `number`   | The minimum height the element should be rendered at.                                                                                    | `0`           |
 * | `components.layoutchild.minWidth`            | `number`   | The minimum width the element should be rendered at.                                                                                     | `0`           |
 *
 * LayoutGroup Component Properties:
 *
 * | Path                                   | Type            | Description                                                                                                       | Default Value |
 * | :------------------------------------- | :-------------- | :---------------------------------------------------------------------------------------------------------------- | :------------ |
 * | `components.layoutgroup`               | `object`        | The data for the layoutgroup component.                                                                           |               |
 * | `components.layoutgroup.alignment`     | `Array<number>` | An array of 2 numbers controlling the horizontal and vertical alignment of child elements.                        | `[0,1]`       |
 * | `components.layoutgroup.enabled`       | `boolean`       | Whether the component is enabled.                                                                                 | `true`        |
 * | `components.layoutgroup.heightFitting` | `number`        | Fitting logic to be applied when positioning and scaling child elements.                                          | `0`           |
 * | `components.layoutgroup.orientation`   | `number`        | Whether the layout should run horizontally or vertically.                                                         | `0`           |
 * | `components.layoutgroup.padding`       | `Array<number>` | An array of 4 numbers controlling the padding to be applied inside the container before positioning any children. | `[0,0,0,0]`   |
 * | `components.layoutgroup.reverseX`      | `boolean`       | Reverses the order of elements on the X axis.                                                                     | `false`       |
 * | `components.layoutgroup.reverseY`      | `boolean`       | Reverses the order of elements on the Y axis.                                                                     | `true`        |
 * | `components.layoutgroup.spacing`       | `Array<number>` | An array of 2 numbers controlling the spacing to be applied between each child element.                           | `[0,0]`       |
 * | `components.layoutgroup.widthFitting`  | `number`        | Fitting logic to be applied when positioning and scaling child elements.                                          | `0`           |
 * | `components.layoutgroup.wrap`          | `boolean`       | Whether or not to wrap children onto a new row/column when the size of the container is exceeded.                 | `false`       |
 *
 * Light Component Properties:
 *
 * | Path                                   | Type       | Description                                                                                                                                                        | Default Value |
 * | :------------------------------------- | :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------ |
 * | `components.light`                     | `object`   | The data for the light component.                                                                                                                                  |               |
 * | `components.light.affectDynamic`       | `boolean`  | If true the light will affect non-lightmapped objects.                                                                                                             | `true`        |
 * | `components.light.affectLightmapped`   | `boolean`  | If true the light will affect lightmapped objects.                                                                                                                 | `false`       |
 * | `components.light.bake`                | `boolean`  | If true the light will be rendered into lightmaps.                                                                                                                 | `false`       |
 * | `components.light.bakeDir`             | `boolean`  | If true and `bake` is true, the light's direction will contribute to directional lightmaps.                                                                        | `true`        |
 * | `components.light.cascadeDistribution` | `number`   | The distribution of subdivision of the camera frustum for individual shadow cascades.                                                                              | `0.5`         |
 * | `components.light.castShadows`         | `boolean`  | If true, the light will cause shadow casting models to cast shadows.                                                                                               | `false`       |
 * | `components.light.color`               | `Array<number>` | An array of 3 numbers that represents the color of the emitted light.                                                                                         | `[1,1,1]`     |
 * | `components.light.cookie`              | `number`   | The id of a projection texture asset. Must be 2D for spot and cubemap for omni (ignored if incorrect type is used).                                                |               |
 * | `components.light.cookieAngle`         | `number`   | Angle for spotlight cookie rotation.                                                                                                                               | `0`           |
 * | `components.light.cookieAsset`         | `number`   | The id of a texture asset that represents that light cookie.                                                                                                       | `null`        |
 * | `components.light.cookieChannel`       | `string`   | Color channels of the projection texture to use. Can be "r", "g", "b", "a", "rgb" or any swizzled combination.                                                     | `"rgb"`       |
 * | `components.light.cookieFalloff`       | `boolean`  | Toggle normal spotlight falloff when projection texture is used. When set to false, spotlight will work like a pure texture projector (only fading with distance). | `true`        |
 * | `components.light.cookieIntensity`     | `number`   | Projection texture intensity.                                                                                                                                      | `1`           |
 * | `components.light.cookieOffset`        | `Array<number>` | Spotlight cookie position offset.                                                                                                                             | `[0,0]`       |
 * | `components.light.cookieScale`         | `Array<number>` | Spotlight cookie scale.                                                                                                                                       | `[1,1]`       |
 * | `components.light.enabled`             | `boolean`  | Whether the component is enabled.                                                                                                                                  | `true`        |
 * | `components.light.falloffMode`         | `number`   | Controls the rate at which a light attenuates from its position.                                                                                                   | `0`           |
 * | `components.light.innerConeAngle`      | `number`   | The angle at which the spotlight cone starts to fade off. The angle is specified in degrees. Affects spot lights only.                                             | `40`          |
 * | `components.light.intensity`           | `number`   | The intensity of the light, this acts as a scalar value for the light's color. This value can exceed 1.                                                            | `1`           |
 * | `components.light.isStatic`            | `boolean`  | Mark light as non-movable (optimization).                                                                                                                          | `false`       |
 * | `components.light.layers`              | `Array<number>` | An array of layer id's that this light will affect.                                                                                                           | `[0]`         |
 * | `components.light.normalOffsetBias`    | `number`   | Normal offset depth bias.                                                                                                                                          | `0.05`        |
 * | `components.light.numCascades`         | `number`   | Number of shadow cascades.                                                                                                                                         | `1`           |
 * | `components.light.outerConeAngle`      | `number`   | The angle at which the spotlight cone has faded to nothing. The angle is specified in degrees. Affects spot lights only.                                           | `45`          |
 * | `components.light.range`               | `number`   | The distance from the spotlight source at which its contribution falls to zero
 *
 * Model Component Properties:
 *
 * | Path                                      | Type            | Description                                                                                                                          | Default Value |
 * | :---------------------------------------- | :-------------- | :----------------------------------------------------------------------------------------------------------------------------------- | :------------ |
 * | `components.model`                        | `object`        | The data for the (legacy) model component.                                                                                           |               |
 * | `components.model.aabbCenter`             | `Array<number>` | An array of 3 numbers that represents the center of the AABB to be used.                                                             |               |
 * | `components.model.aabbHalfExtents`        | `Array<number>` | An array of 3 numbers that represents the half extents of the AABB to be used.                                                       |               |
 * | `components.model.asset`                  | `number`        | The `id` of the model asset rendered by this model component.                                                                        | `null`        |
 * | `components.model.batchGroupId`           | `number`        | The batch group id that this model belongs to. The engine will attempt to batch models in the same batch group.                      | `null`        |
 * | `components.model.castShadows`            | `boolean`       | If true, the model rendered by this component will cast shadows onto other models in the scene.                                      | `true`        |
 * | `components.model.castShadowsLightmap`    | `boolean`       | If true, this model will cast shadows when rendering lightmaps.                                                                      | `true`        |
 * | `components.model.enabled`                | `boolean`       | Whether the component is enabled.                                                                                                    | `true`        |
 * | `components.model.isStatic`               | `boolean`       | Mark model as non-movable (optimization).                                                                                            | `false`       |
 * | `components.model.layers`                 | `Array<number>` | An array of layer id's that this model belongs to. When a model belongs to multiple layers it will be rendered multiple times.       | `[0]`         |
 * | `components.model.lightmapSizeMultiplier` | `number`        | Changing this value will affect resolution of lightmaps for this model.                                                              | `1`           |
 * | `components.model.lightmapped`            | `boolean`       | If true, this model will be lightmapped after using lightmapper.bake().                                                              | `false`       |
 * | `components.model.mapping`                | `object`        | A dictionary that maps a material asset to each mesh instance. Each key is the mesh instance index and each value is the asset `id`. |               |
 * | `components.model.materialAsset`          | `number`        | The `id` of the material asset that will be used to render the model (only applies to primitives).                                   | `null`        |
 * | `components.model.receiveShadows`         | `boolean`       | If true, the model rendered by this component will receive shadows cast by other models in the scene.                                | `true`        |
 * | `components.model.type`                   | `string`        | The type of the model to be rendered. Can be: asset, box, capsule, cone, cylinder, sphere.                                           | `"asset"`     |
 *
 * ParticleSystem Component Properties:
 *
 * | Path                                      | Type              | Description                                                                                                               | Default Value |
 * | :---------------------------------------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------ | :------------ |
 * | `components.particlesystem`               | `object`          | The data for the particlesystem component.                                                                                |               |
 * | `components.particlesystem.alignToMotion` | `boolean`         | If true orient particles in their direction of motion.                                                                    | `false`       |
 * | `components.particlesystem.alphaGraph`    | `object`          | A curve defining how each particle's opacity changes over time. If `alphaGraph2` is specified, the opacity will be a random lerp between both curves. | `{"type":1,"keys":[0,1],"betweenCurves":false}` |
 * | `components.particlesystem.alphaGraph2`   | `object`          | A curve defining how each particle's opacity changes over time. If specified, the opacity will be a random lerp between both curves. | `{"type":1,"keys":[0,1]}` |
 * | `components.particlesystem.animIndex`     | `number`          | The animation from the sprite sheet to play for each particle in the system.                                              | `0`           |
 * | `components.particlesystem.animLoop`      | `boolean`         | If true then the sprite sheet animation will repeat indefinitely.                                                         | `true`        |
 * | `components.particlesystem.animNumAnimations` | `number`    | Number of animations contained in the sprite sheet.                                                                      | `1`           |
 * | `components.particlesystem.animNumFrames` | `number`          | Number of sprite sheet frames in each animation.                                                                         | `1`           |
 * | `components.particlesystem.animSpeed`     | `number`          | Sprite sheet animation speed. 1 = particle lifetime, 2 = twice during lifetime etc...                                    | `1`           |
 * | `components.particlesystem.animStartFrame`| `number`          | Sprite sheet frame in animation to begin animating from.                                                                 | `0`           |
 * | `components.particlesystem.animTilesX`    | `number`          | Number of horizontal tiles in the sprite sheet.                                                                          | `1`           |
 * | `components.particlesystem.animTilesY`    | `number`          | Number of vertical tiles in the sprite sheet.                                                                            | `1`           |
 * | `components.particlesystem.autoPlay`      | `boolean`         | If true, the particle system will play immediately on creation. If false, you will need to call the particle system component's play function from script. | `true`        |
 * | `components.particlesystem.blendType`     | `number`          | The blending mode determines how particles are composited when they are written to the frame buffer.                      | `2`           |
 * | `components.particlesystem.colorGraph`    | `object`          | A curve defining how each particle's color changes over time.                                                            | `{"type":4,"keys":[[0,1],[0,1],[0,1]],"betweenCurves":false}` |
 * | `components.particlesystem.colorMapAsset` | `number`          | The `id` of the color map texture asset to apply to all particles in the system. If no texture asset is assigned, a default spot texture is used. | `null`        |
 * | `components.particlesystem.depthSoftening`| `number`          | This variable value determines how much particles fade out as they get closer to another surface.                        | `0`           |
 * | `components.particlesystem.depthWrite`    | `boolean`         | If true, the particles will write depth information to the depth buffer.                                                 | `false`       |
 * | `components.particlesystem.emitterExtents`| `Array<number>`   | An array of 3 numbers that represents the half extents of a local space bounding box within which particles are spawned at random positions. | `[0,0,0]` |
 * | `components.particlesystem.emitterRadius` | `number`          | The radius within which particles are spawned at random positions.                                                       | `0`           |
 * | `components.particlesystem.emitterShape`  | `number`          | Shape of the emitter. Can be: `pc.EMITTERSHAPE_BOX`, `pc.EMITTERSHAPE_SPHERE`.                                          | `0`           |
 * | `components.particlesystem.enabled`       | `boolean`         | Whether the component is enabled.                                                                                        | `true`        |
 * | `components.particlesystem.halfLambert`   | `boolean`         | If true avoid particles looking too flat when lights appear to be shining towards the back sides of the particles.       | `false`       |
 * | `components.particlesystem.intensity`     | `number`          | Scales the color of particles to allow them to have arbitrary brightness.                                               | `1`           |
 * | `components.particlesystem.layers`        | `Array<number>`   | An array of layer id's that this particle sytem belongs to. When a particle system belongs to multiple layers it will be rendered multiple times. | `[0]`     |
 * | `components.particlesystem.lighting`      | `boolean`         | If true, the particle will be lit by the directional and ambient light in the scene.                                    | `false`       |
 * | `components.particlesystem.loop`          | `boolean`         | If true, the particle system will emit indefinitely. Otherwise, it will emit the number of particles specified by the `numParticles` property and then stop. | `true`    |
 * | `components.particlesystem.mesh`          | `number`          | The id of a model asset. The first mesh found in the model is used to represent all particles rather than a flat billboard. | `null`    |
 * | `components.particlesystem.normalMapAsset`| `number`          | The `id` of the normal map texture asset to apply to all particles in the system.                                       | `null`        |
 * | `components.particlesystem.numParticles`  | `number`          | The maximum number of particles managed by this particle system.                                                         | `30`          |
 * | `components.particlesystem.orientation`   | `number`          | Orientation mode controls particle planes facing.                                                                        | `0`           |
 * | `components.particlesystem.particleNormal`| `Array<number>`   | An array of 3 numbers that represents either world or emitter space vector to define particle plane orientation.         | `[0,1,0]`     |
 * | `components.particlesystem.preWarm`       | `boolean`         | If true, the particle system will be initialized as though it had already completed a full cycle.                        | `false`       |
 * | `components.particlesystem.radialSpeedGraph` | `object`      | A curve defining how particle's radial speed changes over time. Individual particle radial velocity points from emitter origin to particle current position. | `{"type":1,"keys":[0,0],"betweenCurves":false}` |
 * | `components.particlesystem.rotationSpeedGraph` | `object`    | A curve defining how each particle's angular velocity changes over time.                                                 | `{"type":1,"keys":[0,0],"betweenCurves":false}` |
 * | `components.particlesystem.scaleGraph`    | `object`          | A curve defining how each particle's scale changes over time. By default, a particle is 1 unit in width and height.     | `{"type":1,"keys":[0,0.1],"betweenCurves":false}` |
 * | `components.particlesystem.screenSpace`   | `boolean`         | Renders particles in 2D screen space.                                                                                    | `false`       |
 * | `components.particlesystem.sort`          | `number`          | Sorting mode gives you control over the order in which particles are rendered.                                           | `0`           |
 * | `components.particlesystem.startAngle`    | `number`          | The bounds of the initial particle rotation specified in degrees.                                                        | `0`           |
 * | `components.particlesystem.velocityGraph` | `object`          | A curve defining how each particle's velocity with respect to the world coordinate system changes over time.             | `{"type":1,"keys":[[0,-1],[0,-1],[0,-1]],"betweenCurves":true}` |
 * | `components.particlesystem.wrap`          | `boolean`         | Enables wrap bounds.                                                                                                     | `false`       |
 * | `components.particlesystem.wrapBounds`    | `Array<number>`   | An array of 3 numbers that represents the world space AABB volume centered on the owner entity's position.                | `[0,0,0]`     |
 *
 * Render Component Properties:
 *
 * | Path                                      | Type             | Description                                                                                       | Default Value |
 * | :---------------------------------------- | :--------------- | :------------------------------------------------------------------------------------------------ | :------------ |
 * | `components.render`                       | `object`         | The data for the render component.                                                                |               |
 * | `components.render.aabbCenter`            | `Array<number>`  | An array of 3 numbers controlling the center of the AABB to be used.                              |               |
 * | `components.render.aabbHalfExtents`       | `Array<number>`  | An array of 3 numbers controlling the half extents of the AABB to be used.                        |               |
 * | `components.render.asset`                 | `number`         | The `id` of the render asset for the render component (only applies to type "asset").             | `null`        |
 * | `components.render.batchGroupId`          | `number`         | The batch group id that the meshes should belong to.                                              | `null`        |
 * | `components.render.castShadows`           | `boolean`        | If true, attached meshes will cast shadows for lights that have shadow casting enabled.           | `true`        |
 * | `components.render.castShadowsLightmap`   | `boolean`        | If true, the meshes will cast shadows when rendering lightmaps.                                   | `true`        |
 * | `components.render.enabled`               | `boolean`        | Whether the component is enabled.                                                                 | `true`        |
 * | `components.render.isStatic`              | `boolean`        | Mark meshes as non-movable (optimization).                                                        | `false`       |
 * | `components.render.layers`                | `Array<number>`  | An array of layer id's to which the meshes should belong.                                         | `[0]`         |
 * | `components.render.lightmapSizeMultiplier`| `number`         | Lightmap resolution multiplier.                                                                   | `1`           |
 * | `components.render.lightmapped`           | `boolean`        | If true, the meshes will be lightmapped after using lightmapper.bake().                           | `false`       |
 * | `components.render.materialAssets`        | `Array<number>`  | An array of material asset `id`'s that will be used to render the meshes. Each material corresponds to the respective mesh instance. | `[]` |
 * | `components.render.receiveShadows`        | `boolean`        | If true, shadows will be cast on attached meshes.                                                 | `true`        |
 * | `components.render.rootBone`              | `string`         | The `resource_id` of the entity to be used as the root bone for any skinned meshes that are rendered by this component. | `null`    |
 * | `components.render.type`                  | `string`         | The type of the render component. Can be: asset, box, capsule, cone, cylinder, plane, sphere.     | `"asset"`     |
 *
 * RigidBody Component Properties:
 *
 * | Path                                  | Type            | Description                                                                      | Default Value |
 * | :------------------------------------ | :-------------- | :------------------------------------------------------------------------------- | :------------ |
 * | `components.rigidbody`                | `object`        | The data for the rigidbody component.                                            |               |
 * | `components.rigidbody.angularDamping` | `number`        | Controls the rate at which a body loses angular velocity over time.              | `0`           |
 * | `components.rigidbody.angularFactor`  | `Array<number>` | An array of 3 numbers that represents the scaling factor for angular movement of the body in each axis. | `[1,1,1]` |
 * | `components.rigidbody.enabled`        | `boolean`       | Whether the component is enabled.                                                | `true`        |
 * | `components.rigidbody.friction`       | `number`        | The friction value used when contacts occur between two bodies.                  | `0.5`         |
 * | `components.rigidbody.linearDamping`  | `number`        | Controls the rate at which a body loses linear velocity over time.               | `0`           |
 * | `components.rigidbody.linearFactor`   | `Array<number>` | An array of 3 numbers that represents the scaling factor for linear movement of the body in each axis. | `[1,1,1]`  |
 * | `components.rigidbody.mass`           | `number`        | The mass of the body.                                                            | `1`           |
 * | `components.rigidbody.restitution`    | `number`        | The amount of energy lost when two objects collide, this determines the bounciness of the object. | `0.5`      |
 * | `components.rigidbody.type`           | `string`        | The type of RigidBody determines how it is simulated. Can be one of: static, dynamic, kinematic. | `"static"` |
 *
 * Screen Component Properties:
 *
 * | Path                                    | Type            | Description                                                                                                                               | Default Value |
 * | :-------------------------------------- | :-------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :------------ |
 * | `components.screen`                     | `object`        | The data for the screen component.                                                                                                        |               |
 * | `components.screen.enabled`             | `boolean`       | Whether the component is enabled.                                                                                                         | `true`        |
 * | `components.screen.referenceResolution` | `Array<number>` | An array of 2 numbers that represents the reference resolution of the screen. The screen adjusts its size based on `scaleMode`.           | `[1280,720]`  |
 * | `components.screen.resolution`          | `Array<number>` | An array of 2 numbers that represents the resolution of the screen.                                                                       | `[1280,720]`  |
 * | `components.screen.scaleBlend`          | `number`        | Adjusts screen size changes relative to window size changes. 0 adjusts width only, 1 adjusts height only, values in between adjust both.  | `0.5`         |
 * | `components.screen.scaleMode`           | `string`        | Controls screen resizing with window size changes. Can be `pc.SCALEMODE_BLEND` for adjusting to window resolution or `pc.SCALEMODE_NONE`. | `"blend"`     |
 * | `components.screen.screenSpace`         | `boolean`       | If true, displays child Elements in 2D. Set false for a 3D screen.                                                                        | `true`        |
 *
 * Script Component Properties:
 *
 * | Path                                      | Type            | Description                                                                                         | Default Value |
 * | :---------------------------------------- | :-------------- | :-------------------------------------------------------------------------------------------------- | :------------ |
 * | `components.script`                       | `object`        | The data for the script component.                                                                  |               |
 * | `components.script.enabled`               | `boolean`       | Whether the component is enabled.                                                                   | `true`        |
 * | `components.script.order`                 | `Array<string>` | An array of script names in the order they should be executed at runtime.                           | `[]`          |
 * | `components.script.scripts`               | `object`        | A dictionary containing all scripts attached to this component, indexed by script name.             | `{}`          |
 * | `components.script.scripts.*.attributes`  | `object`        | A dictionary holding the values for each attribute, indexed by attribute name.                      |               |
 * | `components.script.scripts.*.enabled`     | `boolean`       | Whether the individual script instance is enabled.                                                  |               |
 *
 * Scrollbar Component Properties:
 *
 * | Path                                | Type      | Description                                                                                    | Default Value |
 * | :---------------------------------- | :-------- | :--------------------------------------------------------------------------------------------- | :------------ |
 * | `components.scrollbar`              | `object`  | The data for the scrollbar component.                                                          |               |
 * | `components.scrollbar.enabled`      | `boolean` | Whether the component is enabled.                                                              | `true`        |
 * | `components.scrollbar.handleEntity` | `string`  | The `resource_id` of the entity used as the scrollbar handle. Must have a scrollbar component. | `null`        |
 * | `components.scrollbar.handleSize`   | `number`  | The size of the handle relative to the track size, in the range 0...1.                         | `0.5`         |
 * | `components.scrollbar.orientation`  | `number`  | The scrollbar orientation: horizontal or vertical.                                             | `0`           |
 * | `components.scrollbar.value`        | `number`  | The current position value of the scrollbar, in the range 0...1.                               | `0`           |
 *
 * Scrollview Component Properties:
 *
 * | Path                                                  | Type         | Description                                                                                                                              | Default Value |
 * | :---------------------------------------------------- | :----------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :------------ |
 * | `components.scrollview`                               | `object`     | The data for the scrollview component.                                                                                                   |               |
 * | `components.scrollview.bounceAmount`                  | `number`     | Controls how far the content should move before bouncing back.                                                                           | `0.1`         |
 * | `components.scrollview.contentEntity`                 | `string`     | The `resource_id` of the entity containing the scrolling content. Must have an element component.                                        | `null`        |
 * | `components.scrollview.enabled`                       | `boolean`    | Whether the component is enabled.                                                                                                        | `true`        |
 * | `components.scrollview.friction`                      | `number`     | Controls how freely content moves if thrown, with 1 stopping immediately and 0 allowing perpetual movement.                              | `0.05`        |
 * | `components.scrollview.horizontal`                    | `boolean`    | Whether to enable horizontal scrolling.                                                                                                  | `true`        |
 * | `components.scrollview.horizontalScrollbarEntity`     | `string`     | The `resource_id` of the entity used as the horizontal scrollbar. Must have a scrollbar component.                                       | `null`        |
 * | `components.scrollview.horizontalScrollbarVisibility` | `number`     | Controls visibility of the horizontal scrollbar.                                                                                         | `1`           |
 * | `components.scrollview.mouseWheelSensitivity`         | `Array<number>` | Controls mouse wheel sensitivity for scrolling, with 0 disabling it.                                                                  | `[1,1]`       |
 * | `components.scrollview.scrollMode`                    | `number`     | How the scroll view behaves when scrolling past content end.                                                                             | `1`           |
 * | `components.scrollview.useMouseWheel`                 | `boolean`    | Whether to use the mouse wheel for scrolling within bounds.                                                                              | `true`        |
 * | `components.scrollview.vertical`                      | `boolean`    | Whether to enable vertical scrolling.                                                                                                    | `true`        |
 * | `components.scrollview.verticalScrollbarEntity`       | `string`     | The `resource_id` of the entity used as the vertical scrollbar. Must have a scrollbar component.                                         | `null`        |
 * | `components.scrollview.verticalScrollbarVisibility`   | `number`     | Controls visibility of the vertical scrollbar.                                                                                           | `1`           |
 * | `components.scrollview.viewportEntity`                | `string`     | The `resource_id` of the entity used as the viewport area, within which content scrolls. Must have an element component of type `group`. | `null`        |
 *
 * Sound Component Properties:
 *
 * | Path                                 | Type      | Description                                                                            | Default Value |
 * | :----------------------------------- | :-------- | :------------------------------------------------------------------------------------- | :------------ |
 * | `components.sound`                   | `object`  | The data for the sound component.                                                      |               |
 * | `components.sound.distanceModel`     | `string`  | Algorithm to use for audio volume falloff. Can be: "inverse", "linear", "exponential". | `"linear"`    |
 * | `components.sound.enabled`           | `boolean` | Whether the component is enabled.                                                      | `true`        |
 * | `components.sound.maxDistance`       | `number`  | Maximum distance at which audio falloff stops.                                         | `10000`       |
 * | `components.sound.pitch`             | `number`  | The pitch for audio playback. Multiplied with slot pitch values.                       | `1`           |
 * | `components.sound.positional`        | `boolean` | If true, audio is played as 3D sound.                                                  | `true`        |
 * | `components.sound.refDistance`       | `number`  | Reference distance for reducing audio volume.                                          | `1`           |
 * | `components.sound.rollOffFactor`     | `number`  | Rate at which the audio volume falls off.                                              | `1`           |
 * | `components.sound.slots`             | `object`  | Dictionary of sound slots, each controlling playback of an audio asset.                | See below     |
 * | `components.sound.slots.*.asset`     | `number`  | The `id` of the audio asset in this sound slot.                                        |               |
 * | `components.sound.slots.*.autoPlay`  | `boolean` | If true, this sound slot plays on load.                                                |               |
 * | `components.sound.slots.*.duration`  | `number`  | Duration of the sound to play from this slot.                                          |               |
 * | `components.sound.slots.*.loop`      | `boolean` | If true, sound slot loops playback.                                                    |               |
 * | `components.sound.slots.*.name`      | `string`  | Name of the sound slot.                                                                |               |
 * | `components.sound.slots.*.overlap`   | `boolean` | If true, sounds from this slot overlap each other.                                     |               |
 * | `components.sound.slots.*.pitch`     | `number`  | Pitch for playback of this sound slot.                                                 |               |
 * | `components.sound.slots.*.startTime` | `number`  | Start time for playing the sound.                                                      |               |
 * | `components.sound.slots.*.volume`    | `number`  | Volume modifier for this sound slot.                                                   |               |
 * | `components.sound.volume`            | `number`  | Overall volume modifier for the component.                                             | `1`           |
 *
 * Sprite Component Properties:
 *
 * | Path                                    | Type            | Description                                                                                     | Default Value |
 * | :-------------------------------------- | :-------------- | :---------------------------------------------------------------------------------------------- | :------------ |
 * | `components.sprite`                     | `object`        | The data for the sprite component.                                                              |               |
 * | `components.sprite.autoPlayClip`        | `string`        | The `name` of the sprite animation clip to play automatically when the component is enabled.    | `null`        |
 * | `components.sprite.batchGroupId`        | `number`        | The batch group id that this sprite belongs to.                                                 | `null`        |
 * | `components.sprite.clips`               | `object`        | A dictionary containing data for all sprite animation clips. Each key is the index of the clip. | `{}`          |
 * | `components.sprite.clips.*.autoPlay`    | `boolean`       | If true, automatically start playing this animation clip when loaded.                           |               |
 * | `components.sprite.clips.*.fps`         | `number`        | The frames per second for this animation clip.                                                  |               |
 * | `components.sprite.clips.*.loop`        | `boolean`       | If true, the animation clip will loop.                                                          |               |
 * | `components.sprite.clips.*.name`        | `string`        | The unique name of the animation clip for this sprite component.                                |               |
 * | `components.sprite.clips.*.spriteAsset` | `number`        | The `id` of the sprite asset containing all frames for this animation clip.                     |               |
 * | `components.sprite.color`               | `Array<number>` | The color tint of the sprite, represented as an array of 3 numbers.                             | `[1,1,1]`     |
 * | `components.sprite.drawOrder`           | `number`        | The draw order of the sprite; higher values are rendered on top of others.                      | `0`           |
 * | `components.sprite.enabled`             | `boolean`       | Whether the component is enabled.                                                               | `true`        |
 * | `components.sprite.flipX`               | `boolean`       | If true, flips the sprite on the X axis.                                                        | `false`       |
 * | `components.sprite.flipY`               | `boolean`       | If true, flips the sprite on the Y axis.                                                        | `false`       |
 * | `components.sprite.frame`               | `number`        | The frame of the sprite asset to render.                                                        | `0`           |
 * | `components.sprite.height`              | `number`        | The height of the sprite for 9-slicing rendering.                                               | `1`           |
 * | `components.sprite.layers`              | `Array<number>` | The layers this sprite belongs to.                                                              | `[0]`         |
 * | `components.sprite.opacity`             | `number`        | The opacity of the sprite.                                                                      | `1`           |
 * | `components.sprite.speed`               | `number`        | Global speed modifier for sprite animation clips.                                               | `1`           |
 * | `components.sprite.spriteAsset`         | `number`        | The `id` of the sprite asset used by the component.                                             | `null`        |
 * | `components.sprite.type`                | `string`        | The type of sprite component. Can be `pc.SPRITETYPE_SIMPLE` or `pc.SPRITETYPE_ANIMATED`.        | `"simple"`    |
 * | `components.sprite.width`               | `number`        | The width of the sprite for 9-slicing rendering.                                                | `1`           |
 */
class Entity extends Events {
    private _observer: EntityObserver;

    private _history: ObserverHistory | {};


    /**
     * Creates new Entity
     *
     * @category Internal
     * @param data - Optional entity data
     */
    constructor(data: any = {}) {
        super();

        let name = data.name;
        if (name === undefined || typeof name !== 'string') {
            name = 'New Entity';
        }

        const observerData: {
            name: string;
            tags: string[];
            enabled: boolean;
            resource_id: string;
            parent: string | null;
            children: EntityObserver[];
            position: number[];
            rotation: number[];
            scale: number[];
            components: {};
            template_id?: number;
            template_ent_ids?: Record<string, string>;
        } = {
            name: name,
            tags: data.tags || [],
            enabled: data.enabled !== undefined ? !!data.enabled : true,
            resource_id: data.resource_id || Guid.create(),
            parent: typeof data.parent === 'string' ? data.parent : null,
            children: [] as EntityObserver[],
            position: data.position || [0, 0, 0],
            rotation: data.rotation || [0, 0, 0],
            scale: data.scale || [1, 1, 1],
            components: {}
        };

        if (data.template_id) {
            observerData.template_id = data.template_id;
        }
        if (data.template_ent_ids) {
            observerData.template_ent_ids = data.template_ent_ids;
        }

        this._observer = new Observer(observerData) as EntityObserver;

        this._observer.addEmitter(this);

        const id = this._observer.get('resource_id');

        this._observer.latestFn = () => {
            const latest = api.entities.get(id);
            return latest && latest._observer;
        };

        this._observer.apiEntity = this;

        if (data.components) {
            for (const component in data.components) {
                this.addComponent(component, data.components[component]);
            }
        }

        this._history = {};
    }

    _initializeHistory() {
        if (this._observer.history) return;

        this._history = new ObserverHistory({
            item: this._observer,
            prefix: `entity.${this.get('resource_id')}.`,
            history: api.history
        });
        this._observer.history = this._history as ObserverHistory;
    }

    /**
     * Checks if path exists. See {@link Entity} for a list of properties.
     *
     * @param path - The path
     * @returns True if path exists
     * @example
     * ```javascript
     * console.log(entity.has('components.model'));
     * ```
     */
    has(path: string) {
        return this._observer.has(path);
    }

    /**
     * Gets value at path. See {@link Entity} for a list of properties.
     *
     * @param path - The path
     * @returns The value
     * @example
     * ```javascript
     * console.log(entity.get('position'));
     * ```
     */
    get(path: string) {
        return this._observer.get(path);
    }

    /**
     * Sets value at path. See {@link Entity} for a list of properties.
     *
     * @param path - The path
     * @param value - The value
     * @returns Whether the value was set
     * @example
     * ```javascript
     * entity.set('position', [1, 0, 0]);
     * ```
     */
    set(path: string, value: any) {
        return this._observer.set(path, value);
    }

    /**
     * Unsets value at path. See {@link Entity} for a list of properties.
     *
     * @param path - The path
     * @returns Whether the value was unset
     * @example
     * ```javascript
     * entity.unset('components.model');
     * ```
     */
    unset(path: string) {
        return this._observer.unset(path);
    }

    /**
     * Inserts value in array at path, at specified index. See {@link Entity} for a list of properties.
     *
     * @param path - The path
     * @param value - The value
     * @param index - The index (if undefined the value will be inserted in the end)
     * @returns Whether the value was inserted
     * @example
     * ```javascript
     * entity.insert('tags', 'a_tag');
     * ```
     */
    insert(path: string, value: any, index?: number) {
        return this._observer.insert(path, value, index);
    }

    /**
     * Remove value from array at path. See {@link Entity} for a list of properties.
     *
     * @param path - The path
     * @param value - The value
     * @returns Whether the value was removed
     * @example
     * ```javascript
     * entity.removeValue('tags', 'a_tag');
     * ```
     */
    removeValue(path: string, value: any) {
        return this._observer.removeValue(path, value);
    }

    /**
     * Returns JSON representation of entity data
     *
     * @returns - The data
     * ```javascript
     * console.log(entity.json());
     * ```
     */
    json() {
        return this._observer.json();
    }

    /**
     * Returns a JSON representation of entity data. The children array
     * of the entity gets recursively converted to an array of entity data
     * instead of containing children resource ids.
     *
     * @returns - The data
     * @example
     * ```javascript
     * const data = entity.jsonHierarchy();
     * console.log(data.children[0].name);
     * ```
     */
    jsonHierarchy() {
        const result = this.json() as any;
        const children = this.children;
        for (let i = 0; i < children.length; i++) {
            result.children[i] = children[i] && children[i].jsonHierarchy();
        }

        return result;
    }

    /**
     * Returns true if this entity is a descendant of the specified parent entity.
     *
     * @param parent - The parent
     * @returns True if it is
     */
    isDescendantOf(parent: Entity) {
        let p = this.parent;
        while (p) {
            if (p === parent) {
                return true;
            }

            p = p.parent;
        }

        return false;
    }

    /**
     * Finds first entity by name using depth-first search
     *
     * @param name - The name
     * @returns The entity
     * @example
     * ```javascript
     * const door = editor.entities.root.findByName('Door');
     * ```
     */
    findByName(name: string): Entity | null {
        if (this.get('name') === name) {
            return this;
        }

        const children = this.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (child) {
                const found = child.findByName(name);
                if (found) {
                    return found;
                }
            }
        }

        return null;
    }

    /**
     * Finds all entities with specified tags
     *
     * @param tags - The tags. If multiple tags are specified then entities that contain ANY of the specified
     * tags will be included. If an argument is an array of tags then entities that contain ALL of the tags in the array will be included.
     * @returns The entities
     * @example
     * ```javascript
     * // entities that have the following tag
     * const entities = editor.entities.root.listByTag('tag');
     * // entities that have any of the following tags
     * const entities = editor.entities.root.listByTag('tag', 'tag2');
     * // entities that have all of the following tags
     * const entities = editor.entities.root.listByTag(['tag', 'tag2']);
     * ```
     */
    listByTag(...tags: any[]) {
        return this.filter((entity: Entity) => {
            const t = entity.get('tags');
            for (let i = 0; i < tags.length; i++) {
                if (Array.isArray(tags[i])) {
                    let countTags = 0;
                    for (let j = 0; j < tags[i].length; j++) {
                        if (t.includes(tags[i][j])) {
                            countTags++;
                        } else {
                            break;
                        }
                    }

                    if (countTags === tags[i].length) {
                        return true;
                    }
                } else {
                    if (t.includes(tags[i])) {
                        return true;
                    }
                }
            }

            return false;
        });
    }

    /**
     * Returns the entity and children that satisfy the function
     *
     * @param fn - A function that takes an Entity and returns whether it should be included
     * in the result
     * @returns The result
     * @example
     * ```javascript
     * const doors = editor.entities.root.filter(entity => entity.get('name').startsWith('door'));
     * ```
     */
    filter(fn: (entity: Entity) => boolean): Entity[] {
        let result: Entity[] = [];

        if (fn(this)) {
            result.push(this);
        }

        const children = this.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (child) {
                result = result.concat(child.filter(fn));
            }
        }

        return result;
    }

    /**
     * Executes function for this entity and its children in depth first order.
     *
     * @param fn - A function that takes an entity as an argument
     * @example
     * ```javascript
     * // get a list of all entities in the graph in depth first order
     * const entities = [];
     * editor.entities.root.depthFirst(entity => entities.push(entity));
     * ```
     */
    depthFirst(fn: (entity: Entity) => void) {
        fn(this);

        const children = this.children;
        children.forEach((child: Entity) => {
            if (child) {
                child.depthFirst(fn);
            } else {
                fn(child);
            }
        });
    }

    /**
     * Adds a component to this Entity
     *
     * @param component - The component name
     * @param data - Default component data. Defaults values will be used for any missing fields.
     * For details on component properties see {@link Entity}.
     * @example
     * ```javascript
     * editor.entities.root.addComponent('model', {
     *     type: 'box'
     * });
     * ```
     */
    addComponent(component: string, data = {}) {
        const defaultData = api.schema.components.getDefaultData(component);
        const componentData = Object.assign(defaultData, data);
        this.set(`components.${component}`, componentData);
    }

    /**
     * Removes a component from this Entity
     *
     * @param component - The component name
     * @example
     * ```javascript
     * editor.entities.root.removeComponent('model');
     * ```
     */
    removeComponent(component: string) {
        this.unset(`components.${component}`);
    }

    /**
     * Adds entity as a child
     *
     * @category Internal
     * @param entity - The entity
     * @returns Whether the child was added
     */
    addChild(entity: Entity) {
        return this.insertChild(entity);
    }

    /**
     * Inserts entity as a child at specified index.
     *
     * @category Internal
     * @param entity - The entity
     * @param index - The index. If undefined the child will be added in the end.
     * @returns Whether the child was added
     */
    insertChild(entity: Entity, index: number | undefined = undefined) {
        let history = this.history.enabled;
        this.history.enabled = false;
        const result = this.insert('children', entity.get('resource_id'), index);
        this.history.enabled = history;

        // BUG TRACKING: missing children
        if (!api.entities.get(entity.get('resource_id'))) {
            console.error(`BUG TRACKING: inserting missing child guid ${entity.get('resource_id')} to parent ${this.get('resource_id')}`);
        }

        if (result) {
            history = entity.history.enabled;
            entity.history.enabled = false;
            entity.set('parent', this.get('resource_id'));
            entity.history.enabled = history;
            return true;
        }

        console.error(`Cannot add duplicate child ${entity.get('resource_id')} under parent ${this.get('resource_id')}`);
        return false;
    }

    /**
     * Removes entity from children
     *
     * @category Internal
     * @param entity - The entity
     */
    removeChild(entity: Entity) {
        let history = entity.history.enabled;
        entity.history.enabled = false;
        try {
            entity.observer.set('parent', null, true); // silent set otherwise we run into C3 error
        } catch (err) {
            console.error(`Error when setting parent to null for entity ${entity.get('resource_id')}`);
            console.error(err);
        }
        entity.history.enabled = history;

        history = this.history.enabled;
        this.history.enabled = false;
        try {
            this.removeValue('children', entity.get('resource_id'));
        } catch (err) {
            console.error(`Error when removing ${entity.get('resource_id')} from children of entity ${this.get('resource_id')}`);
            console.error(err);
        }
        this.history.enabled = history;
    }

    /**
     * Deletes entity (and its children)
     *
     * @param options.history - Whether to record a history action. Defaults to true.
     * @returns A promise
     * @example
     * ```javascript
     * editor.entities.root.findByName('door').delete();
     * ```
     *
     */
    delete(options: { history?: boolean } = {}) {
        return api.entities.delete([this], options);
    }

    /**
     * Reparents entity under new parent
     *
     * @param parent - The new parent
     * @param index - The desired index. If undefined the entity will be added at the end of the parent's children.
     * @param options.history - Whether to record a history action. Defaults to true.
     * @param options.preserveTransform - Whether to preserve the original transform after reparenting
     * @example
     * ```javascript
     * const redHouse = editor.entities.root.findByName('red house');
     * const greenHouse = editor.entities.root.findByName('green house');
     * const door = redHouse.findByName('door');
     * door.reparent(greenHouse);
     * ```
     */
    reparent(parent: Entity, index: number | null = null, options: { history?: boolean, preserveTransform?: boolean } = {}) {
        api.entities.reparent([{
            entity: this,
            parent: parent,
            index: index
        }], options);
    }

    /**
     * Duplicates entity under the same parent
     *
     * @param options.history - Whether to record a history action. Defaults to true.
     * @param options.select - Whether to select the new entity. Defaults to false.
     * @param options.rename - Whether to rename the duplicated entity. Defaults to false.
     * @returns The new entity
     */
    async duplicate(options: { history?: boolean, select?: boolean, rename?: boolean } = {}) {
        const result = await api.entities.duplicate([this], options);
        return result[0];
    }

    /**
     * Returns the latest version of the Entity from the Entities API.
     *
     * @returns The entity
     */
    latest() {
        return api.entities.get(this._observer.get('resource_id'));
    }

    /**
     * Adds a script to the script component of this entity.
     * If a script component does not exist, this method will add the script
     * component as well.
     *
     * @param scriptName - The name of the script.
     * @param options.attributes - The values of attributes. Each key is the name
     * of the attributes and each value is the value for that attribute. Leave undefined to
     * let the Editor set default values depending on the attribute types.
     * @param options.history - Whether to add a history action. Defaults to true.
     * @param options.index - The desired index in the entity's scripts order to add this script.
     * @returns A promise
     */
    addScript(scriptName: string, options: { attributes?: object, history?: boolean, index?: number } = {}) {
        return api.entities.addScript([this], scriptName, options);
    }

    /**
     * Removes a script from the entity's script component.
     *
     * @param scriptName - The name of the script.
     * @param options.history - Whether to record a history action. Defaults to true.
     */
    removeScript(scriptName: string, options: { history?: boolean } = {}) {
        api.entities.removeScript([this], scriptName, options);
    }

    /**
     * The observer object for this entity.
     */
    get observer() {
        return this._observer;
    }

    /**
     * The parent entity.
     */
    get parent() {
        const id = this.get('parent');
        return (id ? api.entities.get(id) : null) as Entity;
    }

    /**
     * The children entities. Warning: this creates a new array every time it's called.
     */
    get children() {
        return this.get('children').map((id: string) => api.entities.get(id)) as Entity[];
    }

    /**
     * The history object for this entity.
     */
    get history() {
        return this._history as ObserverHistory;
    }

    /**
     * The entity in the 3D viewport of the Editor.
     */
    get viewportEntity() {
        return (this._observer ? (this._observer as any).entity : null) as any;
    }
}

export { Entity };
