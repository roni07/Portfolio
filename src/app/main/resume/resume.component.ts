import { Component, OnInit } from '@angular/core';
import {Education} from '../../model/education.model';
import {EducationService} from '../../service/education/education.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  public educationList: Education[] = [];

  constructor(private educationService: EducationService) { }

  ngOnInit() {
    this.getEducationList();
  }

  public getEducationList(): void {
    this.educationList = this.educationService.getEducationList();
  }
}
