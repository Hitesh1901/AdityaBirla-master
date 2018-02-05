import { Injectable } from '@angular/core';//injectable represents it is a service
import { HttpClient } from '@angular/common/http';//to do http calls we have to import httpclient from angularhttp
import { AppService } from '../../shared/service/app.service';//it is own service for navigate and getting parameters
import { environment } from '../../../environments/environment';//to get base url to connect the server

//service decotator
@Injectable()
export class JobBandDesignationService {
  //base host in api
  private host = environment.API_END_POINT;
  //url
  private url: string = '';

  constructor(private http: HttpClient, private appService: AppService) { }
  //to get params form appservice
  getParamId() {
    return this.appService.getParam('id');
  }
// to get all jobband designation from api
  getJobbandDesignation() {
    this.appService.showLoader(true);
    this.url = this.host+'/JobbandDesignation/ViewMultipleJobbandDesignation';
    return this.http.get(this.url);
  }
  // to get particular jobbanddesignation by id from api 
  getJobbandDesignationData(data: any) {
    this.url = this.host+'/JobbandDesignation/JobbandDesignationById?id=';
    return this.http.get(this.url+ data);
  }
  //to save the jobbanddesignation
  saveJobbandDesignation(data:any){
    this.appService.showLoader(true);
    this.url = this.host+'/JobbandDesignation/AddJobbandDesignation';
    return this.http.post(this.url, data);
  }
  //to update the jobband designation
  updateJobbandDesignation(data:any){
    this.appService.showLoader(true);
    this.url = this.host+'/JobbandDesignation/UpdateJobbandDesignation';
    return this.http.post(this.url, data);
  }
}