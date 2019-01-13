import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }

  createUser(data) {
    return this.http.post<User>(`http://localhost:3000/users`, {
      username: data.username,
      password: data.password,
      firstname: data.firstname,
      lastname: data.lastname
    });
  }

}