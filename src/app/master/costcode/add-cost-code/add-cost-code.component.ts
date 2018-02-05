import { Component, OnInit, Input ,SimpleChanges ,EventEmitter ,Output} from '@angular/core';
import { FunctionService } from '../../function/function.service';
import { CostCodeform } from '../costcode.form';
import { CostCode } from '../../../shared/entities/costcode';
import { CostCodeService } from '../costcode.service';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
@Component({
  selector: 'app-add-cost-code',
  templateUrl: './add-cost-code.component.html',
  styleUrls: ['./add-cost-code.component.css']
})
export class AddCostCodeComponent implements OnInit {

  
  myForm: any = CostCodeform.init();
  dataList:any = [];
  id:any;
  costCode:CostCode = new CostCode();
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private functionService:FunctionService , private costCodeService: CostCodeService, private alertService :AlertService )  { 
    CostCodeform.edit(this.myForm); 
    this.getAllSubFunctions();
  }

  ngOnInit() {
  }
  ngOnChanges() {
   
  }
  getAllSubFunctions() {
    this.functionService.getSubFunctions().subscribe((data: any) => {
      this.dataList =data.response;
      console.log(this.dataList);
    });
  }

save(){
  this.costCodeService.saveCostCode(this.costCode).subscribe((data: any) => {
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

