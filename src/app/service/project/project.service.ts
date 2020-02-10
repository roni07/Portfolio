import {Injectable} from '@angular/core';
import {Project} from '../../model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public projectList: Project[];

  constructor() {
  }

  getProjectList(): any {
    return this.projectList = [
      {
        projectId: '1',
        projectImageUrl: 'http://hr.com',
        projectTitle: 'HR Management System',
        projectDescription: 'Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to.',
        projectType: {projectTypeId: 1, projectTypeName: 'Web'},
        projectToolList: [{projectToolName: 'HTML'}, {projectToolName: 'CSS'}, {projectToolName: 'Bootstrap'}]
      },
      {
        projectId: '2', projectImageUrl: 'http://picsart.com', projectTitle: 'Pics Art Application',
        projectDescription: 'Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be.',
        projectType: {projectTypeId: 2, projectTypeName: 'Android'}, projectToolList: [{projectToolName: 'Java'}, {projectToolName: 'XML'}]
      },
      {
        projectId: '3',
        projectImageUrl: 'http://calculator.com',
        projectTitle: 'Scientific Calculator',
        projectDescription: 'Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye.',
        projectType: {projectTypeId: 3, projectTypeName: 'Desktop'},
        projectToolList: [{projectToolName: 'Java'}, {projectToolName: 'Scene Builder'}]
      },
    ];
  }
}
