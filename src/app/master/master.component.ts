import { Component, OnInit , HostBinding} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {trigger, stagger, animate, style, group, query, transition, keyframes} from '@angular/animations';

//animation
export const dashboardTransition = trigger('dashboardTransition', [
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
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
  animations: [ dashboardTransition ],
})
export class MasterComponent implements OnInit {
  input:boolean = true;
  paramId: any;
  isCollapsed: boolean = false;
  @HostBinding('@dashboardTransition') state;
  constructor(private titleService: Title) {

   }

  ngOnInit() {
    this.titleService.setTitle('Master');
  }
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

}