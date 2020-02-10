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

  public projectList: Project[] =  [];
  public projectTypeList: ProjectType[] = [];

  constructor(private projectService: ProjectService, private projectTypeService: ProjectTypeService) {
    /*this.projectList = [
      {
        projectId: '1', projectImageUrl: 'http://hr.com', projectTitle: 'HR Management System',
        projectDescription: 'Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.',
        projectType: 'WEB', projectToolList: [{projectToolName: 'HTML'}, {projectToolName: 'CSS'}, {projectToolName: 'Bootstrap'}]
      },
      {
        projectId: '2', projectImageUrl: 'http://picsart.com', projectTitle: 'Pics Art Application',
        projectDescription: 'Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.',
        projectType: 'ANDROID', projectToolList: [{projectToolName: 'Java'}, {projectToolName: 'XML'}]
      },
      {
        projectId: '3', projectImageUrl: 'http://calculator.com', projectTitle: 'Scientific Calculator',
        projectDescription: 'Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.',
        projectType: 'DESKTOP', projectToolList: [{projectToolName: 'Java'}, {projectToolName: 'Scene Builder'}]
      },
    ];*/
  }

  ngOnInit() {
    this.getProjectTypeList();
    this.getProjectList();
  }

  public getProjectList(): void {
    this.projectList = this.projectService.getProjectList();
  }

  public getProjectTypeList(): void {
    this.projectTypeList = this.projectTypeService.getProjectTypeList();
  }
}
