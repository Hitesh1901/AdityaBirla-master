import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { JobBandDesignation } from '../../../shared/entities/jobbanddesignation';
import { JobbandDesignationform } from '../jobbanddesignation.form';
import { FunctionalDesignationService } from '../../functionaldesignation/functionaldesignation.service';
import { JobBandDesignationService } from '../jobbanddesignation.service';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-add-job-band-designation',
  templateUrl: './add-job-band-designation.component.html',
  styleUrls: ['./add-job-band-designation.component.css']
})
export class AddJobBandDesignationComponent implements OnInit {

  myForm: any = JobbandDesignationform.init();
  dataList: any = [];
  id: any;
  jobBandDesignation: JobBandDesignation = new JobBandDesignation();
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private jobBandDesignationService: JobBandDesignationService, private functionalDesignationService: FunctionalDesignationService , private alertService:AlertService) {
    JobbandDesignationform.edit(this.myForm);
    this.getAllFunctionalDesignations();
  }

  ngOnInit() {
  }
  //get all functionaldesignation
  getAllFunctionalDesignations() {
    this.functionalDesignationService.getFunctionalDesignation().subscribe((data: any) => {
      this.dataList = data.response;
      // console.log(this.dataList);
    });
  }
//save jobdesignation
  save() {
    this.jobBandDesignationService.saveJobbandDesignation(this.jobBandDesignation).subscribe((data: any) => {
      // console.log(data);
      // console.log(this.jobBandDesignation);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
      this.onClose();
    });
  }
  onClose() {
    this.close.emit();
  }
}

