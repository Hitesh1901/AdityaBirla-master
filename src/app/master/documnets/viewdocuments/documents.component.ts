import { Component, OnInit ,TemplateRef ,Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { DocumnetsService } from '../documnets.service';
import { Documents } from '../../../shared/entities/documents';



@Component({
  selector: 'app-multiple-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class ViewDocumnetsComponent implements OnInit {
  isCollapsed: boolean = false;  
  iFilter: any = "";
  dataList:any = [];
  itemResource :any;
  items = [];
  itemCount = 0;
  document:any = new Documents();
   selectedItem: any;
  modalRef: BsModalRef;
  item:any;
  constructor(private documnetsService:DocumnetsService , private modalService: BsModalService) {
    this.getAllDocuments();
   }

  ngOnInit() {
  }
  
  getAllDocuments() {
    this.documnetsService.getDocuments().subscribe((data: any) => {
      this.items =data.response;
      // console.log(this.items);
      this.itemResource= new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count);
    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModal1(template1,item){
    this.modalRef = this.modalService.show(template1);
    this.selectedItem = item;
    this.document = Object.assign({}, this.selectedItem);
  }
  onClose() {
    this.modalRef.hide();
    this.getAllDocuments();
  }
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
clearSearch() {
  this.iFilter = null;
 }
  }
