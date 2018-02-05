import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
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
  // transition(':leave', [
  //   query('.blocks', stagger(300, [
  //     style({ transform: 'translateY(0px)', opacity: 1 }),
  //     animate('0.1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
  //   ]), { optional: true }),        
  // ])
]);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [ dashboardTransition ],

})
export class DashboardComponent implements OnInit {
  @HostBinding('@dashboardTransition') state;
  isCollapsed: boolean = false; 
    barChartData = [
          {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
       {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
       ];
    barChartLabels = ['2006', '2007', '2008'];
  barChartColors:
  //colors data
  Array<any> = [
        { // grey
          backgroundColor: '#429251',
        //   borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
          backgroundColor: '#85d947',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
          backgroundColor: '#c5291c',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
      ];
      radarChartColors:Array<any> = [
        { // grey
          backgroundColor: 'transparent',
          borderColor: '#ef6e2e',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
          backgroundColor: '#85d947',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
      ];
      lineChartColors:Array<any> = [
        { // grey
          backgroundColor: 'transparent',
          borderColor: '#9adf67',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
          backgroundColor: 'transparent',
          borderColor: '#f4a346',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // dark grey
          backgroundColor: 'transparent',
          borderColor: '#e35141',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
      ]

  constructor(private titleService: Title) {

   }

  ngOnInit() {
    this.titleService.setTitle('Dashboard');
  }

  collapsed(event: any): void {
    // console.log(event);
  }
  
  expanded(event: any): void {
    // console.log(event);
  }
}
