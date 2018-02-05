import { Component, OnInit ,TemplateRef ,Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EducationService } from '../../education.service';
import { Course } from '../../../../shared/entities/course';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';



@Component({
  selector: 'app-view-multiple-course',
  templateUrl: './view-multiple-course.component.html',
  styleUrls: ['./view-multiple-course.component.css']
})
export class ViewMultipleCourseComponent implements OnInit {
  isCollapsed: boolean = false;  
  iFilter: any = "";
  dataList:any = [];
  itemResource :any;
  items = [];
  itemCount = 0;
  course:any = new Course();
   selectedItem: any;
  modalRef: BsModalRef;
  item:any;
  constructor(private educationService:EducationService , private modalService: BsModalService) {
    this.getAllCourses();
   }

  ngOnInit() {
  }
  
  getAllCourses() {
    this.educationService.getCourses().subscribe((data: any) => {
      this.items =data.response;
      // console.log(this.items);
      this.itemResource= new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count);
    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModal1(template1,item){
    this.modalRef = this.modalService.show(template1);
    this.selectedItem = item;
    this.course = Object.assign({}, this.selectedItem);
  }
  onClose() {
    this.modalRef.hide();
    this.getAllCourses();
  }
  reloadItems(params) {
    if(this.itemResource){
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
clearSearch() {
  this.iFilter = null;
 }
  }
