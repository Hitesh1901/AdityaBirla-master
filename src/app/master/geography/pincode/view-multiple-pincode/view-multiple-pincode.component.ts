import { Component, OnInit ,TemplateRef ,Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GeographyService } from '../../geography.service';
import { Pincode } from '../../../../shared/entities/pincode';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';

@Component({
  selector: 'app-view-multiple-pincode',
  templateUrl: './view-multiple-pincode.component.html',
  styleUrls: ['./view-multiple-pincode.component.css']
})
export class ViewMultiplePincodeComponent implements OnInit {
  iFilter: any = "";
  dataList:any = [];
  itemResource :any;
  items = [];
  itemCount = 0;
  pincode:any = new Pincode();
   selectedItem: any;
  modalRef: BsModalRef;
  item:any;
  isCollapsed: boolean = false;
  
  constructor(private geographyService:GeographyService , private modalService: BsModalService) {
    this.getAllPincodes();
   }

  ngOnInit() {
  }
  //get all pincode
  getAllPincodes() {
    this.geographyService.getPincode().subscribe((data: any) => {
      this.items =data.response;
      this.itemResource= new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count);
    });
  }
  //add modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  //edit moda;
  openModal1(template1, item){
    this.modalRef = this.modalService.show(template1);
    this.selectedItem = item;
    this.pincode = Object.assign({}, this.selectedItem);
  }
  //close the popup
    onClose() {
      this.modalRef.hide();
      this.getAllPincodes();
    }
    //to reload the data in datalist
    reloadItems(params) {
      if(this.itemResource){
        this.itemResource.query(params).then(items => this.items = items);
      }
      
  }
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
  //to clear the search in search input
  clearSearch() {
    this.iFilter = null;
   }

  }
