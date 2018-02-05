import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { DepartmentService } from '../../department.service';
import { SubDepartmentForm } from '../subdepartment.form';
import { SubDepartment } from '../../../../shared/entities/sub-department';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';


@Component({
  selector: 'app-add-sub-department',
  templateUrl: './add-sub-department.component.html',
  styleUrls: ['./add-sub-department.component.css']
})
export class AddSubDepartmentComponent implements OnInit {

  myForm: any = SubDepartmentForm.init();
  dataList: any = [];
  id: any;
  subDepartment: SubDepartment = new SubDepartment();
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private departmentService: DepartmentService, private alertService :AlertService) {
    SubDepartmentForm.edit(this.myForm);
    this.getAllSubDepartments();
  }

  ngOnInit() {
  }
  ngOnChanges() {

  }
  //to get all subdepartments
  getAllSubDepartments() {
    this.departmentService.getDepartments().subscribe((data: any) => {
      this.dataList = data.response;
      // console.log(this.dataList);
    });
  }
  //to save the sub department

  save() {
    this.departmentService.saveSubDepartment(this.subDepartment).subscribe((data: any) => {
      // console.log(data);
      // console.log(this.subDepartment);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
      this.onClose();
    });
  }
  //to close the modal popup
  onClose() {
    this.close.emit();
  }
}