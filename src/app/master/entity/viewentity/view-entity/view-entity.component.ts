import { Component, OnInit ,TemplateRef ,Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { EntityService } from '../../entity.service';
import { Entity } from '../../../../shared/entities/entity';

@Component({
  selector: 'app-view-entity',
  templateUrl: './view-entity.component.html',
  styleUrls: ['./view-entity.component.css']
})
export class ViewEntityComponent implements OnInit {

  entity: Entity;
  dataList:any;
   selectedItem: any;
  modalRef: BsModalRef;
  item:any;
  isCollapsed: boolean = false;
  iFilter: any = "";
  itemResource :any;
  items = [];
  itemCount = 0;
  constructor(private entityService:EntityService , private modalService: BsModalService) {
    this.getEntities();
   }

  ngOnInit() {
   
  }
  //to get all entities
  getEntities() {
    this.entityService.getEntity().subscribe((data: any) => {
      this.items =data.response;
      // console.log(this.items);
      this.itemResource= new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count);
    });
  }
  //open add model
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  //open edit modal
  openModal1(template1 , item:any){
    this.modalRef = this.modalService.show(template1);
    this.selectedItem = item;
    this.entity = Object.assign({}, this.selectedItem);
    // console.log(item);
  
  }
  collapsed(event: any): void {
    // console.log(event);
  }
  
  expanded(event: any): void {
    // console.log(event);
  }
  //to reaload the data in table
  reloadItems(params) {
    if(this.itemResource){
      this.itemResource.query(params).then(items => this.items = items);
    }
    
}

// special properties:

rowClick(rowEvent) {
    console.log('Clicked: ' + rowEvent.row.item.name);
}

rowDoubleClick(rowEvent) {
    alert('Double clicked: ' + rowEvent.row.item.name);
}

rowTooltip(item) { 
  return item; 
}
//to clear the search input
clearSearch() {
  this.iFilter = null;
 }
 //to close the modal
 onClose() {
  this.modalRef.hide();
}

  }
 