import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FunctionService } from '../../../function.service';
import { Functionform } from '../../function.form';
import { Function } from '../../../../../shared/entities/function';
import { DepartmentService } from '../../../../department/department.service';
import { AlertService } from '../../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../../shared/alerts/_models/alert';


@Component({
  selector: 'app-edit-function',
  templateUrl: './edit-function.component.html',
  styleUrls: ['./edit-function.component.css']
})
export class EditFunctionComponent implements OnInit {

  myForm: any = Functionform.init();
  dataList: any = [];
  id: any;
  //communication between between components
  @Input() functions: Function;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private functionService: FunctionService, private departmentService: DepartmentService , private alertService:AlertService) {
    Functionform.edit(this.myForm);
    this.getAllSubdepartments();
  }

  ngOnInit() {
  }
  //get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['functions']) {
      this.functions = changes['functions'].currentValue;
      // console.log(this.functions.id);
      this.getFunctiontData(this.functions.id);
    }
  }
  //get all subdepartments
  getAllSubdepartments() {
    this.departmentService.getSubDepartments().subscribe((data: any) => {
      this.dataList = data.response;
      // console.log(this.dataList);
    });
  }
  //get function data
  getFunctiontData(id: any) {
    this.functionService.getFunctionData(id).subscribe((data: any) => {
      this.functions = data.response;
      // console.log(this.functions);
    });

  }
  //to update the function
  save() {
    this.functionService.updateFunction(this.functions).subscribe((data: any) => {
      // console.log(data);
      // console.log(this.functions);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
      this.onClose();
    });
  }
  //close the modal
  onClose() {
    this.close.emit();
  }
}

