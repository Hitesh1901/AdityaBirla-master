import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { GeographyService } from '../../../geography/geography.service';
import { EducationService } from '../../education.service';
import { Universties } from '../../../../shared/entities/universties';
import { UniversityForm } from '../universities.from';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-edit-universties',
  templateUrl: './edit-universties.component.html',
  styleUrls: ['./edit-universties.component.css']
})
export class EditUniverstiesComponent implements OnInit {
  myForm: any = UniversityForm.init();
  dataList: any = [];
  id: any;
  // universty: Universties = new Universties();
  //communication between components
  @Input() universties: Universties;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private geographyService: GeographyService, private educationService: EducationService , private alertService:AlertService) {
    UniversityForm.edit(this.myForm); 
    this.getAllCities();
  }

  ngOnInit() {
  }
  //get object from parent components
  ngOnChanges(changes: SimpleChanges) {
    if (changes['universties']) {
      this.universties = changes['universties'].currentValue;
      // console.log(this.universties.id);
      this.getUniverstiesData(this.universties.id);
    }
  }
  //to get all universities
  getAllCities() {
    this.geographyService.getCities().subscribe((data: any) => {
      this.dataList = data.response;
      // console.log(this.dataList);
    });
  }
  //to get university data
  getUniverstiesData(id: any) {
    this.educationService.getUniversitiesData(id).subscribe((data: any) => {
      this.universties = data.response;
      // console.log(this.universty);
    });

  }
  //to update the university
  save() {
    this.educationService.updateUniversities(this.universties).subscribe((data: any) => {
      // console.log(data);
      //  console.log(this.universty);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
      this.onClose()
    });
  }
  //to close the modal popup
  onClose() {
    this.close.emit();
  }
}
