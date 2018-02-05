import { Component, OnInit, Input ,SimpleChanges ,EventEmitter ,Output} from '@angular/core';
import { EmployerService } from '../employer.service';
import { GeographyService } from '../../geography/geography.service';
import { Employerform } from '../employer.form';
import { Employer } from '../../../shared/entities/employer';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-add-employer',
  templateUrl: './add-employer.component.html',
  styleUrls: ['./add-employer.component.css']
})
export class AddEmployerComponent implements OnInit {

  myForm: any = Employerform.init();
  dataList:any = [];
  id:any;
  employer:Employer = new Employer();
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private employerService:EmployerService, private geographyService :GeographyService , private alertService:AlertService)  { 
    Employerform.edit(this.myForm); 
    this.getAllCities();
  }

  ngOnInit() {
  }
//to get all cities
  getAllCities() {
    this.geographyService.getCities().subscribe((data: any) => {
      this.dataList =data.response;
      // console.log(this.dataList);
    });
  }
//to save the employer
save(){
  this.employerService.saveEmployer(this.employer).subscribe((data: any) => {
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
//close the modal
onClose(){
  this.close.emit();
}
}


