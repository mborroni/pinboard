import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';

@Component({
  selector: 'projectsList',
  template: `
  <a [routerLink]="'/projects/' + project.id" *ngFor="let project of projects$ | async">
    <div class="project">
      <project [project]="project"></project>
      <button mat-icon-button class="menu" [matMenuTriggerFor]="menu">
        <mat-icon>more_vert</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item>
          <mat-icon>edit</mat-icon>
          <span>Editar</span>
        </button>
        <button mat-menu-item>
          <mat-icon>delete</mat-icon>
          <span>Borrar</span>
        </button>
      </mat-menu>
    </div>
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

  ngOnInit() {
  }

}
