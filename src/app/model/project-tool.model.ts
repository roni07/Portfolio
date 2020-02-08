export class ProjectTool {
  public projectToolName: string;

  constructor(projectTool?) {
    projectTool = projectTool || {};
    this.projectToolName = projectTool.projectToolName;
  }
}
