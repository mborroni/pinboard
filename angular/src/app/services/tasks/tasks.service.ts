import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(public http:HttpClient) { }

  getAll(){
    return this.http.get("http://localhost:3000/tasks/");
  }

  createTask(data){
    console.log(data)
    return this.http.post("http://localhost:3000/tasks/newTask", {
      name: data.name,
      //description: data.description,
      projectId: data.projectId,
    });
  }
}
