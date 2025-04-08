import { Ajax } from '../ajax';

export type DiffCreateOptions = {
    /**
     * The ID of the source branch
     */
    srcBranchId: string;

    /**
     * The ID of the source checkpoint
     */
    srcCheckpointId?: string;

    /**
     * The ID of the destination branch
     */
    dstBranchId: string;

    /**
     * The ID of the destination checkpoint
     */
    dstCheckpointId?: string;

    /**
     * The ID of the history item
     */
    histItem?: string;
};

export type DiffMergeData = {
    /**
     * The ID of the source branch
     */
    srcBranchId: string;

    /**
     * The ID of the destination branch
     */
    dstBranchId: string;

    /**
     * The ID of the destination checkpoint
     */
    dstCheckpointId: string;

    /**
     * The ID of the merge
     */
    mergeId: string;
};

/**
 * Creates a new diff
 *
 * @param options - The options for the diff
 * @returns A request that responds with the new diff
 */
export const diffCreate = (options: DiffCreateOptions) => {
    const data: {
        srcBranchId: string;
        dstBranchId: string;
        srcCheckpointId?: string;
        dstCheckpointId?: string;
        vcHistItem?: string;
    } = {
        srcBranchId: options.srcBranchId,
        dstBranchId: options.dstBranchId
    };

    if (options.histItem) {
        data.vcHistItem = options.histItem;
    }

    if (options.srcCheckpointId) {
        data.srcCheckpointId = options.srcCheckpointId;
    }
    if (options.dstCheckpointId) {
        data.dstCheckpointId = options.dstCheckpointId;
    }

    return Ajax.post({
        url: '/api/diff',
        auth: true,
        data
    });
};

/**
 * Merges the diff
 *
 * @param data - The data for the merge
 * @returns A request that responds with the result of the merge
 */
export const diffMerge = (data: DiffMergeData) => {
    return Ajax.post({
        url: '/api/diff',
        auth: true,
        data
    });
};
