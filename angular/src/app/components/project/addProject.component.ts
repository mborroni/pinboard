import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectsService } from 'src/app/services/projects/projects.service';
import { Project } from 'src/app/models/project';

export interface DialogData {
  projectName: string;
  dueDate: string;
  description: string;
}

@Component({
  selector: 'addProject',
  template: `
  <mat-toolbar class="header">
    <h2>Nuevo proyecto</h2>
    <button mat-button (click)="onClose()">
      <mat-icon>close</mat-icon>
    </button>
  </mat-toolbar>

  <mat-divider></mat-divider>

  <form>
    <mat-form-field class="projectName">
      <mat-placeholder>Nombre</mat-placeholder>
      <input matInput [(ngModel)]="project.name" name="name" required>
    </mat-form-field>

    <mat-form-field class="projectDueDate">
      <mat-placeholder>Fecha límite</mat-placeholder>
      <input matInput [matDatepicker]="picker" [(ngModel)]="project.dueDate" name="dueDate">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  </form>

  <mat-divider></mat-divider>

  <mat-toolbar class="footer">
    <button mat-raised-button color="primary" (click)="onSubmit(project)">Agregar</button>
    <button mat-button (click)="onClose()">Cancelar</button>
  </mat-toolbar>
  `,
  styleUrls: ['./addProject.component.scss']
})
export class AddProjectComponent implements OnInit {

  public project: Project = {
    id: null,
    name: null,
    dueDate: null,
    deletedAt: null,
    userId: null
  };

  constructor(
    public projectsService: ProjectsService,
    public dialogRef: MatDialogRef<AddProjectComponent>
  ) { }

  onSubmit(project) {
    console.log(project);
    this.projectsService
      .createProject(project)
      .subscribe(newProject => this.dialogRef.close(newProject));
  }

  onClose() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
