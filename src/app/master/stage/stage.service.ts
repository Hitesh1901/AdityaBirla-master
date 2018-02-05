import { Injectable } from '@angular/core';//injectable represents it is a service
import { HttpClient } from '@angular/common/http';//to do http calls we have to import httpclient from angularhttp
import { AppService } from '../../shared/service/app.service';//it is own service for navigate and getting parameters
import { environment } from '../../../environments/environment';//to get base url to connect the server

//service decotator
@Injectable()
export class StageService {
  //base host in api
  private host = environment.API_END_POINT;
  //url
  private url: string = '';

  constructor(private http: HttpClient, private appService: AppService) { }
  //to get params form appservice
  getParamId() {
    return this.appService.getParam('id');
  }
  // to get all stages from api
  getStage() {
    this.appService.showLoader(true);
    this.url = this.host+'/Stages/ViewMultipleStage';
    return this.http.get(this.url);
  }
  // to get particular data by id from api 
  getStageData(data: any) {
    this.url = this.host+'/Stages/ViewSingleStage?stageid=';
    return this.http.get(this.url+ data);
  }
  // to  save the stage
  saveStage(data:any){
    this.appService.showLoader(true);
    this.url = this.host+'/Stages/AddStage';
    return this.http.post(this.url, data);
  }
  // to update the stage
  updateStage(data:any){
    this.appService.showLoader(true);
    this.url = this.host+'/Stages/UpdateStage';
    return this.http.post(this.url, data);
  }
}