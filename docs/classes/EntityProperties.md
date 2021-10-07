[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / [Entity](Entity.md) / Properties

# Entity Properties #

These are the properties that you can access on an [Entity](Entity.md):

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `children` | `Array<string>` | An array that contains the `resource_id`'s of the entity's children. | `[]`| 
| `enabled` | `boolean` | Whether the entity is enabled. | `true`| 
| `name` | `string` | The name of the entity. |  | 
| `parent` | `string` | The `resource_id` of the parent entity. |  | 
| `position` | `Array<number>` | The position of the entity in local space (x, y, z). | `[0,0,0]`| 
| `resource_id` | `string` | The unique GUID of the entity. |  | 
| `rotation` | `Array<number>` | The rotation of the entity in local space (rx, ry, rz euler angles in degrees) | `[0,0,0]`| 
| `scale` | `Array<number>` | The scale of the entity in local space (sx, sy, sz). | `[1,1,1]`| 
| `tags` | `Array<string>` | The tags of the entity. | `[]`| 
| `template_ent_ids` | `object` | A dictionary of <`resource_id`, `resource_id`> pairs that maps the entity (and its children) to the respective Entities in the template asset. |  | 
| `template_id` | `number` | The `id` of the Template asset that this entity is linked to. |  | 
| `components` | `object` | A dictionary that contains the components of the entity and their data. |  | 


## Anim Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.anim` | `object` | The data for the anim component. |  | 
| `components.anim.activate` | `boolean` | If true, the component will start playing the anim state graph on load. | `true`| 
| `components.anim.animationAssets` | `object` | A dictionary that holds the animation assets used by this component. Each key is a string which represents a path to a particular state in the graph e.g. "LocomotionLayer:Walking". | `{}`| 
| `components.anim.animationAssets.*.asset` | `number` | The `id` of the The animation asset. | `null`| 
| `components.anim.enabled` | `boolean` | Whether the component is enabled. | `true`| 
| `components.anim.rootBone` | `string` | The `resource_id` of the entity that this anim component should use as the root of the animation hierarchy. | `null`| 
| `components.anim.speed` | `number` | A multiplier for animation playback speed. 0 will freeze animation playback, and 1 represents the normal playback speed. | `1`| 


## Animation Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.animation` | `object` | The data for the (legacy) animation component. |  | 
| `components.animation.activate` | `boolean` | If true, the component will start playing the animation on load. | `true`| 
| `components.animation.assets` | `Array<number>` | An array of Animation asset `id`'s. | `[]`| 
| `components.animation.enabled` | `boolean` | Whether the component is enabled. | `true`| 
| `components.animation.loop` | `boolean` | If true, the animation will continue to loop back to the start on completion. Otherwise, the animation will come to a stop on its final frame. | `true`| 
| `components.animation.speed` | `number` | A multiplier for animation playback speed. 0 will freeze animation playback, and 1 represents the normal playback speed of the asset. | `1`| 


## Audiolistener Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.audiolistener` | `object` | The data for the audiolistener component. |  | 
| `components.audiolistener.enabled` | `boolean` | Whether the component is enabled. | `true`| 


## Button Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.button` | `object` | The data for the button component. |  | 
| `components.button.active` | `boolean` | If false, the button will be visible but will not respond to hover or touch interactions. | `true`| 
| `components.button.enabled` | `boolean` | Whether the component is enabled. | `true`| 
| `components.button.fadeDuration` | `number` | Duration to be used when fading between tints, in milliseconds. | `0`| 
| `components.button.hitPadding` | `Array<number>` | An array of 4 numbers controlling the padding to be used in hit-test calculations. Can be used to expand the bounding box so that the button is easier to tap. | `[0,0,0,0]`| 
| `components.button.hoverSpriteAsset` | `number` | The `id` of the sprite asset to be used as the button image when the user hovers over it. | `null`| 
| `components.button.hoverSpriteFrame` | `number` | Frame to be used from the hover sprite. | `0`| 
| `components.button.hoverTint` | `Array<number>` | Array of 4 numbers controlling the color to be used on the button image when the user hovers over it. | `[1,1,1,1]`| 
| `components.button.imageEntity` | `string` | The `resource_id` of the entity to be used as the button background. The entity must have an element component of type `image`. | `null`| 
| `components.button.inactiveSpriteAsset` | `number` | The `id` of the sprite asset to be used as the button image when the button is not interactive. | `null`| 
| `components.button.inactiveSpriteFrame` | `number` | Frame to be used from the inactive sprite. | `0`| 
| `components.button.inactiveTint` | `Array<number>` | Array of 4 numbers controlling the color to be used on the button image when the button is not interactive. | `[1,1,1,1]`| 
| `components.button.pressedSpriteAsset` | `number` | The `id` of the sprite asset to be used as the button image when the user presses it. | `null`| 
| `components.button.pressedSpriteFrame` | `number` | Frame to be used from the pressed sprite. | `0`| 
| `components.button.pressedTint` | `Array<number>` | Array of 4 numbers controlling the color to be used on the button image when the user presses it. | `[1,1,1,1]`| 
| `components.button.transitionMode` | `number` | Controls how the button responds when the user hovers over it/presses it. Can be: `pc.BUTTON_TRANSITION_MODE_TINT`, `pc.BUTTON_TRANSITION_MODE_SPRITE_CHANGE` | `0`| 


## Camera Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.camera` | `object` | The data for the camera component. |  | 
| `components.camera.clearColor` | `Array<number>` | The color used to clear the camera's render target. | `[0.118,0.118,0.118,1]`| 
| `components.camera.clearColorBuffer` | `boolean` | If true, the camera will explicitly clear its render target to the chosen clear color before rendering the scene. | `true`| 
| `components.camera.clearDepthBuffer` | `boolean` | If true, the camera will explicitly clear the depth buffer of its render target before rendering the scene. | `true`| 
| `components.camera.enabled` | `boolean` | Whether the component is enabled. | `true`| 
| `components.camera.farClip` | `number` | The distance in camera space from the camera's eye point to the far plane. | `1000`| 
| `components.camera.fov` | `number` | The angle (in degrees) between top and bottom clip planes of a perspective camera. | `45`| 
| `components.camera.frustumCulling` | `boolean` | Controls the culling of mesh instances against the camera frustum. If true, culling is enabled. If false, all mesh instances in the scene are rendered by the camera, regardless of visibility. | `true`| 
| `components.camera.layers` | `Array<number>` | An array of layer id's that this camera will render. | `[0,1,2,3,4]`| 
| `components.camera.nearClip` | `number` | The distance in camera space from the camera's eye point to the near plane. | `0.1`| 
| `components.camera.orthoHeight` | `number` | The distance in world units between the top and bottom clip planes of an orthographic camera. | `4`| 
| `components.camera.priority` | `number` | A number that defines the order in which camera views are rendered by the engine. Smaller numbers are rendered first. | `0`| 
| `components.camera.projection` | `number` | The projection type of the camera. Can be `pc.PROJECTION_PERSPECTIVE` or `pc.PROJECTION_ORTHOGRAPHIC`. | `0`| 
| `components.camera.rect` | `Array<number>` | An array of 4 numbers that represents the rectangle that specifies the viewport onto the camera's attached render target. This allows you to implement features like split-screen or picture-in-picture. It is defined by normalised coordinates (0 to 1) in the following format: [The lower left x coordinate, The lower left y coordinate, The width of the rectangle, The height of the rectangle]. | `[0,0,1,1]`| 


## Collision Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.collision` | `object` | The data for the collision component. |  | 
| `components.collision.asset` | `number` | The `id` of the model asset that will be used as a source for the triangle-based collision mesh. | `null`| 
| `components.collision.axis` | `number` | Aligns the capsule/cylinder with the local-space X, Y or Z axis of the entity | `1`| 
| `components.collision.enabled` | `boolean` | Whether the component is enabled. | `true`| 
| `components.collision.halfExtents` | `Array<number>` | The half-extents of the collision box. This is an array of 3 numbers: local space half-width, half-height, and half-depth. | `[0.5,0.5,0.5]`| 
| `components.collision.height` | `number` | The tip-to-tip height of the capsule/cylinder. | `2`| 
| `components.collision.radius` | `number` | The radius of the capsule/cylinder body. | `0.5`| 
| `components.collision.renderAsset` | `number` | The `id` of the render asset that will be used as a source for the triangle-based collision mesh. | `null`| 
| `components.collision.type` | `string` | The type of collision primitive. Can be: box, sphere, capsulse, cylinder, mesh. | `"box"`| 


## Element Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.element` | `object` | The data for the element component. |  | 
| `components.element.alignment` | `Array<number>` | An array of 2 numbers controlling the horizontal and vertical alignment of the text relative to its element transform. | `[0.5,0.5]`| 
| `components.element.anchor` | `Array<number>` | An array of 4 numbers controlling the left, bottom, right and top anchors of the element. These range from 0 to 1. If the horizontal or vertical anchors are split (not equal) then the element will grow to fill the difference. | `[0.5,0.5,0.5,0.5]`| 
| `components.element.autoFitHeight` | `boolean` | If true then the font size of the element will scale automatically so that it fits the element's height. The value of this field will be ignored if `autoHeight` is enabled. The font size will scale between the values of `minFontSize` and `fontSize`. The `lineHeight` will scale proportionately. | `false`| 
| `components.element.autoFitWidth` | `boolean` | If true then the font size and the line height of the element will scale automatically so that it fits the element's width. The value of this field will be ignored if `autoWidth` is enabled. The font size will scale between the values of `minFontSize` and `fontSize`. The `lineHeight` will scale proportionately. | `false`| 
| `components.element.autoHeight` | `boolean` | Make the height of the element match the height of the text content automatically. | `false`| 
| `components.element.autoWidth` | `boolean` | Make the width of the element match the width of the text content automatically. | `false`| 
| `components.element.batchGroupId` | `number` | The batch group id that this element belongs to. The engine will attempt to batch elements in the same batch group to reduce draw calls. | `null`| 
| `components.element.color` | `Array<number>` | An array of 3 numbers controlling the color of the element. | `[1,1,1]`| 
| `components.element.enableMarkup` | `boolean` | Flag for enabling markup processing. Only works for text types. | `false`| 
| `components.element.enabled` | `boolean` | Whether the component is enabled. | `true`| 
| `components.element.fontAsset` | `number` | The `id` of the font asset used by the element. | `null`| 
| `components.element.fontSize` | `number` | The size of the font used by the element. When `autoFitWidth` or `autoFitHeight` are true then it scales between `minFontSize` and `maxFontSize` depending on the size of the element. | `32`| 
| `components.element.height` | `number` | The height of the element. | `32`| 
| `components.element.key` | `string` | The localization key of the element. | `null`| 
| `components.element.layers` | `Array<number>` | An array of layer id's that this element belongs to. When an element belongs to multiple layers it will be rendered multiple times. | `[4]`| 
| `components.element.lineHeight` | `number` | The height of each line of text. If `autoFitWidth` or `autoFitHeight` are enabled then the `lineHeight` will scale with the font. | `32`| 
| `components.element.margin` | `Array<number>` | An array of 4 numbers controlling the spacing between each edge of the element and the respective anchor. | `[-16,-16,-16,-16]`| 
| `components.element.mask` | `boolean` | Switch image element into a mask. Masks do not render into the scene, but instead limit child elements to only be rendered where this element is rendered. | `false`| 
| `components.element.materialAsset` | `number` | The `id` of the material asset used by this element. | `null`| 
| `components.element.maxFontSize` | `number` | The maximum size of the font that the element can scale to when using `autoFitWidth` or `autoFitHeight`. | `32`| 
| `components.element.maxLines` | `number` | The maximum number of lines that this element can display. Any left-over text will be appended to the last line of the element. | `null`| 
| `components.element.minFontSize` | `number` | The minimum size of the font that the element can scale to when using `autoFitWidth` or `autoFitHeight`. | `8`| 
| `components.element.opacity` | `number` | The opacity of the element | `1`| 
| `components.element.outlineColor` | `Array<number>` | An array of 4 numbers controlling the text outline effect color and opacity. | `[0,0,0,1]`| 
| `components.element.outlineThickness` | `number` | The text outline effect width. Ranges from 0 to 1. To disable outline effect set to 0. | `0`| 
| `components.element.pivot` | `Array<number>` | An array of 2 numbers controlling the origin of the element. Rotation and scaling is done based on the pivot. | `[0.5,0.5]`| 
| `components.element.pixelsPerUnit` | `number` | The number of pixels that correspond to one PlayCanvas unit. Used when using 9-sliced sprite assets to control the thickness of the borders. If this value is not specified the element component will use the `pixelsPerUnit` value from the sprite asset. | `null`| 
| `components.element.rect` | `Array<number>` | An array of 4 numbers controlling the u, v, width and height of the rectangle that represents the portion of the texture that this image maps to. | `[0,0,1,1]`| 
| `components.element.shadowColor` | `Array<number>` | An array of 4 numbers controlling the text shadow cast effect color and opacity. | `[0,0,0,1]`| 
| `components.element.shadowOffset` | `Array<number>` | An array of 2 numbers controlling the horizontal and vertical shift of the text shadow cast effect. The rage of both components ranges from -1 to 1. To disable the effect set both to 0. | `[0,0]`| 
| `components.element.spacing` | `number` | The spacing between each letter of the text. | `1`| 
| `components.element.spriteAsset` | `number` | The `id` of the sprite asset to be used by the element. | `null`| 
| `components.element.spriteFrame` | `number` | The frame from the sprite asset to render. | `0`| 
| `components.element.text` | `string` | The text content of the element. | `""`| 
| `components.element.textureAsset` | `number` | The `id` of the texture asset to be used by the element. | `null`| 
| `components.element.type` | `string` | The type of the element. Can be: `pc.ELEMENTTYPE_GROUP`, `pc.ELEMENTTYPE_IMAGE`, `pc.ELEMENTTYPE_TEXT`. | `"text"`| 
| `components.element.useInput` | `boolean` | Enable this if you want the element to receive input events. | `false`| 
| `components.element.width` | `number` | The width of the element. | `32`| 
| `components.element.wrapLines` | `boolean` | Whether to automatically wrap lines based on the element width. | `true`| 


## Layoutchild Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.layoutchild` | `object` | The data for the layoutchild component. |  | 
| `components.layoutchild.enabled` | `boolean` | Whether the component is enabled. | `true`| 
| `components.layoutchild.excludeFromLayout` | `boolean` | When enabled, the child will be excluded from all layout calculations. | `false`| 
| `components.layoutchild.fitHeightProportion` | `number` | The amount of additional vertical space that the element should take up, if necessary to satisfy a Stretch/Shrink fitting calculation. This is specified as a proportion, taking into account the proportion values of other siblings. | `0`| 
| `components.layoutchild.fitWidthProportion` | `number` | The amount of additional horizontal space that the element should take up, if necessary to satisfy a Stretch/Shrink fitting calculation. This is specified as a proportion, taking into account the proportion values of other siblings. | `0`| 
| `components.layoutchild.maxHeight` | `number` | The maximum height the element should be rendered at. | `null`| 
| `components.layoutchild.maxWidth` | `number` | The maximum width the element should be rendered at. | `null`| 
| `components.layoutchild.minHeight` | `number` | The minimum height the element should be rendered at. | `0`| 
| `components.layoutchild.minWidth` | `number` | The minimum width the element should be rendered at. | `0`| 


## Layoutgroup Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.layoutgroup` | `object` | The data for the layoutgroup component. |  | 
| `components.layoutgroup.alignment` | `Array<number>` | An array of 2 numbers controlling the horizontal and vertical alignment of child elements. Values range from 0 to 1 where [0,0] is the bottom left and [1,1] is the top right. | `[0,1]`| 
| `components.layoutgroup.enabled` | `boolean` | Whether the component is enabled. | `true`| 
| `components.layoutgroup.heightFitting` | `number` | Fitting logic to be applied when positioning and scaling child elements. Can be: `pc.FITTING_NONE`, `pc.FITTING_STRETCH`, `pc.FITTING_SHRINK`, `pc.FITTING_BOTH` | `0`| 
| `components.layoutgroup.orientation` | `number` | Whether the layout should run horizontally or vertically. Can be: `pc.ORIENTATION_HORIZONTAL` or `pc.ORIENTATION_VERTICAL`. | `0`| 
| `components.layoutgroup.padding` | `Array<number>` | An array of 4 numbers controlling the padding to be applied inside the container before positioning any children. Specified as left, bottom, right and top values. | `[0,0,0,0]`| 
| `components.layoutgroup.reverseX` | `boolean` | Reverses the order of elements on the X axis. | `false`| 
| `components.layoutgroup.reverseY` | `boolean` | Reverses the order of elements on the Y axis. | `true`| 
| `components.layoutgroup.spacing` | `Array<number>` | An array of 2 numbers controlling the spacing to be applied between each child element. | `[0,0]`| 
| `components.layoutgroup.widthFitting` | `number` | Fitting logic to be applied when positioning and scaling child elements. Can be: `pc.FITTING_NONE`, `pc.FITTING_STRETCH`, `pc.FITTING_SHRINK`, `pc.FITTING_BOTH` | `0`| 
| `components.layoutgroup.wrap` | `boolean` | Whether or not to wrap children onto a new row/column when the size of the container is exceeded. | `false`| 


## Light Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.light` | `object` | The data for the light component. |  | 
| `components.light.affectDynamic` | `boolean` | If true the light will affect non-lightmapped objects. | `true`| 
| `components.light.affectLightmapped` | `boolean` | If true the light will affect lightmapped objects. | `false`| 
| `components.light.bake` | `boolean` | If true the light will be rendered into lightmaps. | `false`| 
| `components.light.bakeDir` | `boolean` | If true and `bake` is true, the light's direction will contribute to directional lightmaps. | `true`| 
| `components.light.cascadeDistribution` | `number` | The distribution of subdivision of the camera frustum for individual shadow cascades. | `0.5`| 
| `components.light.castShadows` | `boolean` | If true, the light will cause shadow casting models to cast shadows. | `false`| 
| `components.light.color` | `Array<number>` | An array of 3 numbers that represents the color of the emitted light. | `[1,1,1]`| 
| `components.light.cookie` | `number` | The id of a projection texture asset. Must be 2D for spot and cubemap for omni (ignored if incorrect type is used). |  | 
| `components.light.cookieAngle` | `number` | Angle for spotlight cookie rotation. | `0`| 
| `components.light.cookieAsset` | `number` | The id of a texture asset that represents that light cookie. | `null`| 
| `components.light.cookieChannel` | `string` | Color channels of the projection texture to use. Can be "r", "g", "b", "a", "rgb" or any swizzled combination. | `"rgb"`| 
| `components.light.cookieFalloff` | `boolean` | Toggle normal spotlight falloff when projection texture is used. When set to false, spotlight will work like a pure texture projector (only fading with distance). | `true`| 
| `components.light.cookieIntensity` | `number` | Projection texture intensity. | `1`| 
| `components.light.cookieOffset` | `Array<number>` | Spotlight cookie position offset. | `[0,0]`| 
| `components.light.cookieScale` | `Array<number>` | Spotlight cookie scale. | `[1,1]`| 
| `components.light.enabled` | `boolean` | Whether the component is enabled. | `true`| 
| `components.light.falloffMode` | `number` | Controls the rate at which a light attentuates from its position. | `0`| 
| `components.light.innerConeAngle` | `number` | The angle at which the spotlight cone starts to fade off. The angle is specified in degrees. Affects spot lights only. | `40`| 
| `components.light.intensity` | `number` | The intensity of the light, this acts as a scalar value for the light's color. This value can exceed 1. | `1`| 
| `components.light.isStatic` | `boolean` | Mark light as non-movable (optimization). | `false`| 
| `components.light.layers` | `Array<number>` | An array of layer id's that this light will affect. | `[0]`| 
| `components.light.normalOffsetBias` | `number` | Normal offset depth bias. | `0.05`| 
| `components.light.numCascades` | `number` | Number of shadow cascades. | `1`| 
| `components.light.outerConeAngle` | `number` | The angle at which the spotlight cone has faded to nothing. The angle is specified in degrees. Affects spot lights only. | `45`| 
| `components.light.range` | `number` | The distance from the spotlight source at which its contribution falls to zero. | `8`| 
| `components.light.shadowBias` | `number` | Constant depth offset applied to a shadow map that enables the tuning of shadows in order to eliminate rendering artifacts, namely 'shadow acne' and 'peter-panning'. | `0.2`| 
| `components.light.shadowDistance` | `number` | The shadow distance is the maximum distance from the camera beyond which shadows that come from Directional Lights are no longer visible. Smaller values produce more detailed shadows. The closer the limit the less shadow data has to be mapped to, and represented by, any shadow map; shadow map pixels are mapped spatially and so the less distance the shadow map has to cover, the smaller the pixels and so the more resolution any shadow has. | `16`| 
| `components.light.shadowResolution` | `number` | The size of the texture used for the shadow map. | `1024`| 
| `components.light.shadowType` | `number` | Type of shadows being rendered by this light. Options: `pc.SHADOW_PCF3`: Render packed depth, can be used for PCF sampling. `pc.SHADOW_PCF5`: Render depth buffer only, can be used for better hardware-accelerated PCF sampling. Requires WebGL2. Falls back to `pc.SHADOW_PCF3` on WebGL 1.0. `pc.SHADOW_VSM8`: Render packed variance shadow map. All shadow receivers must also cast shadows for this mode to work correctly. `pc.SHADOW_VSM16`: Render 16-bit exponential variance shadow map. Requires OES_texture_half_float extension. Falls back to `pc.SHADOW_VSM8`, if not supported. `pc.SHADOW_VSM32`: Render 32-bit exponential variance shadow map. Requires OES_texture_float extension. Falls back to `pc.SHADOW_VSM16`, if not supported. | `0`| 
| `components.light.shadowUpdateMode` | `number` | Tells the renderer how often shadows must be updated for this light. Options:`pc.SHADOWUPDATE_NONE`: Don't render shadows. `pc.SHADOWUPDATE_THISFRAME`: Render shadows only once (then automatically switches to `pc.SHADOWUPDATE_NONE`). `pc.SHADOWUPDATE_REALTIME`: Render shadows every frame (default). | `2`| 
| `components.light.shape` | `number` | The shape of the light source. Can be: `pc.LIGHTSHAPE_PUNCTUAL`, `pc.LIGHTSHAPE_RECT`, `pc.LIGHTSHAPE_DISK`, `pc.LIGHTSHAPE_SPHERE`. | `0`| 
| `components.light.type` | `string` | The type of light. Can be: directional, spot, omni. | `"directional"`| 
| `components.light.vsmBias` | `number` | Constant depth offset applied to a shadow map that enables the tuning of shadows in order to eliminate rendering artifacts, namely 'shadow acne' and 'peter-panning' | `0.01`| 
| `components.light.vsmBlurMode` | `number` | Blurring mode for variance shadow maps: `pc.BLUR_BOX`: Box filter. `pc.BLUR_GAUSSIAN`: Gaussian filter. May look smoother than box, but requires more samples. | `1`| 
| `components.light.vsmBlurSize` | `number` | Number of samples used for blurring a variance shadow map. Only uneven numbers work, even are incremented. Minimum value is 1, maximum is 25 | `11`| 


## Model Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.model` | `object` | The data for the (legacy) model component. |  | 
| `components.model.aabbCenter` | `Array<number>` | An array of 3 numbers that represents the center of the AABB to be used. |  | 
| `components.model.aabbHalfExtents` | `Array<number>` | An array of 3 numbers that represents the half extents of the AABB to be used. |  | 
| `components.model.asset` | `number` | The `id` of the model asset rendered by this model component. | `null`| 
| `components.model.batchGroupId` | `number` | The batch group id that this model belongs to. The engine will attempt to batch models in the same batch group to reduce draw calls. | `null`| 
| `components.model.castShadows` | `boolean` | If true, the model rendered by this component will cast shadows onto other models in the scene. | `true`| 
| `components.model.castShadowsLightmap` | `boolean` | If true, this model will cast shadows when rendering lightmaps. | `true`| 
| `components.model.enabled` | `boolean` | Whether the component is enabled. | `true`| 
| `components.model.isStatic` | `boolean` | Mark model as non-movable (optimization). | `false`| 
| `components.model.layers` | `Array<number>` | An array of layer id's that this model belongs to. When a model belongs to multiple layers it will be rendered multiple times. | `[0]`| 
| `components.model.lightmapSizeMultiplier` | `number` | Changing this value will affect resolution of lightmaps for this model. | `1`| 
| `components.model.lightmapped` | `boolean` | If true, this model will be lightmapped after using lightmapper.bake(). | `false`| 
| `components.model.mapping` | `object` | A dictionary that maps a material asset to each mesh instance. Each key is the mesh instance index and each value is the asset `id`. |  | 
| `components.model.materialAsset` | `number` | The `id` of the material asset that will be used to render the model (only applies to primitives). | `null`| 
| `components.model.receiveShadows` | `boolean` | If true, the model rendered by this component will receive shadows cast by other models in the scene. | `true`| 
| `components.model.type` | `string` | The type of the model to be rendered. Can be: asset, box, capsule, cone, cylinder, sphere. | `"asset"`| 


## Particlesystem Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.particlesystem` | `object` | The data for the particlesystem component. |  | 
| `components.particlesystem.alignToMotion` | `boolean` | If true orient particles in their direction of motion. | `false`| 
| `components.particlesystem.alphaGraph` | `object` | A curve defining how each particle's opacity changes over time. If `alphaGraph2` is specified, the opacity will be a random lerp between both curves. | `{"type":1,"keys":[0,1],"betweenCurves":false}`| 
| `components.particlesystem.alphaGraph.betweenCurves` | `boolean` | If true then the system will randomize between `alphaGraph` and `alphaGraph2`. |  | 
| `components.particlesystem.alphaGraph.keys` | `Array<number>` | The keys for this curve. Index 0 is the time and index 1 is the value. Index 2 is the next time, index 3 the next value and so on. |  | 
| `components.particlesystem.alphaGraph.type` | `number` | The curve type. Can be: `pc.CURVE_LINEAR`, `pc.CURVE_SMOOTHSTEP`, `pc.CURVE_SPLINE`, `pc.CURVE_STEP`. |  | 
| `components.particlesystem.alphaGraph2` | `object` | A curve defining how each particle's opacity changes over time. If specified, the opacity will be a random lerp between both curves. | `{"type":1,"keys":[0,1]}`| 
| `components.particlesystem.alphaGraph2.keys` | `Array<number>` | The keys for this curve. Index 0 is the time and index 1 is the value. Index 2 is the next time, index 3 the next value and so on. |  | 
| `components.particlesystem.alphaGraph2.type` | `number` | The curve type. Can be: `pc.CURVE_LINEAR`, `pc.CURVE_SMOOTHSTEP`, `pc.CURVE_SPLINE`, `pc.CURVE_STEP`. |  | 
| `components.particlesystem.animIndex` | `number` | The animation from the sprite sheet to play for each particle in the system | `0`| 
| `components.particlesystem.animLoop` | `boolean` | If true then the sprite sheet animation will repeat indefinitely | `true`| 
| `components.particlesystem.animNumAnimations` | `number` | Number of animations contained in the sprite sheet. | `1`| 
| `components.particlesystem.animNumFrames` | `number` | Number of sprite sheet frames in each animation. | `1`| 
| `components.particlesystem.animSpeed` | `number` | Sprite sheet animation speed. 1 = particle lifetime, 2 = twice during lifetime etc... | `1`| 
| `components.particlesystem.animStartFrame` | `number` | Sprite sheet frame in animation to begin animating from. | `0`| 
| `components.particlesystem.animTilesX` | `number` | Number of horizontal tiles in the sprite sheet. | `1`| 
| `components.particlesystem.animTilesY` | `number` | Number of vertical tiles in the sprite sheet. | `1`| 
| `components.particlesystem.autoPlay` | `boolean` | If true, the particle system will play immediately on creation. If false, you will need to call the particle system component's play function from script. | `true`| 
| `components.particlesystem.blendType` | `number` | The blending mode determines how particles are composited when they are written to the frame buffer. | `2`| 
| `components.particlesystem.colorGraph` | `object` | A curve defining how each particle's color changes over time. | `{"type":4,"keys":[[0,1],[0,1],[0,1]],"betweenCurves":false}`| 
| `components.particlesystem.colorGraph.keys` | `Array<Array<number>>` | An array of 3 arrays. Each sub-array contains the keys for each curve for each color (rgb). |  | 
| `components.particlesystem.colorGraph.keys.*` | `Array<number>` | The keys for this curve. Index 0 is the time and index 1 is the value. Index 2 is the next time, index 3 the next value and so on. |  | 
| `components.particlesystem.colorGraph.type` | `number` | The curve type. Can be: `pc.CURVE_LINEAR`, `pc.CURVE_SMOOTHSTEP`, `pc.CURVE_SPLINE`, `pc.CURVE_STEP`. |  | 
| `components.particlesystem.colorMapAsset` | `number` | The `id` of the color map texture asset to apply to all particles in the system. If no texture asset is assigned, a default spot texture is used. | `null`| 
| `components.particlesystem.depthSoftening` | `number` | This variable value determines how much particles fade out as they get closer to another surface. This avoids the situation where particles appear to cut into surfaces. | `0`| 
| `components.particlesystem.depthWrite` | `boolean` | If true, the particles will write depth information to the depth buffer. If false, the depth buffer is left unchanged and particles will be guaranteed to overwrite one another in the order in which they are rendered. | `false`| 
| `components.particlesystem.emitterExtents` | `Array<number>` | An array of 3 numbers that represents the half extents of a local space bounding box within which particles are spawned at random positions. | `[0,0,0]`| 
| `components.particlesystem.emitterExtentsInner` | `Array<number>` | An array of 3 numbers that represents the exception volume of a local space bounding box within which particles are not spawned. | `[0,0,0]`| 
| `components.particlesystem.emitterRadius` | `number` | The radius within which particles are spawned at random positions. | `0`| 
| `components.particlesystem.emitterRadiusInner` | `number` | The inner sphere radius within which particles are not spawned | `0`| 
| `components.particlesystem.emitterShape` | `number` | Shape of the emitter. Can be: `pc.EMITTERSHAPE_BOX`, `pc.EMITTERSHAPE_SPHERE`. | `0`| 
| `components.particlesystem.enabled` | `boolean` | Whether the component is enabled. | `true`| 
| `components.particlesystem.halfLambert` | `boolean` | If true avoid particles looking too flat when lights appear to be shining towards the back sides of the particles. It is a completely non-physical lighting model but can give more pleasing visual results. This option is only available when `lighting` is enabled. | `false`| 
| `components.particlesystem.intensity` | `number` | Scales the color of particles to allow them to have arbitrary brightness. | `1`| 
| `components.particlesystem.layers` | `Array<number>` | An array of layer id's that this particle sytem belongs to. When a particle system belongs to multiple layers it will be rendered multiple times. | `[0]`| 
| `components.particlesystem.lifetime` | `number` | The length of time in seconds between a particle's birth and its death. | `5`| 
| `components.particlesystem.lighting` | `boolean` | If true, the particle will be lit by the directional and ambient light in the scene. In some circumstances, it may be advisable to set a normal map on the particle system in order to achieve more realistic lighting. | `false`| 
| `components.particlesystem.localSpace` | `boolean` | Binds particles to emitter node transformation. | `false`| 
| `components.particlesystem.localVelocityGraph` | `object` | A curve defining how each particle's velocity with respect to the particle system's local coordinate system changes over time. If `localVelocityGraph2` is specified, local velocity will be a random lerp between both curves. | `{"type":1,"keys":[[0,0],[0,0],[0,0]],"betweenCurves":false}`| 
| `components.particlesystem.localVelocityGraph.betweenCurves` | `boolean` | If true then the system will randomize between `localVelocityGraph` and `localVelocityGraph2`. |  | 
| `components.particlesystem.localVelocityGraph.keys` | `Array<Array<number>>` | An array of 3 arrays. Each sub-array contains the keys for each curve in each axis. |  | 
| `components.particlesystem.localVelocityGraph.keys.*` | `Array<number>` | The keys for this curve. Index 0 is the time and index 1 is the value. Index 2 is the next time, index 3 the next value and so on. |  | 
| `components.particlesystem.localVelocityGraph.type` | `number` | The curve type. Can be: `pc.CURVE_LINEAR`, `pc.CURVE_SMOOTHSTEP`, `pc.CURVE_SPLINE`, `pc.CURVE_STEP`. |  | 
| `components.particlesystem.localVelocityGraph2` | `object` | A curve defining how each particle's velocity with respect to the particle system's local coordinate system changes over time. If specified, local velocity will be a random lerp between both curves. | `{"type":1,"keys":[[0,0],[0,0],[0,0]]}`| 
| `components.particlesystem.localVelocityGraph2.keys` | `Array<Array<number>>` | An array of 3 arrays. Each sub-array contains the keys for each curve in each axis. |  | 
| `components.particlesystem.localVelocityGraph2.keys.*` | `Array<number>` | The keys for this curve. Index 0 is the time and index 1 is the value. Index 2 is the next time, index 3 the next value and so on. |  | 
| `components.particlesystem.localVelocityGraph2.type` | `number` | The curve type. Can be: `pc.CURVE_LINEAR`, `pc.CURVE_SMOOTHSTEP`, `pc.CURVE_SPLINE`, `pc.CURVE_STEP`. |  | 
| `components.particlesystem.loop` | `boolean` | If true, the particle system will emit indefinitely. Otherwise, it will emit the number of particles specified by the `numParticles` property and then stop. | `true`| 
| `components.particlesystem.mesh` | `number` | The id of a model asset. The first mesh found in the model is used to represent all particles rather than a flat billboard. | `null`| 
| `components.particlesystem.normalMapAsset` | `number` | The `id` of the normal map texture asset to apply to all particles in the system. Applying a normal map can make billboard particles appear more consistent with the scenes lighting. | `null`| 
| `components.particlesystem.numParticles` | `number` | The maximum number of particles managed by this particle system. | `30`| 
| `components.particlesystem.orientation` | `number` | Orientation mode controls particle planes facing. The options are: `pc.PARTICLEORIENTATION_SCREEN`: Particles are facing camera. `pc.PARTICLEORIENTATION_WORLD`: User defines world space normal to set planes orientation. `pc.PARTICLEORIENTATION_EMITTER`: Similar to previous, but the normal is affected by emitter(entity) transformation. | `0`| 
| `components.particlesystem.particleNormal` | `Array<number>` | An array of 3 numbers that represents either world or emitter space vector to define particle plane orientation. | `[0,1,0]`| 
| `components.particlesystem.preWarm` | `boolean` | If true, the particle system will be initialized as though it had already completed a full cycle. This option is only available for looping particle systems. | `false`| 
| `components.particlesystem.radialSpeedGraph` | `object` | A curve defining how particle's radial speed changes over time. Individual particle radial velocity points from emitter origin to particle current position. If `radialSpeedGraph2` is specified, the value will be a random between both curves. | `{"type":1,"keys":[0,0],"betweenCurves":false}`| 
| `components.particlesystem.radialSpeedGraph.betweenCurves` | `boolean` | If true then the system will randomize between `radialSpeedGraph` and `radialSpeedGraph2`. |  | 
| `components.particlesystem.radialSpeedGraph.keys` | `Array<number>` | The keys for this curve. Index 0 is the time and index 1 is the value. Index 2 is the next time, index 3 the next value and so on. |  | 
| `components.particlesystem.radialSpeedGraph.type` | `number` | The curve type. Can be: `pc.CURVE_LINEAR`, `pc.CURVE_SMOOTHSTEP`, `pc.CURVE_SPLINE`, `pc.CURVE_STEP`. |  | 
| `components.particlesystem.radialSpeedGraph2` | `object` | A curve defining how particle's radial speed changes over time. Individual particle radial velocity points from emitter origin to particle current position. If specified, the value will be a random between both curves. | `{"type":1,"keys":[0,0]}`| 
| `components.particlesystem.radialSpeedGraph2.keys` | `Array<number>` | The keys for this curve. Index 0 is the time and index 1 is the value. Index 2 is the next time, index 3 the next value and so on. |  | 
| `components.particlesystem.radialSpeedGraph2.type` | `number` | The curve type. Can be: `pc.CURVE_LINEAR`, `pc.CURVE_SMOOTHSTEP`, `pc.CURVE_SPLINE`, `pc.CURVE_STEP`. |  | 
| `components.particlesystem.randomizeAnimIndex` | `boolean` | If true then each particle will play a randomly selected animation from the sprite sheet, otherwise it always use the animation specified by `animIndex`. | `false`| 
| `components.particlesystem.rate` | `number` | The bounds of the time range defining the interval in seconds between particle births. The time for the next particle emission will be chosen at random between `rate` and `rate2`. | `0.1`| 
| `components.particlesystem.rate2` | `number` | The bounds of the time range defining the interval in seconds between particle births. The time for the next particle emission will be chosen at random between `rate` and `rate2`. | `0.1`| 
| `components.particlesystem.renderAsset` | `number` | The id of a render asset which can be used instead of the model asset to render a mesh-based particle. | `null`| 
| `components.particlesystem.rotationSpeedGraph` | `object` | A curve defining how each particle's angular velocity changes over time. If `rotationSpeedGraph2` is specified, the angular velocity will be a random lerp between both curves. | `{"type":1,"keys":[0,0],"betweenCurves":false}`| 
| `components.particlesystem.rotationSpeedGraph.betweenCurves` | `boolean` | If true then the system will randomize between `rotationSpeedGraph` and `rotationSpeedGraph2`. |  | 
| `components.particlesystem.rotationSpeedGraph.keys` | `Array<number>` | The keys for this curve. Index 0 is the time and index 1 is the value. Index 2 is the next time, index 3 the next value and so on. |  | 
| `components.particlesystem.rotationSpeedGraph.type` | `number` | The curve type. Can be: `pc.CURVE_LINEAR`, `pc.CURVE_SMOOTHSTEP`, `pc.CURVE_SPLINE`, `pc.CURVE_STEP`. |  | 
| `components.particlesystem.rotationSpeedGraph2` | `object` | A curve defining how each particle's angular velocity changes over time. If specified, the angular velocity will be a random lerp between both curves. | `{"type":1,"keys":[0,0]}`| 
| `components.particlesystem.rotationSpeedGraph2.keys` | `Array<number>` | The keys for this curve. Index 0 is the time and index 1 is the value. Index 2 is the next time, index 3 the next value and so on. |  | 
| `components.particlesystem.rotationSpeedGraph2.type` | `number` | The curve type. Can be: `pc.CURVE_LINEAR`, `pc.CURVE_SMOOTHSTEP`, `pc.CURVE_SPLINE`, `pc.CURVE_STEP`. |  | 
| `components.particlesystem.scaleGraph` | `object` | A curve defining how each particle's scale changes over time. By default, a particle is 1 unit in width and height. If `scaleGraph2` is specified, the scale will be a random lerp between both curves. | `{"type":1,"keys":[0,0.1],"betweenCurves":false}`| 
| `components.particlesystem.scaleGraph.betweenCurves` | `boolean` | If true then the system will randomize between `scaleGraph` and `scaleGraph2`. |  | 
| `components.particlesystem.scaleGraph.keys` | `Array<number>` | The keys for this curve. Index 0 is the time and index 1 is the value. Index 2 is the next time, index 3 the next value and so on. |  | 
| `components.particlesystem.scaleGraph.type` | `number` | The curve type. Can be: `pc.CURVE_LINEAR`, `pc.CURVE_SMOOTHSTEP`, `pc.CURVE_SPLINE`, `pc.CURVE_STEP`. |  | 
| `components.particlesystem.scaleGraph2` | `object` | A curve defining how each particle's scale changes over time. By default, a particle is 1 unit in width and height. If specified, the scale will be a random lerp between both curves. | `{"type":1,"keys":[0,0.1]}`| 
| `components.particlesystem.scaleGraph2.keys` | `Array<number>` | The keys for this curve. Index 0 is the time and index 1 is the value. Index 2 is the next time, index 3 the next value and so on. |  | 
| `components.particlesystem.scaleGraph2.type` | `number` | The curve type. Can be: `pc.CURVE_LINEAR`, `pc.CURVE_SMOOTHSTEP`, `pc.CURVE_SPLINE`, `pc.CURVE_STEP`. |  | 
| `components.particlesystem.screenSpace` | `boolean` | Renders particles in 2D screen space. This needs to be set when particle system is part of hierarchy with screen component at its root, and allows particle system to integrate with the rendering of the element components. | `false`| 
| `components.particlesystem.sort` | `number` | Sorting mode gives you control over the order in which particles are rendered. The options are: `pc.PARTICLESORT_NONE`: Particles are rendered in arbitrary order. When this option is selected, the particle system is simulated on the GPU (if the underlying hardware supports floating point textures) and it is recommended you use this setting to get the best performance. `pc.PARTICLESORT_DISTANCE`: Particles are sorted on the CPU and rendered in back to front order (in terms of camera z depth). `pc.PARTICLESORT_NEWER_FIRST`: Particles are sorted on the CPU and rendered in age order, youngest first. `pc.PARTICLESORT_OLDER_FIRST`: Particles are sorted on the CPU and rendered in age order, oldest first. | `0`| 
| `components.particlesystem.startAngle` | `number` | The bounds of the initial particle rotation specified in degrees. For each particle, this angle is chosen at random between `startAngle` and `startAngle2`. | `0`| 
| `components.particlesystem.startAngle2` | `number` | The bounds of the initial particle rotation specified in degrees. For each particle, this angle is chosen at random between `startAngle` and `startAngle2`. | `0`| 
| `components.particlesystem.stretch` | `number` | A value in world units that controls the amount by which particles are stretched based on their velocity. Particles are stretched from their center towards their previous position. | `0`| 
| `components.particlesystem.velocityGraph` | `object` | A curve defining how each particle's velocity with respect to the world coordinate system changes over time. If `velocityGraph2` is specified, velocity will be a random lerp between both curves. | `{"type":1,"keys":[[0,-1],[0,-1],[0,-1]],"betweenCurves":true}`| 
| `components.particlesystem.velocityGraph.betweenCurves` | `boolean` | If true then the system will randomize between `velocityGraph` and `velocityGraph2`. |  | 
| `components.particlesystem.velocityGraph.keys` | `Array<Array<number>>` | An array of 3 arrays. Each sub-array contains the keys for each curve in each axis. |  | 
| `components.particlesystem.velocityGraph.keys.*` | `Array<number>` | The keys for this curve. Index 0 is the time and index 1 is the value. Index 2 is the next time, index 3 the next value and so on. |  | 
| `components.particlesystem.velocityGraph.type` | `number` | The curve type. Can be: `pc.CURVE_LINEAR`, `pc.CURVE_SMOOTHSTEP`, `pc.CURVE_SPLINE`, `pc.CURVE_STEP`. |  | 
| `components.particlesystem.velocityGraph2` | `object` | A curve defining how each particle's velocity with respect to the world coordinate system changes over time. If specified, velocity will be a random lerp between both curves. | `{"type":1,"keys":[[0,1],[0,1],[0,1]]}`| 
| `components.particlesystem.velocityGraph2.keys` | `Array<Array<number>>` | An array of 3 arrays. Each sub-array contains the keys for each curve in each axis. |  | 
| `components.particlesystem.velocityGraph2.keys.*` | `Array<number>` | The keys for this curve. Index 0 is the time and index 1 is the value. Index 2 is the next time, index 3 the next value and so on. |  | 
| `components.particlesystem.velocityGraph2.type` | `number` | The curve type. Can be: `pc.CURVE_LINEAR`, `pc.CURVE_SMOOTHSTEP`, `pc.CURVE_SPLINE`, `pc.CURVE_STEP`. |  | 
| `components.particlesystem.wrap` | `boolean` | Enables wrap bounds. | `false`| 
| `components.particlesystem.wrapBounds` | `Array<number>` | An array of 3 numbers that represents the world space AABB volume centered on the owner entity's position. If a particle crosses the boundary of one side of the volume, it teleports to the opposite side. You can use this to make environmental effects like rain by moving a wrapped emitter's owner entity. | `[0,0,0]`| 


## Render Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.render` | `object` | The data for the rendey component. |  | 
| `components.render.aabbCenter` | `Array<number>` | An array of 3 numbers controlling the center of the AABB to be used. |  | 
| `components.render.aabbHalfExtents` | `Array<number>` | An array of 3 numbers controlling the half extents of the AABB to be used. |  | 
| `components.render.asset` | `number` | The `id` of the render asset for the render component (only applies to type "asset"). | `null`| 
| `components.render.batchGroupId` | `number` | The batch group id that the meshes should belong to. | `null`| 
| `components.render.castShadows` | `boolean` | If true, attached meshes will cast shadows for lights that have shadow casting enabled. | `true`| 
| `components.render.castShadowsLightmap` | `boolean` | If true, the meshes will cast shadows when rendering lightmaps. | `true`| 
| `components.render.enabled` | `boolean` | Whether the component is enabled. | `true`| 
| `components.render.isStatic` | `boolean` | Mark meshes as non-movable (optimization). | `false`| 
| `components.render.layers` | `Array<number>` | An array of layer id's to which the meshes should belong. | `[0]`| 
| `components.render.lightmapSizeMultiplier` | `number` | Lightmap resolution multiplier. | `1`| 
| `components.render.lightmapped` | `boolean` | If true, the meshes will be lightmapped after using lightmapper.bake(). | `false`| 
| `components.render.materialAssets` | `Array<number>` | An array of material asset `id`'s that will be used to render the meshes. Each material corresponds to the respective mesh instance. | `[]`| 
| `components.render.materialAssets.*` | `number` | undefined |  | 
| `components.render.receiveShadows` | `boolean` | If true, shadows will be cast on attached meshes. | `true`| 
| `components.render.rootBone` | `string` | The `resource_id` of the entity to be used as the root bone for any skinned meshes that are rendered by this component. | `null`| 
| `components.render.type` | `string` | The type of the render component. Can be: asset, box, capsule, cone, cylinder, plane, sphere. | `"asset"`| 


## Rigidbody Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.rigidbody` | `object` | The data for the rigidbody component. |  | 
| `components.rigidbody.angularDamping` | `number` | Controls the rate at which a body loses angular velocity over time. | `0`| 
| `components.rigidbody.angularFactor` | `Array<number>` | An array of 3 numbers that represents the scaling factor for angular movement of the body in each axis. | `[1,1,1]`| 
| `components.rigidbody.enabled` | `boolean` | Whether the component is enabled. | `true`| 
| `components.rigidbody.friction` | `number` | The friction value used when contacts occur between two bodies. | `0.5`| 
| `components.rigidbody.linearDamping` | `number` | Controls the rate at which a body loses linear velocity over time. | `0`| 
| `components.rigidbody.linearFactor` | `Array<number>` | An array of 3 numbers that represents the scaling factor for linear movement of the body in each axis. | `[1,1,1]`| 
| `components.rigidbody.mass` | `number` | The mass of the body. | `1`| 
| `components.rigidbody.restitution` | `number` | The amount of energy lost when two objects collide, this determines the bounciness of the object. | `0.5`| 
| `components.rigidbody.type` | `string` | The type of RigidBody determines how it is simulated. Can be one of: static, dynamic, kinematic. | `"static"`| 


## Screen Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.screen` | `object` | The data for the screen component. |  | 
| `components.screen.enabled` | `boolean` | Whether the component is enabled. | `true`| 
| `components.screen.referenceResolution` | `Array<number>` | An array of 2 numbers that represents the reference resolution of the screen. If the window size changes the screen will adjust its size based on `scaleMode` using the reference resolution. | `[1280,720]`| 
| `components.screen.resolution` | `Array<number>` | An array of 2 numbers that represents the resolution of the screen. | `[1280,720]`| 
| `components.screen.scaleBlend` | `number` | Set this to 0 to only adjust to changes between the width of the window and the x of the reference resolution. Set this to 1 to only adjust to changes between the window height and the y of the reference resolution. A value in the middle will try to adjust to both. | `0.5`| 
| `components.screen.scaleMode` | `string` | Controls how a screen-space screen is resized when the window size changes. Can be: `pc.SCALEMODE_BLEND`: Use it to have the screen adjust between the difference of the window resolution and the screen's reference resolution. `pc.SCALEMODE_NONE`; Use it to make the screen always have a size equal to its resolution. | `"blend"`| 
| `components.screen.screenSpace` | `boolean` | If true then the screen will display its child Elements in 2D. Set this to false to make this a 3D screen. | `true`| 


## Script Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.script` | `object` | The data for the script component. |  | 
| `components.script.enabled` | `boolean` | Whether the component is enabled. | `true`| 
| `components.script.order` | `Array<string>` | An array of script names in the order in which they should be executed at runtime. | `[]`| 
| `components.script.scripts` | `object` | A dictionary that contains all the scripts attached to this script component. Each key in the dictionary is the script name. | `{}`| 
| `components.script.scripts.*.attributes` | `object` | A dictionary that holds the values of each attribute. The keys in the dictionary are the attribute names. |  | 
| `components.script.scripts.*.enabled` | `boolean` | Whether the script instance is enabled. |  | 


## Scrollbar Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.scrollbar` | `object` | The data for the scrollbar component. |  | 
| `components.scrollbar.enabled` | `boolean` | Whether the component is enabled. | `true`| 
| `components.scrollbar.handleEntity` | `string` | The `resource_id` of the entity to be used as the scrollbar handle. This entity must have a scrollbar component. | `null`| 
| `components.scrollbar.handleSize` | `number` | The size of the handle relative to the size of the track, in the range 0...1. For a vertical scrollbar, a value of 1 means that the handle will take up the full height of the track. | `0.5`| 
| `components.scrollbar.orientation` | `number` | Whether the scrollbar moves horizontally or vertically. Can be: `pc.ORIENTATION_HORIZONTAL` or `pc.ORIENTATION_VERTICAL`. | `0`| 
| `components.scrollbar.value` | `number` | The current position value of the scrollbar, in the range 0...1. | `0`| 


## Scrollview Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.scrollview` | `object` | The data for the scrollview component. |  | 
| `components.scrollview.bounceAmount` | `number` | Controls how far the content should move before bouncing back. | `0.1`| 
| `components.scrollview.contentEntity` | `string` | The `resource_id` of the entity which contains the scrolling content itself. This entity must have an element component. | `null`| 
| `components.scrollview.enabled` | `boolean` | Whether the component is enabled. | `true`| 
| `components.scrollview.friction` | `number` | Controls how freely the content should move if thrown, i.e. by flicking on a phone or by flinging the scroll wheel on a mouse. A value of 1 means that content will stop immediately; 0 means that content will continue moving forever (or until the bounds of the content are reached, depending on the scrollMode). | `0.05`| 
| `components.scrollview.horizontal` | `boolean` | Whether to enable horizontal scrolling. | `true`| 
| `components.scrollview.horizontalScrollbarEntity` | `string` | The `resource_id` of the entity to be used as the horizontal scrollbar. This entity must have a scrollbar component. | `null`| 
| `components.scrollview.horizontalScrollbarVisibility` | `number` | Controls whether the horizontal scrollbar should be visible all the time, or only visible when the content exceeds the size of the viewport. | `1`| 
| `components.scrollview.mouseWheelSensitivity` | `Array<number>` | Array of 2 numbers controlling mouse wheel horizontal and vertical sensitivity. Only used if `useMouseWheel` is set. Setting a direction to 0 will disable mouse wheel scrolling in that direction. 1 is a default sensitivity that is considered to feel good. The values can be set higher or lower than 1 to tune the sensitivity. | `[1,1]`| 
| `components.scrollview.scrollMode` | `number` | Specifies how the scroll view should behave when the user scrolls past the end of the content. | `1`| 
| `components.scrollview.useMouseWheel` | `boolean` | Controls whether to use mouse wheel for scrolling (horizontally and vertically) when mouse is within bounds. | `true`| 
| `components.scrollview.vertical` | `boolean` | Whether to enable vertical scrolling. | `true`| 
| `components.scrollview.verticalScrollbarEntity` | `string` | The `resource_id` of the entity to be used as the vertical scrollbar. This entity must have a scrollbar component. | `null`| 
| `components.scrollview.verticalScrollbarVisibility` | `number` | Controls whether the vertical scrollbar should be visible all the time, or only visible when the content exceeds the size of the viewport. | `1`| 
| `components.scrollview.viewportEntity` | `string` | The `resource_id` of the entity to be used as the masked viewport area, within which the content will scroll. This entity must have an element component of type `group`. | `null`| 


## Sound Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.sound` | `object` | The data for the sound component. |  | 
| `components.sound.distanceModel` | `string` | Determines which algorithm to use to reduce the volume of the audio as it moves away from the listener. Can be one of: "inverse", "linear", "exponential". | `"linear"`| 
| `components.sound.enabled` | `boolean` | Whether the component is enabled. | `true`| 
| `components.sound.maxDistance` | `number` | The maximum distance from the listener at which audio falloff stops. Note the volume of the audio is not 0 after this distance, but just doesn't fall off anymore. | `10000`| 
| `components.sound.pitch` | `number` | The pitch to playback the audio at. A value of 1 means the audio is played back at the original pitch. The pitch of each slot is multiplied with this value. | `1`| 
| `components.sound.positional` | `boolean` | If true, the component will play back audio assets as if played from the location of the entity in 3D space. | `true`| 
| `components.sound.refDistance` | `number` | The reference distance for reducing volume as the sound source moves further from the listener. | `1`| 
| `components.sound.rollOffFactor` | `number` | The rate at which volume fall-off occurs. | `1`| 
| `components.sound.slots` | `object` | A dictionary of sound slots. Each sound slot controls playback of an audio asset. Each key in the dictionary is a number representing the index of each sound slot. | `{"1":{"name":"Slot 1","loop":false,"autoPlay":false,"overlap":false,"asset":null,"startTime":0,"duration":null,"volume":1,"pitch":1}}`| 
| `components.sound.slots.*.asset` | `number` | The `id` of the audio asset that can be played from this sound slot. |  | 
| `components.sound.slots.*.autoPlay` | `boolean` | If true, the slot will be played on load. Otherwise, sound slots will need to be played by scripts. |  | 
| `components.sound.slots.*.duration` | `number` | The duration of the sound that the slot will play starting from startTime. |  | 
| `components.sound.slots.*.loop` | `boolean` | If true, the slot will loop playback continuously. Otherwise, it will be played once to completion. |  | 
| `components.sound.slots.*.name` | `string` | The name of the sound slot |  | 
| `components.sound.slots.*.overlap` | `boolean` | If true then sounds played from slot will be played independently of each other. Otherwise the slot will first stop the current sound before starting the new one. |  | 
| `components.sound.slots.*.pitch` | `number` | The pitch to playback the audio at. A value of 1 means the audio is played back at the original pitch. |  | 
| `components.sound.slots.*.startTime` | `number` | The start time from which the sound will start playing. |  | 
| `components.sound.slots.*.volume` | `number` | The volume modifier to play the audio with. |  | 
| `components.sound.volume` | `number` | The volume modifier to play the audio with. The volume of each slot is multiplied with this value. | `1`| 


## Sprite Component Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `components.sprite` | `object` | The data for the sprite component. |  | 
| `components.sprite.autoPlayClip` | `string` | The `name` of the sprite animation clip to play automatically when the sprite component is enabled. | `null`| 
| `components.sprite.batchGroupId` | `number` | The batch group id that this sprite belongs to. The engine will attempt to batch sprites in the same batch group to reduce draw calls. | `null`| 
| `components.sprite.clips` | `object` | A dictionary that contains data for all the sprite animation clips of this component. Each key in the dictionary is the index of the clip. | `{}`| 
| `components.sprite.clips.*.autoPlay` | `boolean` | Set to true if you want to automatically start playing this animation clip as soon as it is loaded. |  | 
| `components.sprite.clips.*.fps` | `number` | The number of frames per second to play for this animation clip. |  | 
| `components.sprite.clips.*.loop` | `boolean` | If true the animation clip will be looped. |  | 
| `components.sprite.clips.*.name` | `string` | The name of the animation clip. The name of the clip must be unique for this sprite component. |  | 
| `components.sprite.clips.*.spriteAsset` | `number` | The `id` of th esprite asset that contains all the frames of the animation clip. |  | 
| `components.sprite.color` | `Array<number>` | An array of 3 numbers controlling the color tint of the sprite. | `[1,1,1]`| 
| `components.sprite.drawOrder` | `number` | The draw order of the sprite. A higher value means that the component will be rendered on top of other components in the same layer. For this work the sprite must be in a layer that uses Manual sort order. | `0`| 
| `components.sprite.enabled` | `boolean` | Whether the component is enabled. | `true`| 
| `components.sprite.flipX` | `boolean` | Flips the X axis when rendering a sprite. | `false`| 
| `components.sprite.flipY` | `boolean` | Flips the X axis when rendering a sprite. | `false`| 
| `components.sprite.frame` | `number` | The frame of the sprite asset that the sprite component will render. | `0`| 
| `components.sprite.height` | `number` | The height of the sprite when rendering using 9-slicing. The height is only used when the render mode of the sprite asset is sliced or tiled. | `1`| 
| `components.sprite.layers` | `Array<number>` | An array of layer id's that this sprite belongs to. When a sprite belongs to multiple layers it will be rendered multiple times. | `[0]`| 
| `components.sprite.opacity` | `number` | The opacity of the sprite. | `1`| 
| `components.sprite.speed` | `number` | A global speed modifier used when playing sprite animation clips. | `1`| 
| `components.sprite.spriteAsset` | `number` | The `id` of the sprite asset used by the sprite component. | `null`| 
| `components.sprite.type` | `string` | The type of the sprite component. Can be: `pc.SPRITETYPE_SIMPLE`: Only show a single frame of a sprite asset. or `pc.SPRITETYPE_ANIMATED`: Can play sprite animation clips. | `"simple"`| 
| `components.sprite.width` | `number` | The width of the sprite when rendering using 9-slicing. The width is only used when the render mode of the sprite asset is sliced or tiled. | `1`| 
