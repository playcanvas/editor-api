import { Ajax } from '../ajax';
import { globals as api } from '../globals';

/**
 * Gets the job with the given ID
 *
 * @param jobId - The ID of the job to get
 * @returns A request that responds with the job data
 */
export const jobGet = (jobId: number) => {
    return Ajax.get({
        url: `${api.apiUrl}/jobs/${jobId}`,
        auth: true
    });
};
