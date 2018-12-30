import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project',
  template: `
  <div class="projectData">
    <span>
      {{data.name}}
    </span>
    <span>
      Due date
    </span>
  </div>
  <!-- <div class="projectDescription">
    <p>
      {{data.description}}
    </p>
  </div> -->
  `,
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input()
  data;
  constructor() { }

  ngOnInit() {
  }

}
