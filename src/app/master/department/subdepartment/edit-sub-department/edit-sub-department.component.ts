import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { DepartmentService } from '../../department.service';
import { SubDepartmentForm } from '../subdepartment.form';
import { SubDepartment } from '../../../../shared/entities/sub-department';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-edit-sub-department',
  templateUrl: './edit-sub-department.component.html',
  styleUrls: ['./edit-sub-department.component.css']
})
export class EditSubDepartmentComponent implements OnInit {

  myForm: any = SubDepartmentForm.init();
  dataList: any = [];
  id: any;
  //to communication between components
  @Input() subDepartment: SubDepartment;
  //to event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private departmentService: DepartmentService, private alertService :AlertService) {
    SubDepartmentForm.edit(this.myForm);
    this.getAllDepartments();
  }

  ngOnInit() {
  }
  //to get the object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['subDepartment']) {
      this.subDepartment = changes['subDepartment'].currentValue;
      console.log(this.subDepartment.id);
      this.getSubDepartmentData(this.subDepartment.id);
    }
  }
  //get all departments
  getAllDepartments() {
    this.departmentService.getDepartments().subscribe((data: any) => {
      this.dataList = data.response;
      console.log(this.dataList);
    });
  }
  //get subdepartment data
  getSubDepartmentData(id: any) {
    this.departmentService.getSubDepartmentData(id).subscribe((data: any) => {
      this.subDepartment = data.response;
      console.log(this.subDepartment);
    });

  }
  // to update the subdepartment
  save() {
    this.departmentService.updateSubDepartment(this.subDepartment).subscribe((data: any) => {
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

