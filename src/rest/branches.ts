import { Ajax } from '../ajax';
import { globals as api } from '../globals';
import type { Branch, User } from '../types/models';

// args
export type BranchCreateArgs = {
    /**
     * The branch name. Cannot be empty or exceed 1000 characters.
     */
    name: string;

    /**
     * The project ID
     */
    projectId: number;

    /**
     * The ID of the source branch
     */
    sourceBranchId?: string;

    /**
     * the ID of the source checkpoint
     */
    sourceCheckpointId?: string;
}
export type BranchCheckoutArgs = {
    /**
     * The ID of the branch to checkout
     */
    branchId: string;
}
export type BranchOpenArgs = {
    /**
     * The ID of the branch to open
     */
    branchId: string;
}
export type BranchCloseArgs = {
    /**
     * The ID of the branch to close
     */
    branchId: string;
}
export type BranchDeleteArgs = {
    /**
     * The ID of the branch to delete
     */
    branchId: string;
}
export type BranchCheckpointArgs = {
    /**
     * The ID of the branch to get checkpoints for
     */
    branchId: string;

    /**
     * The type of task to get checkpoints for
     */
    taskType?: string;

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
    historyItemId?: string;
};

// responses
export type BranchCreateResponse = Omit<Branch, 'userId'> & {
    user: Pick<User, 'id' | 'email' | 'fullName' | 'username' >;
};
export type BranchCheckoutResponse = Omit<Branch, 'userId'> & {
    user: Pick<User, 'id'>;
};
export type BranchOpenResponse = Omit<Branch, 'userId'> & {
    user: Pick<User, 'id'>;
};
export type BranchCloseResponse = Omit<Branch, 'userId'> & {
    user: Pick<User, 'id'>;
};
export type BanchCloseResponse = Omit<Branch, 'userId'> & {
    user: Pick<User, 'id'>;
};
export type BranchDeleteResponse = Omit<Branch, 'userId'> & {
    user: Pick<User, 'id'>;
};

/**
 * Creates a new branch
 *
 * @param args - The arguments for the request
 * @returns The Ajax wrapped response
 */
export const branchCreate = (args: BranchCreateArgs) => {
    return Ajax.post<BranchCreateResponse>({
        url: `${api.apiUrl}/branches`,
        auth: true,
        data: {
            name: args.name,
            projectId: args.projectId,
            sourceBranchId: args.sourceBranchId,
            sourceCheckpointId: args.sourceCheckpointId
        }
    });
};

/**
 * Checks out the master branch
 *
 * @param args - The arguments for the request
 * @returns The Ajax wrapped response
 */
export const branchCheckout = (args: BranchCheckoutArgs) => {
    return Ajax.post<BranchCheckoutResponse>({
        url: `${api.apiUrl}/branches/${args.branchId}/checkout`,
        auth: true
    });
};

/**
 * Opens a branch
 *
 * @param args - The arguments for the request
 * @returns The Ajax wrapped response
 */
export const branchOpen = (args: BranchOpenArgs) => {
    return Ajax.post<BranchOpenResponse>({
        url: `${api.apiUrl}/branches/${args.branchId}/open`,
        auth: true
    });
};

/**
 * Closes a branch
 *
 * @param args - The arguments for the request
 * @returns The Ajax wrapped response
 */
export const branchClose = (args: BranchCloseArgs) => {
    return Ajax.post<BranchCloseResponse>({
        url: `${api.apiUrl}/branches/${args.branchId}/close`,
        auth: true
    });
};

/**
 * Deletes a branch
 *
 * @param args - The arguments for the request
 * @returns The Ajax wrapped response
 */
export const branchDelete = (args: BranchDeleteArgs) => {
    return Ajax.delete<BranchDeleteResponse>({
        url: `${api.apiUrl}/branches/${args.branchId}`,
        auth: true
    });
};

/**
 * Get branch checkpoints
 *
 * @param args - The arguments for the request
 * @returns The Ajax wrapped response
 */
export const branchCheckpoints = (args: BranchCheckpointArgs) => {
    const params = [];

    if (args.taskType) {
        params.push(`task_type=${args.taskType}`);
    }

    if (args.limit) {
        params.push(`limit=${args.limit}`);
    }

    if (args.skip) {
        params.push(`skip=${args.skip}`);
    }

    if (args.graphStartId) {
        params.push(`graphStartId=${args.graphStartId}`);
    }

    if (args.historyItemId) {
        params.push(`vcHistItem=${args.historyItemId}`);
    }

    return Ajax.get<BranchCheckoutResponse>({
        url: `${api.apiUrl}/branches/${args.branchId}/checkpoints?${params.join('&')}`,
        auth: true
    });
};
