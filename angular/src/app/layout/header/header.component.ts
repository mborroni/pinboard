import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  template: `
  <mat-toolbar color="primary" role="heading">
    <mat-toolbar-row>
      <span class="fill-remaining-space">Pinboard</span>   
    </mat-toolbar-row>
    <mat-toolbar-row>
      <span class="example-spacer">Aca van opciones creo</span>
    </mat-toolbar-row>
  </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
