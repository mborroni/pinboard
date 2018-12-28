import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'addTask',
  template: `
  <mat-card class="container">
    <form class="addTask">
      <mat-form-field class="taskName">
        <mat-placeholder>Add new task</mat-placeholder>
        <input matInput [(ngModel)]="data.name" name="name" required>
      </mat-form-field>

      <mat-form-field class="taskDueDate">
        <mat-placeholder>Due date</mat-placeholder>
        <input matInput [matDatepicker]="picker" [(ngModel)]="data.dueDate" name="dueDate">
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>

      <button mat-flat-button color="primary" class="addTaskButton" aria-label="Agregar" (click)="newTask()">
        Agregar
      </button>
    </form>
  </mat-card>
  `,
  styleUrls: ['./addTask.component.scss']
})
export class AddTaskComponent implements OnInit {

  data = {
    name: '',
    dueDate: '',
    projectId: ''
  }
  constructor(public tasksService: TasksService) { }

  newTask() {
    this.tasksService.createTask(this.data).subscribe(data => console.log(data))
  }

  ngOnInit() {
  }

}
