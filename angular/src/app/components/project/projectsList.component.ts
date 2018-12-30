import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';

@Component({
  selector: 'projectsList',
  template: `
  <a [routerLink]="'/projects/' + project.id" *ngFor="let project of projects$ | async">
    <project class="project" [data]="project"></project>
    <mat-divider *ngIf="!last"></mat-divider>
  </a>
  `,
  styleUrls: ['./projectsList.component.scss']
})
export class ProjectsListComponent implements OnInit {

  projects$: any;
  constructor(public projectsService: ProjectsService) {
    this.getAllProjects();
  }
  getAllProjects() {
    this.projects$ = this.projectsService.getAll()
  }

  changeProjectTasks() {

  }

  ngOnInit() {
  }

}
