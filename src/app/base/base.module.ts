import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import { BaseRoutingModule } from './base-routing.module';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import {HomePageComponent} from './components/pages/home-page/home-page.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {AuthenticationInterceptorService} from './interceptors/authentication-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [
    NotFoundComponent,
    HomePageComponent,
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
    HomePageComponent
  ]
})
export class BaseModule { }
