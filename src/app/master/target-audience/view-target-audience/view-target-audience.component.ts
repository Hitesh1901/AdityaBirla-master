import { Component, OnInit ,TemplateRef ,Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { TargetAudience } from '../../../shared/entities/target-audience';
import { TargetAudienceService } from '../taget-audience.service';


@Component({
  selector: 'app-view-target-audience',
  templateUrl: './view-target-audience.component.html',
  styleUrls: ['./view-target-audience.component.css']
})
export class ViewTargetAudienceComponent implements OnInit {

  isCollapsed: boolean = false;  
  iFilter: any = "";
  itemResource :any;
  items = [];
  itemCount = 0;
  targetAudience:any = new TargetAudience();
   selectedItem: any;
  modalRef: BsModalRef;
  item:any;
  constructor(private targetAudienceService:TargetAudienceService , private modalService: BsModalService) {
    this.getAllTargetAudience();
   }

  ngOnInit() {
  }
  //getAllTargetAudience
  getAllTargetAudience() {
    this.targetAudienceService.getTargetAudeince().subscribe((data: any) => {
      this.items =data.response.targetaudience;
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
    this.targetAudience = Object.assign({}, this.selectedItem);
  }
  onClose() {
    this.modalRef.hide();
    this.getAllTargetAudience();
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
//clear search input
clearSearch() {
  this.iFilter = null;
 }
}