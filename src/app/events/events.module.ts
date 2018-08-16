import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampEventsFormComponent } from './components/forms/camp-events-form/camp-events-form.component';
import { CampEventsPageComponent } from './components/pages/camp-events-page/camp-events-page.component';
import {BaseRoutingModule} from '../base/base-routing.module';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule, MatExpansionModule, MatFormFieldModule,
  MatInputModule, MatOptionModule, MatSelectModule
} from '@angular/material';
import { VolEventsFormComponent } from './components/forms/vol-events-form/vol-events-form.component';
import { VolEventsPageComponent } from './components/pages/vol-events-page/vol-events-page.component';
import { CreateEventsFormComponent } from './components/forms/create-events-form/create-events-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { VolEventsMobileFormComponent } from './components/forms/vol-events-mobile-form/vol-events-mobile-form.component';
import { CampEventsMobileFormComponent } from './components/forms/camp-events-mobile-form/camp-events-mobile-form.component';
import { CreateEventsMobileFormComponent } from './components/forms/create-events-mobile-form/create-events-mobile-form.component';
import {AuthenticationService} from '../accounts/services/authentication.service';
import {EventsService} from './services/events.service';

@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatOptionModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [CampEventsFormComponent, CampEventsPageComponent, VolEventsFormComponent, VolEventsPageComponent,
    CreateEventsFormComponent,
    VolEventsMobileFormComponent,
    CampEventsMobileFormComponent,
    CreateEventsMobileFormComponent],
  entryComponents: [
    CreateEventsFormComponent,
    CreateEventsMobileFormComponent
  ],
  providers: [
    AuthenticationService,
    EventsService
  ],
})
export class EventsModule { }
