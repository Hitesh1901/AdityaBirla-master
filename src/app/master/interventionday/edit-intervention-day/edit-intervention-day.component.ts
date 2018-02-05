import { Component, OnInit, Input ,SimpleChanges ,EventEmitter ,Output} from '@angular/core';
import { InterventionDay } from '../../../shared/entities/intervention';
import { InterventionDayService } from '../interventionday.service';
import { InterventionDayform } from '../interventionday.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';



@Component({
  selector: 'app-edit-intervention-day',
  templateUrl: './edit-intervention-day.component.html',
  styleUrls: ['./edit-intervention-day.component.css']
})
export class EditInterventionDayComponent implements OnInit {
  myForm: any = InterventionDayform.init();
  dataList:any = [];
  id:any;
  //communication between components
  @Input()interventionDay:InterventionDay;
  //event emitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private interventionDayService:InterventionDayService , private alertService:AlertService)  { 
    InterventionDayform.edit(this.myForm); 
  }

  ngOnInit() {
  }
//to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if(changes['interventionDay']) {
      this.interventionDay = changes['interventionDay'].currentValue;
      // console.log(this.interventionDay.interventiondayid);
      this.getInterventionDayData(this.interventionDay.interventiondayid);
    }
  }
//get interventionday by id
  getInterventionDayData(id:any){
    this.interventionDayService.getInterventionDayData(id).subscribe((data: any) => {
      this.interventionDay = data.Response.interventionday[0];
      // console.log(this.interventionDay);
  });

}
//update interventionday
save(){
  this.interventionDayService.updateInterventionDay(this.interventionDay).subscribe((data: any) => {
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

