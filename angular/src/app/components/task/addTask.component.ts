import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'addTask',
  template: `
  <mat-card class="container">
    <form class="addTask">
      <mat-form-field class="taskName">
        <mat-placeholder>Add new task</mat-placeholder>
        <input matInput [(ngModel)]="task.name" name="name" required>
      </mat-form-field>

      <mat-form-field class="taskDueDate">
        <mat-placeholder>Due date</mat-placeholder>
        <input matInput [matDatepicker]="picker" [(ngModel)]="task.dueDate" name="dueDate">
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

  @Output() onTaskAdded = new EventEmitter<Task>();

  public task: Task = {
    id: null,
    name: '',
    dueDate: null,
    isDone: false,
    deletedAt: null,
    projectId: null,
  };

  constructor(public tasksService: TasksService, public route: ActivatedRoute) {
    this.route = route;
    this.route.params.subscribe(params => this.task.projectId = params.id);
    this.route.url.subscribe(u => { this.task.name = ''; this.task.dueDate = null; });
   }


  newTask() {
    return this.onTaskAdded.emit(this.task);
  }

  ngOnInit() {
  }

}
