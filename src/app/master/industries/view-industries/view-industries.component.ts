import { Component, OnInit ,TemplateRef ,Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { IndustriesService } from '../industries.service';
import { Industries } from '../../../shared/entities/industries';

@Component({
  selector: 'app-view-industries',
  templateUrl: './view-industries.component.html',
  styleUrls: ['./view-industries.component.css']
})
export class ViewIndustriesComponent implements OnInit {

  isCollapsed: boolean = false;  
  iFilter: any = "";
  itemResource :any;
  items = [];
  itemCount = 0;
  industries:any = new Industries();
   selectedItem: any;
  modalRef: BsModalRef;
  item:any;
  constructor(private industriesService:IndustriesService , private modalService: BsModalService) {
    this.getAllIndustries();
   }

  ngOnInit() {
  }
  //get all industries
  getAllIndustries() {
    this.industriesService.getIndustries().subscribe((data: any) => {
      this.items =data.response;
      // console.log(this.items);
      this.itemResource= new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count);
    });
  }
  //open add 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  //open edit
  openModal1(template1,item){
    this.modalRef = this.modalService.show(template1);
    this.selectedItem = item;
    this.industries = Object.assign({}, this.selectedItem);
  }
  //close the module
  onClose() {
    this.modalRef.hide();
    this.getAllIndustries();
  }
  //reload the data in datatable
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
//to clear the search input
clearSearch() {
  this.iFilter = null;
 }
}