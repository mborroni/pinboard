import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AddProjectComponent } from 'src/app/components/project/addProject.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'projectsBoard',
  template: `
  <div class="projects">
    <h2>Projects</h2>
    <button mat-raised-button class="newProject" color="primary" (click)="createProject()"> <mat-icon class="material-icons">add</mat-icon>Nuevo proyecto</button>
    
  </div>
  <projectsList></projectsList>
`,
  styleUrls: ['./projects-board.component.scss']
})
export class ProjectsBoardComponent implements OnInit {

  @Output() onCreateProject = new EventEmitter<Project>();

  constructor(public dialog: MatDialog) { }

  createProject(){
    let config: MatDialogConfig = {
      disableClose: true,
      autoFocus: true,
      width: '50%'
    };

    this.dialog.open(AddProjectComponent, config).afterClosed() .subscribe(project => {
      console.log(project);
      // return this.onCreateProject.emit(project);
    });
  }

  ngOnInit() {
  }

}
