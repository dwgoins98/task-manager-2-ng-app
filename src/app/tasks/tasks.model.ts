/**
 * Represents the status of a task.
 * 
 * - 'open': The task is open and not yet started.
 * - 'done': The task is completed.
 * - 'pending': The task is pending and waiting to be approved.
 * - 'in-progress': The task is currently in progress.
 */
export type TaskStatus = 'open' | 'done' | 'pending' | 'in-progress';

/**
 * Represents a task in the task manager application.
 */
export interface Task {
    /**
     * The unique identifier of the task.
     */
    id: string;

    /**
     * The title of the task.
     */
    title: string;

    /**
     * The detailed description of the task.
     */
    description: string;

    /**
     * The current status of the task.
     */
    status: TaskStatus;
}