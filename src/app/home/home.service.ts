import { Injectable } from '@angular/core';//injectable represents it is a service
import { HttpClient } from '@angular/common/http';//to do http calls we have to import httpclient from angularhttp
import { AppService } from '../shared/service/app.service';//it is own service for navigate and getting parameters
import { environment } from '../../environments/environment';//to get base url to connect the server

//service decorator
@Injectable()
export class HomeService {
  //base host in api
  private host = environment.API_END_POINT;
  //url
  private url: string = '';
  constructor( private http: HttpClient,private appService : AppService ) { }
//to get params form appservice
getParamId() {
return this.appService.getParam('id');
}
//to getStageCounts from api 
getStageCounts(){
  this.appService.showLoader(true);
  this.url = this.host+'/DashBoard/stagecounts';
  return this.http.get(this.url);
}
//to getPipeLineCounts from api 
getPipeLineCounts(data:any){
  this.url = this.host+'/DashBoard/Piplinecounts?stagevalue=';
  return this.http.get(this.url+ data);
}
//getEmployeeById from api
getEmployeeById(data:any){
  this.url = this.host+'/Employee/EmployeeById1?empid=';
  return this.http.get(this.url+ data);
}
//to navigate the page with parameters id and data
navigate(id:any , data:any){
  this.appService.navigate('drilldown',[{id:id},{data:data}])
}
}