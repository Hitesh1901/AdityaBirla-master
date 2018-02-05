import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Stage } from '../../../shared/entities/stage';
import { TargetAudience } from '../../../shared/entities/target-audience';
import { TargetAudienceService } from '../taget-audience.service';
import { TargetAudienceform } from '../target-audience.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-add-target-audience',
  templateUrl: './add-target-audience.component.html',
  styleUrls: ['./add-target-audience.component.css']
})
export class AddTargetAudienceComponent implements OnInit {

  myForm: any = TargetAudienceform.init();
  dataList: any = [];
  id: any;
  targetAudience: TargetAudience = new TargetAudience();
  //event emitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private targetAudienceService: TargetAudienceService , private alertService:AlertService) {
    TargetAudienceform.edit(this.myForm);
  }

  ngOnInit() {
  }
  //save the target audience
  save() {
    this.targetAudienceService.saveTargetAudeince(this.targetAudience).subscribe((data: any) => {
      // console.log(data);
      // console.log(this.targetAudience);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
      this.onClose();
    });
  }
  //close the modal
  onClose() {
    this.close.emit();
  }
}

