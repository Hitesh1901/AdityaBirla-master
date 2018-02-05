import { Component, OnInit, Input ,SimpleChanges ,EventEmitter ,Output} from '@angular/core';
import { Stage } from '../../../shared/entities/stage';
import { TargetAudience } from '../../../shared/entities/target-audience';
import { TargetAudienceService } from '../taget-audience.service';
import { TargetAudienceform } from '../target-audience.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';



@Component({
  selector: 'app-edit-target-audience',
  templateUrl: './edit-target-audience.component.html',
  styleUrls: ['./edit-target-audience.component.css']
})
export class EditTargetAudienceComponent implements OnInit {

  myForm: any = TargetAudienceform.init();
  dataList:any = [];
  id:any;
  //communicating between two components
  @Input()targetAudience:TargetAudience;
  //eventemitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private targetAudienceService:TargetAudienceService , private alertService:AlertService)  { 
    TargetAudienceform.edit(this.myForm); 
  }

  ngOnInit() {
  }
  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if(changes['targetAudience']) {
      this.targetAudience = changes['targetAudience'].currentValue;
      // console.log(this.targetAudience.targetaudienceid);
      this.getTargetAudienceData(this.targetAudience.targetaudienceid);
    }
  }
//getTargetAudienceData by id
  getTargetAudienceData(id:any){
    this.targetAudienceService.getTargetAudeinceData(id).subscribe((data: any) => {
      this.targetAudience = data.response.targetaudience[0];
      // console.log(this.targetAudience);
  });

}
//save target audience
save(){
  this.targetAudienceService.updateTargetAudeince(this.targetAudience).subscribe((data: any) => {
    // console.log(data);
    //  console.log(this.targetAudience);
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

