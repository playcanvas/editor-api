export type Branch = {
    /**
     * The ID of the branch
     */
    id: string;

    /**
     * The ID of the project
     */
    projectId: number;

    /**
     * The ID of the user who created the branch
     */
    userId: number;

    /**
     * The name of the branch
     */
    name: string;

    /**
     * The date the branch was created
     */
    createdAt: string;

    /**
     * Whether the branch is closed
     */
    closed: boolean;

    /**
     * Whether the branch is permanent
     */
    permanent: boolean;

    /**
     * The ID of the latest checkpoint
     */
    latestCheckpointId: string;
};

export type User = {
    /**
     * The ID of the user
     */
    id: string;

    /**
     * The email of the user
     */
    email: string;

    /**
     * The full name of the user
     */
    fullName: string;

    /**
     * The username of the user
     */
    username: string;
};
