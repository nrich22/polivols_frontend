import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthenticationService} from '../../accounts/services/authentication.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticationInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authService.currentUser()) {
      const authReq = req.clone(
          {
            headers: req.headers.set('Authorization', `JWT ${localStorage.getItem('token')}`)
          }
        );
      return next.handle(authReq);
    }

    return next.handle(req);
  }

}
