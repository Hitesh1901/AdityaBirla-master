import { Component, OnInit ,TemplateRef ,Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { CostCode } from '../../../shared/entities/costcode';
import { CostCodeService } from '../costcode.service';




@Component({
  selector: 'app-view-cost-code',
  templateUrl: './view-cost-code.component.html',
  styleUrls: ['./view-cost-code.component.css']
})
export class ViewCostCodeComponent implements OnInit {

  isCollapsed: boolean = false;  
  iFilter: any = "";
  itemResource :any;
  items = [];
  itemCount = 0;
  costCode:any = new CostCode();
   selectedItem: any;
  modalRef: BsModalRef;
  item:any;
  constructor(private costCodeService:CostCodeService , private modalService: BsModalService) {
    this.getAllCostCodes();
   }

  ngOnInit() {
  }
  
  getAllCostCodes() {
    this.costCodeService.getCostCode().subscribe((data: any) => {
      this.items =data.response;
      console.log(this.items);
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
    this.costCode = Object.assign({}, this.selectedItem);
  }
  onClose() {
    this.modalRef.hide();
    this.getAllCostCodes();
  }
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
