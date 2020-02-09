import {Injectable} from '@angular/core';
import {Person} from '../model/person.model';

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
      address: 'Azampur, Uttara, Dhaka'
    };
  }

  getPersonDetails(): Person {
    return this.person;
  }
}
