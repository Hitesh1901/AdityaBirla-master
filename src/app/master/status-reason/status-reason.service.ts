import { Injectable } from '@angular/core';//injectable represents it is a service
import { HttpClient } from '@angular/common/http';//to do http calls we have to import httpclient from angularhttp
import { AppService } from '../../shared/service/app.service';//it is own service for navigate and getting parameters
import { environment } from '../../../environments/environment';//to get base url to connect the server

//service decotator
@Injectable()
export class StatusReasonService {
  //base host in api
  private host = environment.API_END_POINT;
  //url
  private url: string = '';

  constructor(private http: HttpClient, private appService: AppService) { }
  //to get params form appservice
  getParamId() {
    return this.appService.getParam('id');
  }
  //to get all the status reason from api
  getStatusReason() {
    this.appService.showLoader(true);
    this.url = this.host+'/StatusReasons/ViewMultipleStatusReasons';
    return this.http.get(this.url);
  }
  //to get particular status reasondata  by id from api
  getStatusReasonData(data: any) {
    this.url = this.host+'/StatusReasons/StatusReasonsById?id=';
    return this.http.get(this.url+ data);
  }
  //to save the status reason
  saveStatusReason(data:any){
    this.appService.showLoader(true);
    this.url = this.host+'/StatusReasons/AddStatusReasons';
    return this.http.post(this.url, data);
  }
  //to update the status reason
  updateStatusReason(data:any){
    this.appService.showLoader(true);
    this.url = this.host+'/StatusReasons/UpdateStatusReasons';
    return this.http.post(this.url, data);
  }
}