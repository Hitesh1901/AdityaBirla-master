import { Component, OnInit, Input ,SimpleChanges ,EventEmitter ,Output} from '@angular/core';
import { Moduleform } from '../module.form';
import { ModuleService } from '../module.service';
import { Module } from '../../../shared/entities/module';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.css']
})
export class EditModuleComponent implements OnInit {

  
  myForm: any = Moduleform.init();
  dataList:any = [];
  id:any;
  //communicating between two components
  @Input()module:Module;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private moduleService:ModuleService , private alertService:AlertService)  { 
    Moduleform.edit(this.myForm); 
    this.getAllModule();
  }

  ngOnInit() {
  }
  //get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if(changes['module']) {
      this.module = changes['module'].currentValue;
      // console.log(this.module.moduleid);
      this.getModuleData(this.module.moduleid);
    }
  }
  //getAllModule
  getAllModule() {
    this.moduleService.getModule().subscribe((data: any) => {
      this.dataList =data.Response.module;
      // console.log(this.dataList);
    });
  }
 // getModuleData by id
  getModuleData(id:any){
    this.moduleService.getModuleData(id).subscribe((data: any) => {
      this.module = data.Response.module[0];
      // console.log(this.module);
  });

}
//update module
save(){
  this.moduleService.updateModule(this.module).subscribe((data: any) => {
    // console.log(data);
    //  console.log(this.module);
    if(data.isstatus === false){
      this.alertService.alert(AlertType.Error,data.message)
      }else{
        this.alertService.alert(AlertType.Success,data.message)
      }
     this.onClose();
  });
}
//close the modal
onClose(){
  this.close.emit();
}
}

