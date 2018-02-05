import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { InterventionDayService } from '../interventionday.service';
import { InterventionDay } from '../../../shared/entities/intervention';

@Component({
  selector: 'app-view-intervention-day',
  templateUrl: './view-intervention-day.component.html',
  styleUrls: ['./view-intervention-day.component.css']
})
export class ViewInterventionDayComponent implements OnInit {

  isCollapsed: boolean = false;
  iFilter: any = "";
  itemResource: any;
  items: any;
  itemCount = 0;
  interventionDay: any = new InterventionDay();
  selectedItem: any;
  modalRef: BsModalRef;
  item: any;
  constructor(private interventionDayService: InterventionDayService, private modalService: BsModalService) {
    this.getAllInterventiondat();
  }

  ngOnInit() {
  }
  //get all interventionday
  getAllInterventiondat() {
    this.interventionDayService.getInterventionDay().subscribe((data: any) => {
      this.items = data.Response.interventionday;
      // console.log(this.items);
      this.itemResource = new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count);
    });
  }
  //add 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  //edit
  openModal1(template1, item) {
    this.modalRef = this.modalService.show(template1);
    this.selectedItem = item;
    this.interventionDay = Object.assign({}, this.selectedItem);
  }
  //close the modal
  onClose() {
    this.modalRef.hide();
    this.getAllInterventiondat();
  }
  //reload the data in datatable
  reloadItems(params) {
    if (this.itemResource) {
      this.itemResource.query(params).then(items => this.items = items);
    }

  }

  // special properties:

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
  //clear search input
  clearSearch() {
    this.iFilter = null;
  }
}