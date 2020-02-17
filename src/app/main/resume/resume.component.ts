import {Component, OnInit} from '@angular/core';
import {Education} from '../../model/education.model';
import {EducationService} from '../../service/education/education.service';
import {Experience} from '../../model/experience.model';
import {ExperienceService} from '../../service/experience/experience.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  public educationList: Education[] = [];
  public experienceList: Experience[] = [];

  constructor(private educationService: EducationService,
              private experienceService: ExperienceService) {
  }

  ngOnInit() {
    this.getEducationList();
    this.getExperienceList();
  }

  public getEducationList(): void {
    this.educationList = this.educationService.getEducationList();
  }

  public getExperienceList(): void {
    this.experienceList = this.experienceService.getExperienceList();
  }
}
