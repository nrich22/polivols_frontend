import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule
  ],
  declarations: [
    NotFoundComponent
  ],
  providers: [

  ],
  exports: [
    NotFoundComponent
  ]
})
export class BaseModule { }
