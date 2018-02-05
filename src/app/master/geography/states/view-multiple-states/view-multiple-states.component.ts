import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GeographyService } from '../../geography.service';
import { State } from '../../../../shared/entities/states';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';


@Component({
  selector: 'app-view-multiple-states',
  templateUrl: './view-multiple-states.component.html',
  styleUrls: ['./view-multiple-states.component.css']
})
export class ViewMultipleStateComponent implements OnInit {
  iFilter: any = "";
  dataList: any = [];
  itemResource: any;
  items = [];
  itemCount = 0;
  state: State;
  selectedItem: any;
  modalRef: BsModalRef;
  item: any;
  isCollapsed: boolean = false;

  constructor(private geographyService: GeographyService, private modalService: BsModalService) {
    this.getStates();
  }

  ngOnInit() {
  }
  //get all states
  getStates() {
    this.geographyService.getMultipleStates().subscribe((data: any) => {
      this.items = data.response;
      this.itemResource = new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count)
    });
  }
  //open add moda;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  //open edit modal
  openModal1(template1, item: any) {
    this.modalRef = this.modalService.show(template1);
    this.selectedItem = item;
    this.state = Object.assign({}, this.selectedItem);
    console.log(item.id);


  }
  //close the module
  onClose() {
    this.modalRef.hide();
    this.getStates();
  }
  //to reload the data in datatable
  reloadItems(params) {
    if (this.itemResource) {
      this.itemResource.query(params).then(items => this.items = items);
    }

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


