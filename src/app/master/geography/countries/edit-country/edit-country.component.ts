import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { Country } from '../../../../shared/entities/countries';
import { GeographyService } from '../../geography.service';
import { CountryForm } from '../country.form';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css']
})
export class EditCountryComponent implements OnInit {
  myForm: any = CountryForm.init();
  //communication between two components
  @Input()
  country: Country;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private geographyService: GeographyService , private alertService:AlertService) {
    CountryForm.edit(this.myForm);
  }
  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['country']) {
      this.country = changes['country'].currentValue;
      // console.log(this.country);
      this.getCountry(this.country.id);
    }
  }

  ngOnInit() {
  }
  //to update the country
  save() {
    this.geographyService.updateCountry(this.country).subscribe((data: any) => {
      // console.log(data);
      //  console.log(this.country);    
        if(data.isstatus === false){
          this.alertService.alert(AlertType.Error,data.message)
          }else{
            this.alertService.alert(AlertType.Success,data.message)
          }      
      this.onClose();
    });
  }
  
  //get country data by id
  getCountry(data) {
    this.geographyService.getCountryData(data).subscribe((data: any) => {
      this.country = data.response;
      // console.log(this.country);
    });
  }
  //to close the modal
  onClose() {
    this.close.emit();
  }

}
