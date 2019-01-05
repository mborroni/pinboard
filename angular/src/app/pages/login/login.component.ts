import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = {
    id: null,
    username: null,
    password: null,
    firstName: null,
    lastName: null
  };

  constructor(public router: Router) {
    this.router = router;
   }

  login() : void {
    if(this.user.username == 'admin' && this.user.password == 'admin'){
     this.router.navigate(["projects"]);
    }else {
      alert("Invalid credentials");
    } 
  }

  ngOnInit() {
  }

}
