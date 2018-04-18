import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { FindMatchesPageComponent } from './components/pages/find-matches-page/find-matches-page.component';
import {MatTableModule} from '@angular/material/table';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatPaginatorModule,
  MatProgressBarModule
} from '@angular/material';
import {MatchesService} from './services/matches.service';
import { CampMatchesPageComponent } from './components/pages/camp-matches-page/camp-matches-page.component';
import { EmailFormComponent } from './components/forms/email-form/email-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from '../accounts/services/authentication.service';


@NgModule({
  imports: [
    CommonModule,
    MatchesRoutingModule,
    MatTableModule,
    MatCardModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  declarations: [FindMatchesPageComponent, CampMatchesPageComponent, EmailFormComponent],
  providers: [
    AuthenticationService,
    MatchesService
  ],
  entryComponents: [
    EmailFormComponent,
  ],
})
export class MatchesModule { }
