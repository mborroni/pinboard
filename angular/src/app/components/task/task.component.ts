import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_CHECKBOX_CLICK_ACTION } from "@angular/material";
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { Task } from 'src/app/models/task';
import { EditTaskComponent } from './editTask.component';

@Component({
  providers: [
    { provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'noop' }
  ],
  selector: 'task',
  template: `
  <div class="task">
    <mat-checkbox [(ngModel)]="data.isDone" [ngClass]="{'isDone': data.isDone}" (click)="taskTriggered(data)">
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

  @Output() onTaskTriggered = new EventEmitter<Task>();

  @Output() onTaskEdited = new EventEmitter<Task>();

  constructor(public tasksService: TasksService, public dialog: MatDialog) { }

  deleteTask(task) {
    return this.onTaskDeleted.emit(task);
  }

  taskTriggered(task) {
    task.isDone = !task.isDone;
    return this.onTaskTriggered.emit(task);
  }

  editTask(task) {
    const config: MatDialogConfig = {
      disableClose: true,
      autoFocus: true,
      width: '50%',
      data: task
    };

    this.dialog.open(EditTaskComponent, config)
      .afterClosed()
      .subscribe(updatedTask => updatedTask && (this.data = updatedTask));
  }

  ngOnInit() {
  }

}
