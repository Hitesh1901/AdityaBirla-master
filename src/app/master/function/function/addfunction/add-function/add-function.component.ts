import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FunctionService } from '../../../function.service';
import { Functionform } from '../../function.form';
import { Function } from '../../../../../shared/entities/function';
import { DepartmentService } from '../../../../department/department.service';
import { AlertService } from '../../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../../shared/alerts/_models/alert';


@Component({
  selector: 'app-add-function',
  templateUrl: './add-function.component.html',
  styleUrls: ['./add-function.component.css']
})
export class AddFunctionComponent implements OnInit {

  myForm: any = Functionform.init();
  dataList: any = [];
  id: any;
  functions: Function = new Function();
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter(); 
  constructor(private functionService: FunctionService, private departmentService: DepartmentService , private alertService:AlertService) {
    Functionform.edit(this.myForm);
    this.getAllSubdepartments();
  }

  ngOnInit() {
  }
  //get all subdepartments
  getAllSubdepartments() {
    this.departmentService.getSubDepartments().subscribe((data: any) => {
      this.dataList = data.response;
      // console.log(this.dataList);
    });
  }
  // to save the function
  save() {
    this.functionService.saveFunction(this.functions).subscribe((data: any) => {
      // console.log(data);
      //  console.log(this.functions);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
      this.onClose();
    });
  }
  //to close the emit
  onClose() {
    this.close.emit();
  }
}

