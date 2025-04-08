import { Ajax } from '../ajax';

export type CheckpointCreateData = {
    /**
     * The ID of the project to create the checkpoint on
     */
    projectId: string;

    /**
     * The ID of the branch to create the checkpoint on
     */
    branchId: string;

    /**
     * The description of the checkpoint
     */
    description: string;
};

export type CheckpointRestoreData = {
    /**
     * The ID of the branch to restore the checkpoint to
     */
    branchId: string;
};

export type CheckpointHardResetData = {
    /**
     * The ID of the branch to hard reset the checkpoint to
     */
    branchId: string;
};

/**
 * Creates a new checkpoint
 *
 * @param data - The data for the new checkpoint
 * @returns A request that responds with the new checkpoint
 */
export const checkpointCreate = (data: CheckpointCreateData) => {
    return Ajax.post({
        url: '/api/checkpoints',
        auth: true,
        data
    });
};

/**
 * Gets a checkpoint
 *
 * @param checkpointId - The ID of the checkpoint to get
 * @returns A request that responds with the checkpoint
 */
export const checkpointGet = (checkpointId: string) => {
    return Ajax.get({
        url: `/api/checkpoints/${checkpointId}`,
        auth: true
    });
};

/**
 * Restores a checkpoint
 *
 * @param checkpointId - The ID of the checkpoint to restore
 * @param data - The data for the restore
 * @returns A request that responds with the result of the restore
 */
export const checkpointRestore = (checkpointId: string, data: CheckpointRestoreData) => {
    return Ajax.post({
        url: `/api/checkpoints/${checkpointId}/restore`,
        auth: true,
        data
    });
};

/**
 * Hard resets a checkpoint
 *
 * @param checkpointId - The ID of the checkpoint to hard reset
 * @param data - The data for the hard reset
 * @returns A request that responds with the result of the hard reset
 */
export const checkpointHardReset = (checkpointId: string, data: CheckpointHardResetData) => {
    return Ajax.post({
        url: `/api/checkpoints/${checkpointId}/hardreset`,
        auth: true,
        data
    });
};
