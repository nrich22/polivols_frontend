import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import {HomePageComponent} from './components/pages/home-page/home-page.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule,
    MatButtonModule
  ],
  declarations: [
    NotFoundComponent,
    HomePageComponent,
  ],
  providers: [

  ],
  exports: [
    NotFoundComponent,
    HomePageComponent
  ]
})
export class BaseModule { }
