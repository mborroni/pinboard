import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(public http: HttpClient) { }

  getAll() {
    return this.http.get<Project[]>(`http://localhost:3000/projects`);
  }

  createProject(data) {
    return this.http.post<Project>(`http://localhost:3000/projects`, {
      name: data.name,
      dueDate: data.dueDate,
      userId: data.userId,
    });
  }

  updateProjectById(projectId, project) {
    return this.http.put(`http://localhost:3000/projects/${projectId}`, {
      name: project.name,
      dueDate: project.dueDate,
      isDone: project.isDone
    });
  }


  deleteProjectById(projectId) {
    return this.http.delete(`http://localhost:3000/projects/${projectId}`);
  }

}

