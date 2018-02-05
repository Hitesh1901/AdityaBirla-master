import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GeographyService } from '../../geography.service';
import { Country } from '../../../../shared/entities/countries';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';


@Component({
  selector: 'app-view-multiple-country',
  templateUrl: './view-multiple-country.component.html',
  styleUrls: ['./view-multiple-country.component.css'],
})
export class ViewMultipleCountryComponent implements OnInit {
  iFilter: any = "";
  dataList: any = [];
  itemResource: any;
  items = [];
  itemCount = 0;
  country: any = new Country();
  selectedItem: any;
  modalRef: BsModalRef;
  item: any;
  isCollapsed: boolean = false;
  constructor(private geographyService: GeographyService, private modalService: BsModalService) {
    this.getAllCountries();
  }

  ngOnInit() {
  }
  //get all countries
  getAllCountries() {
    this.geographyService.getCountries().subscribe((data: any) => {
      // console.log(data);
      this.items = data.response;
      this.itemResource = new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count);
    });
  }
  //open add modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  //open edit modal
  openModal1(template1, item: any) {
    this.modalRef = this.modalService.show(template1);
    this.selectedItem = item;
    this.country = Object.assign({}, this.selectedItem);
    // console.log(this.selectedItem)
  }
  //to close the modal
  onClose() {
    this.modalRef.hide();
    this.getAllCountries();
  }

  //to reaload the data in datatable
  reloadItems(params) {
    if (this.itemResource) {
      this.itemResource.query(params).then(items => this.items = items);
    }

  }
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
  //to clear the search input
  clearSearch() {
    this.iFilter = null;
  }

}
