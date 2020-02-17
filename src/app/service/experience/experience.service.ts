import {Injectable} from '@angular/core';
import {Experience} from '../../model/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  public experienceList: Experience[] = [];

  constructor() {
  }

  getExperienceList(): any {
    return this.experienceList = [{
      experienceId: '1',
      experienceTimePeriodFrom: '2019',
      experienceTimePeriodTo: '2020',
      designation: 'Software Developer',
      instituteName: 'Southeast University',
      experienceDescription: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
    }];
  }
}
