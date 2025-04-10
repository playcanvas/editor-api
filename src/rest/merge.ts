import { Ajax } from '../ajax';
import { globals as api } from '../globals';

export type MergeCreateData = {
    /**
     * The source branch id
     */
    srcBranchId: string;

    /**
     * The destination branch id
     */
    dstBranchId: string;

    /**
     * Close the source branch after merging
     */
    srcBranchClose: boolean;
};

export type MergeApplyData = {
    /**
     * Whether to finalize the merge
     */
    finalize: boolean;
};

/**
 * Create a merge
 *
 * @param data - The merge data
 * @returns The Ajax Request
 */
export const mergeCreate = (data: MergeCreateData) => {
    return Ajax.post({
        url: `${api.apiUrl}/merge`,
        auth: true,
        data: data
    });
};

/**
 * Apply a merge
 *
 * @param mergeId - The merge id
 * @param data - The data
 * @returns The Ajax Request
 */
export const mergeApply = (mergeId: string, data: MergeApplyData) => {
    return Ajax.post({
        url: `${api.apiUrl}/merge/${mergeId}/apply`,
        auth: true,
        data
    });
};

/**
 * Get a merge object by merge id including all of its conflicts
 *
 * @param mergeId - The merge id
 * @returns The Ajax Request
 */
export const mergeGet = (mergeId: string) => {
    return Ajax.get({
        url: `${api.apiUrl}/merge/${mergeId}`,
        auth: true
    });
};

/**
 * Force stops a merge which deletes the merge and all of its conflicts
 *
 * @param mergeId - The merge id
 * @returns The Ajax Request
 */
export const mergeDelete = (mergeId: string) => {
    return Ajax.delete({
        url: `${api.apiUrl}/merge/${mergeId}`,
        auth: true
    });
};

/**
 * Get conflicts for a merge
 *
 * @param mergeId - The merge id
 * @param conflictId - The conflict id
 * @param fileName - The file name
 * @param resolved - Whether the conflict is resolved
 * @returns The Ajax Request
 */
export const mergeConflicts = (mergeId: string, conflictId: string, fileName: string, resolved: boolean) => {
    const params = [];

    if (resolved) {
        params.push('resolved=true');
    }

    return Ajax.get({
        url: `${api.apiUrl}/merge/${mergeId}/conflicts/${conflictId}/file/${fileName}?${params.join('&')}`,
        auth: true,
        notJson: true
    });
};
