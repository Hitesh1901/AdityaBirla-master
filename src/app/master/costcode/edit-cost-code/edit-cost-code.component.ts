import { Component, OnInit, Input ,SimpleChanges ,EventEmitter ,Output} from '@angular/core';
import { FunctionService } from '../../function/function.service';
import { CostCodeform } from '../costcode.form';
import { CostCode } from '../../../shared/entities/costcode';
import { CostCodeService } from '../costcode.service';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-edit-cost-code',
  templateUrl: './edit-cost-code.component.html',
  styleUrls: ['./edit-cost-code.component.css']
})
export class EditCostCodeComponent implements OnInit {

  myForm: any = CostCodeform.init();
  dataList:any = [];
  id:any;
  @Input()costCode:CostCode;
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private functionService:FunctionService , private costCodeService: CostCodeService , private alertService :AlertService)  { 
    CostCodeform.edit(this.myForm); 
    this.getAllSubFunctions();
  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes['costCode']) {
      this.costCode = changes['costCode'].currentValue;
      console.log(this.costCode.id);
      this.getCostCodeData(this.costCode.id);
    }
  }
  getAllSubFunctions() {
    this.functionService.getSubFunctions().subscribe((data: any) => {
      this.dataList =data.response;
      console.log(this.dataList);
    });
  }

  getCostCodeData(id:any){
    this.costCodeService.getCostCodeData(id).subscribe((data: any) => {
      this.costCode = data.response;
      console.log(this.costCode);
  });

}
save(){
  this.costCodeService.updateCostCode(this.costCode).subscribe((data: any) => {
    console.log(data);
     console.log(this.costCode);
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

