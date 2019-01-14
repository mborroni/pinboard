import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'registerForm',
  template: `
  <mat-card class="registerCard">
    <mat-card-header>
      <mat-card-title>Registrarse</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <form (keyup.enter)="register(user)">
        <mat-form-field>
          <input matInput placeholder="Nombre" [(ngModel)]="user.firstname" type="firstname" name="firstname" required>
        </mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Apellido" [(ngModel)]="user.lastname" type="lastname" name="lastname" required>
        </mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Username" [(ngModel)]="user.username" type="username" name="username" required>
        </mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Password" [(ngModel)]="user.password" type="password" name="password" required>
        </mat-form-field>
      </form>
      <!-- <mat-spinner [style.display]="showSpinner ? 'block' : 'none'"></mat-spinner> -->
    </mat-card-content>
    <mat-card-actions>
      <button mat-raised-button (click)="register(user)" color="primary" type="submit">Registrarse</button>
      <button mat-button [routerLink]="['/']">Volver</button>
    </mat-card-actions>
  </mat-card>
  `,
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: User = {
    id: null,
    username: null,
    password: null,
    firstname: null,
    lastname: null
  };


  constructor(private router: Router, private usersService: UsersService) {
    this.router = router;
  }

  register(user): void {
    this.usersService
      .createUser(user)
      .subscribe(newUser => this.router.navigate(['projects']));
  }

  ngOnInit() {
  }

}
