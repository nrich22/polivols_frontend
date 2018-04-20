import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { IssuesPageComponent } from './components/pages/issues-page/issues-page.component';
import { IssuesFormComponent } from './components/forms/issues-form/issues-form.component';
import {
  MatCheckboxModule, MatInputModule, MatButtonModule, MatCardModule, MatTabsModule,
  MatIconModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatProgressBarModule
} from '@angular/material';
import { CampProfilePageComponent } from './components/pages/camp-profile-page/camp-profile-page.component';
import { ChangeIssuesFormComponent } from './components/forms/change-issues-form/change-issues-form.component';
import { FindMatchesFormComponent } from './components/forms/find-matches-form/find-matches-form.component';
import { MyCampsFormComponent } from './components/forms/my-camps-form/my-camps-form.component';
import { MyVolsFormComponent } from './components/forms/my-vols-form/my-vols-form.component';
import { EmailFormComponent } from './components/forms/email-form/email-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatchesService} from '../matches/services/matches.service';
import {AuthenticationService} from '../accounts/services/authentication.service';
import {VolunteerService} from '../accounts/services/volunteer.service';
import {CampaignService} from '../accounts/services/campaign.service';
import { ChangeIssuesPageComponent } from './components/pages/change-issues-page/change-issues-page.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  declarations: [ProfilePageComponent, IssuesPageComponent, IssuesFormComponent, CampProfilePageComponent,
    ChangeIssuesFormComponent, FindMatchesFormComponent, MyCampsFormComponent, MyVolsFormComponent, EmailFormComponent, ChangeIssuesPageComponent],
  providers: [
    AuthenticationService,
    MatchesService,
    VolunteerService,
    CampaignService
  ],
  entryComponents: [
    EmailFormComponent,
  ]
})
export class ProfileModule { }
