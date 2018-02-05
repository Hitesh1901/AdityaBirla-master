import { Component,Input } from '@angular/core';

@Component({
 selector: 'app-bar-chart',
 template: `<canvas baseChart
 [datasets]="barChartData"
 [labels]="barChartLabels"
 [options]="barChartOptions"
 [legend]="barChartLegend"
 [chartType]="barChartType"
 [colors]="barChartColors"
 (chartHover)="chartHovered($event)"
 (chartClick)="chartClicked($event)"></canvas>`
})
export class BarChartComponent {
  @Input()barChartColors;
  @Input()barChartData;
  @Input()barChartLabels;
 public barChartOptions:any = {
   scaleShowVerticalLines: false,
   responsive: true,
   maintainAspectRatio: false,
  
   tooltips: {
    enabled: true
},
hover: {
    animationDuration: 0
},
animation: {
     animationduration: 2000,
    onComplete: function () {
        var chartInstance = this.chart,
            ctx = chartInstance.ctx;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        this.data.datasets.forEach(function (dataset, i) {
            var meta = chartInstance.controller.getDatasetMeta(i);
            meta.data.forEach(function (bar, index) {
                var data = dataset.data[index];                            
                ctx.fillText(data, bar._model.x, bar._model.y - 5);
            });
        });
    }
},
   
 };
//  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
 public barChartLegend:boolean = true;

//  public barChartData:any[] = [
//    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
//    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
//  ];

 // events
 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }
 
}