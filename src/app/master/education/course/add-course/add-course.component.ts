import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EducationService } from '../../education.service';
import { Course } from '../../../../shared/entities/course';
import { CourseForm } from '../course.form';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';



@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  myForm: any = CourseForm.init();
  course: Course = new Course();
  //event emitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private educationService: EducationService , private alertService :AlertService) {
    CourseForm.edit(this.myForm);
  }

  ngOnInit() {
  }
  //to save the course
  save() {
    this.educationService.saveCourse(this.course).subscribe((data: any) => {
      // console.log(data);
      // console.log(this.course);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
        this.onClose()
    });
  }
  //to close the modal popup
  onClose() {
    this.close.emit();
  }
}
