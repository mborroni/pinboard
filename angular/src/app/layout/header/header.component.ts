import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  template: `
  <mat-toolbar color="primary" role="heading">
      <span class="fill-remaining-space">Pinboard</span>   
  </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
