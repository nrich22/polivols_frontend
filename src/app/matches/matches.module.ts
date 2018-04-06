import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { FindMatchesPageComponent } from './components/pages/find-matches-page/find-matches-page.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule, MatPaginatorModule, MatProgressBarModule, MatTooltipModule} from '@angular/material';
import {MatchesService} from './services/matches.service';
import { CampMatchesPageComponent } from './components/pages/camp-matches-page/camp-matches-page.component';

@NgModule({
  imports: [
    CommonModule,
    MatchesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  declarations: [FindMatchesPageComponent, CampMatchesPageComponent],
  providers: [
    MatchesService
  ]
})
export class MatchesModule { }
