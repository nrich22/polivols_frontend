import { Injectable } from '@angular/core';
import {DataService} from '../../base/services/data.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from '../../accounts/services/authentication.service';
import {environment} from '../../../environments/environment';

@Injectable()
export class EventsService extends DataService {
  constructor(http: HttpClient, private authService: AuthenticationService) {
    super(http, 'events/');
  }

  getCampEvents() {
    const user = this.authService.currentUser();
    return this.http
      .get(`${environment.baseUrl}/events/${user.user_id}/`);
  }
  findEvents() {
    const user = this.authService.currentUser();
    return this.http
      .get(`${environment.baseUrl}/find_events/${user.user_id}/`);
  }
  createEvent(data) {
    const user = this.authService.currentUser();
    if (!data['date']) {
    } else {
      data['date'] = new Date(data['date']).toISOString();
    }
    return this.http
      .post<any>(
        `${environment.baseUrl}/events/create/`,
        JSON.stringify({created_by: user.user_id, title: data.title, date: data.date, address: data.address,
          city: data.city, state: data.state, zip_code: data.zip, description: data.description}),
        this.getHeaders()
      );
  }
  updateEvent(id) {
    return this.http
      .patch<any>(
        `${environment.baseUrl}/update_events/${id}/`,
        this.getHeaders()
      );
  }
  public getHeaders() {
    return {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  }
}
