import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { RoleService } from '../role.service';
import { Role } from '../../../shared/entities/role';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {

  isCollapsed: boolean = false;
  iFilter: any = "";
  itemResource: any;
  items = [];
  itemCount = 0;
  role: any = new Role();
  selectedItem: any;
  modalRef: BsModalRef;
  item: any;
  constructor(private roleService: RoleService, private modalService: BsModalService) {
    this.getAllRoles();
  }

  ngOnInit() {
  }
  //getAllRoles
  getAllRoles() {
    this.roleService.getRole().subscribe((data: any) => {
      this.items = data.response.role;
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
    this.role = Object.assign({}, this.selectedItem);
  }
  //close the modal
  onClose() {
    this.modalRef.hide();
    this.getAllRoles();
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