[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / [Asset](Asset.md) / Properties

# Asset Properties #

These are the properties that you can access on an [Asset](Asset.md):

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `data` | `object` | The asset data depend on the type of the asset. Asset data are available at runtime. |  | 
| `exclude` | `boolean` | Exclude asset from the project. If true, the asset will not be available at runtime and not be included in published builds. |  | 
| `file` | `object` | Properties related to the file of the asset. |  | 
| `file.variants` | `object` | `[read-only]` Properties for the different variants of the asset file. |  | 
| `file.variants.basis` | `object` | `[read-only]` Properties for the BASIS variant of the asset file |  | 
| `file.variants.dxt` | `object` | `[read-only]` Properties for the DXT variant of the asset file |  | 
| `file.variants.etc1` | `object` | `[read-only]` Properties for the ETC1 variant of the asset file |  | 
| `file.variants.etc2` | `object` | `[read-only]` Properties for the ETC2 variant of the asset file |  | 
| `file.variants.pvr` | `object` | `[read-only]` Properties for the PVR variant of the asset file |  | 
| `i18n` | `object` | A dictionary that holds localized versions of the asset file. Each key in the dictionary is the locale and each value is the asset `id`. |  | 
| `id` | `number` | `[read-only]` The asset id. This id is the same across different branches. |  | 
| `meta` | `object` | `[read-only]` Asset properties that depend on the type of the asset. Meta properties are available in the PlayCanvas Editor but not at runtime. |  | 
| `name` | `string` | `[read-only]` The name of the asset |  | 
| `path` | `Array<number>` | `[read-only]` An array of folder asset `id`'s that represent the full path of the asset, if the asset is under one or more folders. |  | 
| `preload` | `boolean` | If true the asset will be loaded during the preload phase of application set up. |  | 
| `source` | `boolean` | `[read-only]` Whether this is a source asset. A source asset is not included at runtime (e.g. FBX) but may have target assets that are generated from it (e.g. model assets). |  | 
| `source_asset_id` | `string` | `[read-only]` The `id` of the source asset that generated this asset. |  | 
| `tags` | `Array<string>` | An array of asset tags. |  | 
| `type` | `string` | `[read-only]` The type of the asset. Can be: animation, animstategraph, audio, bundle, binary, container, cubemap, css, font, folder, json, html, material, model, render, scene, script, shader, sprite, template, text, texture, textureAtlas, wasm. |  | 
| `uniqueId` | `number` | `[read-only]` The asset's unique id. This id is different across different branches. |  | 


## Animation Asset Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `data.events` | `object` | A set of events tied to the playback of this animation asset. | `{}`| 
| `data.events.*.name` | `string` | The name of this event. |  | 
| `data.events.*.number` | `number` | An optional number value to be passed to the callback of this events listener. |  | 
| `data.events.*.string` | `string` | An optional string value to be passed to the callback of this events listener. |  | 
| `data.events.*.time` | `number` | The time during the playback of this animation that the event should trigger. Give in normalized time. |  | 


## Animstategraph Asset Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `data.layers` | `object` | A set of AnimStateGraph layers. | `{"0":{"name":"Base","states":[0,1,2,3],"transitions":[0]}}`| 
| `data.layers.*.blendType` | `string` | Defines the way in which this layer should blend with previous layers. Can be: `pc.ANIM_LAYER_OVERWRITE`, `pc.ANIM_LAYER_ADDITIVE`. |  | 
| `data.layers.*.name` | `string` | The name of the AnimStateGraph layer. |  | 
| `data.layers.*.states` | `Array<number>` | The id's of the states that this layer contains. |  | 
| `data.layers.*.transitions` | `Array<number>` | The id's of the transitions that this layer contains. |  | 
| `data.layers.*.weight` | `number` | The weight that this layer contributes to the final output of the animation. Given as a normalized value. |  | 
| `data.parameters` | `object` | A set of AnimStateGraph parameters. | `{}`| 
| `data.parameters.*.name` | `string` | The value that the condition should be compared against. |  | 
| `data.parameters.*.type` | `string` | The type of this parameter's value. Can be: `pc.ANIM_PARAMETER_INTEGER`, `pc.ANIM_PARAMETER_FLOAT`, `pc.ANIM_PARAMETER_BOOLEAN`, `pc.ANIM_PARAMETER_TRIGGER`. |  | 
| `data.parameters.*.value` | `mixed` | The value of this parameter. |  | 
| `data.states` | `object` | A set of AnimStateGraph states. | `{"0":{"name":"START","id":0,"posX":50,"posY":100,"nodeType":3},"1":{"name":"ANY","id":1,"posX":50,"posY":150,"nodeType":4},"2":{"name":"END","id":2,"posX":50,"posY":200,"nodeType":5},"3":{"name":"Initial State","id":3,"speed":1,"loop":true,"posX":400,"posY":50,"nodeType":1}}`| 
| `data.states.*.defaultState` | `boolean` | If true, the START node will transition directly to this node at the start of playback. |  | 
| `data.states.*.id` | `number` | The id of this state. |  | 
| `data.states.*.loop` | `boolean` | Determines whether playback of this states animation should continually loop when it reaches the end. |  | 
| `data.states.*.name` | `string` | The name of this state. |  | 
| `data.states.*.nodeType` | `number` | The type of node this state should be. Either 0 (START), 1 (ANIMATION), 2 (ANY) or 3(END). |  | 
| `data.states.*.posX` | `number` | The position of this node in the graph on the x axis |  | 
| `data.states.*.posY` | `number` | The position of this node in the graph on the y axis |  | 
| `data.states.*.speed` | `number` | The playback speed for this state. |  | 
| `data.transitions` | `object` | A set of AnimStateGraph transitions. | `{"0":{"from":0,"to":3,"defaultTransition":true,"edgeType":1,"conditions":{}}}`| 
| `data.transitions.*.conditions.*.parameterName` | `string` | The name of the parameter this condition is evaluated on. |  | 
| `data.transitions.*.conditions.*.predicate` | `string` | The comparator used to determine whether the condition passes. Can be: `pc.ANIM_GREATER_THAN`, `pc.ANIM_LESS_THAN`, `pc.ANIM_GREATER_THAN_EQUAL_TO`, `pc.ANIM_LESS_THAN_EQUAL_TO`, `pc.ANIM_EQUAL_TO`, `pc.ANIM_NOT_EQUAL_TO`. |  | 
| `data.transitions.*.conditions.*.value` | `mixed` | The value that the condition should be compared against. |  | 
| `data.transitions.*.defaultTransition` | `boolean` | This should be true if this transition moves from the START state. Only one transition should contain this per layer. |  | 
| `data.transitions.*.edgeType` | `number` | Defines the type of states this transition can connect. Should be 0 (Animation) nodes. |  | 
| `data.transitions.*.exitTime` | `number` | Defines the single frame during the from states playback that this transition is active for. Given in normalized time. |  | 
| `data.transitions.*.from` | `number` | The id of the state this transition moves from. |  | 
| `data.transitions.*.interruptionSource` | `string` | Determines which states can interrupt this transition with their own transitions. Can be: `pc.ANIM_INTERRUPTION_NONE`, `pc.ANIM_INTERRUPTION_PREV`, `pc.ANIM_INTERRUPTION_NEXT`, `pc.ANIM_INTERRUPTION_PREV_NEXT`, `pc.ANIM_INTERRUPTION_NEXT_PREV`. |  | 
| `data.transitions.*.priority` | `number` | Used to sort multiple active transitions in priority order. The transition with the lowest value is selected first. |  | 
| `data.transitions.*.time` | `number` | The duration of the transitions blend between the from and to states. |  | 
| `data.transitions.*.to` | `number` | The id of the state this transition moves to. |  | 
| `data.transitions.*.transitionOffset` | `number` | Defines the point during this to states timelime that this transition should begin playback at. |  | 


## Bundle Asset Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `data.assets` | `Array<number>` | An array of asset `id`'s contained in the bundle. | `[]`| 


## Cubemap Asset Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `data.anisotropy` | `number` | Integer value specifying the level of anisotropic to apply to the texture ranging from 1 (no anisotropic filtering) to the `pc.GraphicsDevice` property `maxAnisotropy`. |  | 
| `data.magFilter` | `number` | The magnification filter to be applied to the texture. Can be: `pc.FILTER_NEAREST`, `pc.FILTER_LINEAR`, `pc.FILTER_NEAREST_MIPMAP_NEAREST`, `pc.FILTER_LINEAR_MIPMAP_NEAREST`, `pc.FILTER_NEAREST_MIPMAP_LINEAR`, `pc.FILTER_LINEAR_MIPMAP_LINEAR`. |  | 
| `data.minFilter` | `number` | The minification filter to be applied to the texture. Can be: `pc.FILTER_NEAREST`, `pc.FILTER_LINEAR`, `pc.FILTER_NEAREST_MIPMAP_NEAREST`, `pc.FILTER_LINEAR_MIPMAP_NEAREST`, `pc.FILTER_NEAREST_MIPMAP_LINEAR`, `pc.FILTER_LINEAR_MIPMAP_LINEAR`. |  | 
| `data.rgbm` | `boolean` | Whether the cubemap is RGBM. The RGBM format is a format to store high dynamic range (HDR) textures by using the alpha channel to store a multiplier for the rgb channels. |  | 
| `data.textures` | `Array<number>` | An array of 6 texture asset `id`'s that represent the faces of the cubemap. |  | 
| `data.textures.*` | `number` | undefined |  | 


## Font Asset Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `data.chars` | `object` | Information about the characters in the font. |  | 
| `data.chars.*.height` | `number` | The height. |  | 
| `data.chars.*.id` | `number` | The character id. |  | 
| `data.chars.*.letter` | `string` | The actual letter. |  | 
| `data.chars.*.range` | `number` | The range. |  | 
| `data.chars.*.scale` | `number` | The scale. |  | 
| `data.chars.*.width` | `number` | The width. |  | 
| `data.chars.*.x` | `number` | The x coordinate. |  | 
| `data.chars.*.xadvance` | `number` | How much to advance in x axis. |  | 
| `data.chars.*.xoffset` | `number` | The offset in x axis. |  | 
| `data.chars.*.y` | `number` | The y coordinate. |  | 
| `data.chars.*.yoffset` | `number` | The offset in y axis. |  | 
| `data.info` | `object` | Information about the font. |  | 
| `data.info.face` | `string` | The name of the font. |  | 
| `data.info.height` | `number` | The height. |  | 
| `data.info.width` | `number` | The width. |  | 
| `data.intensity` | `number` | The intensity. |  | 
| `data.kerning` | `object` | Information about the kerning. |  | 
| `data.version` | `number` | The font version. |  | 


## Material Asset Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `data.alphaFade` | `number` | Used to fade out materials that do not use opacity to fade specular (`opacityFadesSpecular` is false). | `1`| 
| `data.alphaTest` | `number` | The alpha test reference value to control which fragments are written to the currently active render target based on alpha value. All fragments with an alpha value of less than the `alphaTest` reference value will be discarded. | `0`| 
| `data.alphaToCoverage` | `boolean` | Enables or disables alpha to coverage. When enabled, and if hardware anti-aliasing is on, limited order-independent transparency can be achieved. Quality depends on the number of MSAA samples of the current render target. It can nicely soften edges of otherwise sharp alpha cutouts, but isn't recommended for large area semi-transparent surfaces. Note, that you don't need to enable blending to make alpha to coverage work. It will work without it, just like `alphaTest`. | `false`| 
| `data.ambient` | `Array<number>` | An array of 3 numbers controlling the tint color to multiply the scene's global ambient color. | `[0,0,0]`| 
| `data.ambientTint` | `boolean` | Enable this this to multiply the scene's global ambient color with a material specific color. | `false`| 
| `data.anisotropy` | `number` | Defines amount of specular anisotropy when GGX Specular is enabled. | `0`| 
| `data.aoMap` | `number` | The `id` of an ambient occlusion texture asset containing pre-baked ambient occlusion. | `null`| 
| `data.aoMapChannel` | `string` | An ambient occlusion map color channel to extract color value from texture. Can be: r, g, b, a. | `"r"`| 
| `data.aoMapOffset` | `Array<number>` | Array of 2 numbers controlling the 2D offset of the AO map. Each component is between 0 and 1. | `[0,0]`| 
| `data.aoMapTiling` | `Array<number>` | Array of 2 numbers controlling the 2D tiling of the AO map. | `[1,1]`| 
| `data.aoMapUv` | `number` | AO map UV channel. | `0`| 
| `data.aoMapVertexColor` | `boolean` | Use vertex colors for AO instead of a map. | `false`| 
| `data.blendType` | `number` | Controls blending. Can be: `pc.BLEND_SUBTRACTIVE`, `pc.BLEND_ADDITIVE`, `pc.BLEND_NORMAL`, `pc.BLEND_NONE`, `pc.BLEND_PREMULTIPLIED`, `pc.BLEND_MULTIPLICATIVE`, `pc.BLEND_ADDITIVEALPHA`, `pc.BLEND_MULTIPLICATIVE2X`, `pc.BLEND_SCREEN`, `pc.BLEND_MIN`, `pc.BLEND_MAX`. | `3`| 
| `data.bumpMapFactor` | `number` | The strength of the applied normal map. This is a value between 0 (the normal map has no effect) and 2 (the effect of the normal map is exaggerated). | `1`| 
| `data.clearCoat` | `number` | Defines intensity of clear coat layer from 0 to 1. | `0`| 
| `data.clearCoatBumpiness` | `number` | The strength of the applied normal map. This is a value between 0 (the normal map has no effect) and 2 (the effect of the normal map is exaggerated). It defaults to 1. | `1`| 
| `data.clearCoatGlossMap` | `number` | The asset `id` of the clear coat gloss map that specifies a per-pixel intensity value. The clear coat gloss map is modulated by the clearCoat property. | `null`| 
| `data.clearCoatGlossMapChannel` | `string` | A clear coat gloss map color channel to extract color value from texture. Can be: r, g, b, a. | `"r"`| 
| `data.clearCoatGlossMapOffset` | `Array<number>` | Array of 2 numbers controlling the 2D offset of the clear coat gloss map. Each component is between 0 and 1. | `[0,0]`| 
| `data.clearCoatGlossMapTiling` | `Array<number>` | Array of 2 numbers controlling the 2D tiling of the clear coat gloss map. | `[1,1]`| 
| `data.clearCoatGlossMapUv` | `number` | Clear coat gloss map UV channel. | `0`| 
| `data.clearCoatGlossVertexColor` | `boolean` | Use vertex colors for clear coat glossiness instead of a map. | `false`| 
| `data.clearCoatGlossVertexColorChannel` | `string` | A color channel to extract color value from vertex colors. Can be: r, g, b, a. | `"r"`| 
| `data.clearCoatGlossiness` | `number` | A value determining the smoothness of a surface. For smaller glossiness values, the clear coat surface is rougher and specular highlights will be broader. For larger glossiness values, the clear coat surface is smoother and will exhibit more concentrated specular highlights (as if the clear coat surface is polished and shiny). | `1`| 
| `data.clearCoatMap` | `number` | The clear coat map that specifies a per-pixel intensity value. The clear coat map is modulated by the Clear Coat Factor property. | `null`| 
| `data.clearCoatMapChannel` | `string` | A clearCoat map color channel to extract color value from texture. Can be: r, g, b, a. | `"r"`| 
| `data.clearCoatMapOffset` | `Array<number>` | Array of 2 numbers controlling the 2D offset of the `clearCoatMap`. Each component is between 0 and 1. | `[0,0]`| 
| `data.clearCoatMapTiling` | `Array<number>` | Array of 2 numbers controlling the 2D tiling of the `clearCoatMap`. | `[1,1]`| 
| `data.clearCoatMapUv` | `number` | ClearCoat map UV channel. | `0`| 
| `data.clearCoatNormalMap` | `number` | The asset `id` of the normal map that specifies the per-pixel surface normals. The normal map is modulated by the 'Bumpiness' property. | `null`| 
| `data.clearCoatNormalMapOffset` | `Array<number>` | Array of 2 numbers controlling the 2D offset of the clear coat normalMap. Each component is between 0 and 1. | `[0,0]`| 
| `data.clearCoatNormalMapTiling` | `Array<number>` | Array of 2 numbers controlling the 2D tiling of the clear coat normalMap. | `[1,1]`| 
| `data.clearCoatNormalMapUv` | `number` | Normal map UV channel. | `0`| 
| `data.clearCoatVertexColor` | `boolean` | Use vertex colors for clearCoat intensity instead of a map. | `false`| 
| `data.clearCoatVertexColorChannel` | `string` | A color channel to extract color value from vertex colors. Can be: r, g, b, a. | `"r"`| 
| `data.conserveEnergy` | `boolean` | Defines how diffuse and specular components are combined when Fresnel is on. It is recommended that you leave this option enabled, although you may want to disable it in case when all reflection comes only from a few light sources, and you don't use an environment map, therefore having mostly black reflection. | `true`| 
| `data.cubeMap` | `number` | The asset `id` of a cube map asset that approximates environment reflection (with greater accuracy than is possible with a sphere map). If scene has SkyBox set, then it will be used as default cubeMap. | `null`| 
| `data.cubeMapProjection` | `number` | The type of projection applied to the `cubeMap` property, with available options: `pc.CUBEPROJ_NONE` and `pc.CUBEPROJ_BOX`. Set to Box to enable world-space axis-aligned projection of cubemap based on bounding box. | `0`| 
| `data.cubeMapProjectionBox` | `object` | The world space axis-aligned bounding box defining the box-projection used for the cubeMap property. Only used when cubeMapProjection is set to pc.CUBEPROJ_BOX. | `{"center":[0,0,0],"halfExtents":[0.5,0.5,0.5]}`| 
| `data.cubeMapProjectionBox.center` | `Array<number>` | Array of 3 numbers controlling the center of the box. |  | 
| `data.cubeMapProjectionBox.halfExtents` | `Array<number>` | Array of 3 numbers controlling the half extends of the box. |  | 
| `data.cull` | `number` | Controls culling. Can be: `pc.CULLFACE_NONE`, `pc.CULLFACE_BACK`, `pc.CULLFACE_FRONT`, `pc.CULLFACE_FRONTANDBACK`. | `1`| 
| `data.depthTest` | `boolean` | If true, when a mesh with the material is rendered, a per pixel check is performed to determine if the pixel passes the engine's depth test. By default, the test is that the pixel must have a z depth less than or equal to whatever is already in the depth buffer. In other words, the mesh is only visible if nothing is in front of it. If unchecked, the mesh is rendered regardless of what is already in the depth buffer. | `true`| 
| `data.depthWrite` | `boolean` | If true, when a mesh with the material is rendered, its depth information is written to the depth buffer. This ensures that when subsequent meshes are rendered, they can be successfully depth tested against meshes rendered with this material. | `true`| 
| `data.diffuse` | `Array<number>` | An array of 3 numbers. If no diffuse map is set or tint is enabled, this is the diffuse color of the material. | `[1,1,1]`| 
| `data.diffuseMap` | `number` | The asset `id` of the diffuse map that specifies the per-pixel diffuse material color. If no diffuse map is set, the diffuse color is used instead. | `null`| 
| `data.diffuseMapChannel` | `string` | The diffuse map color channel to extract color value from texture. Can be: r, g, b, a, rgb. | `"rgb"`| 
| `data.diffuseMapOffset` | `Array<number>` | Array of 2 numbers controlling the 2D offset of the `diffuseMap`. Each component is between 0 and 1. | `[0,0]`| 
| `data.diffuseMapTiling` | `Array<number>` | Array of 2 numbers controlling the 2D tiling of the `diffuseMap`. | `[1,1]`| 
| `data.diffuseMapTint` | `boolean` | Check this to modulate the material's diffuse map with a material specific diffuse color. | `false`| 
| `data.diffuseMapUv` | `number` | Diffuse map UV channel. | `0`| 
| `data.diffuseMapVertexColor` | `boolean` | Use vertex colors for diffuse instead of a map. | `false`| 
| `data.emissive` | `Array<number>` | Array of 3 numbers. If no emissive map is set or tint is enabled, this is the emissive color of the material. | `[0,0,0]`| 
| `data.emissiveIntensity` | `number` | A multiplier for emissive color that can achieve overbright effects for exceptionally bright emissive materials. | `1`| 
| `data.emissiveMap` | `number` | The asset `id` of the emissive map that specifies the per-pixel emissive color. If no emissive map is set, the emissive color is used instead. | `null`| 
| `data.emissiveMapChannel` | `string` | An emissive map color channel to extract color value from texture. Can be: r, g, b, a, rgb. | `"rgb"`| 
| `data.emissiveMapOffset` | `Array<number>` | Array of 2 numbers controlling the 2D offset of the `emissiveMap`. Each component is between 0 and 1. | `[0,0]`| 
| `data.emissiveMapTiling` | `Array<number>` | Array of 2 numbers controlling the 2D tiling of the `emissiveMap`. | `[1,1]`| 
| `data.emissiveMapTint` | `boolean` | Check this to modulate the material's emissive map with a material specific emissive color. | `false`| 
| `data.emissiveMapUv` | `number` | Emissive map UV channel. | `0`| 
| `data.emissiveMapVertexColor` | `boolean` | Use vertex colors for emission instead of a map | `false`| 
| `data.enableGGXSpecular` | `boolean` | Enables GGX specular response. Also enables anisotropy parameter to set material anisotropy. | `false`| 
| `data.fresnelModel` | `number` | A parameter for Fresnel. Can be: `pc.FRESNEL_NONE`, `pc.FRESNEL_SCHLICK`. | `0`| 
| `data.glossMap` | `number` | The asset `id` of the gloss map that specifies a per-pixel shininess value. The gloss map is modulated by the shininess property. | `null`| 
| `data.glossMapChannel` | `string` | A gloss map color channel to extract color value from texture. Can be: r, g, b, a. | `"r"`| 
| `data.glossMapOffset` | `Array<number>` | Array of 2 numbers controlling the 2D offset of the `glossMap`. Each component is between 0 and 1. | `[0,0]`| 
| `data.glossMapTiling` | `Array<number>` | Array of 2 numbers controlling the 2D tiling of the `glossMap`. | `[1,1]`| 
| `data.glossMapUv` | `number` | Gloss map UV channel. | `0`| 
| `data.glossMapVertexColor` | `boolean` | Use vertex colors for glossiness instead of a map. | `false`| 
| `data.heightMap` | `number` | The asset `id` of the height map that specifies the per-pixel strength of the parallax effect. White is full height and black is zero height. | `null`| 
| `data.heightMapChannel` | `string` | A height map color channel to extract color value from texture. Can be: r, g, b, a. | `"r"`| 
| `data.heightMapFactor` | `number` | The strength of a parallax effect (a value between 0 and 2). | `1`| 
| `data.heightMapOffset` | `Array<number>` | Array of 2 numbers controlling the 2D offset of the `heightMap`. Each component is between 0 and 1. | `[0,0]`| 
| `data.heightMapTiling` | `Array<number>` | Array of 2 numbers controlling the 2D tiling of the `heightMap`. | `[1,1]`| 
| `data.heightMapUv` | `number` | Height map UV channel. | `0`| 
| `data.lightMap` | `number` | The asset `id` of the lightmap texture that contains pre-baked diffuse lighting. The lightmap usually is applied to the second UV set. | `null`| 
| `data.lightMapChannel` | `string` | A light map color channel to extract color value from texture. Can be: r, g, b, a, rgb. | `"rgb"`| 
| `data.lightMapOffset` | `Array<number>` | Array of 2 numbers controlling the 2D offset of the lightmap. Each component is between 0 and 1. | `[0,0]`| 
| `data.lightMapTiling` | `Array<number>` | Array of 2 numbers controlling the 2D tiling of the lightmap. | `[1,1]`| 
| `data.lightMapUv` | `number` | Lightmap UV channel. | `1`| 
| `data.lightMapVertexColor` | `boolean` | Use vertex lightmap instead of a texture-based one. | `false`| 
| `data.metalness` | `number` | Metalness factor multiplier. | `1`| 
| `data.metalnessMap` | `number` | The asset `id` of the map that specifies per-pixel metalness values. A value of 1 is metal and a value of 0 is non-metal. | `null`| 
| `data.metalnessMapChannel` | `string` | A metalness map color channel to extract color value from texture. Can be: r, g, b, a. | `"r"`| 
| `data.metalnessMapOffset` | `Array<number>` | Array of 2 numbers controlling the 2D offset of the metalness map. Each component is between 0 and 1. | `[0,0]`| 
| `data.metalnessMapTiling` | `Array<number>` | Array of 2 numbers controlling the 2D tiling of the metalness map. | `[1,1]`| 
| `data.metalnessMapUv` | `number` | Metalness map UV channel. | `0`| 
| `data.metalnessMapVertexColor` | `boolean` | Use vertex colors for metalness instead of a map. | `false`| 
| `data.normalMap` | `number` | The asset `id` of the normal map that specifies the per-pixel surface normals. The normal map is modulated by the 'Bumpiness' property. | `null`| 
| `data.normalMapOffset` | `Array<number>` | Array of 2 numbers controlling the 2D offset of the `normalMap`. Each component is between 0 and 1. | `[0,0]`| 
| `data.normalMapTiling` | `Array<number>` | Array of 2 numbers controlling the 2D tiling of the `normalMap`. | `[1,1]`| 
| `data.normalMapUv` | `number` | Normal map UV channel. | `0`| 
| `data.occludeSpecular` | `number` | If true, ambient color will occlude specular factor of a material. | `1`| 
| `data.opacity` | `number` | The opacity of the material. This is a value between 0 (completely transparent) and 1 (completely opaque. | `1`| 
| `data.opacityFadesSpecular` | `boolean` | Controls whether Specular is faded out by material Opacity which is sometimes not desired for shiny translucent materials such as glass. | `true`| 
| `data.opacityMap` | `number` | The asset `id` of the opacity map that specifies the per-pixel opacity. The opacity map is modulated by the `opacity` property. | `null`| 
| `data.opacityMapChannel` | `string` | An opacity map color channel to extract color value from texture. Can be: r, g, b, a. | `"r"`| 
| `data.opacityMapOffset` | `Array<number>` | Controls the 2D offset of the `opacityMap`. Each component is between 0 and 1. | `[0,0]`| 
| `data.opacityMapTiling` | `Array<number>` | Array of 2 numbers controlling the 2D tiling of the `opacityMap`. | `[1,1]`| 
| `data.opacityMapUv` | `number` | Opacity map UV channel. | `0`| 
| `data.opacityMapVertexColor` | `boolean` | Use vertex colors for opacity instead of a map. | `false`| 
| `data.reflectivity` | `number` | A factor to determine what portion of light is reflected from the material. | `1`| 
| `data.refraction` | `number` | A factor to determine what portion of light passes through the material. | `0`| 
| `data.refractionIndex` | `number` | Determines the amount of distortion of light passing through the material. | `0.6666666666666666`| 
| `data.shininess` | `number` | A value determining the smoothness of a surface. For smaller shininess values, a surface is rougher and specular highlights will be broader. For larger shininess values, a surface is smoother and will exhibit more concentrated specular highlights (as is the surace is polished and shiny). | `32`| 
| `data.specular` | `Array<number>` | Array of 3 numbers. If no specular map is set or tint is checked, this is the specular color of the material. | `[0.23,0.23,0.23]`| 
| `data.specularAntialias` | `boolean` | Enables Toksvig AA for mipmapped normal maps with specular. | `true`| 
| `data.specularMap` | `number` | The asset `id` of the specular map that specifies the per-pixel specular color. If no specular map is set, the specular color is used instead. | `null`| 
| `data.specularMapChannel` | `string` | A specular map color channel to extract color value from texture. Can be: r, g, b, a, rgb. | `"rgb"`| 
| `data.specularMapOffset` | `Array<number>` | Array of 2 numbers controlling the 2D offset of the `specularMap`. Each component is between 0 and 1. | `[0,0]`| 
| `data.specularMapTiling` | `Array<number>` | Array of 2 numbers controlling the 2D tiling of the `specularMap`. | `[1,1]`| 
| `data.specularMapTint` | `boolean` | Check this to modulate the material's specular map with a material specific specular color. | `false`| 
| `data.specularMapUv` | `number` | Specular map UV channel. | `0`| 
| `data.specularMapVertexColor` | `boolean` | Use vertex colors for specular instead of a map. | `false`| 
| `data.sphereMap` | `number` | The asset `id` of a sphere map texture asset that approximates environment reflection. | `null`| 
| `data.useFog` | `boolean` | Apply fogging (as configured in scene settings). | `true`| 
| `data.useGammaTonemap` | `boolean` | Apply gamma correction and tonemapping (as configured in scene settings). | `true`| 
| `data.useLighting` | `boolean` | Apply lighting. | `true`| 
| `data.useMetalness` | `boolean` | Toggle between specular and metalness workflow. | `false`| 
| `data.useSkybox` | `boolean` | Apply scene skybox as prefiltered environment map. | `true`| 


## Model Asset Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `data.mapping` | `Array<object>` | Defines the material mapping for each mesh instance.  |  | 
| `data.mapping.*` | `object` | undefined |  | 


## Render Asset Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `data.containerAsset` | `number` | The asset `id` of the container asset. |  | 
| `data.renderIndex` | `number` | The index of the render asset inside its container asset. |  | 


## Script Asset Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `data.loading` | `boolean` | Whether this is a script that defines a custom loading screen. |  | 
| `data.loadingType` | `number` | This allows you to control when this script will be loaded. The possible values are: 0: (load as a regular Asset), 1: (load before the PlayCanvas engine is loaded), 2: (load right after the PlayCanvas engine has loaded). |  | 
| `data.scripts` | `object` | Contains all the script data. |  | 
| `data.scripts.*.attributes` | `object` | Contains the script attribute definitions. |  | 
| `data.scripts.*.attributes.*.array` | `boolean` | Whether this attribute is an array. |  | 
| `data.scripts.*.attributes.*.assetType` | `string` | The asset type. Can be: animation, animstategraph, audio, bundle, binary, container, cubemap, css, font, folder, json, html, material, model, render, scene, script, shader, sprite, template, text, texture, textureAtlas, wasm. |  | 
| `data.scripts.*.attributes.*.color` | `string` | Defines a color curve. |  | 
| `data.scripts.*.attributes.*.curves` | `Array<string>` | The names of the curves. |  | 
| `data.scripts.*.attributes.*.default` | `mixed` | The default value for the attribute. |  | 
| `data.scripts.*.attributes.*.description` | `string` | The description of the attribute. |  | 
| `data.scripts.*.attributes.*.enum` | `object` | Defines an enumeration of values. |  | 
| `data.scripts.*.attributes.*.enum.options` | `object` | Options for the enum |  | 
| `data.scripts.*.attributes.*.enum.order` | `Array<string>` | The order of the enumerated values. |  | 
| `data.scripts.*.attributes.*.max` | `number` | The maximum value. |  | 
| `data.scripts.*.attributes.*.min` | `number` | The minimum value. |  | 
| `data.scripts.*.attributes.*.placeholder` | `mixed` | The placeholder string for the attribute. |  | 
| `data.scripts.*.attributes.*.precision` | `number` | The precision of the numeric input. |  | 
| `data.scripts.*.attributes.*.schema` | `Array<object>` | The schema for the json attribute |  | 
| `data.scripts.*.attributes.*.schema.*` | `object` | undefined |  | 
| `data.scripts.*.attributes.*.step` | `number` | The step for the numeric input. |  | 
| `data.scripts.*.attributes.*.title` | `string` | The title to display for the attribute in the Editor. |  | 
| `data.scripts.*.attributes.*.type` | `string` | The type of the script attribute. Can be: asset, boolean, curve, entity, json, number, rgb, rgba, string, vec2, vec3, vec4. |  | 
| `data.scripts.*.attributesOrder` | `Array<string>` | An array that controls the order of the scripts in the script asset. |  | 


## Sprite Asset Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `data.pixelsPerUnit` | `number` | The number of pixels that represent one PlayCanvas unit. You can use this value to change the rendered size of your sprites. |  | 
| `data.renderMode` | `number` | The render mode of the asset. Can be: `pc.SPRITE_RENDERMODE_SIMPLE`, `pc.SPRITE_RENDERMODE_SLICED`, `pc.SPRITE_RENDERMODE_TILED` |  | 
| `data.textureAtlasAsset` | `number` | The asset `id` of the texture atlas asset that contains all the frames that this asset is referencing. |  | 


## Texture Asset Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `data.addressu` | `string` | The addressing mode to be applied to the texture. Can be: repeat, clamp, mirror. |  | 
| `data.addressv` | `string` | The addressing mode to be applied to the texture. Can be: repeat, clamp, mirror. |  | 
| `data.anisotropy` | `number` | Integer value specifying the level of anisotropic to apply to the texture ranging from 1 (no anisotropic filtering) to the `pc.GraphicsDevice` property `maxAnisotropy`. |  | 
| `data.magfilter` | `string` | The magnification filter to be applied to the texture. Can be: nearest, linear, nearest_mip_nearest, linear_mip_nearest, nearest_mip_linear, linear_mip_linear. |  | 
| `data.minfilter` | `string` | The minification filter to be applied to the texture. Can be: nearest, linear, nearest_mip_nearest, linear_mip_nearest, nearest_mip_linear, linear_mip_linear. |  | 
| `data.mipmaps` | `boolean` | Whether the texture has mipmaps. |  | 
| `data.rgbm` | `boolean` | Whether the texture is RGBM. The RGBM format is a format to store high dynamic range (HDR) textures by using the alpha channel to store a multiplier for the rgb channels. |  | 


## TextureAtlas Asset Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `data.addressu` | `string` | The addressing mode to be applied to the texture. Can be: repeat, clamp, mirror. |  | 
| `data.addressv` | `string` | The addressing mode to be applied to the texture. Can be: repeat, clamp, mirror. |  | 
| `data.anisotropy` | `number` | Integer value specifying the level of anisotropic to apply to the texture ranging from 1 (no anisotropic filtering) to the `pc.GraphicsDevice` property `maxAnisotropy`. |  | 
| `data.frames` | `object` | The definitions of the frames that can be referenced by sprite assets. |  | 
| `data.frames.*.border` | `Array<number>` | Array of 4 numbers controlling the frame border. |  | 
| `data.frames.*.name` | `string` | The frame name. |  | 
| `data.frames.*.pivot` | `Array<number>` | Array of 2 numbers controlling the frame pivot. |  | 
| `data.frames.*.rect` | `Array<number>` | Array of 4 numbers controlling the frame dimensions. |  | 
| `data.magfilter` | `string` | The magnification filter to be applied to the texture. Can be: nearest, linear, nearest_mip_nearest, linear_mip_nearest, nearest_mip_linear, linear_mip_linear. |  | 
| `data.minfilter` | `string` | The minification filter to be applied to the texture. Can be: nearest, linear, nearest_mip_nearest, linear_mip_nearest, nearest_mip_linear, linear_mip_linear. |  | 
| `data.mipmaps` | `boolean` | Whether the texture has mipmaps. |  | 
| `data.rgbm` | `boolean` | Whether the texture is RGBM. The RGBM format is a format to store high dynamic range (HDR) textures by using the alpha channel to store a multiplier for the rgb channels. |  | 


## Wasm Asset Properties ##

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `data.fallbackScriptId` | `number` | The asset `id` of the fallback script asset to be used if wasm modules are not supported. | `null`| 
| `data.glueScriptId` | `number` | The asset `id` of the script asset with the JavaScript glue code that implements the JavaScript interface to the wasm functions. | `null`| 
| `data.moduleName` | `string` | The name of the module library defined in the wasm module. |  | 
