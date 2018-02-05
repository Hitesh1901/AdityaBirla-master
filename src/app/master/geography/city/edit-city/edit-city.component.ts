import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { GeographyService } from '../../geography.service';
import { City } from '../../../../shared/entities/city';
import { CityForm } from '../city.form';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';


@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit {
  myForm: any = CityForm.init();
  dataList: any = [];
  id: any;
  city: City = new City();
  //communication between components
  @Input() cities: City;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private geographyService: GeographyService , private alertService:AlertService) {
    CityForm.edit(this.myForm);
    this.getAllStates();
  }

  ngOnInit() {
  }
  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['cities']) {
      this.cities = changes['cities'].currentValue;
      // console.log(this.cities.id);
      this.getCityData(this.cities.id);
    }
  }
  //to get all cities
  getAllStates() {
    this.geographyService.getMultipleStates().subscribe((data: any) => {
      this.dataList = data.response;
      // console.log(this.dataList);
    });
  }
  //to get city data by id
  getCityData(id: any) {
    this.geographyService.getCityData(id).subscribe((data: any) => {
      this.city = data.response;
      // console.log(this.city);
    });

  }
  //to save the city
  save() {
    this.geographyService.updateCity(this.city).subscribe((data: any) => {
      // console.log(data);
      //  console.log(this.city);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
      this.onClose();
    });
  }
  //to close the modal popup
  onClose() {
    this.close.emit();
  }
}
