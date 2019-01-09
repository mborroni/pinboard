import { Component, OnInit, Inject } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddProjectComponent } from './addProject.component';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'editProject',
  templateUrl: './editProject.component.html',
  styleUrls: ['./editProject.component.scss']
})
export class EditProjectComponent implements OnInit {

  public editProject: Project = {
    id: null,
    name: null,
    dueDate: null,
    deletedAt: null,
    userId: null
  };

  constructor(
    public projectsService: ProjectsService,
    public dialogRef: MatDialogRef<AddProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public project: Project
  ) {
    this.editProject.id = this.project.id;
    this.editProject.name = this.project.name;
    this.editProject.dueDate = this.project.dueDate;
    this.editProject.deletedAt = this.project.deletedAt;
    this.editProject.userId = this.project.userId;
  }

  onSubmit(project) {
    this.projectsService
      .updateProjectById(project.id, project)
      .subscribe(updatedProject => this.dialogRef.close(updatedProject));
  }

  onClose() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
