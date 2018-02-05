import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { StageService } from '../stage.service';
import { Stage } from '../../../shared/entities/stage';

@Component({
  selector: 'app-view-stage',
  templateUrl: './view-stage.component.html',
  styleUrls: ['./view-stage.component.css']
})
export class ViewStageComponent implements OnInit {

  isCollapsed: boolean = false;
  iFilter: any = "";
  itemResource: any;
  items = [];
  itemCount = 0;
  stage: any = new Stage();
  selectedItem: any;
  modalRef: BsModalRef;
  item: any;
  constructor(private stageService: StageService, private modalService: BsModalService) {
    this.getAllStages();
  }

  ngOnInit() {
  }
  //getAllStages
  getAllStages() {
    this.stageService.getStage().subscribe((data: any) => {
      this.items = data.Response.stage;
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
    this.stage = Object.assign({}, this.selectedItem);
  }
  //close modal
  onClose() {
    this.modalRef.hide();
    this.getAllStages();
  }
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
  //clear input search
  clearSearch() {
    this.iFilter = null;
  }
}