import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { IssuesPageComponent } from './components/pages/issues-page/issues-page.component';
import { IssuesFormComponent } from './components/forms/issues-form/issues-form.component';
import {
  MatCheckboxModule, MatInputModule, MatButtonModule, MatCardModule, MatTabsModule,
  MatIconModule, MatTableModule, MatPaginatorModule
} from '@angular/material';
import { CampProfilePageComponent } from './components/pages/camp-profile-page/camp-profile-page.component';
import { ChangeIssuesFormComponent } from './components/forms/change-issues-form/change-issues-form.component';
import { FindMatchesFormComponent } from './components/forms/find-matches-form/find-matches-form.component';
import { MyCampsFormComponent } from './components/forms/my-camps-form/my-camps-form.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [ProfilePageComponent, IssuesPageComponent, IssuesFormComponent, CampProfilePageComponent,
    ChangeIssuesFormComponent, FindMatchesFormComponent, MyCampsFormComponent]
})
export class ProfileModule { }
