import {Injectable} from '@angular/core';
import {Person} from '../../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  public person: Person = new Person();

  constructor() {
    this.person = {
      firstName: 'Mehedi',
      lastName: 'Hasan',
      designation: 'full stack developer',
      phone: '+880 1400-214243',
      email: 'mdmehedihasanroni28@gmamil.com',
      skype: 'mehedi_skype07',
      address: 'Azampur, Uttara, Dhaka',
      personDetails: 'Hello, I\'am Mehedi Hasan. I am a full stack developer. I hold a bachelor\'s degree in Computer Science & Engineering from Southeast University. Over the past One years, I have done more than 5 projects.'
    };
  }

  getPersonDetails(): Person {
    return this.person;
  }
}
