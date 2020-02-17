import {Component, OnInit} from '@angular/core';
import {Education} from '../../model/education.model';
import {EducationService} from '../../service/education/education.service';
import {Experience} from '../../model/experience.model';
import {ExperienceService} from '../../service/experience/experience.service';
import {Skill} from '../../model/skill.model';
import {SkillService} from '../../service/skill/skill.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  public leftSkillCount: number;

  public educationList: Education[] = [];
  public experienceList: Experience[] = [];

  public skillList: Skill[] = [];
  public coreSkillList: Skill[] = [];
  public leftSkillList: Skill[] = [];
  public rightSkillList: Skill[] = [];

  constructor(private educationService: EducationService,
              private experienceService: ExperienceService,
              private skillService: SkillService) {
  }

  ngOnInit() {
    this.getEducationList();
    this.getExperienceList();

    // this.getSkillList();
    this.getCoreSkills();
    this.getLeftSkillList();
    this.getRightSkillList();
  }

  public getEducationList(): void {
    this.educationList = this.educationService.getEducationList();
  }

  public getExperienceList(): void {
    this.experienceList = this.experienceService.getExperienceList();
  }

  public getCoreSkills(): void {
    this.skillList = this.skillService.getSkillList();
    for (let i = 0; i < 3; i++) {
      this.coreSkillList.push(this.skillList[i]);
    }
  }

  public getLeftSkillList(): void {
    this.skillList = this.skillService.getSkillList();
    const totalSkill = this.skillList.length;
    const rightSkillCount = totalSkill / 2;
    this.leftSkillCount = totalSkill - rightSkillCount;
    for (let i = 0; i < this.leftSkillCount; i++) {
      this.leftSkillList.push(this.skillList[i]);
    }
  }

  public getRightSkillList(): void {
    this.skillList = this.skillService.getSkillList();
    const totalSkill = this.skillList.length;
    for (let i = this.leftSkillCount; i < totalSkill; i++) {
      this.rightSkillList.push(this.skillList[i]);
    }
  }

  /*public getSkillList(): void {
    this.skillList = this.skillService.getSkillList();
    const totalSkillNumber = this.skillList.length;
    this.rightSkillCount = totalSkillNumber / 2;
    this.leftSkillCount = totalSkillNumber - this.rightSkillCount;
  }*/
}
