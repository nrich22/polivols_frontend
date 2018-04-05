import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { FindMatchesPageComponent } from './components/pages/find-matches-page/find-matches-page.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule, MatPaginatorModule} from '@angular/material';
import {MatchesService} from './services/matches.service';
import { MatchesPageComponent } from './components/pages/matches-page/matches-page.component';

@NgModule({
  imports: [
    CommonModule,
    MatchesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  declarations: [FindMatchesPageComponent, MatchesPageComponent],
  providers: [
    MatchesService
  ]
})
export class MatchesModule { }
