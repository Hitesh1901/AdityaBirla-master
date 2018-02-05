import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { EmployerService } from '../employer.service';
import { GeographyService } from '../../geography/geography.service';
import { Employerform } from '../employer.form';
import { Employer } from '../../../shared/entities/employer';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-edit-employer',
  templateUrl: './edit-employer.component.html',
  styleUrls: ['./edit-employer.component.css']
})
export class EditEmployerComponent implements OnInit {

  myForm: any = Employerform.init();
  dataList: any = [];
  id: any;
  //communicate between components
  @Input() employer: Employer;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private employerService: EmployerService, private geographyService: GeographyService , private alertService:AlertService) {
    Employerform.edit(this.myForm);
    this.getAllCities();
  }

  ngOnInit() {
  }
  //to get the object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['employer']) {
      this.employer = changes['employer'].currentValue;
      // console.log(this.employer.id);
      this.getEmployerData(this.employer.id);
    }
  }
  //toget all cities
  getAllCities() {
    this.geographyService.getCities().subscribe((data: any) => {
      this.dataList = data.response;
      // console.log(this.dataList);
    });
  }
  //to get employer data by id
  getEmployerData(id: any) {
    this.employerService.getEmployerData(id).subscribe((data: any) => {
      this.employer = data.response;
      // console.log(this.employer);
    });

  }
  //to supdate the employer
  save() {
    this.employerService.updateEmployer(this.employer).subscribe((data: any) => {
      // console.log(data);
      //  console.log(this.employer);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
      this.onClose();
    });
  }
  //to close the popup
  onClose() {
    this.close.emit();
  }
}

