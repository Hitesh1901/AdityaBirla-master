import { Injectable } from '@angular/core';//injectable represents it is a service
import { HttpClient } from '@angular/common/http';//to do http calls we have to import httpclient from angularhttp
import { AppService } from '../../shared/service/app.service';//it is own service for navigate and getting parameters
import { environment } from '../../../environments/environment';//to get base url to connect the server

//service decotator
@Injectable()
export class InterventionDayService {
  //base host in api
  private host = environment.API_END_POINT;
  //url
  private url: string = '';

  constructor(private http: HttpClient, private appService: AppService) { }
  //to get params form appservice
  getParamId() {
    return this.appService.getParam('id');
  }
  // to get all interventionday from api
  getInterventionDay() {
    this.appService.showLoader(true);
    this.url = this.host + '/InterventionDay/ViewMultipleInterventionDay';
    return this.http.get(this.url);
  }
  //to get particular interventionday from api
  getInterventionDayData(data: any) {
    this.url = this.host + '/InterventionDay/ViewSingleInterventionDay?interventiondayid=';
    return this.http.get(this.url + data);
  }
  //to save the intervention day
  saveInterventionDay(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/InterventionDay/AddInterventionDay';
    return this.http.post(this.url, data);
  }
  //to update the intervention day
  updateInterventionDay(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/InterventionDay/UpdateInterventionDay';
    return this.http.post(this.url, data);
  }
}