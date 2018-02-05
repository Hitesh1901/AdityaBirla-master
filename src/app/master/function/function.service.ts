import { Injectable } from '@angular/core';//injectable represents it is a service
import { HttpClient } from '@angular/common/http';//to do http calls we have to import httpclient from angularhttp
import { AppService } from '../../shared/service/app.service';//it is own service for navigate and getting parameters
import { environment } from '../../../environments/environment';//to get base url to connect the server

//service decotator
@Injectable()
export class FunctionService {
  //base host in api
  private host = environment.API_END_POINT;
  //url
  private url: string = '';

  constructor(private http: HttpClient, private appService: AppService) { }
  //to get params form appservice
  getParamId() {
    return this.appService.getParam('id');
  }
  //to get all functions from the api
  getFunctions() {
    this.appService.showLoader(true);
    this.url = this.host + '/Function/ViewMultipleFunction';
    return this.http.get(this.url);
  }
  //to get particular function data from api
  getFunctionData(data: any) {
    this.url = this.host + '/Function/FunctionById?deptid=';
    return this.http.get(this.url + data);
  }
  //to save the function
  saveFunction(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Function/AddFunction';
    return this.http.post(this.url, data);
  }
  //to update the function
  updateFunction(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Function/UpdateFunction';
    return this.http.post(this.url, data);
  }
  // to get all sub functions from api
  getSubFunctions() {
    this.appService.showLoader(true);
    this.url = this.host + '/Subfunctions/ViewMultiplesubFunction';
    return this.http.get(this.url);
  }
  // to get particular sunfunction from api
  getSubFunctionData(data: any) {
    this.url = this.host + '/Subfunctions/SubFunctionById?deptid=';
    return this.http.get(this.url + data);
  }
  //to save the subfunction
  saveSubFunction(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Subfunctions/AddsubFunction';
    return this.http.post(this.url, data);
  }
  //to update the subfunction
  updateSubFunction(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Subfunctions/UpdateSubFunction';
    return this.http.post(this.url, data);
  }
}