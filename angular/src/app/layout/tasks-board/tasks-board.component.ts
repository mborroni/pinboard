import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasksBoard',
  template: `
    <h2>Tasks</h2>
    <addTask></addTask>
    <taskList></taskList>
  `,
  styleUrls: ['./tasks-board.component.scss']
})
export class TasksBoardComponent implements OnInit {
 
 constructor() { }

  ngOnInit() {
  }

}