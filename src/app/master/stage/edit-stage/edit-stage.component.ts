import { Component, OnInit, Input ,SimpleChanges ,EventEmitter ,Output} from '@angular/core';
import { Stage } from '../../../shared/entities/stage';
import { StageService } from '../stage.service';
import { Stageform } from '../stage.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';


@Component({
  selector: 'app-edit-stage',
  templateUrl: './edit-stage.component.html',
  styleUrls: ['./edit-stage.component.css']
})
export class EditStageComponent implements OnInit {

  myForm: any = Stageform.init();
  dataList:any = [];
  id:any;
  //communicating between two components
  @Input()stage:Stage;
  //event emitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private stageService:StageService , private alertService:AlertService)  { 
    Stageform.edit(this.myForm); 
  }

  ngOnInit() {
  }
  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if(changes['stage']) {
      this.stage = changes['stage'].currentValue;
      // console.log(this.stage.stageid);
      this.getStageData(this.stage.stageid);
    }
  }
//getStageData by id
  getStageData(id:any){
    this.stageService.getStageData(id).subscribe((data: any) => {
      this.stage = data.response.stage[0];
      // console.log(this.stage);
  });

}
//save the stage
save(){
  this.stageService.updateStage(this.stage).subscribe((data: any) => {
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
onClose(){
  this.close.emit();
}
}

