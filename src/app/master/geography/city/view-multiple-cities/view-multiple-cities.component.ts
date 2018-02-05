import { Component, OnInit ,TemplateRef ,Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GeographyService } from '../../geography.service';
import { City } from '../../../../shared/entities/city';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';



@Component({
  selector: 'app-view-multiple-cities',
  templateUrl: './view-multiple-cities.component.html',
  styleUrls: ['./view-multiple-cities.component.css']
})
export class ViewMultipleCitiesComponent implements OnInit {
  iFilter: any = "";
  dataList:any = [];
  itemResource :any;
  items = [];
  itemCount = 0;
  city: City;
   selectedItem: any;
  modalRef: BsModalRef;
  item:any;
  isCollapsed: boolean = false;
  
  constructor(private geographyService:GeographyService , private modalService: BsModalService) {
    this.getCities();
   }

  ngOnInit() {
  }
  //to get all cities
  getCities() {
    this.geographyService.getCities().subscribe((data: any) => {
      this.items =data.response;
      // console.log(this.items)
      this.itemResource= new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count);
    });
  }
  //add modal open
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  //edit modal opn
  openModal1(template1 , item:any){
    this.modalRef = this.modalService.show(template1);
    this.selectedItem = item;
    this.city = Object.assign({}, this.selectedItem);
    // console.log(item.id);
  
  }
  //to reload the data in datatable
  reloadItems(params) {
    if(this.itemResource){
      this.itemResource.query(params).then(items => this.items = items);
    }
    
}
//to close the datatable
  onClose() {
    this.modalRef.hide();
    this.getCities();
  }
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
 