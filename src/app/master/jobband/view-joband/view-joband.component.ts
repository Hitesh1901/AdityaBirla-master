import { Component, OnInit ,TemplateRef ,Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { JobBandService } from '../jobband.service';
import { JobBand } from '../../../shared/entities/jobband';

@Component({
  selector: 'app-view-joband',
  templateUrl: './view-joband.component.html',
  styleUrls: ['./view-joband.component.css']
})
export class ViewJobandComponent implements OnInit {

  isCollapsed: boolean = false;  
  iFilter: any = "";
  itemResource :any;
  items = [];
  itemCount = 0;
  jobBand:any = new JobBand();
   selectedItem: any;
  modalRef: BsModalRef;
  item:any;
  constructor(private jobBandService:JobBandService , private modalService: BsModalService) {
    this.getAllJobands();
   }

  ngOnInit() {
  }
  //get all jobbands
  getAllJobands() {
    this.jobBandService.getJobband().subscribe((data: any) => {
      this.items =data.obj.response;
      // console.log(this.items);
      this.itemResource= new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count);
    });
  }
  //open
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  //edit
  openModal1(template1,item){
    this.modalRef = this.modalService.show(template1);
    this.selectedItem = item;
    this.jobBand = Object.assign({}, this.selectedItem);
  }
  //close the modal
  onClose() {
    this.modalRef.hide();
    this.getAllJobands();
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
//to clear the input text in search
clearSearch() {
  this.iFilter = null;
 }
}