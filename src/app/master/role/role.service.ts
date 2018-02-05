import { Injectable } from '@angular/core';//injectable represents it is a service
import { HttpClient } from '@angular/common/http';//to do http calls we have to import httpclient from angularhttp
import { AppService } from '../../shared/service/app.service';//it is own service for navigate and getting parameters
import { environment } from '../../../environments/environment';//to get base url to connect the server

//service decotator
@Injectable()
export class RoleService {
  //base host in api
  private host = environment.API_END_POINT;
  //url
  private url: string = '';

  constructor(private http: HttpClient, private appService: AppService) { }
  //to get params form appservice
  getParamId() {
    return this.appService.getParam('id');
  }
  //to get all roles from api
  getRole() {
    this.appService.showLoader(true);
    this.url = this.host + '/Roles/ViewMultipleRole';
    return this.http.get(this.url);
  }
  //to get particular roledata by id from api  
  getRoleData(data: any) {
    this.url = this.host + '/Roles/ViewSingleRole?roleid=';
    return this.http.get(this.url + data);
  }
  //to save the role
  saveRole(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Roles/AddRole';
    return this.http.post(this.url, data);
  }
  //to update the role
  updateRole(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Roles/UpdateRole';
    return this.http.post(this.url, data);
  }
}