import { Component, OnInit, Input ,SimpleChanges ,EventEmitter ,Output} from '@angular/core';
import { FunctionService } from '../../../function.service';
import { SubFunctionform } from '../../subfunction.form';
import { SubFunction } from '../../../../../shared/entities/sub-function';
import { AlertService } from '../../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-add-sub-function',
  templateUrl: './add-sub-function.component.html',
  styleUrls: ['./add-sub-function.component.css']
})
export class AddSubFunctionComponent implements OnInit {

  
  myForm: any = SubFunctionform.init();
  dataList:any = [];
  id:any;
  subfunctions:SubFunction = new SubFunction();
  //event emitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private functionService:FunctionService , private alertService:AlertService)  { 
    SubFunctionform.edit(this.myForm); 
    this.getAllFunctions();
  }

  ngOnInit() {
  }
//get all functions
  getAllFunctions() {
    this.functionService.getFunctions().subscribe((data: any) => {
      this.dataList =data.response;
      // console.log(this.dataList);
    });
  }
//to save the subfunction
save(){
  this.functionService.saveSubFunction(this.subfunctions).subscribe((data: any) => {
    // console.log(data);
    //  console.log(this.subfunctions);
    if(data.isstatus === false){
      this.alertService.alert(AlertType.Error,data.message)
      }else{
        this.alertService.alert(AlertType.Success,data.message)
      }
    
     this.onClose();
  });
}
//to close the modal popup
onClose(){
  this.close.emit();
}
}

