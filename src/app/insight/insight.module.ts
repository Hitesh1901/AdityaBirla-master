import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { InsightComponent } from './insight/insight.component';







//routing pathes 

const routes: Routes = [
    { path: 'insight', component: InsightComponent},






];

@NgModule({
  imports: [


    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
   SharedModule.forRoot()
   ],
  providers: [],
  declarations: [InsightComponent],
  exports: [RouterModule],
})
export class InsightModule { }