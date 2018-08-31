import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './components/pages/login-page/login-page.component';
import {RegisterPageComponent} from './components/pages/register-page/register-page.component';
import {ProfilePageComponent} from '../profile/components/pages/profile-page/profile-page.component';
import {ProfileModule} from '../profile/profile.module';
import {IssuesPageComponent} from '../profile/components/pages/issues-page/issues-page.component';
import {CampProfilePageComponent} from '../profile/components/pages/camp-profile-page/camp-profile-page.component';
import {TosPageComponent} from './components/pages/tos-page/tos-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'terms',
    component: TosPageComponent
  },
  // {
  //   path: 'profile',
  //   component: ProfilePageComponent
  // },
  // {
  //   path: 'camp_profile',
  //   component: CampProfilePageComponent
  // },
  {
    path: 'issues',
    component: IssuesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ProfileModule],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
