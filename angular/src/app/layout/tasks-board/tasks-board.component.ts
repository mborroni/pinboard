import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'tasksBoard',
  template: `
    <h2>Tasks</h2>
    <addTask (onTaskAdded)="create($event)"></addTask>
    <taskList #list></taskList>
  `,
  styleUrls: ['./tasks-board.component.scss']
})
export class TasksBoardComponent implements OnInit {

  @ViewChild('list') list;

  constructor() { }

  create(task) {
    this.list.newTask(task);
  }

  ngOnInit() {
  }
}
