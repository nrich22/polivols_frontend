import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import { BaseRoutingModule } from './base-routing.module';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import {HomePageComponent} from './components/pages/home-page/home-page.component';
import {
  MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import {AuthenticationInterceptorService} from './interceptors/authentication-interceptor.service';
import { NavBarComponent } from './components/elements/nav-bar/nav-bar.component';
import { BasePageComponent } from './components/pages/base-page/base-page.component';
import {HomeNavBarComponent} from './components/elements/home-nav-bar/home-nav-bar.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { HomeMobileFormComponent } from './components/forms/home-mobile-form/home-mobile-form.component';
import { HomeMobileNavBarComponent } from './components/elements/home-mobile-nav-bar/home-mobile-nav-bar.component';
import { HomeMobilePageComponent } from './components/pages/home-mobile-page/home-mobile-page.component';
import { HomeFormComponent } from './components/forms/home-form/home-form.component';
import { ContactFormComponent } from './components/forms/contact-form/contact-form.component';
import { HomeBasePageComponent } from './components/pages/home-base-page/home-base-page.component';
import { HomeOnlyNavBarComponent } from './components/elements/home-only-nav-bar/home-only-nav-bar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EmailService} from '../profile/services/email.service';
import { AboutFormComponent } from './components/forms/about-form/about-form.component';
import { ContactMobileFormComponent } from './components/forms/contact-mobile-form/contact-mobile-form.component';
import { AboutMobileFormComponent } from './components/forms/about-mobile-form/about-mobile-form.component';

@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatExpansionModule
  ],
  declarations: [
    NotFoundComponent,
    HomePageComponent,
    NavBarComponent,
    BasePageComponent,
    HomeNavBarComponent,
    AboutPageComponent,
    ContactPageComponent,
    HomeMobileFormComponent,
    HomeMobileNavBarComponent,
    HomeMobilePageComponent,
    HomeFormComponent,
    ContactFormComponent,
    HomeBasePageComponent,
    HomeOnlyNavBarComponent,
    AboutFormComponent,
    ContactMobileFormComponent,
    AboutMobileFormComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptorService,
      multi: true
    },
    EmailService
  ],
  exports: [
    NotFoundComponent,
    HomePageComponent,
    BasePageComponent,
    AboutPageComponent,
    ContactPageComponent
  ],
})
export class BaseModule { }
