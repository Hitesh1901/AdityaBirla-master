import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { FunctionService } from '../../function.service';
import { Function } from '../../../../shared/entities/function';


@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css']
})
export class FunctionComponent implements OnInit {

  isCollapsed: boolean = false;
  iFilter: any = "";
  itemResource: any;
  items = [];
  itemCount = 0;
  function: any = new Function();
  selectedItem: any;
  modalRef: BsModalRef;
  item: any;
  constructor(private functionService: FunctionService, private modalService: BsModalService) {
    this.getAllFunctions();
  }

  ngOnInit() {
  }
  //get all functions
  getAllFunctions() {
    this.functionService.getFunctions().subscribe((data: any) => {
      this.items = data.response;
      // console.log(this.items);
      this.itemResource = new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count);
    });
  }
  //add modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  //edit modal
  openModal1(template1, item) {
    this.modalRef = this.modalService.show(template1);
    this.selectedItem = item;
    this.function = Object.assign({}, this.selectedItem);
  }
  //to close the popup
  onClose() {
    this.modalRef.hide();
    this.getAllFunctions();
  }
  //to reaload the data in datatable
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
  //to clear the input text in search filter
  clearSearch() {
    this.iFilter = null;
  }
}