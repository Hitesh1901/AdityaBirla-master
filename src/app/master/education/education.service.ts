import { Injectable } from '@angular/core';//injectable represents it is a service
import { HttpClient } from '@angular/common/http';//to do http calls we have to import httpclient from angularhttp
import { AppService } from '../../shared/service/app.service';//it is own service for navigate and getting parameters
import { environment } from '../../../environments/environment';//to get base url to connect the server

//service decotator
@Injectable()
export class EducationService {
  //base host in api
  private host = environment.API_END_POINT;
  //url
  private url: string = '';

  constructor(private http: HttpClient, private appService: AppService) { }
  //to get params form appservice
  getParamId() {
    return this.appService.getParam('id');
  }

  //to get all courses from api
  getCourses() {
    this.appService.showLoader(true);
    this.url = this.host + '/Education/ViewMultipleCourse';
    return this.http.get(this.url);
  }
  //to get particular course from api
  getCourseData(data: any) {
    this.url = this.host + '/Education/ViewCourseById?id=';
    return this.http.get(this.url + data);
  }
  // to save the course
  saveCourse(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Education/AddCourse';
    return this.http.post(this.url, data);
  }
  // to save update course
  updateCourse(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Education/UpdateCourse';
    return this.http.post(this.url, data);
  }
  //to get all instituions from api
  getInstitutions() {
    this.appService.showLoader(true);
    this.url = this.host + '/Education/ViewMultipleInstitution';
    return this.http.get(this.url);
  }
  // to get the institute by id from api
  getInstitutionsData(data: any) {
    this.url = this.host + '/Education/ViewInstitutionById?id=';
    return this.http.get(this.url + data);
  }
  // to save the institution
  saveInstitution(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Education/AddInstitution';
    return this.http.post(this.url, data);
  }
  //to update the institution
  updateInstitution(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Education/UpdateInstitution';
    return this.http.post(this.url, data);
  }
  //to get all universties from api
  getUniversities() {
    this.appService.showLoader(true);
    this.url = this.host + '/Education/ViewMultipleUniversities';
    return this.http.get(this.url);
  }
  //to get the particular university data
  getUniversitiesData(data: any) {
    this.url = this.host + '/Education/ViewUniversitiesById?id=';
    return this.http.get(this.url + data);
  }
  //to save university data
  saveUniversities(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Education/AddUniversities';
    return this.http.post(this.url, data);
  }
  //to update the university
  updateUniversities(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Education/UpdateUniversities';
    return this.http.post(this.url, data);
  }
}