import { Injectable } from '@angular/core';//injectable represents it is a service
import { HttpClient } from '@angular/common/http';//to do http calls we have to import httpclient from angularhttp
import { AppService } from '../../shared/service/app.service';//it is own service for navigate and getting parameters
import { environment } from '../../../environments/environment';//to get base url to connect the server

//service decotator
@Injectable()
export class DepartmentService {
  //base host in api
  private host = environment.API_END_POINT;
  //url
  private url: string = '';

  constructor(private http: HttpClient, private appService: AppService) { }
  //to get params form appservice
  getParamId() {
    return this.appService.getParam('id');
  }
  //to get all departments from the api
  getDepartments() {
    this.appService.showLoader(true);
    this.url = this.host + '/Department/ViewMultipleDepartment';
    return this.http.get(this.url);
  }
  // to get particular department data by id
  getDepartmentData(data: any) {
    this.url = this.host + '/Department/DepartmentById?deptid=';
    return this.http.get(this.url + data);
  }
  //to save the department
  saveDepartment(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Department/AddDepartment';
    return this.http.post(this.url, data);
  }
  //to update the department
  updateDepartment(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Department/Updatedept';
    return this.http.post(this.url, data);
  }
  //to get all subdepartments
  getSubDepartments() {
    this.appService.showLoader(true);
    this.url = this.host + '/Department/ViewMultipleSubDepartment';
    return this.http.get(this.url);
  }
  // to get particular sub department by id
  getSubDepartmentData(data: any) {
    this.url = this.host + '/Department/SubDepartmentById?subdeptid=';
    return this.http.get(this.url + data);
  }
  // to save the dubdepartment
  saveSubDepartment(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Department/AddSubDepartment';
    return this.http.post(this.url, data);
  }
  //to update the subdepartment
  updateSubDepartment(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Department/Updatesubdept';
    return this.http.post(this.url, data);
  }
}