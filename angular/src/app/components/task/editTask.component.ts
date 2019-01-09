import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'editTask',
  template: `
  <mat-toolbar class="header">
    <h2>Editar tarea</h2>
    <button mat-button (click)="onClose()">
      <mat-icon>close</mat-icon>
    </button>
  </mat-toolbar>

  <mat-divider></mat-divider>

  <form>
    <mat-form-field class="taskName">
      <mat-placeholder>Add new task</mat-placeholder>
      <input matInput [(ngModel)]="editTask.name" name="name" required>
    </mat-form-field>

    <mat-form-field class="taskDueDate">
      <mat-placeholder>Due date</mat-placeholder>
      <input matInput [matDatepicker]="picker" [(ngModel)]="editTask.dueDate" name="dueDate">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  </form>

  <mat-divider></mat-divider>

  <mat-toolbar class="footer">
    <button mat-raised-button color="primary" (click)="updateTask(editTask)">Actualizar</button>
    <button mat-button (click)="onClose()">Cancelar</button>
  </mat-toolbar>
  `,
  styleUrls: ['./editTask.component.scss']
})
export class EditTaskComponent implements OnInit {

  public editTask: Task = {
    id: null,
    name: '',
    dueDate: null,
    isDone: false,
    deletedAt: null,
    projectId: null,
  };

  constructor(
    public tasksService: TasksService,
    public dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public task: Task
  ) {
    this.editTask.id = task.id;
    this.editTask.name = task.name;
    this.editTask.dueDate = task.dueDate;
    this.editTask.isDone = task.isDone;
    this.editTask.deletedAt = task.deletedAt;
    this.editTask.projectId = task.projectId;
  }

  updateTask(task) {
    // this.getAllTasks(task.projectId)
    this.tasksService
      .updateTaskById(task.id, task)
      .subscribe(updatedTask => this.dialogRef.close(updatedTask));
  }

  onClose() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
