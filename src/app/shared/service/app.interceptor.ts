import { Injectable } from '@angular/core'; //injectable represents it is a service
import {
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'; //to do http calls we have import this one
import { ApexService } from './apex.service';//it is own service form the loader
import { Observable } from 'rxjs/Observable';// it is a observable

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  //CONTENT_TYPE = 'application/x-www-form-urlencoded';
  CONTENT_TYPE = "application/json"; //content type of the api should be json
  constructor(private apexService: ApexService) {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {  //headers in http request
        'Content-Type': this.CONTENT_TYPE,
        // 'Authorization': `${this.getToken()}`
      }
    });
    return next.handle(request).map(
      (resp: HttpResponse<any>) => {
        if (resp && resp.type == 4) {
          this.apexService.showLoader(false);
          if (resp.body) {
            if (resp.body.status == 1) {
              return resp.clone({
                body: resp.body.data
              });
            } else if (resp.body.status == 0) {
              this.errorMessage(resp.body.error);
              return null;
            } else {
              return resp;
            }
          } else {
            return resp;
          }
        }
      });
  }



  public getToken(): string {
    return 'abcd';
  }
  errorMessage(err: any) {
    console.log(err);
    const message: any = err.message ? err.message : err;
    console.log(message);
  }
}