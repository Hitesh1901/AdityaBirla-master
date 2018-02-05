import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ZonalDashboardComponent } from './zonaldashboard/zonaldashboard.component';





//routing pathes 

const routes: Routes = [
   { path: 'zonaldashboard', component: ZonalDashboardComponent},






];

@NgModule({
  imports: [


    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
   SharedModule.forRoot()
   ],
  providers: [],
  declarations: [ZonalDashboardComponent],
  exports: [RouterModule],
})
export class ZonalhrModule { }