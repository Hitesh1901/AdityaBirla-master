import { Injectable } from '@angular/core';//injectable represents it is a service
import { HttpClient } from '@angular/common/http';//to do http calls we have to import httpclient from angularhttp
import { AppService } from '../../shared/service/app.service';//it is own service for navigate and getting parameters
import { environment } from '../../../environments/environment';//to get base url to connect the server

//service decotator
@Injectable()
export class DocumnetsService {
  //base host in api
  private host = environment.API_END_POINT;
  //url
  private url: string = '';

  constructor(private http: HttpClient, private appService: AppService) { }
  //to get params form appservice
  getParamId() {
    return this.appService.getParam('id');
  }
  //to get the all documents form the api 
  getDocuments() {
    this.appService.showLoader(true);
    this.url = this.host + '/Document/ViewMultipleDocument';
    return this.http.get(this.url);
  }
  // to get particular data form documentsdata by id
  getDocumentsData(data: any) {
    this.url = this.host + '/Document/ViewDocumentById?id=';
    return this.http.get(this.url + data);
  }
  //to save the document 
  saveDocuments(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Document/AddDocument';
    return this.http.post(this.url, data);
  }
  //to update the document
  updateDocuments(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Document/UpdateDocument';
    return this.http.post(this.url, data);
  }
}