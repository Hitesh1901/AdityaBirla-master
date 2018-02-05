import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { HomeService } from '../home.service';

 
@Component({
  selector: 'app-calender-component',
  template: `<div *ngIf="calendarOptions">
  <ng-fullcalendar #ucCalendar [options]="calendarOptions" (eventClick)="eventClick($event.detail)" (eventDrop)="updateEvent($event.detail)"
      (eventResize)="updateEvent($event.detail)" (clickButton)="clickButton($event.detail)"></ng-fullcalendar>
</div>`,
  // styles: ['.calenderevent{width: 96%']

})
export class CalenderEventComponent implements OnInit {
    calendarOptions: Options;
    displayEvent: any;
    stages:any = [];
    pipelines:any;
    index: number = 0;
    stagename:any;
    selectedIndex = 0;
     @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(protected homeService: HomeService) {
    this.getStages();
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'title',
        center: '',
        right: 'prev,next today'
      },
  }
}
  ngOnInit() {
    // this.homeService.getPipeLineCounts(data).subscribe(data => {
   
    //     events: data
    //   };
    // });
  }
  clickButton(model: any) {
    this.displayEvent = model;
  }
  //get stages
  getStages(){
    this.homeService.getStageCounts().subscribe((data: any) => {
      this.stages = data.response;
      this.stagename = this.stages[0].stagename;
      console.log(this.stages);
      this.pipeline(this.stagename,0)
      console.log(this.stages[0])
      // this.getPipeline(this.stagename , true);
      // this.getPipeline(this.getPipeline(1))
  })
}
//pipeline
pipeline(stagename, index){
  this.selectedIndex = index;
  console.log(this.selectedIndex);
  stagename = this.stages[this.selectedIndex].stagename;
  this.homeService.getPipeLineCounts(stagename).subscribe((data: any) => {
      this.pipelines = data.response;
      console.log(data);
    this.calendarOptions = {
            editable: true,
            eventLimit: false,
            header: {
              left: 'prev,next today',
              center: 'title',
              right: 'month,agendaWeek,agendaDay,listMonth'
            },
            events: this.pipelines,
           
           
          };
          
       
         
  })
  //  this.pipeline(stagename,index)
}
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }
 
}
