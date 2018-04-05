import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  jwtHelper: JwtHelperService;
  private json_headers = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  constructor(private http: HttpClient) {
    this.jwtHelper = new JwtHelperService({});
    this.jwtHelper.tokenGetter = () => {
      return localStorage.getItem('token');
    };
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(
        `${environment.baseUrl}/token/`,
        JSON.stringify({email: email, password: password}),
        this.getHeaders()
      )
      .map(response => {
        localStorage.setItem('token', response.token);
        return response.token;
      });
  }

  register(data, volunteer: boolean = true) {
    return this.http
      .post<any>(
        `${environment.baseUrl}/${volunteer ? 'volunteers' : 'campaigns'}/register/`,
        JSON.stringify(data),
        this.json_headers
      );
  }

  refreshToken() {
    const token = localStorage.getItem('token');
    if (token) {
      return this.http.post(
        `${environment.baseUrl}/token/refresh/`,
        JSON.stringify({token: token}),
        this.getHeaders()
      ).map((data: any) => {
        localStorage.setItem('token', data.token);
        return data.token;
      });
    }
    return Observable.empty();
  }

  currentUser() {
    const token = this.jwtHelper.tokenGetter();
    if (token) {
      return this.jwtHelper.decodeToken(token);
    } else {
      return null;
    }
  }

  getUser(id) {
    return this.http
      .get(`${environment.baseUrl}//`);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      return this.jwtHelper.isTokenExpired();
    }
    return false;
  }

  private getHeaders() {
    return {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  }
}
;
;
