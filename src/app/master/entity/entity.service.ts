import { Injectable } from '@angular/core';//injectable represents it is a service
import { HttpClient } from '@angular/common/http';//to do http calls we have to import httpclient from angularhttp
import { AppService } from '../../shared/service/app.service';//it is own service for navigate and getting parameters
import { environment } from '../../../environments/environment';//to get base url to connect the server

//service decotator
@Injectable()
export class EntityService {
  //base host in api
  private host = environment.API_END_POINT;
  //url
  private url: string = '';

  constructor(private http: HttpClient, private appService: AppService) { }
  //to get params form appservice
  getParamId() {
    return this.appService.getParam('id');
  }
  // to get all enities from api
  getEntity() {
    this.appService.showLoader(true);
    this.url = this.host + '/Entity/ViewMultipleEntity';
    return this.http.get(this.url);
  }
  //to get particular api data
  getEntityData(data: any) {
    this.url = this.host + '/Entity/EntityById?entityid=';
    return this.http.get(this.url + data);
  }
  //to save the entity
  saveEntity(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Entity/AddEntity';
    return this.http.post(this.url, data);
  }
  //to update the entity
  updateEntity(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Entity/UpdateEntity';
    return this.http.post(this.url, data);
  }
}