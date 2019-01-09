import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectsService } from 'src/app/services/projects/projects.service';
import { Project } from 'src/app/models/project';

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

  public project: Project = {
    id: null,
    name: null,
    dueDate: null,
    deletedAt: null,
    userId: 1
  };

  constructor(
    public projectsService: ProjectsService,
    public dialogRef: MatDialogRef<AddProjectComponent>
  ) { }

  onSubmit(project) {
    console.log(project);
    this.projectsService
      .createProject(project)
      .subscribe(newProject => this.dialogRef.close(newProject));
  }

  onClose() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
