import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BusinessUnit } from '../../../../shared/entities/businessunit';
import { BusinessUnitForm } from '../../businessunit.form';
import { BusinessUnitServiceService } from '../../business-unit.service';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-add-business-unit',
  templateUrl: './add-business-unit.component.html',
  styleUrls: ['./add-business-unit.component.css']
})
export class AddBusinessUnitComponent implements OnInit {
  myForm: any = BusinessUnitForm.init();
  businessUnit: BusinessUnit = new BusinessUnit();
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private businessUnitServiceService: BusinessUnitServiceService , private alertService :AlertService) {
    BusinessUnitForm.edit(this.myForm);
  }

  ngOnInit() {
  }
  //to save the business unit
  save() {
    this.businessUnitServiceService.saveBusinessUnit(this.businessUnit).subscribe((data: any) => {
      // console.log(data);
      // console.log(this.businessUnit);
      if(data.isstatus === false){
      this.alertService.alert(AlertType.Error,data.message)
      }else{
        this.alertService.alert(AlertType.Success,data.message)
      }
    });
  }
 
  //to close the popup
  onClose() {
    this.close.emit();
  }
}
