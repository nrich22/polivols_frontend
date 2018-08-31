import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AccountsRoutingModule } from './accounts-routing.module';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import {BaseModule} from '../base/base.module';
import {CampaignService} from './services/campaign.service';
import {VolunteerService} from './services/volunteer.service';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { TosFormComponent } from './components/forms/tos-form/tos-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatStepperModule,
    MatSlideToggleModule,
    AccountsRoutingModule,
    BaseModule
  ],
  declarations: [
    LoginPageComponent,
    LoginFormComponent,
    RegisterPageComponent,
    RegisterFormComponent,
    TosFormComponent
  ],
  providers: [
    CampaignService,
    VolunteerService
  ],
  entryComponents: [
    TosFormComponent
  ],
})
export class AccountsModule { }
