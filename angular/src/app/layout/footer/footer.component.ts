import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  template: `
  <p> footer works! </p> 
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
