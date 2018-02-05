import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FunctionalDesignationService } from '../functionaldesignation.service';
import { FunctionalDesignationform } from '../functionaldesignation.form';
import { FunctionalDesignation } from '../../../shared/entities/functionaldesignation';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';



@Component({
  selector: 'app-edit-functional-designation',
  templateUrl: './edit-functional-designation.component.html',
  styleUrls: ['./edit-functional-designation.component.css']
})
export class EditFunctionalDesignationComponent implements OnInit {

  myForm: any = FunctionalDesignationform.init();
  dataList: any = [];
  id: any;
  businessunit: any = [];
  dept: any = [];
  subdept: any = [];
  functions: any = [];
  subfunctions: any = [];
  costcode: any = [];
  //coummunication between two components
  @Input() functionalDesignation: FunctionalDesignation;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private functionalDesignationService: FunctionalDesignationService , private alertService:AlertService) {
    FunctionalDesignationform.edit(this.myForm);
    this.getAllBussinessunit();
    this.getAlldepartments();
  }

  ngOnInit() {
  }
  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['functionalDesignation']) {
      this.functionalDesignation = changes['functionalDesignation'].currentValue;
      // console.log(this.functionalDesignation.id);
      this.getFunctiontalDesignationData(this.functionalDesignation.id);
    }
  }

  //to get all bussinessunit
  getAllBussinessunit() {
    this.functionalDesignationService.getBusinessUnit().subscribe((data: any) => {
      this.businessunit = data.response;
      // console.log(this.businessunit);
    });
  }
  //getAlldepartments 
  getAlldepartments() {
    this.functionalDesignationService.getDept().subscribe((data: any) => {
      this.dept = data.response;
      // console.log(this.dept);
      this.getAllSubdepartments(data.response[0].id);
    });
  }
//getAllSubdepartments by dept id
  getAllSubdepartments(id) {
    this.functionalDesignationService.getSubDeptdata(id).subscribe((data: any) => {
      this.subdept = data.response;
      // console.log(this.subdept);;
      this.getAllFunctions(data.response[0].id);
    });
  }
//getAllFunctions by subdept id
  getAllFunctions(data) {
    this.functionalDesignationService.getFunctionsbysubdept(data).subscribe((data: any) => {
      this.functions = data.response;
      // console.log(this.functions);
      this.getAllsubfunctions(data.response[0].id)
    });
  }
//getAllsubfunctions by function id
  getAllsubfunctions(data) {
    this.functionalDesignationService.getSubfunctionbyFunction(data).subscribe((data: any) => {
      this.subfunctions = data.response;
      // console.log(this.subfunctions);
      this.getAllCostcode(data.response[0].id)
    });
  }

//getAllCostcode by sub function id
  getAllCostcode(data) {
    this.functionalDesignationService.getCostCode(data).subscribe((data: any) => {
      this.costcode = data.response;
      // console.log(this.costcode);
    });
  }
//getFunctiontalDesignationData
  getFunctiontalDesignationData(id: any) {
    this.functionalDesignationService.getFunctionDesignationData(id).subscribe((data: any) => {
      this.functionalDesignation = data.response;
      // console.log(this.functionalDesignation);
    });

  }
  // to update the functionaldesignation
  save() {
    this.functionalDesignationService.updateFunctionDesignation(this.functionalDesignation).subscribe((data: any) => {
      // console.log(data);
      //  console.log(this.functionalDesignation);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
      this.onClose();
    });
  }
  //close the popup
  onClose() {
    this.close.emit();
  }
}

