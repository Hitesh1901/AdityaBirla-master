import { Injectable } from '@angular/core';//injectable represents it is a service
import { HttpClient } from '@angular/common/http';//to do http calls we have to import httpclient from angularhttp
import { AppService } from '../../shared/service/app.service';//it is own service for navigate and getting parameters
import { environment } from '../../../environments/environment';//to get base url to connect the server

//service decotator
@Injectable()
export class GeographyService {
  //base host in api
  private host = environment.API_END_POINT;
  //url
  private url: string = '';

  constructor(private http: HttpClient, private appService: AppService) { }
  //to get params form appservice
  getParamId() {
    return this.appService.getParam('id');
  }
  // to get all countries from the api
  getCountries() {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/ViewMultiplecountry';
    return this.http.get(this.url);
  }
  // to get the particular country data from api
  getCountryData(data: any) {
    this.url = this.host + '/Geography/ViewCountryById?id=';
    return this.http.get(this.url + data);
  }
  // to save the country 
  saveCountry(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/AddCountry';
    return this.http.post(this.url, data);
  }
  // to update the country
  updateCountry(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/UpdateCountry';
    return this.http.post(this.url, data);
  }
  // to get all states from api 
  getMultipleStates() {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/ViewMultiplestate';
    return this.http.get(this.url);
  }
  // to update the state
  updateState(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/UpdateState';
    return this.http.post(this.url, data);
  }
  //to save the state
  saveState(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/AddState';
    return this.http.post(this.url, data);
  }
  // to get the particular state data
  getStateData(data: any) {
    this.url = this.host + '/Geography/ViewStatesById?id=';
    return this.http.get(this.url + data);
  }
  //to get all cities
  getCities() {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/ViewMultiplecity';
    return this.http.get(this.url);
  }
  //to update the city
  updateCity(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/UpdateCity';
    return this.http.post(this.url, data);
  }
  // to save the city
  saveCity(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/AddCity';
    return this.http.post(this.url, data);
  }
  //to get particular city data by id from api
  getCityData(data: any) {
    this.url = this.host + '/Geography/ViewCityById?id=';
    return this.http.get(this.url + data);
  }
  // to get all pincode from api
  getPincode() {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/ViewMultiplepincodes';
    return this.http.get(this.url);
  }
  //to update the pincode
  updatePincode(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/UpdatePincode';
    return this.http.post(this.url, data);
  }
  //to save the pincode
  savePincode(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/AddPincodes';
    return this.http.post(this.url, data);
  }
  // to get particular pincodedata by id from api
  getPincodeData(data: any) {
    this.url = this.host + '/Geography/ViewPincodesById?id=';
    return this.http.get(this.url + data);
  }
}
