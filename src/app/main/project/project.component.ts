import {Component, OnInit} from '@angular/core';
import {Project} from '../../model/project.model';
import {ProjectService} from '../../service/project/project.service';
import {ProjectTypeService} from '../../service/project-type/project-type.service';
import {ProjectType} from '../../model/project-type.model';

@Component({
  selector: 'app-project-section',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public project: Project = new Project();
  public projectType: ProjectType = new ProjectType();

  public projectList: Project[] = [];
  public projectTypeList: ProjectType[] = [];

  public filteredProjectList: Project[] = [];

  constructor(private projectService: ProjectService, private projectTypeService: ProjectTypeService) {
  }

  ngOnInit() {
    this.getProjectTypeList();
    this.getProjectList();
  }

  public getProjectList(): void {
    this.filteredProjectList = this.projectService.getProjectList();
  }

  public getProjectTypeList(): void {
    this.projectTypeList = this.projectTypeService.getProjectTypeList();
  }

  public getSortedProjectList(type: string): void {
    this.projectList = this.projectService.getProjectList();
    if (type === 'ALL') {
      this.filteredProjectList = this.projectList;
    } else {
      this.filteredProjectList = this.projectList.filter(project => project.projectType.projectTypeName === type);
    }
  }
}
