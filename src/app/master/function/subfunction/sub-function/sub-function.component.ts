import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { FunctionService } from '../../function.service';
import { SubFunction } from '../../../../shared/entities/sub-function';


@Component({
  selector: 'app-sub-function',
  templateUrl: './sub-function.component.html',
  styleUrls: ['./sub-function.component.css']
})
export class SubFunctionComponent implements OnInit {

  isCollapsed: boolean = false;
  iFilter: any = "";
  itemResource: any;
  items = [];
  itemCount = 0;
  subFunction: any = new SubFunction();
  selectedItem: any;
  modalRef: BsModalRef;
  item: any;
  constructor(private functionService: FunctionService, private modalService: BsModalService) {
    this.getAllSubFunctions();
  }

  ngOnInit() {
  }
  //get all subfunctions
  getAllSubFunctions() {
    this.functionService.getSubFunctions().subscribe((data: any) => {
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
    this.subFunction = Object.assign({}, this.selectedItem);
  }
  //close the modal
  onClose() {
    this.modalRef.hide();
    this.getAllSubFunctions();
  }

  //to reload the data in datatable
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
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
  //to clear the input search in filter
  clearSearch() {
    this.iFilter = null;
  }
}