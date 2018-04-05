import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {JwtModule} from '@auth0/angular-jwt';


import { AppComponent } from './app.component';
import {AuthenticationService} from './accounts/services/authentication.service';
import {AccountsModule} from './accounts/accounts.module';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './base/components/pages/not-found/not-found.component';
import {MatchesModule} from './matches/matches.module';
import {AuthenticationInterceptorService} from './base/interceptors/authentication-interceptor.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccountsModule,
    MatchesModule,
    RouterModule.forRoot([
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    AuthenticationService,
    AuthenticationInterceptorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
