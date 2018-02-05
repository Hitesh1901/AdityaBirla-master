import { Component, OnInit ,ViewChild , HostBinding} from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { HomeService } from '../home.service';
import { Title } from '@angular/platform-browser';
import {trigger, stagger, animate, style, group, query, transition, keyframes} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

//animationss
export const homeTransition = trigger('homeTransition', [
  transition(':enter', [
    query('.block', style({ opacity: 0 })
      , { optional: true }),
    query('.block', stagger(300, [
      style({ transform: 'translateY(100px)' }),
      animate('0.1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
    ]), { optional: true }),
  ]),
  // transition(':leave', [
  //   query('.block', stagger(300, [
  //     style({ transform: 'translateY(0px)', opacity: 1 }),
  //     animate('0.1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
  //   ]), { optional: true }),        
  // ])
]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ homeTransition ]
  
})
export class HomeComponent implements OnInit {
  input:boolean = true;
  isCollapsed: boolean = false;
  stages:any = [];
  calendarOptions: Options;
  displayEvent: any;
  pipelines:any;
  index: number = 0;
  stagename:any;
  isStatus:boolean;
  selectedIndex = 0;
  selectedItem: any;
  private calender : CalendarComponent
  @HostBinding('@homeTransition') state;
   @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(private homeService:HomeService , private titleService: Title ,private route: ActivatedRoute) {
    route.data.subscribe(data => {
      this.state = data.state;
    });
    this.getStages();
    
   }
  ngOnInit() {
    this.titleService.setTitle('Home');
  }
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
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
//get pipelines
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
// getPipeline(data , firstTime: boolean){
//   this.homeService.getPipeLineCounts(data).subscribe((data: any) => {
//     this.pipelines = Object.assign([], data.response);
    
//       if(this.pipelines.length == 0 && firstTime == true) {
//         this.index++;

//         if(this.stages[0].stagename.length-1 >= this.index){
//           this.stagename = this.stages[this.index].stagename;

//            this.getPipeline(this.stagename,  firstTime);
//         } else {
//           this.stages[0].active = true;
//         }
//       } else if(firstTime == true){
//         this.stages[this.index].active = true;
//       }
//      this.isStatus = data.isstatus;
//     this.calendarOptions = {
//       editable: true,
//       eventLimit: false,
//       header: {
//         left: 'prev,next today',
//         center: 'title',
//         right: 'month,agendaWeek,agendaDay,listMonth'
//       },
//       events: this.pipelines
     
//     };
//   });
// }
clickButton(model: any) {
  this.displayEvent = model;
}
eventClick(model: any) {
  model = {
    event: {
      // id: model.event.id,
      start: this.pipelines[0].start,
      // end: model.event.end,
      title: this.pipelines[0].title,
      // allDay: model.event.allDay
      // other params
    }
  }
  console.log(model);
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
get($event){
  console.log($event)
}
//navigate to drilldown
navigate(item,data){
  this.homeService.navigate(item.stagename , item.completecount)
}

}
