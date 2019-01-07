import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { DialogData } from '../project/addProject.component';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'editTaskDialog',
  templateUrl: './editTaskDialog.component.html',
  styleUrls: ['./editTaskDialog.component.scss']
})
export class EditTaskDialogComponent implements OnInit {

  constructor(public tasksService: TasksService, public dialogRef: MatDialogRef<EditTaskDialogComponent>, @Inject(MAT_DIALOG_DATA) public task: Task) {
    this.task = task;
    console.log(task);
  }

  updateTask(task) {
    // this.getAllTasks(task.projectId)
    this.tasksService.updateTaskById(task.id, task).subscribe(updateTask => console.log(updateTask));
    this.dialogRef.close();
  }

  onClose() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
