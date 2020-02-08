import {ProjectTool} from './project-tool.model';

export class Project {
  public projectId: string;
  public projectImageUrl: string;
  public projectTitle: string;
  public projectDescription: string;
  public projectType: string;
  public projectToolList: ProjectTool[];

  constructor(project?) {
    project = project || {};
    this.projectId = project.projectId || null;
    this.projectImageUrl = project.projectImageUrl;
    this.projectTitle = project.projectTitle;
    this.projectDescription = project.projectDescription;
    this.projectType = project.projectType;
    this.projectToolList = project.projectToolList;
  }
}
