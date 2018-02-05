import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { DepartmentService } from '../../department.service';
import { SubDepartment } from '../../../../shared/entities/sub-department';


@Component({
  selector: 'app-sub-view-department',
  templateUrl: './view-sub-department.component.html',
  styleUrls: ['./view-sub-department.component.css']
})
export class ViewSubDepartmentComponent implements OnInit {
  isCollapsed: boolean = false;
  iFilter: any = "";
  dataList: any = [];
  itemResource: any;
  items = [];
  itemCount = 0;
  subDepartment: any = new SubDepartment();
  selectedItem: any;
  modalRef: BsModalRef;
  item: any;
  constructor(private departmentService: DepartmentService, private modalService: BsModalService) {
    this.getAllSubdepartments();
  }

  ngOnInit() {
  }
//to get all subdepartments
  getAllSubdepartments() {
    this.departmentService.getSubDepartments().subscribe((data: any) => {
      this.items = data.response;
      // console.log(this.items);
      this.itemResource = new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count);
    });
  }
  //add subdepartment modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
   //edit subdepartment modal
  openModal1(template1, item) {
    this.modalRef = this.modalService.show(template1);
    this.selectedItem = item;
    this.subDepartment = Object.assign({}, this.selectedItem);
  }
  //to close the modal
  onClose() {
    this.modalRef.hide();
    this.getAllSubdepartments();
  }
  //to reaload the data in data table
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
    //in search filter to clear search
  clearSearch() {
    this.iFilter = null;
  }
}

