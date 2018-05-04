import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import { BaseRoutingModule } from './base-routing.module';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import {HomePageComponent} from './components/pages/home-page/home-page.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {AuthenticationInterceptorService} from './interceptors/authentication-interceptor.service';
import { NavBarComponent } from './components/elements/nav-bar/nav-bar.component';
import { BasePageComponent } from './components/pages/base-page/base-page.component';

@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  declarations: [
    NotFoundComponent,
    HomePageComponent,
    NavBarComponent,
    BasePageComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptorService,
      multi: true
    }
  ],
  exports: [
    NotFoundComponent,
    HomePageComponent,
    BasePageComponent
  ]
})
export class BaseModule { }
