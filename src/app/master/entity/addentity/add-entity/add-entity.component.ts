import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { EntityForm } from '../../entity.form';
import { EntityService } from '../../entity.service';
import { Entity } from '../../../../shared/entities/entity';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-add-entity',
  templateUrl: './add-entity.component.html',
  styleUrls: ['./add-entity.component.css']
})
export class AddEntityComponent implements OnInit {

  myForm: any = EntityForm.init();
  entity:Entity = new Entity();
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
    constructor(private entityService : EntityService , private alertService:AlertService) {
      EntityForm.edit(this.myForm); 
     }
  
    ngOnInit() {
    }
    //to save the entity
    save(){
      this.entityService.saveEntity(this.entity).subscribe((data: any) => {
        // console.log(data);
        //  console.log(this.entity);
        if(data.isstatus === false){
          this.alertService.alert(AlertType.Error,data.message)
          }else{
            this.alertService.alert(AlertType.Success,data.message)
          }
          this.onClose();
      });
    }
    //to close the modal popup
    onClose(){
      this.close.emit();
    }
  }