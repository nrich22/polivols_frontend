import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../../base/services/data.service';
import {AuthenticationService} from '../../accounts/services/authentication.service';
import 'rxjs/add/operator/catch';

@Injectable()
export class MatchesService extends DataService {
  recipient_list;
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
    return this.http
      .post<any>(
        `${environment.baseUrl}/matches/`,
        JSON.stringify({volunteer: user.user_id, campaign: match_id}),
        this.getJsonHeaders()
      );
  }
  getCampMatches() {
    const user = this.authService.currentUser();
    return this.http
      .get(`${environment.baseUrl}/matches/?campaign=${user.user_id}`);
  }
  getVolMatches() {
    const user = this.authService.currentUser();
    return this.http
      .get(`${environment.baseUrl}/matches/?volunteer=${user.user_id}`);
  }
  sendEmail(subject, message) {
    const user = this.authService.currentUser();
    return this.http
      .post<any>(
        `${environment.baseUrl}/email/`,
        JSON.stringify({subject: subject, message: message, recipient_list: this.recipient_list}),
        this.getJsonHeaders()
      );
  }
  setRecipientList(recipient_list) {
    this.recipient_list = recipient_list;
  }
}
