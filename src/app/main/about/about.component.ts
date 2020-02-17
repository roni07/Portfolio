import {Component, OnInit} from '@angular/core';
import {Person} from '../../model/person.model';
import {PersonService} from '../../service/person/person.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public person: Person = new Person();

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.getPerson();
  }

  public getPerson(): any {
    this.person = this.personService.getPersonDetails();
  }
}
