import { Component, OnInit ,TemplateRef ,Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { EmployerService } from '../employer.service';
import { Employer } from '../../../shared/entities/employer';


@Component({
  selector: 'app-view-employer',
  templateUrl: './view-employer.component.html',
  styleUrls: ['./view-employer.component.css']
})
export class ViewEmployerComponent implements OnInit {

  isCollapsed: boolean = false;  
  iFilter: any = "";
  itemResource :any;
  items = [];
  itemCount = 0;
  employer:any = new Employer();
   selectedItem: any;
  modalRef: BsModalRef;
  item:any;
  constructor(private employerService:EmployerService , private modalService: BsModalService) {
    this.getAllEmployers();
   }

  ngOnInit() {
  }
  
  //to get all employers
  getAllEmployers() {
    this.employerService.getEmployer().subscribe((data: any) => {
      this.items =data.response;
      // console.log(this.items);
      this.itemResource= new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count);
    });
  }
  //to open the add modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  //to open the edit modal
  openModal1(template1,item){
    this.modalRef = this.modalService.show(template1);
    this.selectedItem = item;
    this.employer = Object.assign({}, this.selectedItem);
  }
  //to close the popu[]
  onClose() {
    this.modalRef.hide();
    this.getAllEmployers();
  }
  //to reload the data in datatable
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
//to clear the search input
clearSearch() {
  this.iFilter = null;
 }
}