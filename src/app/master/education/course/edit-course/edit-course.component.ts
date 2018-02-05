import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { EducationService } from '../../education.service';
import { Course } from '../../../../shared/entities/course';
import { CourseForm } from '../course.form';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';






@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  myForm: any = CourseForm.init();
//to communicate between components
  @Input()
  course: Course;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private educationService: EducationService , private alertService :AlertService) {
    CourseForm.edit(this.myForm);
  }
  //to get the object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['course']) {
      this.course = changes['course'].currentValue;
      console.log(this.course);
      this.getCourse(this.course.id);
    }
  }

  ngOnInit() {
  }

  //to update the course
  save() {
    this.educationService.updateCourse(this.course).subscribe((data: any) => {
      // console.log(data);
      // console.log(this.course);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
      this.onClose();
    });
  }
  //to get the course by id
  getCourse(data) {
    this.educationService.getCourseData(data).subscribe((data: any) => {
      this.course = data.response;
      console.log(this.course);
    });
  }
  //to close the modal popup
  onClose() {
    this.close.emit();
  }


}
