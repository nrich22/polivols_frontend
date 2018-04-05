import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FindMatchesPageComponent} from './components/pages/find-matches-page/find-matches-page.component';

const routes: Routes = [
  {
  path: 'find_matches',
  component: FindMatchesPageComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchesRoutingModule { }
