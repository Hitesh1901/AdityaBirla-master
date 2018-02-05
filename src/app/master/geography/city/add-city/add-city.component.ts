import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Directive, Injectable } from '@angular/core';
import { GeographyService } from '../../geography.service';
import { City } from '../../../../shared/entities/city';
import { CityForm } from '../city.form';
import { State } from '../../../../shared/entities/states';
import { Observable } from 'rxjs/Observable';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';




@Component({
  selector: 'app-add-city',
  providers: [],
  templateUrl: './add-city.component.html',
})
export class AddCityComponent implements OnInit {

  myForm: any = CityForm.init();
  dataList: any = [];
  items: Array<any> = [];
  state: State;
  city: City = new City();
  iFilter: any = "";
  //event emitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private geographyService: GeographyService , private alertService:AlertService) {

    CityForm.edit(this.myForm);
    this.getStates();

  }

  ngOnInit() {
  }
  //to save the city
  save() {
    this.geographyService.saveCity(this.city).subscribe((data: any) => {
      console.log(data);
      //  console.log(this.city);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
      this.onClose()
    });
  }
  //to get all states
  getStates() {
    this.geographyService.getMultipleStates().subscribe((data: any) => {
      this.dataList = data.response;
      //  console.log(this.dataList);
    });
  }
  //to close the modal 
  onClose() {
    this.close.emit();
  }



}
