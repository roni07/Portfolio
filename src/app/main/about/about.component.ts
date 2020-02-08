import {Component, OnInit} from '@angular/core';
import {Person} from '../../model/person.model';

@Component({
  selector: 'app-about-section',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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

  ngOnInit() {
  }

}
