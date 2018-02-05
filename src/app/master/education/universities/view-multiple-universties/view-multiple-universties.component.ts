import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EducationService } from '../../education.service';
import { Universties } from '../../../../shared/entities/universties';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';




@Component({
  selector: 'app-view-multiple-universties',
  templateUrl: './view-multiple-universties.component.html',
  styleUrls: ['./view-multiple-universties.component.css']
})
export class ViewMultipleUniverstiesComponent implements OnInit {
  iFilter: any = "";
  dataList: any = [];
  itemResource: any;
  items = [];
  itemCount = 0;
  universties: any = new Universties();
  selectedItem: any;
  modalRef: BsModalRef;
  item: any;
  isCollapsed: boolean = false;
  searchValue: string = '';
  constructor(private educationService: EducationService, private modalService: BsModalService) {
    this.getAllUniversities();
  }

  ngOnInit() {

  }
  //to get all universities

  getAllUniversities() {
    this.educationService.getUniversities().subscribe((data: any) => {
      this.items = data.response;
      // console.log(this.items);
      this.itemResource = new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count);

    });
  }
  //open the add modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  //open the edit modal
  openModal1(template1, item) {
    this.modalRef = this.modalService.show(template1);
    this.selectedItem = item;
    this.universties = Object.assign({}, this.selectedItem);
  }
  //to close the modal popup
  onClose() {
    this.modalRef.hide();
    this.getAllUniversities();
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
    return item.jobTitle;
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

