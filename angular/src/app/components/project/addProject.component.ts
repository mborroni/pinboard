import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  projectName: string;
  dueDate: string;
  description: string;
}

@Component({
  selector: 'addProject',
  templateUrl: './addProject.component.html',
  styleUrls: ['./addProject.component.scss']
})
export class AddProjectComponent implements OnInit {

  projectName: string;
  dueDate: string;
  description: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProjectComponent, {
      width: '250px',
      data: {projectName: this.projectName, dueDate: this.dueDate, description: this.description}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
  ngOnInit() {
  }

}
