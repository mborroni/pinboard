import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  template: `
  <mat-toolbar color="primary" role="heading">
      <span class="fill-remaining-space">Pinboard</span>
      <a mat-button [routerLink]="['/']"><mat-icon>exit_to_app</mat-icon></a>
  </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
