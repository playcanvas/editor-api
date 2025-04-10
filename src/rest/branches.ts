import { Ajax } from '../ajax';
import { globals as api } from '../globals';

export type BranchCheckpointOptions = {
    /**
     * The type of task to get checkpoints for
     */
    task_type?: string;

    /**
     * The maximum number of checkpoints to get
     */
    limit?: number;

    /**
     * The number of checkpoints to skip
     */
    skip?: number;

    /**
     * The ID of the graph to start from
     */
    graphStartId?: string;

    /**
     * The ID of the VC history item
     */
    vcHistItem?: string;
};

/**
 * Creates a new branch
 *
 * @param data - The data for the new branch
 * @returns A request that responds with the result of the branch creation
 */
export const branchCreate = (data: object) => {
    return Ajax.post({
        url: `${api.apiUrl}/branches`,
        auth: true,
        data
    });
};

/**
 * Checks out the master branch
 *
 * @param branchId - The ID of the branch to check out
 * @returns A request that responds when the branch is checked out
 */
export const branchCheckout = (branchId: string) => {
    return Ajax.post({
        url: `${api.apiUrl}/branches/${branchId}/checkout`,
        auth: true
    });
};

/**
 * Opens a branch
 *
 * @param branchId - The ID of the branch to open
 * @returns A request that responds when the branch is opened
 */
export const branchOpen = (branchId: string) => {
    return Ajax.post({
        url: `${api.apiUrl}/branches/${branchId}/open`,
        auth: true
    });
};

/**
 * Closes a branch
 *
 * @param branchId - The ID of the branch to close
 * @returns A request that responds when the branch is closed
 */
export const branchClose = (branchId: string) => {
    return Ajax.post({
        url: `${api.apiUrl}/branches/${branchId}/close`,
        auth: true
    });
};

/**
 * Deletes a branch
 *
 * @param branchId - The ID of the branch to delete
 * @returns A request that responds when the branch is deleted
 */
export const branchDelete = (branchId: string) => {
    return Ajax.delete({
        url: `${api.apiUrl}/branches/${branchId}`,
        auth: true
    });
};

/**
 * Get branch checkpoints
 *
 * @param branchId - The ID of the branch to get checkpoints for
 * @param options - The options for the request
 * @returns A request that responds with the checkpoints for the branch
 */
export const branchCheckpoints = (branchId: string, options: BranchCheckpointOptions) => {
    const params = [];

    if (options.task_type) {
        params.push(`task_type=${options.task_type}`);
    }

    if (options.limit) {
        params.push(`limit=${options.limit}`);
    }

    if (options.skip) {
        params.push(`skip=${options.skip}`);
    }

    if (options.graphStartId) {
        params.push(`graphStartId=${options.graphStartId}`);
    }

    if (options.vcHistItem) {
        params.push(`vcHistItem=${options.vcHistItem}`);
    }

    return Ajax.get({
        url: `${api.apiUrl}/branches/${branchId}/checkpoints?${params.join('&')}`,
        auth: true
    });
};
