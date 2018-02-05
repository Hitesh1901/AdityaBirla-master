import { Component, OnInit } from '@angular/core';
import { ChartService } from './charts.service';
import {ApexService} from '../../shared/service/apex.service';
import { AlertService } from '../../shared/alerts/_services/alert.service';
import { AlertType } from '../../shared/alerts/_models/alert';



@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent  {
  data:boolean = false;
  barChartData:any;
  barChartLabels:any;
  // barChartType:any;
  constructor(private apexService:ApexService, private alertService:AlertService ){
    this.barChartData = [
          {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
       {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
       ];
       this.barChartLabels = ['2006', '2007', '2008'];
      //  this.barChartType = 'bar';

  }
  // message(type,message){
  //   if(this.data === false){
  //     message="alert"
  //     type=AlertType.Error
  //     this.alertService.alert(type,message);
  //     console.log(message);
  //   }else{
  //     message="alert"
  //     type=AlertType.Success
  //     this.alertService.alert(type,message);
  //   }
    
  // }
}
