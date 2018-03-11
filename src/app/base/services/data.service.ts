import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class DataService {
  protected baseUrl = environment.baseUrl;
  constructor(protected http: HttpClient, private url: string = '') {
    this.baseUrl = this.baseUrl + url;
  }

  getAll() {
    return this.http
      .get<any>(
        `${this.baseUrl}`,
        this.getJsonHeaders()
      );
  }

  get(id: number) {
    return this.http
      .get<any>(
        `${this.baseUrl}/${id}/`,
        this.getJsonHeaders()
      );
  }

  create(data: any) {
    return this.http
      .post(
        `${this.baseUrl}/`,
        JSON.stringify(data),
        this.getJsonHeaders()
      );
  }

  update(id: number, body: any) {
    return this.http
      .patch(
        `${this.baseUrl}/${id}`,
        JSON.stringify(body),
        this.getJsonHeaders()
      );
  }

  deleteObject(id: number) {
    return this.http
      .delete(
        `${this.baseUrl}/${id}/`
      );
  }

  protected getJsonHeaders() {
    return {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  }

}
