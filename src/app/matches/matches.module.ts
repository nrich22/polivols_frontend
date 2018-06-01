import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { FindMatchesPageComponent } from './components/pages/find-matches-page/find-matches-page.component';
import {MatTableModule} from '@angular/material/table';
import {
  MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatInputModule, MatMenuModule, MatPaginatorModule,
  MatProgressBarModule, MatSelectModule, MatSortModule
} from '@angular/material';
import {MatchesService} from './services/matches.service';
import { CampMatchesPageComponent } from './components/pages/camp-matches-page/camp-matches-page.component';
import { EmailFormComponent } from './components/forms/email-form/email-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from '../accounts/services/authentication.service';
import {EmailService} from '../profile/services/email.service';
import {FindMatchesMobileFormComponent} from './components/forms/find-matches-mobile-form/find-matches-mobile-form.component';
import {LogsFormComponent} from './components/forms/logs-form/logs-form.component';
import { LogsPageComponent } from './components/pages/logs-page/logs-page.component';


@NgModule({
  imports: [
    CommonModule,
    MatchesRoutingModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDialogModule,
    MatExpansionModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule
  ],
  declarations: [FindMatchesPageComponent, CampMatchesPageComponent, EmailFormComponent, FindMatchesMobileFormComponent, LogsFormComponent, LogsPageComponent],
  providers: [
    AuthenticationService,
    MatchesService,
    EmailService
  ],
  entryComponents: [
    EmailFormComponent,
  ],
})
export class MatchesModule { }
