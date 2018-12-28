import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(public http:HttpClient) { }

  getAll(){
    return this.http.get("http://localhost:3000/projects/");
  }
}

