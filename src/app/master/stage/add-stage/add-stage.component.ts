import { Component, OnInit, Input ,SimpleChanges ,EventEmitter ,Output} from '@angular/core';
import { Stage } from '../../../shared/entities/stage';
import { StageService } from '../stage.service';
import { Stageform } from '../stage.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html',
  styleUrls: ['./add-stage.component.css']
})
export class AddStageComponent implements OnInit {

  myForm: any = Stageform.init();
  dataList:any = [];
  id:any;
  stage:Stage = new Stage();
  //event emitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private stageService:StageService , private alertService:AlertService)  { 
    Stageform.edit(this.myForm); 
  }

  ngOnInit() {
  }
  //save the stage

save(){
  this.stageService.saveStage(this.stage).subscribe((data: any) => {
    // console.log(data);
    //  console.log(this.stage);
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

