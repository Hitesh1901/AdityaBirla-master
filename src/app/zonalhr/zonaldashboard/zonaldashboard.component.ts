import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zonaldashboard',
  templateUrl: './zonaldashboard.component.html',
  styleUrls: ['./zonaldashboard.component.css']
})
export class ZonalDashboardComponent implements OnInit {
  barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
 {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
 ];
 barChartLabels = ['2006', '2007', '2008'];
  barChartColors:
  Array<any> = [
        { // grey
          backgroundColor: '#e08244',
        //   borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
          backgroundColor: '#679bd0',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
          backgroundColor: '#a5a5a5',
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
          borderColor: '#e08244',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
          backgroundColor: 'transparent',
          borderColor: '#699cd0',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // dark grey
          backgroundColor: 'transparent',
          borderColor: '#ecc14d',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
      ];
      mixedChartColors:Array<any> = [
        { // grey
          backgroundColor: 'transparent',
          borderColor: '#ec3223',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
          backgroundColor: '#f7c143',
          borderColor: '#f7c143',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
      ]
   
  constructor() { }

  ngOnInit() {
  }

}
