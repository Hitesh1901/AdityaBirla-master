import { Component ,Input} from '@angular/core';

@Component({
 selector: 'app-mixed-chart',
 template: `    <canvas baseChart
 [datasets]="barChartData"
 [labels]="barChartLabels"
 [options]="barChartOptions"
 [legend]="barChartLegend"
 [chartType]="barChartType"
 [colors]="mixedChartColors"
 (chartHover)="chartHovered($event)"
 (chartClick)="chartClicked($event)"></canvas>`
})
export class MixedChartComponent {
 
 public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
 public barChartType:string = 'bar';
 public barChartLegend:boolean = true;
 @Input()mixedChartColors;
 public barChartData = [
    {
 label: "Target",
 data: [0, 23, 25, 27, 40, 50, 60, 70, 85, 87, 90, 100],
 type: "line",
 fill: "true"
},
{
 label: "Percentage",
 data: [0, 24, 45, 45, 90, 90, 90, 90, 90, 90, 90, 90]
},

];
public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true,
  maintainAspectRatio: false,
   showTooltips: true,
  tooltips: {
   enabled: true
},
hover: {
   animationDuration: 0
},
animation: {
//    duration: 1,
   onComplete: function () {
       var chartInstance = this.chart,
        ctx = chartInstance.ctx;
       ctx.textAlign = 'center';
       ctx.textBaseline = 'bottom';

       this.data.datasets.forEach(function (dataset, i) {
           var meta = chartInstance.controller.getDatasetMeta(i);
           meta.data.forEach(function (bar,index) {
               var data = dataset.data[index];                            
               ctx.fillText(data, bar._model.x, bar._model.y - 5);
               
           });
       });
   }
}
};

 // events
 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }

}