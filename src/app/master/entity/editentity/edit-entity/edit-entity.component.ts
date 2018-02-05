import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { EntityForm } from '../../entity.form';
import { EntityService } from '../../entity.service';
import { Entity } from '../../../../shared/entities/entity';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';


@Component({
  selector: 'app-edit-entity',
  templateUrl: './edit-entity.component.html',
  styleUrls: ['./edit-entity.component.css']
})
export class EditEntityComponent implements OnInit {
  myForm: any = EntityForm.init();
  //communication between components
  @Input()
  entity: Entity;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private entityService: EntityService , private alertService:AlertService) {
    EntityForm.edit(this.myForm);
  }
  //to get the object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['entity']) {
      this.entity = changes['entity'].currentValue;
      // console.log(this.entity);
      this.getEntity(this.entity.id);
    }
  }

  ngOnInit() {
  }
  //to save the entity 
  save() {
    this.entityService.updateEntity(this.entity).subscribe((data: any) => {
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
  //to get the entity by id
  getEntity(data) {
    this.entityService.getEntityData(data).subscribe((data: any) => {
      this.entity = data.response;
      // console.log(this.entity);
    });
  }
  //to close the popup
  onClose() {
    this.close.emit();
  }


}
