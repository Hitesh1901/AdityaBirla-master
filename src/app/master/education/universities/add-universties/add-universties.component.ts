import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges ,TemplateRef} from '@angular/core';
import { GeographyService } from '../../../geography/geography.service';
import { EducationService } from '../../education.service';
import { Universties } from '../../../../shared/entities/universties';
import { UniversityForm } from '../universities.from';
import { AppService } from '../../../../shared/service/app.service';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';





@Component({
  selector: 'app-add-universties',
  templateUrl: './add-universties.component.html',
  styleUrls: ['./add-universties.component.css']
})
export class AddUniverstiesComponent implements OnInit {
  myForm: any = UniversityForm.init();
  dataList:any = [];
  universties:Universties = new Universties();
  //event emitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  
    constructor(private geographyService : GeographyService , private educationService:EducationService, private appService : AppService , private alertService:AlertService) {
      UniversityForm.edit(this.myForm); 
      this.getCities();
     }
  
    ngOnInit() {
    }
    //get all cities
    getCities(){
      this.geographyService.getCities().subscribe((data: any) => {
       this.dataList = data.response;
      //  console.log(this.dataList);
      });
    }
    //to save the universities
    save(){
      this.educationService.saveUniversities(this.universties).subscribe((data: any) => {
        // console.log(data);
        //  console.log(this.universties);
        if(data.isstatus === false){
          this.alertService.alert(AlertType.Error,data.message)
          }else{
            this.alertService.alert(AlertType.Success,data.message)
          }
         this.onClose();
      });
    }
    //to close the popup
    onClose(){
      this.close.emit();
    }
   
  }
