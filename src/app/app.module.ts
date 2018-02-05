import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MasterModule} from './master/master.module';
import { LoadingModule ,ANIMATION_TYPES } from 'ngx-loading';
// import 'hammerjs';
import { ZonalhrModule } from './zonalhr/zonalhr.module';
import { InsightModule } from './insight/insight.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedModule.forRoot(),
    HttpClientModule,
    HomeModule,
    MasterModule,
    ZonalhrModule,
    InsightModule,
    LoadingModule.forRoot({
      // animationType: ANIMATION_TYPES.rectangleBounce,
      backdropBackgroundColour: 'rgba(0, 0, 0, 0.3)', 
      backdropBorderRadius: '4px',
      primaryColour: '#bb333a', 
      secondaryColour: '#bb333a', 
      tertiaryColour: '#bb333a',
      fullScreenBackdrop:true
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

