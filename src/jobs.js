import { Events } from '@playcanvas/observer';
import { Guid } from './guid';

/**
 * Facilitates tracking of asynchronous jobs.
 *
 * @category Internal
 */
class Jobs extends Events {
    constructor() {
        super();
        this._jobsInProgress = {};
    }

    /**
     * Adds a new job. The specified function will be returned when the
     * job is finished.
     *
     * @param {Function} fn - A function to be stored for this job.
     * @returns {string} Returns a job id
     * @example
     * ```javascript
     * const jobId = editor.jobs.start(() => console.log('job was finished'));
     * editor.jobs.finish(jobId)(); // prints 'job was finished'
     * ```
     */
    start(fn) {
        const jobId = Guid.create().substring(0, 8);
        this._jobsInProgress[jobId] = fn;
        this.emit('start', jobId);
        return jobId;
    }

    /**
     * Notifies that a job has finished. The specified job
     * id is removed and the callback stored when the job was
     * started is returned.
     *
     * @param {string} jobId - The job id
     * @returns {Function} The function stored when the job was started
     * @example
     * ```javascript
     * const jobId = editor.jobs.start(() => console.log('job was finished'));
     * editor.jobs.finish(jobId)(); // prints 'job was finished'
     * ```
     */
    finish(jobId) {
        const callback = this._jobsInProgress[jobId];
        delete this._jobsInProgress[jobId];
        this.emit('finish', jobId);
        return callback;
    }
}

export { Jobs };
