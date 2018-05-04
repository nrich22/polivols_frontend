import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfilePageComponent} from './components/pages/profile-page/profile-page.component';
import {IssuesPageComponent} from './components/pages/issues-page/issues-page.component';
import {ChangeIssuesPageComponent} from './components/pages/change-issues-page/change-issues-page.component';
import {CampProfilePageComponent} from './components/pages/camp-profile-page/camp-profile-page.component';
import {BasePageComponent} from '../base/components/pages/base-page/base-page.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: BasePageComponent,
  //   children: [
  //     {
  //       path: 'profile',
  //       component: ProfilePageComponent
  //     },
  //     {
  //       path: 'camp_profile',
  //       component: CampProfilePageComponent
  //     },
  //     {
  //       path: 'update_issues',
  //       component: ChangeIssuesPageComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
