import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { Task } from 'src/app/models/task';
import { EditTaskDialogComponent } from './editTaskDialog.component';

@Component({
  selector: 'task',
  template: `
  <div class="task">
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
    </mat-checkbox>
    <a class="material-icons" (click)="editTask(data)">edit</a>
    <a class="material-icons" (click)="deleteTask(data)">delete</a>
  </div>
  `,
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() data: Task;

  @Output() onTaskDeleted = new EventEmitter<Task>();

  @Output() onTaskDone = new EventEmitter<Task>();

  @Output() onTaskEdited = new EventEmitter<Task>();

  constructor(public tasksService: TasksService, public dialog: MatDialog) { }

  deleteTask(task) {
    return this.onTaskDeleted.emit(task);
  }

  taskDone(task) {
    return this.onTaskDone.emit(task);
  }

  editTask(task) {
    let config: MatDialogConfig = {
      disableClose: true,
      autoFocus: true,
      width: '60%',
      data: task
    };

    this.dialog.open(EditTaskDialogComponent, config);
    // return this.onTaskEdited.emit(task);
  }

  ngOnInit() {
  }

}
