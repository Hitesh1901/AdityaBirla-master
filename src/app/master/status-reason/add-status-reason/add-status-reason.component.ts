import { Component, OnInit, Input ,SimpleChanges ,EventEmitter ,Output} from '@angular/core';
import { StatusReason } from '../../../shared/entities/statusreason';
import { StatusReasonform } from '../status-reason.form';
import { StatusReasonService } from '../status-reason.service';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-add-status-reason',
  templateUrl: './add-status-reason.component.html',
  styleUrls: ['./add-status-reason.component.css']
})
export class AddStatusReasonComponent implements OnInit {

 
  myForm: any = StatusReasonform.init();
  dataList:any = [];
  id:any;
  statusReason:StatusReason = new StatusReason();
  //event emitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private statusReasonService:StatusReasonService , private alertService:AlertService)  { 
    StatusReasonform.edit(this.myForm); 
  }

  ngOnInit() {
  }
//save statusreason
save(){
  this.statusReasonService.saveStatusReason(this.statusReason).subscribe((data: any) => {
    // console.log(data);
    //  console.log(this.statusReason);
    if(data.isstatus === false){
      this.alertService.alert(AlertType.Error,data.message)
      }else{
        this.alertService.alert(AlertType.Success,data.message)
      }
     this.onClose();
  });
}
onClose(){
  this.close.emit();
}
}
