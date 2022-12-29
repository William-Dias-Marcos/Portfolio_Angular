import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects!: any;

  constructor(private projectsService: ProjectsService) {
    this.getProjects();
  }

  ngOnInit(): void {}

  getProjects(): void {
    this.projectsService
      .getAll()
      .subscribe((projects) => (this.projects = projects));
  }
}
