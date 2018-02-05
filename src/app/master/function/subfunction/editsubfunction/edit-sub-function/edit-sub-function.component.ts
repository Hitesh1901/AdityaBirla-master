import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FunctionService } from '../../../function.service';
import { SubFunctionform } from '../../subfunction.form';
import { SubFunction } from '../../../../../shared/entities/sub-function';
import { AlertService } from '../../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../../shared/alerts/_models/alert';


@Component({
  selector: 'app-edit-sub-function',
  templateUrl: './edit-sub-function.component.html',
  styleUrls: ['./edit-sub-function.component.css']
})
export class EditSubFunctionComponent implements OnInit {


  myForm: any = SubFunctionform.init();
  dataList: any = [];
  id: any;
  //communicating between components
  @Input() subfunctions: SubFunction;
  //event emitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private functionService: FunctionService , private alertService:AlertService) {
    SubFunctionform.edit(this.myForm);
    this.getAllFunctions();
  }

  ngOnInit() {
  }
  //to get object from parent objecct
  ngOnChanges(changes: SimpleChanges) {
    if (changes['subfunctions']) {
      this.subfunctions = changes['subfunctions'].currentValue;
      // console.log(this.subfunctions.id);
      this.getSubFunctiontData(this.subfunctions.id);
    }
  }
  //get all functions
  getAllFunctions() {
    this.functionService.getFunctions().subscribe((data: any) => {
      this.dataList = data.response;
      // console.log(this.dataList);
    });
  }
  //get subfunctiondata by id
  getSubFunctiontData(id: any) {
    this.functionService.getSubFunctionData(id).subscribe((data: any) => {
      this.subfunctions = data.response;
      // console.log(this.subfunctions);
    });

  }
  //to update the subfunction
  save() {
    this.functionService.updateSubFunction(this.subfunctions).subscribe((data: any) => {
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
  //to close the modal 
  onClose() {
    this.close.emit();
  }
}

