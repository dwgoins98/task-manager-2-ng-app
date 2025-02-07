export type TaskStatus = 'open' | 'done' | 'pending' | 'in-progress';

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}