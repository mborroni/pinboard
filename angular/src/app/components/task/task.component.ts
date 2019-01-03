import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'task',
  template: `
  <mat-checkbox [(ngModel)]="data.isDone" [ngClass]="{'isDone': data.isDone}" (click)="taskDone(data)">
      <span class="taskName">{{data.name}}</span>
      <div class="taskDueDate">
        <span class="text" *ngIf="data.dueDate != null">
          Due date:
        </span>
        <span class="date">
          {{ data.dueDate  | date : 'shortDate' }}
        </span>
        </div>
        <a class="material-icons">edit</a>
        <a class="material-icons" (click)="deleteTask(data)">delete</a>
  </mat-checkbox>
  `,
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  
  @Input() data: Task;

  @Output() onTaskDeleted = new EventEmitter<Task>();

  @Output() onTaskDone = new EventEmitter<Task>();

  constructor(public tasksService: TasksService) { }
  
  deleteTask(task) {
    console.log(task);
    return this.onTaskDeleted.emit(task);
  }

  taskDone(task) {
    console.log("TASK DONE DATA ->");
    console.log(task);
    return this.onTaskDone.emit(task);
  }

  ngOnInit() {
  }

}
