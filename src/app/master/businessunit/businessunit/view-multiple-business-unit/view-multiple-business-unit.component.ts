import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BusinessUnitServiceService } from '../../business-unit.service';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { BusinessUnit } from '../../../../shared/entities/businessunit';

@Component({
  selector: 'app-view-multiple-business-unit',
  templateUrl: './view-multiple-business-unit.component.html',
  styleUrls: ['./view-multiple-business-unit.component.css']
})
export class ViewMultipleBusinessUnitComponent implements OnInit {

  businessUnit: BusinessUnit = new BusinessUnit()
  dataList: any;
  selectedItem: any;
  modalRef: BsModalRef;
  item: any;
  isCollapsed: boolean = false;
  iFilter: any = "";
  itemResource: any;
  items = [];
  itemCount = 0;
  constructor(private businessUnitServiceService: BusinessUnitServiceService, private modalService: BsModalService) {
    this.getCities();
  }

  ngOnInit() {
  }
  //to get multiple cities
  getCities() {
    this.businessUnitServiceService.getBusinessUnit().subscribe((data: any) => {
      this.items = data.response;
      // console.log(this.items);
      this.itemResource = new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count);
    });
  }
  //to open modal add
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModa3(template3: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template3);
  }
  //to open modal edit
  openModal1(template1, item: any) {
    this.modalRef = this.modalService.show(template1);
    this.selectedItem = item;
    this.businessUnit = Object.assign({}, this.selectedItem);
    // console.log(item);

  }
  //to collapse 
  collapsed(event: any): void {
    // console.log(event);
  }
  //to expand
  expanded(event: any): void {
    // console.log(event);
  }
  //in data table to reaload the table data
  reloadItems(params) {
    if (this.itemResource) {
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
  //in search filter to clear search
  clearSearch() {
    this.iFilter = null;
  }
  // to close the modal popup
  onClose() {
    this.modalRef.hide();
    this.getCities();
  }

}
