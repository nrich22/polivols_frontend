import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthenticationService} from '../../accounts/services/authentication.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthenticationService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authService.currentUser()) {
      // If we are logged in, add the token to the header
      return next.handle(this.getAuthRequest(req))
        .catch(err => {
          // We encountered an error, Check to see if its a 401, which is expired token
          if (err.status === 401) {
            // Refresh the token, and try again
            return this.authService.refreshToken()
              .switchMap(token => {
                return next.handle(this.getAuthRequest(req));
              });
          }
          return next.handle(req);
        });

    }

    return next.handle(req);
  }

  private getAuthRequest(request) {
    return request.clone({
      headers: request.headers.set('Authorization', `JWT ${localStorage.getItem('token')}`)
    });
  }

}
