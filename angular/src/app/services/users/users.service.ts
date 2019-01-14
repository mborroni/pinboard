import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }

  createUser(data) {
    return this.http.post<{ token: string }>(`http://localhost:3000/users`, {
      username: data.username,
      password: data.password,
      firstname: data.firstname,
      lastname: data.lastname
    }).pipe(
      map(result => {
        localStorage.setItem('access_token', result.token);
        return true;
      })
    );
  }

}
