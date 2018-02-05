import { Component,Input } from '@angular/core';

@Component({
    selector: 'app-radar-chart',
    template: `<canvas baseChart
 [datasets]="radarChartData"
 [labels]="radarChartLabels"
 [chartType]="radarChartType"
 [colors]="radarChartColors"
 [options]="radarChartOptions"
 (chartHover)="chartHovered($event)"
 (chartClick)="chartClicked($event)"></canvas>`
})
export class RadarChartComponent {
    // Radar
    @Input()radarChartColors;
    public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
    public radarChartOptions:any = {
        responsive: true,
        showTooltips: true,
        maintainAspectRatio: false,
        tooltips: {
         enabled: true
     },
     hover: {
         animationDuration: 0
     },
     animation: {
        //  duration: 1,
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
    public radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        // { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    public radarChartType: string = 'radar';

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}