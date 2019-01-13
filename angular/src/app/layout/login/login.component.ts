import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'loginForm',
  template: `
  <mat-card class="loginCard">
    <mat-card-header>
      <mat-card-title>Login</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <form>
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
      <button mat-raised-button (click)="login()" color="primary" type="submit">Ingresar</button>
      <button mat-button [routerLink]="['', 'register']">Registrarse</button>
    </mat-card-actions>
  </mat-card>
  <mat-card class="authError" [@fadeInOut] *ngIf="error">Usuario o contraseña inválido</mat-card>
  `,
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(500)),
    ])
  ]
})

export class LoginComponent implements OnInit {

  public user: User = {
    id: null,
    username: null,
    password: null,
    firstName: null,
    lastName: null
  };

  error: boolean = false;

  constructor(private router: Router, private auth: AuthService) {
    this.router = router;
  }

  login(): void {
    this.auth.login(this.user.username, this.user.password)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['projects']),
        err => this.error = true
      );
  }

  ngOnInit() {
  }

}
