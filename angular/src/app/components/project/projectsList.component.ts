import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task';
import { Project } from 'src/app/models/project';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { EditProjectComponent } from './editProject.component';

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
        <button mat-menu-item (click)="editProject(project)">
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

  constructor(public projectsService: ProjectsService, public dialog: MatDialog) {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectsService.getAll().subscribe(data => this.projects = data);
  }

  newProject(project) {
    console.log(project);
    this.projects.push(project);
  }

  editProject(project) {
    const config: MatDialogConfig = {
      disableClose: true,
      autoFocus: true,
      width: '50%',
      data: project
    };

    this.dialog.open(EditProjectComponent, config)
      .afterClosed()
      .subscribe(updatedProject => updatedProject && this.updateProject(updatedProject));
  }

  updateProject(project) {
    const index = this.projects.findIndex(p => p.id === project.id);

    if (index > -1) {
      this.projects[index] = project;
    }
  }

  deleteProject(project) {
    this.projectsService.deleteProjectById(project.id).subscribe(deletedProject => {
      const index = this.projects.indexOf(project);
      this.projects.splice(index, 1);
    });
  }

  ngOnInit() {
  }

}
