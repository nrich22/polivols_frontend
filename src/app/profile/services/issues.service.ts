import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {DataService} from '../../base/services/data.service';
import {AuthenticationService} from '../../accounts/services/authentication.service';

@Injectable()
export class IssuesService extends DataService {
  constructor(http: HttpClient, private authService: AuthenticationService) {
    super(http, 'issues/');
  }

  getIssues() {
    return this.http
      .get(`${environment.baseUrl}/issues`);
  }
  getUser() {
    const id = this.authService.currentUser().user_id;
    if (this.authService.isVolunteer) {
      return this.http
        .get(`${environment.baseUrl}/volunteers/${id}/`);
    } else {
      return this.http
        .get(`${environment.baseUrl}/campaigns/${id}/`);
    }
  }
  updateIssues(issues) {
    const user = this.authService.currentUser();
    return this.http
      .patch<any>(
        `${environment.baseUrl}/issues/update/${user.user_id}/`,
        JSON.stringify({user: user.user_id, issues: issues}),
        this.getHeaders()
      );
  }
  private getHeaders() {
    return {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  }
}
