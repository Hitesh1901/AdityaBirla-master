import { Component, OnInit, Input ,SimpleChanges ,EventEmitter ,Output} from '@angular/core';
import { InterventionDay } from '../../../shared/entities/intervention';
import { InterventionDayService } from '../interventionday.service';
import { InterventionDayform } from '../interventionday.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-add-intervention-day',
  templateUrl: './add-intervention-day.component.html',
  styleUrls: ['./add-intervention-day.component.css']
})
export class AddInterventionDayComponent implements OnInit {

  myForm: any = InterventionDayform.init();
  dataList:any = [];
  id:any;
 interventionDay:InterventionDay = new InterventionDay();
 //event emitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private interventionDayService:InterventionDayService , private alertService:AlertService)  { 
    InterventionDayform.edit(this.myForm); 
  }

  ngOnInit() {
  }
//to saveinterventionday
save(){
  this.interventionDayService.saveInterventionDay(this.interventionDay).subscribe((data: any) => {
    // console.log(data);
    //  console.log(this.interventionDay);
    if(data.isstatus === false){
      this.alertService.alert(AlertType.Error,data.Response.message)
      }else{
        this.alertService.alert(AlertType.Success,data.Response.message)
      }
     this.onClose();
  });
}
//close the module
onClose(){
  this.close.emit();
}
}

