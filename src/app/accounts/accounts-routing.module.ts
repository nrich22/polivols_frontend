import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './components/pages/login-page/login-page.component';
import {RegisterPageComponent} from './components/pages/register-page/register-page.component';
import {ProfilePageComponent} from '../profile/components/pages/profile-page/profile-page.component';
import {ProfileModule} from '../profile/profile.module';

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
    path: 'profile',
    component: ProfilePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ProfileModule],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
