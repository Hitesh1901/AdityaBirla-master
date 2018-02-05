import { Injectable, Output, EventEmitter, Component } from '@angular/core';//injectable represents it is a service
import { Observable } from 'rxjs/Observable';//observable from rxjs
import { DomSanitizer } from '@angular/platform-browser';//bypassSecurityTrust
import { AlertService } from '../alerts/_services/alert.service';//alerts service

//service decorator
@Injectable()
export class ApexService {
    alerts: any = [];
     sessionUserEvent: EventEmitter<any>  = new EventEmitter( );
     menuEvent:  EventEmitter<any>  = new EventEmitter( );
     loaderEvent: EventEmitter<any>  = new EventEmitter( );

    constructor(private _domSanitizer: DomSanitizer , private alertService:AlertService){

    }
    showMessage(message: string){
      this.alertService.info(message)
    }
     showLoader(show: Boolean) {
             this.loaderEvent.next(show);
    }

   sessionUserEmit (sessionUser: any) {
        //console.log(sessionStorage.getItem("user"));
        this.sessionUserEvent.emit(sessionUser);
    }
    menuEmit(menu: any){
         this.menuEvent.emit(menu);
    }
    bypassURL(url: string){
        return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
}