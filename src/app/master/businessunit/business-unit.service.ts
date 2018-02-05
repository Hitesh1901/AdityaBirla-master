import { Injectable } from '@angular/core';//injectable represents it is a service
import { HttpClient } from '@angular/common/http';//to do http calls we have to import httpclient from angularhttp
import { AppService } from '../../shared/service/app.service';//it is own service for navigate and getting parameters
import { environment } from '../../../environments/environment';//to get base url to connect the server

//service decorator
@Injectable()
export class BusinessUnitServiceService {
  //base host in api
  private host = environment.API_END_POINT;
  //url
  private url: string = '';
  constructor(private http: HttpClient,
    private appService: AppService) { }
  //to get params form appservice
  getParamId() {
    return this.appService.getParam('id');
  }
  //to get all  BusinessUnit form api
  getBusinessUnit() {
    this.appService.showLoader(true);
    this.url = this.host + '/BusinesUnit/ViewMultipleBusinesUnit';
    return this.http.get(this.url);
  }
  //to updateBusinessUnit 
  updateBusinessUnit(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/BusinesUnit/UpdateBusinesUnit';
    return this.http.post(this.url, data);
  }
  //to save businessunit 
  saveBusinessUnit(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/BusinesUnit/AddBusinesUnit';
    return this.http.post(this.url, data);
  }
  //to  get particular BusinessUnitData by id from api
  getBusinessUnitData(data: any) {
    this.url = this.host + '/ViewBusinesUnitById?deptid=';
    return this.http.get(this.url + data);
  }
}
