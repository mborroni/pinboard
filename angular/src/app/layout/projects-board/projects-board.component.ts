import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projectsBoard',
  template: `
  <h2>Projects</h2>
  <projectsList></projectsList>
`,
  styleUrls: ['./projects-board.component.scss']
})
export class ProjectsBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
