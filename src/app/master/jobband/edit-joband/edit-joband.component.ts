import { Component, OnInit, Input ,SimpleChanges ,EventEmitter ,Output} from '@angular/core';
import { JobBand } from '../../../shared/entities/jobband';
import { JobBandService } from '../jobband.service';
import { Jobbandform } from '../jobband.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';



@Component({
  selector: 'app-edit-joband',
  templateUrl: './edit-joband.component.html',
  styleUrls: ['./edit-joband.component.css']
})
export class EditJobandComponent implements OnInit {

  myForm: any = Jobbandform.init();
  dataList:any = [];
  id:any;
  //communication between two components
  @Input()jobBand:JobBand;
  //eventemitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private jobBandService:JobBandService , private alertService:AlertService)  { 
    Jobbandform.edit(this.myForm); 
  }

  ngOnInit() {
  }
  //get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if(changes['jobBand']) {
      this.jobBand = changes['jobBand'].currentValue;
      // console.log(this.jobBand.id);
      this.getJobbandData(this.jobBand.id);
    }
  }
//get jobabnd by id
  getJobbandData(id:any){
    this.jobBandService.getJobbandData(id).subscribe((data: any) => {
      this.jobBand = data.obj.response;
      // console.log(this.jobBand);
  });

}
//update the jobband
save(){
  this.jobBandService.updateJobband(this.jobBand).subscribe((data: any) => {
    // console.log(data);
    //  console.log(this.jobBand);
    if(data.isstatus === false){
      this.alertService.alert(AlertType.Error,data.response.message)
      }else{
        this.alertService.alert(AlertType.Success,data.response.message)
      }
     this.onClose();
  });
}
//close the event emitter
onClose(){
  this.close.emit();
}
}

