import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project',
  template: `
  <div class="projectData">
    <span>
      {{project.name}}
    </span>
    <span *ngIf="project.dueDate != null">
      {{project.dueDate | date : 'shortDate' }}
    </span>
  </div>
  `,
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project;

  constructor() { }

  ngOnInit() {
  }

}
