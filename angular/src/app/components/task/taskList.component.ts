import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'taskList',
  template: `
  <mat-list-item  *ngFor="let task of tasks$ | async">
    <task [data]="task"></task>
    <mat-divider [inset]="false" *ngIf="!last"></mat-divider>
  </mat-list-item>
  `,
  styleUrls: ['./taskList.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks$: any;
  constructor(public tasksService: TasksService) { 
    this.getAllTasks();
  }

  getAllTasks(){
    this.tasks$ = this.tasksService.getAll()
  }
  
  ngOnInit() {
  }

}
