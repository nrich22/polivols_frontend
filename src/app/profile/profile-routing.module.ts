import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfilePageComponent} from './components/pages/profile-page/profile-page.component';
import {IssuesPageComponent} from './components/pages/issues-page/issues-page.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfilePageComponent
  },
  {
    path: 'issues',
    component: IssuesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
