import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopSectionComponent} from './main/top-section/top-section.component';
import {FooterComponent} from './main/footer/footer.component';
import {ResumeSectionComponent} from './main/resume-section/resume-section.component';
import {AboutSectionComponent} from './main/about-section/about-section.component';

@NgModule({
  declarations: [
    AppComponent,
    TopSectionComponent,
    AboutSectionComponent,
    ResumeSectionComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
