import {Component, OnInit} from '@angular/core';
import {Project} from '../../model/project.model';

@Component({
  selector: 'app-project-section',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public project: Project = new Project();

  public projectList: Project[];

  constructor() {
    this.projectList = [
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
    ];
  }

  ngOnInit() {
  }

}
