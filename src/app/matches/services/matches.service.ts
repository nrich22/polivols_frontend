import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../../base/services/data.service';
import {AuthenticationService} from '../../accounts/services/authentication.service';
import 'rxjs/add/operator/catch';

@Injectable()
export class MatchesService extends DataService {
  constructor(http: HttpClient, private authService: AuthenticationService) {
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
        this.getJsonHeaders()
      );
  }

}
