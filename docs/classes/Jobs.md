[PlayCanvas Editor API](../README.md) / [Exports](../modules.md) / Jobs

# Class: Jobs

Facilitates tracking of asynchronous jobs.

## Hierarchy

- `Events`

  ↳ **`Jobs`**

## Table of contents

### Constructors

- [constructor](Jobs.md#constructor)

### Methods

- [start](Jobs.md#start)
- [finish](Jobs.md#finish)

## Constructors

### constructor

• **new Jobs**()

#### Overrides

Events.constructor

#### Defined in

[src/jobs.js:10](https://github.com/playcanvas/editor-api/blob/4a90977/src/jobs.js#L10)

## Methods

### start

▸ **start**(`fn`): `string`

Adds a new job. The specified function will be returned when the
job is finished.

**`example`**
```javascript
const jobId = editor.jobs.start(() => console.log('job was finished'));
editor.jobs.finish(jobId)(); // prints 'job was finished'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Function` | A function to be stored for this job. |

#### Returns

`string`

Returns a job id

#### Defined in

[src/jobs.js:27](https://github.com/playcanvas/editor-api/blob/4a90977/src/jobs.js#L27)

___

### finish

▸ **finish**(`jobId`): `Function`

Notifies that a job has finished. The specified job
id is removed and the callback stored when the job was
started is returned.

**`example`**
```javascript
const jobId = editor.jobs.start(() => console.log('job was finished'));
editor.jobs.finish(jobId)(); // prints 'job was finished'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jobId` | `string` | The job id |

#### Returns

`Function`

The function stored when the job was started

#### Defined in

[src/jobs.js:47](https://github.com/playcanvas/editor-api/blob/4a90977/src/jobs.js#L47)
