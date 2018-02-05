import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FunctionalDesignationService } from '../functionaldesignation.service';
import { FunctionalDesignationform } from '../functionaldesignation.form';
import { FunctionalDesignation } from '../../../shared/entities/functionaldesignation';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-add-functional-designation',
  templateUrl: './add-functional-designation.component.html',
  styleUrls: ['./add-functional-designation.component.css']
})
export class AddFunctionalDesignationComponent implements OnInit {

  myForm: any = FunctionalDesignationform.init();
  dataList: any = [];
  id: any;
  businessunit: any = [];
  dept: any = [];
  subdept: any = [];
  functions: any = [];
  subfunctions: any = [];
  costcode: any = [];

  functionalDesignation: FunctionalDesignation = new FunctionalDesignation();
  //event emmitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private functionalDesignationService: FunctionalDesignationService , private alertService:AlertService) {
    FunctionalDesignationform.edit(this.myForm);
    this.getAllBussinessunit();
    this.getAlldepartments();




  }

  ngOnInit() {
  }
  //get allbusinnes unit
  getAllBussinessunit() {
    this.functionalDesignationService.getBusinessUnit().subscribe((data: any) => {
      this.businessunit = data.response;
      // console.log(this.businessunit);
    });
  }
  //get all departments
  getAlldepartments() {
    this.functionalDesignationService.getDept().subscribe((data: any) => {
      this.dept = data.response;
      // console.log(this.dept);


    });
  }
  //on select departments to get subdept by deptid
  subdeptt($event) {
    this.dept.forEach(element => {
      if ($event) {
        this.getAllSubdepartments($event.id);
      }
    });
  }
  //to get allsubdept by dept id
  getAllSubdepartments(id) {
    this.functionalDesignationService.getSubDeptdata(id).subscribe((data: any) => {
      this.subdept = data.response;
      // console.log(this.subdept);;
    });
  }
  //on select subdept to get function by subdeptid
  functionn($event) {
    this.subdept.forEach(element => {
      if ($event) {
        this.getAllFunctions($event.id);
      }
    });
  }
  //get all functions by subdeptid
  getAllFunctions(data) {
    this.functionalDesignationService.getFunctionsbysubdept(data).subscribe((data: any) => {
      this.functions = data.response;
      // console.log(this.functions);
    });
  }
  //on select function to get subfunction by functionid
  subfunctionn($event) {
    this.functions.forEach(element => {
      if ($event) {
        this.getAllsubfunctions($event.id);
      }
    });
  }
  //get all subfunctions by functionid
  getAllsubfunctions(data) {
    this.functionalDesignationService.getSubfunctionbyFunction(data).subscribe((data: any) => {
      this.subfunctions = data.response;
      // console.log(this.subfunctions);
    });
  }
  //on select subfunction to get costcode by subfunctionid
  costcodes($event) {
    this.subfunctions.forEach(element => {
      if ($event) {
        this.getAllCostcode($event.id);
      }
    });
  }
  //get all costcode by subfunctionid

  getAllCostcode(data) {
    this.functionalDesignationService.getCostCode(data).subscribe((data: any) => {
      this.costcode = data.response;
      // console.log(this.costcode);
    });
  }
  //to save the functional designation
  save() {
    this.functionalDesignationService.saveFunctionDesignation(this.functionalDesignation).subscribe((data: any) => {
      // console.log(data);
      // console.log(this.functionalDesignation);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
      this.onClose();
    });
  }
  //clost the modal
  onClose() {
    this.close.emit();
  }
}

