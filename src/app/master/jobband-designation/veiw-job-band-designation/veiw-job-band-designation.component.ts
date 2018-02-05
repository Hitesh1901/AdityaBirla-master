import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { JobBandDesignationService } from '../jobbanddesignation.service';
import { JobBandDesignation } from '../../../shared/entities/jobbanddesignation';


@Component({
  selector: 'app-veiw-job-band-designation',
  templateUrl: './veiw-job-band-designation.component.html',
  styleUrls: ['./veiw-job-band-designation.component.css']
})
export class VeiwJobBandDesignationComponent implements OnInit {


  isCollapsed: boolean = false;
  iFilter: any = "";
  itemResource: any;
  items = [];
  itemCount = 0;
  jobBandDesignation: any = new JobBandDesignation();
  selectedItem: any;
  modalRef: BsModalRef;
  item: any;
  constructor(private jobBandDesignationService: JobBandDesignationService, private modalService: BsModalService) {
    this.getAllJobdesignation();
  }

  ngOnInit() {
  }
  //getAllJobdesignation
  getAllJobdesignation() {
    this.jobBandDesignationService.getJobbandDesignation().subscribe((data: any) => {
      this.items = data.response;
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
    this.jobBandDesignation = Object.assign({}, this.selectedItem);
  }
  //close the modal
  onClose() {
    this.modalRef.hide();
    this.getAllJobdesignation();
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
  //to clear the search inputs
  clearSearch() {
    this.iFilter = null;
  }
}