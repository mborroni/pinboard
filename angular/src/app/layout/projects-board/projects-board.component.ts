import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projectsBoard',
  template: `
  <div class="projects">
    <h2>Projects</h2>
    <button mat-raised-button class="newProject" color="primary"> <mat-icon class="material-icons">add</mat-icon>Nuevo proyecto</button>
    
  </div>
  <projectsList></projectsList>
`,
  styleUrls: ['./projects-board.component.scss']
})
export class ProjectsBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
