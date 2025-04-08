import { Ajax } from '../ajax';

export type ConflictResolveData = {
    /**
     * The merge id
     */
    mergeId: string;

    /**
     * The conflict ids
     */
    conflictIds: string[];
};

/**
 * Resolve conflicts
 *
 * @param data - The data
 * @returns The Ajax Request
 */
export const conflictsResolve = (data: ConflictResolveData) => {
    return Ajax.post({
        url: '/api/conflicts/resolve',
        auth: true,
        data
    });
};

/**
 * Uploads the specified file to resolve a conflict
 *
 * @param conflictId - The conflict id
 * @param file - The file
 * @returns The Ajax Request
 */
export const conflictsUpload = (conflictId: string, file: File) => {
    const form = new FormData();
    form.append('file', file);

    return Ajax.put({
        url: `/api/conflicts/${conflictId}/file`,
        auth: true,
        data: form,
        ignoreContentType: true,
        headers: {
            Accept: 'application/json'
        }
    });
};
