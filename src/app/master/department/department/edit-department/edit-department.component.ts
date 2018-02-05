import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { DepartmentService } from '../../department.service';
import { Department } from '../../../../shared/entities/department';
import { Departmentform } from '../department.form';
import { EntityService } from '../../../entity/entity.service';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';



@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
  myForm: any = Departmentform.init();
  dataList: any = [];
  id: any;
  //to communicate between components
  @Input() department: Department;
  //event emitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private departmentService: DepartmentService, private entityService: EntityService , private alertService :AlertService) {
    Departmentform.edit(this.myForm);
    this.getAllEntity();
  }

  ngOnInit() {
  }
  //to get the object from parent
  ngOnChanges(changes: SimpleChanges) {
    if (changes['department']) {
      this.department = changes['department'].currentValue;
      // console.log(this.department.id);
      this.getDepartmentData(this.department.id);
    }
  }
  //get all entities
  getAllEntity() {
    this.entityService.getEntity().subscribe((data: any) => {
      this.dataList = data.response;
      // console.log(this.dataList);
    });
  }
//get department by id
  getDepartmentData(id: any) {
    this.departmentService.getDepartmentData(id).subscribe((data: any) => {
      this.department = data.response;
      // console.log(this.department);
    });

  }
  //to update the department
  save() {
    this.departmentService.updateDepartment(this.department).subscribe((data: any) => {
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

