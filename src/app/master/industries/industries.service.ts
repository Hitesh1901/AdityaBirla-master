import { Injectable } from '@angular/core';//injectable represents it is a service
import { HttpClient } from '@angular/common/http';//to do http calls we have to import httpclient from angularhttp
import { AppService } from '../../shared/service/app.service';//it is own service for navigate and getting parameters
import { environment } from '../../../environments/environment';//to get base url to connect the server

//service decotator
@Injectable()
export class IndustriesService {
  //base host in api
  private host = environment.API_END_POINT;
  //url
  private url: string = '';

  constructor(private http: HttpClient, private appService: AppService) { }
  //to get params form appservice
  getParamId() {
    return this.appService.getParam('id');
  }
  // to get all industries from api
  getIndustries() {
    this.appService.showLoader(true);
    this.url = this.host+'/Industries/ViewMultipleIndustries';
    return this.http.get(this.url);
  }
  //to get particular industries data from api
  getIndustriesData(data: any) {
    this.url = this.host+'/Industries/ViewIndustriesById?id=';
    return this.http.get(this.url+ data);
  }
  // to save the industries
  saveIndustries(data:any){
    this.appService.showLoader(true);
    this.url = this.host+'/Industries/AddIndustries';
    return this.http.post(this.url, data);
  }
  //to update the industries
  updateIndustries(data:any){
    this.appService.showLoader(true);
    this.url = this.host+'/Industries/UpdateIndustries';
    return this.http.post(this.url, data);
  }
}