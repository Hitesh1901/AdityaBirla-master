//share module is a common module of the all moduless

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApexService } from "./service/apex.service";
import { ReportService } from "./service/report.service";
import { FormMessagesComponent } from './components/form-message.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppInterceptor } from './service/app.interceptor';
import { AppService } from './service/app.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import {DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe } from './utils/pipes';
import { CollapseModule } from 'ngx-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/barchart.component';
import { LineChartComponent } from './components/linechart.component';
import { RadarChartComponent } from './components/radarchart.component';
import { StackedBarChartComponent } from './components/stackedbarchart.component';
import { MixedChartComponent } from './components/mixedchart.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { FullCalendarModule } from 'ng-fullcalendar';
import { EventSesrvice } from './components/event.service';
import { AlertComponent } from './alerts/_directives/alert.component';
import { AlertService } from './alerts/_services/alert.service';
import { ButtonsModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SearchBarComponent } from './components/searchbar.component';
import { TabsModule } from 'ngx-bootstrap';







@NgModule({
    //to import the modules
  imports: [
     CommonModule, 
     FormsModule, 
     ReactiveFormsModule,
     ModalModule.forRoot(),
     Ng2TableModule,
     PaginationModule,
     DataTableModule,
     CollapseModule.forRoot(),
     NgSelectModule,
     ChartsModule,
     BsDatepickerModule.forRoot(),
     FullCalendarModule,
     ButtonsModule.forRoot(),
     BrowserAnimationsModule,
     AngularFontAwesomeModule,
     TabsModule.forRoot()

    
  ],
  //to declare the components,pipes,directives
  declarations: [
    FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe,FormMessagesComponent,AlertComponent,
    BarChartComponent,LineChartComponent,RadarChartComponent,StackedBarChartComponent,MixedChartComponent,SearchBarComponent
    
  ],
  // to export all we have to use in another component
  exports: [
    FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe,
    CommonModule, FormsModule, ReactiveFormsModule,ModalModule,Ng2TableModule,PaginationModule,
     DataTableModule,FormMessagesComponent,CollapseModule,ButtonsModule,
     CollapseModule,NgSelectModule,ChartsModule,BsDatepickerModule,FullCalendarModule,AlertComponent,
     BarChartComponent,LineChartComponent,RadarChartComponent,StackedBarChartComponent,MixedChartComponent,
     BrowserAnimationsModule,AngularFontAwesomeModule,SearchBarComponent,TabsModule

  ],
  // to declare the services in providers
  providers:[AppService , ApexService , ReportService ,EventSesrvice , AlertService]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: SharedModule,
          providers: [
              {
                  provide: HTTP_INTERCEPTORS,
                  useClass: AppInterceptor,
                  multi: true
              }
          ],
      };
  }
}
