import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

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
