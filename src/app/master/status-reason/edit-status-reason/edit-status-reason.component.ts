import { Component, OnInit, Input ,SimpleChanges ,EventEmitter ,Output} from '@angular/core';
import { StatusReason } from '../../../shared/entities/statusreason';
import { StatusReasonform } from '../status-reason.form';
import { StatusReasonService } from '../status-reason.service';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';


@Component({
  selector: 'app-edit-status-reason',
  templateUrl: './edit-status-reason.component.html',
  styleUrls: ['./edit-status-reason.component.css']
})
export class EditStatusReasonComponent implements OnInit {

  
  myForm: any = StatusReasonform.init();
  dataList:any = [];
  id:any;
  //communicating between two components
  @Input()statusReason:StatusReason;
  //event emitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private statusReasonService:StatusReasonService , private alertService:AlertService)  { 
    StatusReasonform.edit(this.myForm); 
  }

  ngOnInit() {
  }
  //get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if(changes['statusReason']) {
      this.statusReason = changes['statusReason'].currentValue;
      // console.log(this.statusReason.id);
      this.getStatusReasonData(this.statusReason.id);
    }
  }
//getStatusReasonData by id
  getStatusReasonData(id:any){
    this.statusReasonService.getStatusReasonData(id).subscribe((data: any) => {
      this.statusReason = data.response;
      // console.log(this.statusReason);
  });

}
//save status reason
save(){
  this.statusReasonService.updateStatusReason(this.statusReason).subscribe((data: any) => {
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
