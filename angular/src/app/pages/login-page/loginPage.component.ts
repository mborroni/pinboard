import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loginPage',
  template: `
  <div class="background">
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./loginPage.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
