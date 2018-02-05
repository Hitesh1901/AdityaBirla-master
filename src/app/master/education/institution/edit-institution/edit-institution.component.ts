import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { GeographyService } from '../../../geography/geography.service';
import { Institution } from '../../../../shared/entities/institution';
import { EducationService } from '../../education.service';
import { InstitutionForm } from '../institution.form';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-edit-institution',
  templateUrl: './edit-institution.component.html',
  styleUrls: ['./edit-institution.component.css']
})
export class EditInstitutionComponent implements OnInit {
  myForm: any = InstitutionForm.init();
  dataList: any = [];
  id: any;
  // instituion: Institution = new Institution();
  //communication between components
  @Input() instituions: Institution;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private geographyService: GeographyService, private educationService: EducationService , private alertService:AlertService) {
    InstitutionForm.edit(this.myForm);
    this.getAllCities();
  }

  ngOnInit() {
  }
  //to get the object from parent
  ngOnChanges(changes: SimpleChanges) {
    if (changes['instituions']) {
      this.instituions = changes['instituions'].currentValue;
      // console.log(this.instituions.id);
      this.getInstuitionData(this.instituions.id);
    }
  }
  //to get all cities
  getAllCities() {
    this.geographyService.getCities().subscribe((data: any) => {
      this.dataList = data.response;
      // console.log(this.dataList);
    });
  }
  //get intitute by id
  getInstuitionData(id: any) {
    this.educationService.getInstitutionsData(id).subscribe((data: any) => {
      this.instituions = data.response;
      // console.log(this.instituion);
    });

  }
  //to save the institute
  save() {
    this.educationService.updateInstitution(this.instituions).subscribe((data: any) => {
      console.log(data);
      // console.log(this.instituion);
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
