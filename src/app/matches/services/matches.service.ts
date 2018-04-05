import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {DataService} from '../../base/services/data.service';
import {AuthenticationService} from '../../accounts/services/authentication.service';

@Injectable()
export class MatchesService extends DataService {
  private json_headers = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  constructor(http: HttpClient, private jwtHelper: JwtHelperService, private authService: AuthenticationService) {
    super(http, 'issues/');
  }

  getPotentialMatches() {
    return this.http
      .get(`${environment.baseUrl}/potential/matches/?volunteer=1`);
  }
  createMatch(issues) {
    const user = this.authService.currentUser();
    return this.http
      .patch<any>(
        `${environment.baseUrl}/issues/update/${user.user_id}/`,
        JSON.stringify({user: 5, issues: issues}),
        this.json_headers
      );
  }

}
