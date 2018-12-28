import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'task',
  template: `
  <mat-checkbox>
      <span class="taskName">{{data.name}}</span>
      <span class="taskDueDate">Due date</span>
  </mat-checkbox>
      <a class="material-icons">edit</a>
      <a class="material-icons">delete</a>
  `,
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input()
  data;

  constructor() { }

  ngOnInit() {
  }

}
