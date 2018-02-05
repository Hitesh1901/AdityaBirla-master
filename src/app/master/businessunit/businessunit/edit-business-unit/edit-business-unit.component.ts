import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { BusinessUnit } from '../../../../shared/entities/businessunit';
import { BusinessUnitForm } from '../../businessunit.form';
import { BusinessUnitServiceService } from '../../business-unit.service';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-edit-business-unit',
  templateUrl: './edit-business-unit.component.html',
  styleUrls: ['./edit-business-unit.component.css']
})
export class EditBusinessUnitComponent implements OnInit {

  myForm: any = BusinessUnitForm.init();
  //component communication we use input
  @Input()
  businessUnit: BusinessUnit;
  //event emmiter 
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private businessUnitServiceService: BusinessUnitServiceService ,  private alertService :AlertService) {
    BusinessUnitForm.edit(this.myForm);
  }
  //to get the businessunit object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['businessUnit']) {
      this.businessUnit = changes['businessUnit'].currentValue;
      // console.log(this.businessUnit);
      this.getBusinessData(this.businessUnit.id);
    }
  }

  ngOnInit() {
  }

  back() {
    this.close.emit()
  }
  //get the buiness unit by the id 
  getBusinessData(data) {
    this.businessUnitServiceService.getBusinessUnitData(data).subscribe((data: any) => {
      this.businessUnit = data.response;
      // console.log(this.businessUnit);
    });
  }
  //to update the business unit
  save() {
    this.businessUnitServiceService.updateBusinessUnit(this.businessUnit).subscribe((data: any) => {
      // console.log(data);
      // console.log(this.businessUnit);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
      this.onClose();
    });
  }
  //to close the popu

  onClose() {
    this.close.emit();
  }


}
