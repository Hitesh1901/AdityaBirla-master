import { Component, OnInit ,TemplateRef ,Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { StatusReason } from '../../../shared/entities/statusreason';
import { StatusReasonService } from '../status-reason.service';


@Component({
  selector: 'app-view-status-reason',
  templateUrl: './view-status-reason.component.html',
  styleUrls: ['./view-status-reason.component.css']
})
export class ViewStatusReasonComponent implements OnInit {

  isCollapsed: boolean = false;  
  iFilter: any = "";
  itemResource :any;
  items = [];
  itemCount = 0;
  statusReason:any = new StatusReason();
   selectedItem: any;
  modalRef: BsModalRef;
  item:any;
  constructor(private statusReasonService:StatusReasonService , private modalService: BsModalService) {
    this.getAllStatusReason();
   }

  ngOnInit() {
  }
  //getAllStatusReason
  getAllStatusReason() {
    this.statusReasonService.getStatusReason().subscribe((data: any) => {
      this.items =data.response;
      // console.log(this.items);
      this.itemResource= new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count);
    });
  }
  //add
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  //edit
  openModal1(template1,item){
    this.modalRef = this.modalService.show(template1);
    this.selectedItem = item;
    this.statusReason = Object.assign({}, this.selectedItem);
  }
  //close the modal
  onClose() {
    this.modalRef.hide();
    this.getAllStatusReason();
  }
  //reload the data in datatable
  reloadItems(params) {
    if(this.itemResource){
      this.itemResource.query(params).then(items => this.items = items);
    }
    
}

// special properties:

rowClick(rowEvent) {
    // console.log('Clicked: ' + rowEvent.row.item.name);
}

rowDoubleClick(rowEvent) {
    // alert('Double clicked: ' + rowEvent.row.item.name);
}

rowTooltip(item) { 
  return item; 
}
collapsed(event: any): void {
  // console.log(event);
}

expanded(event: any): void {
  // console.log(event);
}
//clear search input
clearSearch() {
  this.iFilter = null;
 }
}