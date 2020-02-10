export class ProjectType {
  public projectTypeId: number;
  public projectTypeName: string;

  constructor(projectType?) {
    projectType = projectType || {};
    this.projectTypeId = projectType.projectTypeId;
    this.projectTypeName = projectType.projectTypeName;
  }
}
