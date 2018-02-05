import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { DepartmentService } from '../../department.service';
import { Department } from '../../../../shared/entities/department';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {
  isCollapsed: boolean = false;
  iFilter: any = "";
  dataList: any = [];
  itemResource: any;
  items = [];
  itemCount = 0;
  department: any = new Department();
  selectedItem: any;
  modalRef: BsModalRef;
  item: any;
  constructor(private departmentService: DepartmentService, private modalService: BsModalService) {
    this.getAllDepartments();
  }

  ngOnInit() {
  }
//to get all departments
  getAllDepartments() {
    this.departmentService.getDepartments().subscribe((data: any) => {
      this.items = data.response;
      // console.log(this.items);
      this.itemResource = new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count);
    });
  }
  //to open add modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  //to open edit modal
  openModal1(template1, item) {
    this.modalRef = this.modalService.show(template1);
    this.selectedItem = item;
    this.department = Object.assign({}, this.selectedItem);
  }
  //to close the modal
  onClose() {
    this.modalRef.hide();
    this.getAllDepartments();
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
  //to clear the input text in search filter
  clearSearch() {
    this.iFilter = null;
  }
}

