import { Injectable } from '@angular/core';
import {DataService} from '../../base/services/data.service';
import {AuthenticationService} from '../../accounts/services/authentication.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EmailService extends DataService{
  emailTo: string;
  constructor(http: HttpClient, private authService: AuthenticationService) {
    super(http, 'email/');
  }

  setEmail(volunteer: string) {
    this.emailTo = volunteer;
  }

}
