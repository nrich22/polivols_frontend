import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { FindMatchesPageComponent } from './components/pages/find-matches-page/find-matches-page.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material';
import {MatchesService} from './services/matches.service';

@NgModule({
  imports: [
    CommonModule,
    MatchesRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [FindMatchesPageComponent],
  providers: [
    MatchesService
  ]
})
export class MatchesModule { }
