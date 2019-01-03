export interface Task {
  id: number;
  name: string;
  dueDate: Date;
  isDone: boolean;
  deletedAt: Date;
  projectId: number;
}