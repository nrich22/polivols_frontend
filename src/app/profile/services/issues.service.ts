import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {DataService} from '../../base/services/data.service';

@Injectable()
export class IssuesService extends DataService {

  private json_headers = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  constructor(http: HttpClient, private jwtHelper: JwtHelperService) {
    super(http, 'issues/');
  }

  getIssues() {
    return this.http
      .get(`${environment.baseUrl}/issues`);
  }
  private getHeaders() {
    return {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  }
}
