import { Component, OnInit, Inject } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddProjectComponent } from './addProject.component';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'editProject',
  template: `
  <mat-toolbar class="header">
    <h2>Actualizar proyecto</h2>
    <button mat-button (click)="onClose()">
      <mat-icon>close</mat-icon>
    </button>
  </mat-toolbar>

  <mat-divider></mat-divider>

  <form (keyup.enter)="onSubmit(project)">
    <mat-form-field class="projectName">
      <mat-placeholder>Nombre</mat-placeholder>
      <input matInput [(ngModel)]="editProject.name" name="name" required>
    </mat-form-field>

    <mat-form-field class="projectDueDate">
      <mat-placeholder>Fecha límite</mat-placeholder>
      <input matInput [matDatepicker]="picker" [(ngModel)]="editProject.dueDate" name="dueDate">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  </form>

  <mat-divider></mat-divider>

  <mat-toolbar class="footer">
    <button mat-raised-button color="primary" (click)="onSubmit(editProject)">Actualizar</button>
    <button mat-button (click)="onClose()">Cancelar</button>
  </mat-toolbar>
`,
  styleUrls: ['./editProject.component.scss']
})
export class EditProjectComponent implements OnInit {

  public editProject: Project = {
    id: null,
    name: null,
    dueDate: null,
    deletedAt: null,
    userId: null
  };

  constructor(
    public projectsService: ProjectsService,
    public dialogRef: MatDialogRef<AddProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public project: Project
  ) {
    this.editProject.id = this.project.id;
    this.editProject.name = this.project.name;
    this.editProject.dueDate = this.project.dueDate;
    this.editProject.deletedAt = this.project.deletedAt;
    this.editProject.userId = this.project.userId;
  }

  onSubmit(project) {
    this.projectsService
      .updateProjectById(project.id, project)
      .subscribe(updatedProject => this.dialogRef.close(updatedProject));
  }

  onClose() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
