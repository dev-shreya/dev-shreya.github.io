import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutImageComponent } from './about-image/about-image.component';
import { AboutDesComponent } from './about-des/about-des.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkComponent } from './work/work.component';
import { SkillComponent } from './skill/skill.component';
import { SkillboxComponent } from './skillbox/skillbox.component';
import { ContactComponent } from './contact/contact.component';
import { ContactImageComponent } from './contact-image/contact-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutImageComponent,
    AboutDesComponent,
    DashboardComponent,
    WorkComponent,
    SkillComponent,
    SkillboxComponent,
    ContactComponent,
    ContactImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
