import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { NgxTippyModule } from 'ngx-tippy-wrapper';
import { MobileNavigationComponent } from './shared-components/mobile-navigation/mobile-navigation.component';
import { MobileNavbarService } from './services/mobile-navbar-service/mobile-navbar.service';
import { RouterServiceService } from './services/router-service/router-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    ContactMeComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    MobileNavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxTippyModule,
  ],
  providers: [MobileNavbarService, RouterServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
