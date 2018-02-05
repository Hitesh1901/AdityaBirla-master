import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { JobBandDesignation } from '../../../shared/entities/jobbanddesignation';
import { JobbandDesignationform } from '../jobbanddesignation.form';
import { FunctionalDesignationService } from '../../functionaldesignation/functionaldesignation.service';
import { JobBandDesignationService } from '../jobbanddesignation.service';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-edit-job-band-designation',
  templateUrl: './edit-job-band-designation.component.html',
  styleUrls: ['./edit-job-band-designation.component.css']
})
export class EditJobBandDesignationComponent implements OnInit {

  myForm: any = JobbandDesignationform.init();
  dataList: any = [];
  id: any;
  //coumminication between two components
  @Input() jobBandDesignation: JobBandDesignation;
  //event emitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private jobBandDesignationService: JobBandDesignationService, private functionalDesignationService: FunctionalDesignationService , private alertService:AlertService) {
    JobbandDesignationform.edit(this.myForm);
    this.getAllFunctionalDesignations();
  }

  ngOnInit() {
  }
  //get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['jobBandDesignation']) {
      this.jobBandDesignation = changes['jobBandDesignation'].currentValue;
      // console.log(this.jobBandDesignation.id);
      this.getJobDesignationData(this.jobBandDesignation.id);
    }
  }
  //getallfunctionadesignations
  getAllFunctionalDesignations() {
    this.functionalDesignationService.getFunctionalDesignation().subscribe((data: any) => {
      this.dataList = data.response;
      // console.log(this.dataList);
    });
  }
  //getJobDesignationData by id
  getJobDesignationData(id: any) {
    this.jobBandDesignationService.getJobbandDesignationData(id).subscribe((data: any) => {
      this.jobBandDesignation = data.response;
      // console.log(this.jobBandDesignation);
    });

  }
  //update jobDesignationData
  save() {
    this.jobBandDesignationService.updateJobbandDesignation(this.jobBandDesignation).subscribe((data: any) => {
      // console.log(data);
      //  console.log(this.jobBandDesignation);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
      this.onClose();
    });
  }
  //close modal
  onClose() {
    this.close.emit();
  }
}

