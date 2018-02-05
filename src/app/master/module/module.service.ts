import { Injectable } from '@angular/core';//injectable represents it is a service
import { HttpClient } from '@angular/common/http';//to do http calls we have to import httpclient from angularhttp
import { AppService } from '../../shared/service/app.service';//it is own service for navigate and getting parameters
import { environment } from '../../../environments/environment';//to get base url to connect the server

//service decotator
@Injectable()
export class ModuleService {
  //base host in api
  private host = environment.API_END_POINT;
  //url
  private url: string = '';

  constructor(private http: HttpClient, private appService: AppService) { }
  //to get params form appservice
  getParamId() {
    return this.appService.getParam('id');
  }
  // to get all modules from api
  getModule() { 
    this.appService.showLoader(true);
    this.url = this.host+'/Modules/ViewMultipleModule';
    return this.http.get(this.url);
  }
  //to get the particular moduledata by id from api 
  getModuleData(data: any) {
    this.url = this.host+'/Modules/ViewSingleModule?moduleid=';
    return this.http.get(this.url+ data);
  }
  // to save the module
  saveModule(data:any){
    this.appService.showLoader(true);
    this.url = this.host+'/Modules/AddModule';
    return this.http.post(this.url, data);
  }
  //to update the module
  updateModule(data:any){
    this.appService.showLoader(true);
    this.url = this.host+'/Modules/UpdateModule';
    return this.http.post(this.url, data);
  }
}