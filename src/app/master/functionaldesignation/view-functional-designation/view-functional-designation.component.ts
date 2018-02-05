import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { FunctionalDesignationService } from '../functionaldesignation.service';
import { FunctionalDesignation } from '../../../shared/entities/functionaldesignation';


@Component({
  selector: 'app-view-functional-designation',
  templateUrl: './view-functional-designation.component.html',
  styleUrls: ['./view-functional-designation.component.css']
})
export class ViewFunctionalDesignationComponent implements OnInit {

  isCollapsed: boolean = false;
  iFilter: any = "";
  itemResource: any;
  items = [];
  itemCount = 0;
  functionalDesignation: any = new FunctionalDesignation();
  selectedItem: any;
  modalRef: BsModalRef;
  item: any;
  constructor(private functionalDesignationService: FunctionalDesignationService, private modalService: BsModalService) {
    this.getAllFunctionDesignation();
  }

  ngOnInit() {
  }
  //get all functiondesignation
  getAllFunctionDesignation() {
    this.functionalDesignationService.getFunctionalDesignation().subscribe((data: any) => {
      this.items = data.response;
      // console.log(this.items);
      this.itemResource = new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count);
    });
  }
  //open add modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  //open edit modal
  openModal1(template1, item) {
    this.modalRef = this.modalService.show(template1);
    this.selectedItem = item;
    this.functionalDesignation = Object.assign({}, this.selectedItem);
  }
  //close the modal
  onClose() {
    this.modalRef.hide();
    this.getAllFunctionDesignation();
  }
  //reload the data in the datatable
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