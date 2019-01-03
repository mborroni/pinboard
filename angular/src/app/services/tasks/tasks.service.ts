import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Task } from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(public http:HttpClient) { }

  getAll() {
    return this.http.get(`http://localhost:3000/tasks/`);
  }

  getByProjectId(projectId) {
    return this.http.get<Task[]>(`http://localhost:3000/tasks/${projectId}`);
  }

  createTask(data) {
    return this.http.post<Task>(`http://localhost:3000/tasks`, {
      name: data.name,
      dueDate: data.dueDate,
      projectId: data.projectId,
    });
  }

  updateTaskById(taskId, data) {
    return this.http.put<Task>(`http://localhost:3000/tasks/${taskId}`, {
      name: data.name,
      dueDate: data.dueDate,
      isDone: data.isDone,
    });
  }

  deleteTaskById(taskId) {
    return this.http.delete(`http://localhost:3000/tasks/${taskId}`);
  }
}
