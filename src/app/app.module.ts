import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import {AuthenticationService} from './accounts/services/authentication.service';
import {AccountsModule} from './accounts/accounts.module';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './base/components/pages/not-found/not-found.component';
import {MatchesModule} from './matches/matches.module';
import {AuthenticationInterceptorService} from './base/interceptors/authentication-interceptor.service';
import {HomePageComponent} from './base/components/pages/home-page/home-page.component';
import {BasePageComponent} from './base/components/pages/base-page/base-page.component';
import {ProfileModule} from './profile/profile.module';
import {ProfilePageComponent} from './profile/components/pages/profile-page/profile-page.component';
import {CampProfilePageComponent} from './profile/components/pages/camp-profile-page/camp-profile-page.component';
import {ChangeIssuesPageComponent} from './profile/components/pages/change-issues-page/change-issues-page.component';
import {FindMatchesPageComponent} from './matches/components/pages/find-matches-page/find-matches-page.component';
import {LogsFormComponent} from './matches/components/forms/logs-form/logs-form.component';
import {LogsPageComponent} from './matches/components/pages/logs-page/logs-page.component';
import {VolLogsPageComponent} from './matches/components/pages/vol-logs-page/vol-logs-page.component';
import {AboutPageComponent} from './base/components/pages/about-page/about-page.component';
import {ContactPageComponent} from './base/components/pages/contact-page/contact-page.component';
import {HomeMobilePageComponent} from './base/components/pages/home-mobile-page/home-mobile-page.component';
import {HomeBasePageComponent} from './base/components/pages/home-base-page/home-base-page.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccountsModule,
    ProfileModule,
    MatchesModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: '',
        component: BasePageComponent,
        children: [
          {
            path: 'profile',
            component: ProfilePageComponent
          },
          {
            path: 'find_matches',
            component: FindMatchesPageComponent
          },
          {
            path: 'camp_profile',
            component: CampProfilePageComponent
          },
          {
            path: 'update_issues',
            component: ChangeIssuesPageComponent
          },
          {
            path: 'logs',
            component: LogsPageComponent
          },
          {
            path: 'vol_logs',
            component: VolLogsPageComponent
          }
        ]
      },
      {
        path: '',
        component: HomeBasePageComponent,
        children: [
          {
            path: 'about',
            component: AboutPageComponent
          },
          {
            path: 'contact',
            component: ContactPageComponent
          },
        ]
      },
      {
        path: '**',
        component: NotFoundComponent
      },
    ])
  ],
  providers: [
    AuthenticationService,
    AuthenticationInterceptorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
