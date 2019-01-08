import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'projectsList',
  template: `
  <a [routerLink]="'/projects/' + project.id" *ngFor="let project of projects">
    <div class="project">
      <project [project]="project"></project>
      <button mat-icon-button class="menu" [matMenuTriggerFor]="menu">
        <mat-icon>more_vert</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item (click)="updateProject(project)">
          <mat-icon>edit</mat-icon>
          <span>Editar</span>
        </button>
        <button mat-menu-item (click)="deleteProject(project)">
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

  projects$: Observable<Task[]>;
  projects: Project[];

  constructor(public projectsService: ProjectsService) {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectsService.getAll().subscribe(data => this.projects = data);
  }

  newProject(project) {
    this.projectsService.createProject(project).subscribe(newProject => this.projects.push(newProject[0]));
  }

  updateProject(project) {
    this.projectsService.updateProjectById(project.id, project).subscribe(updateProject => console.log(updateProject));
  }

  deleteProject(project){
    this.projectsService.deleteProjectById(project.id).subscribe(deletedProject => {
      const index = this.projects.indexOf(project);
      this.projects.splice(index, 1);
    })
  }

  ngOnInit() {
  }

}
