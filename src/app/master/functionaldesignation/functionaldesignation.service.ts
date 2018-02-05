import { Injectable } from '@angular/core';//injectable represents it is a service
import { HttpClient } from '@angular/common/http';//to do http calls we have to import httpclient from angularhttp
import { AppService } from '../../shared/service/app.service';//it is own service for navigate and getting parameters
import { environment } from '../../../environments/environment';//to get base url to connect the server

//service decotator
@Injectable()
export class FunctionalDesignationService {
  //base host in api
  private host = environment.API_END_POINT;
  //url
  private url: string = '';

  constructor(private http: HttpClient, private appService: AppService) { }
  //to get params form appservice
  getParamId() {
    return this.appService.getParam('id');
  }
  // to get all functional designation from api
  getFunctionalDesignation() {
    this.appService.showLoader(true);
    this.url = this.host + '/Functionaldesignation/ViewMultipleFunctionaldesignation';
    return this.http.get(this.url);
  }
  // to get particular functional designation data form api
  getFunctionDesignationData(data: any) {
    this.url = this.host + '/Functionaldesignation/ViewFunctionaldesignationById?id=';
    return this.http.get(this.url + data);
  }
  //to save the functional designation
  saveFunctionDesignation(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Functionaldesignation/AddFunctionaldesignation';
    return this.http.post(this.url, data);
  }
  //to update functional designation
  updateFunctionDesignation(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Functionaldesignation/UpdateFunctionaldesignation';
    return this.http.post(this.url, data);
  }
  //to get all business unit from api 
  getBusinessUnit() {
    this.appService.showLoader(true);
    this.url = this.host + '/Functionaldesignation/GetBusinesUnits';
    return this.http.get(this.url);
  }
  //to get all departments  from api 
  getDept() {
    this.appService.showLoader(true);
    this.url = this.host + '/Functionaldesignation/GetDept';
    return this.http.get(this.url);
  }
  //to get all sub-departments  from api 
  getSubDeptdata(data: any) {
    this.url = this.host + '/Functionaldesignation/GetSubdeptByDeptId?id=';
    return this.http.get(this.url + data);
  }
  //to get all Functionsbysubdept  from api 
  getFunctionsbysubdept(data: any) {
    this.url = this.host + '/Functionaldesignation/Getfunctionbysubdeptid?id=';
    return this.http.get(this.url + data);
  }
  //to get all SubfunctionbyFunction  from api 
  getSubfunctionbyFunction(data: any) {
    this.url = this.host + '/Functionaldesignation/Getsubfunctionbyfunctionid?id=';
    return this.http.get(this.url + data);
  }
  //to get all CostCode  from api 
  getCostCode(data: any) {
    this.url = this.host + '/Functionaldesignation/GetCostcode?id=';
    return this.http.get(this.url + data);
  }
}