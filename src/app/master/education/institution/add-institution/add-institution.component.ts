import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { GeographyService } from '../../../geography/geography.service';
import { EducationService } from '../../education.service';
import { Institution } from '../../../../shared/entities/institution';
import { InstitutionForm } from '../institution.form';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';



@Component({
  selector: 'app-add-institution',
  templateUrl: './add-institution.component.html',
  styleUrls: ['./add-institution.component.css']
})
export class AddInstitutionComponent implements OnInit {
  myForm: any = InstitutionForm.init();
  dataList: any = [];
  institution: Institution = new Institution();
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private geographyService: GeographyService, private educationService: EducationService , private alertService:AlertService) {
    InstitutionForm.edit(this.myForm);
    this.getCities();
  }

  ngOnInit() {
  }
  //get all cities
  getCities() {
    this.geographyService.getCities().subscribe((data: any) => {
      this.dataList = data.response;
      // console.log(this.dataList);
    });
  }
  //save the institute
  save() {
    this.educationService.saveInstitution(this.institution).subscribe((data: any) => {
      // console.log(data);
      // console.log(this.institution);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
      this.onClose();
    });
  }
  //close the popup
  onClose() {
    this.close.emit();
  }

}