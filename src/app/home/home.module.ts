import { NgModule } from '@angular/core';//it declares it is a module
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartService } from './charts/charts.service';
import { ImageUploadComponent } from './imageupload/imageupload.component';
import { DrillDownComponent } from './drilldown/drilldown.component';
import {EmployeProfileComponent} from './employeprofile/employeprofile.component';
import { HomeService } from './home.service';
 import { CalenderEventComponent } from './home/calender.event.component';
 







// paths for routing
const routes: Routes = [
   { path: '', component: HomeComponent, data : {title: 'Home', state: 'home'}},
   { path: 'home', component: HomeComponent,data : {title: 'Home' ,  state: 'home'}},
   { path: 'dashboard', component: DashboardComponent,data : {title: 'dashboard',  state: 'dashboard'}},
   { path: 'charts', component: ChartsComponent, data : {title: 'charts',  state: 'charts'}},
   { path: 'imageupload', component: ImageUploadComponent},
   { path: 'drilldown', component: DrillDownComponent, data : {title: 'drilldown',  state: 'drilldown'}},
   { path: 'employeprofile', component: EmployeProfileComponent, data : {title: 'employeprofile',  state: 'employeprofile'}},







];
//module decorator
@NgModule({
  imports: [


    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
   SharedModule.forRoot()
   ],
  providers: [ChartService,HomeService],
  declarations: [HomeComponent, DashboardComponent,ChartsComponent,ImageUploadComponent,DrillDownComponent,EmployeProfileComponent,CalenderEventComponent],
  exports: [RouterModule],
})
export class HomeModule { }