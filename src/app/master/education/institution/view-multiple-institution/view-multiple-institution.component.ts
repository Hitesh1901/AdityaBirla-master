import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EducationService } from '../../education.service';
import { Institution } from '../../../../shared/entities/institution';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';

@Component({
  selector: 'app-view-multiple-institution',
  templateUrl: './view-multiple-institution.component.html',
  styleUrls: ['./view-multiple-institution.component.css']
})
export class ViewMultipleInstitutionComponent implements OnInit {
  iFilter: any = "";
  dataList: any = [];
  itemResource: any;
  items = [];
  itemCount = 0;
  institution: any = new Institution();
  selectedItem: any;
  modalRef: BsModalRef;
  item: any;
  isCollapsed: boolean = false;
  constructor(private educationService: EducationService, private modalService: BsModalService) {
    this.getAllInstitutes();
  }

  ngOnInit() {
  }
  //get all institues
  getAllInstitutes() {
    this.educationService.getInstitutions().subscribe((data: any) => {
      this.items = data.response;
      // console.log(this.items);
      this.itemResource = new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count);
    });
  }
  //open add institute modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  //open edit institute modal
  openModal1(template1, item) {
    this.modalRef = this.modalService.show(template1);
    this.selectedItem = item;
    this.institution = Object.assign({}, this.selectedItem);
  }
  //close the popup
  onClose() {
    this.modalRef.hide();
    this.getAllInstitutes();
  }
  //to reload the data in datatabla
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
  //to clear the search filter input
  clearSearch() {
    this.iFilter = null;
  }
}
