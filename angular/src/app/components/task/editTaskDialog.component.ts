import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";

@Component({
  selector: 'editTaskDialog',
  templateUrl: './editTaskDialog.component.html',
  styleUrls: ['./editTaskDialog.component.scss']
})
export class EditTaskDialogComponent implements OnInit {

  constructor(private dialog: MatDialog) {}
  ngOnInit() {
  }

}
