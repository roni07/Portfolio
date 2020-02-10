import {Component, OnInit} from '@angular/core';
import {Person} from '../../model/person.model';
import {PersonService} from '../../service/person/person.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public person: Person = new Person();

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.getPerson();
  }

  public getPerson(): void {
    this.person = this.personService.getPersonDetails();
  }
}
