import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.css']
})
export class TopSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*const headerSection = document.querySelector('.header');
    /!* ==== Init ==== *!/
    if (window.scrollY > 100) {
      headerSection.classList.add('header-scrolled');
    } else {
      headerSection.classList.remove('header-scrolled');
    }*/
  }

}
