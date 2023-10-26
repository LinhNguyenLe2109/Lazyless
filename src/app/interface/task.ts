export interface Task {
    id: string;
    taskDescription: string;
    taskType: string;
    completed: boolean;
    parentTableId: string;
}
