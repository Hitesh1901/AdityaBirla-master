import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { DepartmentService } from '../../department.service';
import { Department } from '../../../../shared/entities/department';
import { Departmentform } from '../department.form';
import { EntityService } from '../../../entity/entity.service';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  myForm: any = Departmentform.init();
  dataList: any = [];
  department: Department = new Department();
  //to event emitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private departmentService: DepartmentService, private entityService: EntityService , private alertService :AlertService) {
    Departmentform.edit(this.myForm);
    this.getEntities();
  }

  ngOnInit() {
  }
  //to get all entities
  getEntities() {
    this.entityService.getEntity().subscribe((data: any) => {
      this.dataList = data.response;
      // console.log(this.dataList);
    });
  }
  //to save the department
  save() {
    this.departmentService.saveDepartment(this.department).subscribe((data: any) => {
      // console.log(data);
      // console.log(this.department);
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