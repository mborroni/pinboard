import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'registerForm',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: User = {
    id: null,
    username: null,
    password: null,
    firstName: null,
    lastName: null
  };


  constructor() { }

  register(newUser): void {
    console.log(newUser);
  }

  ngOnInit() {
  }

}
