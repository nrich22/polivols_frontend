import { Injectable } from '@angular/core';
import {DataService} from '../../base/services/data.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VolunteerService extends DataService {
  constructor(http: HttpClient) {
    super(http, 'volunteers/');
  }

}
