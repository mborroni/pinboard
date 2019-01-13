import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'homePage',
  template: `
  <header></header>

  <div class="container">
    <div class="projectsBoard">
      <projectsBoard></projectsBoard>
    </div>
    <div class="tasksBoard">
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
