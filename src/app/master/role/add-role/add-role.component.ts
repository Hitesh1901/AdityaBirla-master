import { Component, OnInit, Input ,SimpleChanges ,EventEmitter ,Output} from '@angular/core';
import { Role } from '../../../shared/entities/role';
import { RoleService } from '../role.service';
import { Roleform } from '../role.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  
  myForm: any = Roleform.init();
  dataList:any = [];
  id:any;
  role:Role = new Role();
  //event emitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private roleService:RoleService , private alertService:AlertService)  { 
    Roleform.edit(this.myForm); 
  }

  ngOnInit() {
  }
//save role
save(){
  this.roleService.saveRole(this.role).subscribe((data: any) => {
    // console.log(data);
    //  console.log(this.role);
    if(data.isstatus === false){
      this.alertService.alert(AlertType.Error,data.response.message)
      }else{
        this.alertService.alert(AlertType.Success,data.response.message)
      }
     this.onClose();

  });
}
//close the role
onClose(){
  this.close.emit();
}
}

