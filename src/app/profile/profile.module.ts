import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { IssuesPageComponent } from './components/pages/issues-page/issues-page.component';
import { IssuesFormComponent } from './components/forms/issues-form/issues-form.component';
import {
  MatCheckboxModule, MatInputModule, MatButtonModule, MatCardModule, MatTabsModule,
  MatIconModule
} from '@angular/material';
import { CampProfilePageComponent } from './components/pages/camp-profile-page/camp-profile-page.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatCheckboxModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [ProfilePageComponent, IssuesPageComponent, IssuesFormComponent, CampProfilePageComponent]
})
export class ProfileModule { }
