import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'taskList',
  template: `
  <mat-list-item  *ngFor="let task of tasks">
    <task [data]="task" (onTaskDeleted)="deleteTask($event)"></task>
    <mat-divider [inset]="false" *ngIf="!last"></mat-divider>
  </mat-list-item>
  `,
  styleUrls: ['./taskList.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<Task[]>;
  tasks: Task[];

  constructor(public tasksService: TasksService, public route: ActivatedRoute) { 
    this.route = route;
    this.route.params.subscribe(params => this.getAllTasks(params.id));
  }

  getAllTasks(projectId) {
    this.tasksService.getByProjectId(projectId).subscribe(data => this.tasks = data);
  }

  newTask(task) {
    this.tasksService.createTask(task).subscribe(data => this.tasks.push(data[0]));
  }

  deleteTask(task) {
    //tasks.splice
    this.tasksService.deleteTaskById(task.id).subscribe(task => console.log(task));
  }

  ngOnInit() {
  }

}
