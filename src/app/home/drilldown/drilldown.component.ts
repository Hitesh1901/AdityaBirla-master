import { Component, OnInit, HostBinding } from '@angular/core';
import { HomeService } from '../home.service';
import { Title } from '@angular/platform-browser';
import {trigger, stagger, animate, style, group, query, transition, keyframes} from '@angular/animations';

//animation
export const dashboardTransition = trigger('dashboardTransition', [
  transition(':enter', [
    query('.blocks', style({ opacity: 0 })
      , { optional: true }),
    query('.blocks', stagger(300, [
      style({ transform: 'translateY(100px)' }),
      animate('0.1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
    ]), { optional: true }),
  ]),
  transition(':leave', [
    query('.blocks', stagger(300, [
      style({ transform: 'translateY(0px)', opacity: 1 }),
      animate('0.1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
    ]), { optional: true }),        
  ])
]);

@Component({
  selector: 'app-drilldown',
  templateUrl: './drilldown.component.html',
  styleUrls: ['./drilldown.component.css'],
  animations: [ dashboardTransition ],
})
export class DrillDownComponent implements OnInit {
  @HostBinding('@dashboardTransition') state;
  input:boolean = true;
  paramId: any;
  isCollapsed: boolean = false;
  constructor(private homeService:HomeService, private titleService: Title) {
    this.paramId = this.homeService.getParamId();
    console.log(this.paramId);
   }

  ngOnInit() {
    this.titleService.setTitle('DrillDown');
  }
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

}