import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'deleteTask',
  template: `
   <p> Hola </p>
  `,
  styleUrls: ['./deleteTask.component.scss']
})
export class DeleteTaskComponent implements OnInit {

  constructor(public tasksService: TasksService) { }


  ngOnInit() {
  }

}
