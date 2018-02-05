import { Injectable } from '@angular/core';//injectable represents it is a service
import { HttpClient } from '@angular/common/http';//to do http calls we have to import httpclient from angularhttp
import { AppService } from '../../shared/service/app.service';//it is own service for navigate and getting parameters
import { environment } from '../../../environments/environment';//to get base url to connect the server

//service decotator
@Injectable()
export class CostCodeService {
  //base host in api
  private host = environment.API_END_POINT;
  //url
  private url: string = '';

  constructor(private http: HttpClient, private appService: AppService) { }
  //to get params form appservice
  getParamId() {
    return this.appService.getParam('id');
  }
  // to getcostcodes form api
  getCostCode() {
    this.appService.showLoader(true);
    this.url = this.host + '/CostCode/ViewMultiplecostcode';
    return this.http.get(this.url);
  }
  //to get particular CostCodeData by id from api
  getCostCodeData(data: any) {
    this.url = this.host + '/CostCode/ViewcostById?costid=';
    return this.http.get(this.url + data);
  }
  //to saveCostCode 
  saveCostCode(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/CostCode/AddCostCode';
    return this.http.post(this.url, data);
  }
  //to updateCostCode 
  updateCostCode(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/CostCode/UpdateCost';
    return this.http.post(this.url, data);
  }
}