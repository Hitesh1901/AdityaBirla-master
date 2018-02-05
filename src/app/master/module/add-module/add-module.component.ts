import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Moduleform } from '../module.form';
import { ModuleService } from '../module.service';
import { Module } from '../../../shared/entities/module';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {

  myForm: any = Moduleform.init();
  dataList: any = [];
  id: any;
  module: Module = new Module();
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private moduleService: ModuleService , private alertService:AlertService) {
    Moduleform.edit(this.myForm);
    this.getAllModule();
  }

  ngOnInit() {
  }
  //get all modules
  getAllModule() {
    this.moduleService.getModule().subscribe((data: any) => {
      this.dataList = data.Response.module;
      // console.log(this.dataList);
    });
  }
  //save the module

  save() {
    this.moduleService.saveModule(this.module).subscribe((data: any) => {
      // console.log(data);
      // console.log(this.module);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
      this.onClose();
    });
  }
  //close the module
  onClose() {
    this.close.emit();
  }
}

