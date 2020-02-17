import {Injectable} from '@angular/core';
import {Skill} from '../../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  public skillList: Skill[] = [];

  constructor() {
  }

  getSkillList(): any {
    return this.skillList = [{skillId: '1', skillName: 'Java', skillNumber: 75}, {skillId: '2', skillName: 'Spring Boot', skillNumber: 70},
      {skillId: '3', skillName: 'Angular', skillNumber: 70}, {skillId: '4', skillName: 'HTML', skillNumber: 95},
      {skillId: '5', skillName: 'CSS', skillNumber: 90}, {skillId: '6', skillName: 'JS', skillNumber: 40}];
  }
}
