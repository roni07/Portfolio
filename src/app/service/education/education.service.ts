import {Injectable} from '@angular/core';
import {Education} from '../../model/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  public educationList: Education[] = [];

  constructor() {
  }

  getEducationList(): any {
    return this.educationList = [{
      educationId: '1',
      educationTimePeriodFrom: '2016',
      educationTimePeriodTo: '2020',
      degreeTitle: 'Bachelor of Science in Computer Science and Engineering.',
      instituteName: 'Southeast University.',
      educationDescription: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
    },
      {
        educationId: '2',
        educationTimePeriodFrom: '2013',
        educationTimePeriodTo: '2014',
        degreeTitle: 'Higher Secondary School Certificate.',
        instituteName: 'Sundarban Govt. Ideal College.',
        educationDescription: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
      },
      {
        educationId: '3',
        educationTimePeriodFrom: '2011',
        educationTimePeriodTo: '2012',
        degreeTitle: 'Secondary School Certificate.',
        instituteName: 'Betaga United High School.',
        educationDescription: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
      }];
  }
}
