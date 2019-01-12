import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  template: `
  <mat-toolbar color="primary" role="heading">
      <span class="fill-remaining-space">Pinboard</span>
      <a mat-button (click)="logout()"><mat-icon>exit_to_app</mat-icon></a>
  </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
