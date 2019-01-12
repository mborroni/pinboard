import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'loginForm',
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

  constructor(private router: Router, private auth: AuthService) {
    this.router = router;
  }

  login(): void {
    this.auth.login(this.user.username, this.user.password)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['projects']),
        err => console.log("Couldn't authenticate")
      );
  }

  ngOnInit() {
  }

}
