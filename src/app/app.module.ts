import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopComponent} from './main/top/top.component';
import {FooterComponent} from './main/footer/footer.component';
import {AboutComponent} from './main/about/about.component';
import {ProjectComponent} from './main/project/project.component';
import {ResumeComponent} from './main/resume/resume.component';

@NgModule({
    declarations: [
        AppComponent,
        TopComponent,
        AboutComponent,
        ResumeComponent,
        FooterComponent,
        ProjectComponent,
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
