import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../../base/services/data.service';

@Injectable()
export class CampaignService extends DataService {

  constructor(http: HttpClient) {
    super(http, 'campaigns/');
  }

}
