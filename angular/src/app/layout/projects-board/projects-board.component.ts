import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';

@Component({
  selector: 'projectsBoard',
  template: `
  <h2>Projects</h2>
  <div *ngFor="let project of projects$ | async">    
      <project [data]="project"></project>
  </div>
`,
  styleUrls: ['./projects-board.component.scss']
})
export class ProjectsBoardComponent implements OnInit {

  projects$: any;
  constructor(public projectsService: ProjectsService) {
    this.getAllProjects();
  }
  getAllProjects() {
    this.projects$ = this.projectsService.getAll()
  }

  ngOnInit() {
  }

}
