[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Jobs

# Class: Jobs

Facilitates tracking of asynchronous jobs.

## Hierarchy

- `Events`

  ↳ **`Jobs`**

## Table of contents

### Properties

- [suspendEvents](Jobs.md#suspendevents)

### Methods

- [on](Jobs.md#on)
- [once](Jobs.md#once)
- [emit](Jobs.md#emit)
- [unbind](Jobs.md#unbind)
- [addEmitter](Jobs.md#addemitter)
- [removeEmitter](Jobs.md#removeemitter)
- [start](Jobs.md#start)
- [finish](Jobs.md#finish)

## Properties

### suspendEvents

• **suspendEvents**: `boolean`

If true the observer will not emit events when values are set.

#### Inherited from

Events.suspendEvents

#### Defined in

node_modules/@playcanvas/observer/dist/observer.d.ts:37

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

### start

▸ **start**(`fn`): `string`

Adds a new job. The specified function will be returned when the
job is finished.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | A function to be stored for this job. |

#### Returns

`string`

Returns a job id

**`Example`**

```javascript
const jobId = editor.jobs.start(() => console.log('job was finished'));
editor.jobs.finish(jobId)(); // prints 'job was finished'
```

#### Defined in

[src/jobs.js:27](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/jobs.js#L27)

___

### finish

▸ **finish**(`jobId`): [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function )

Notifies that a job has finished. The specified job
id is removed and the callback stored when the job was
started is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jobId` | `string` | The job id |

#### Returns

[`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function )

The function stored when the job was started

**`Example`**

```javascript
const jobId = editor.jobs.start(() => console.log('job was finished'));
editor.jobs.finish(jobId)(); // prints 'job was finished'
```

#### Defined in

[src/jobs.js:47](https://github.com/playcanvas/editor-api/blob/2f0bc85/src/jobs.js#L47)
