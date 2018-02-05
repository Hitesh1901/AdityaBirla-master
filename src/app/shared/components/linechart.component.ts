import { Component,Input } from '@angular/core';

@Component({
 selector: 'app-line-chart',
 template: ` <canvas baseChart 
 [datasets]="lineChartData"
 [labels]="lineChartLabels"
 [options]="lineChartOptions"
 [colors]="lineChartColors"
 [legend]="lineChartLegend"
 [chartType]="lineChartType"
 (chartHover)="chartHovered($event)"
 (chartClick)="chartClicked($event)"></canvas>`
})
export class LineChartComponent {
 // lineChart
 public lineChartData:Array<any> = [
   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
   {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
 ];
 public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
 public lineChartOptions:any = {
   responsive: true,
   showTooltips: true,
   maintainAspectRatio: false,
   tooltips: {
    enabled: true
},
elements: {
  line: {
      tension: 0
  }
},
hover: {
    animationDuration: 0
},
animation: {
    // duration: 1,
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
}
 };
 @Input()lineChartColors;
 public lineChartLegend:boolean = true;
 public lineChartType:string = 'line';

 public randomize():void {
   let _lineChartData:Array<any> = new Array(this.lineChartData.length);
   for (let i = 0; i < this.lineChartData.length; i++) {
     _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
       _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
     }
   }
   this.lineChartData = _lineChartData;
 }

 // events
 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }
}