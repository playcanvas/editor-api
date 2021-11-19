[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / [Scene Settings](SceneSettings.md) / Properties

# Scene Settings Properties #

These are the properties that you can access on the [SceneSettings](SceneSettings.md):

| Path | Type | Description | Default Value | 
| :------ | :------ | :------ | :------ |
| `physics` | `object` | Physics related settings for the scene. |  | 
| `physics.gravity` | `Array<number>` | An array of 3 numbers that represents the gravity force. |  | 
| `render` | `object` | Render settings for the scene. |  | 
| `render.exposure` | `number` | The exposure value tweaks the overall brightness of the scene. |  | 
| `render.fog` | `string` | The type of fog used in the scene. Can be one of `pc.FOG_NONE`, `pc.FOG_LINEAR`, `pc.FOG_EXP`, `pc.FOG_EXP2`. |  | 
| `render.fog_color` | `Array<number>` | An array of 3 numbers representing the color of the fog. |  | 
| `render.fog_density` | `number` | The density of the fog. This property is only valid if the fog property is set to `pc.FOG_EXP` or `pc.FOG_EXP2`. |  | 
| `render.fog_end` | `number` | The distance from the viewpoint where linear fog reaches its maximum. This property is only valid if the fog property is set to `pc.FOG_LINEAR`. |  | 
| `render.fog_start` | `number` | The distance from the viewpoint where linear fog begins. This property is only valid if the fog property is set to `pc.FOG_LINEAR`. |  | 
| `render.gamma_correction` | `number` | The gamma correction to apply when rendering the scene. Can be one of `pc.GAMMA_NONE`, `pc.GAMMA_SRGB`. |  | 
| `render.global_ambient` | `Array<number>` | An array of 3 numbers representing the color of the scene's ambient light. |  | 
| `render.lightmapMaxResolution` | `number` | The maximum lightmap resolution. |  | 
| `render.lightmapMode` | `number` | The lightmap baking mode. Can be one of `pc.BAKE_COLOR`, `pc.BAKE_COLORDIR`. |  | 
| `render.lightmapSizeMultiplier` | `number` | The lightmap resolution multiplier. |  | 
| `render.skybox` | `number` | The `id` of the cubemap texture to be used as the scene's skybox. |  | 
| `render.skyboxIntensity` | `number` | Multiplier for skybox intensity. |  | 
| `render.skyboxMip` | `number` | The mip level of the skybox to be displayed. Only valid for prefiltered cubemap skyboxes. |  | 
| `render.skyboxRotation` | `Array<number>` | An array of 3 numbers representing the rotation of the skybox. | `[0,0,0]`| 
| `render.tonemapping` | `number` | The tonemapping transform to apply when writing fragments to the frame buffer. Can be: `pc.TONEMAP_LINEAR`, `pc.TONEMAP_FILMIC`, `pc.TONEMAP_HEJL`, `pc.TONEMAP_ACES`. |  | 
