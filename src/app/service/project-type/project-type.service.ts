import {Injectable} from '@angular/core';
import {ProjectType} from '../../model/project-type.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectTypeService {

  public projectTypeList: ProjectType[];

  constructor() {
  }

  getProjectTypeList(): any {
    return this.projectTypeList = [{projectTypeId: 1, projectTypeName: 'Web'}, {projectTypeId: 2, projectTypeName: 'Android'},
      {projectTypeId: 3, projectTypeName: 'Desktop'}];
  }
}
