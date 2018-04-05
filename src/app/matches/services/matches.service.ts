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
    const user = this.authService.currentUser();
    return this.http
      .get(`${environment.baseUrl}/potential/matches/?volunteer=${user.user_id}`);
  }
  createMatch(match_id) {
    const user = this.authService.currentUser();
    console.log('camp: ' + match_id);
    return this.http
      .post<any>(
        `${environment.baseUrl}/matches/`,
        JSON.stringify({volunteer: user.user_id, campaign: match_id}),
        this.json_headers
      );
  }

}
