import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { JobBand } from '../../../shared/entities/jobband';
import { JobBandService } from '../jobband.service';
import { Jobbandform } from '../jobband.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';


@Component({
  selector: 'app-add-joband',
  templateUrl: './add-joband.component.html',
  styleUrls: ['./add-joband.component.css']
})
export class AddJobandComponent implements OnInit {

  myForm: any = Jobbandform.init();
  dataList: any = [];
  id: any;
  jobBand: JobBand = new JobBand();
  //event emitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private jobBandService: JobBandService , private alertService:AlertService) {
    Jobbandform.edit(this.myForm);
  }

  ngOnInit() {
  }
  //to save the jobband

  save() {
    this.jobBandService.saveJobband(this.jobBand).subscribe((data: any) => {
      // console.log(data);
      // console.log(this.jobBand);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.response.message)
        }else{
          this.alertService.alert(AlertType.Success,data.response.message)
        }
      this.onClose();
    });
  }
  //close the modal
  onClose() {
    this.close.emit();
  }
}

