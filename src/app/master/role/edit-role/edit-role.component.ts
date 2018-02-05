import { Component, OnInit, Input ,SimpleChanges ,EventEmitter ,Output} from '@angular/core';
import { Role } from '../../../shared/entities/role';
import { RoleService } from '../role.service';
import { Roleform } from '../role.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';


@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {

 
  myForm: any = Roleform.init();
  dataList:any = [];
  id:any;
  //comunicating between two components
  @Input()role:Role;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private roleService:RoleService , private alertService:AlertService)  { 
    Roleform.edit(this.myForm); 
  }

  ngOnInit() {
  }
  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if(changes['role']) {
      this.role = changes['role'].currentValue;
      // console.log(this.role.roleid);
      this.getRoleData(this.role.roleid);
    }
  }
//getRoleData by id
  getRoleData(id:any){
    this.roleService.getRoleData(id).subscribe((data: any) => {
      this.role = data.response.role[0];
      // console.log(this.role);
  });

}
//save the role
save(){
  this.roleService.updateRole(this.role).subscribe((data: any) => {
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
//close the modal
onClose(){
  this.close.emit();
}
}

