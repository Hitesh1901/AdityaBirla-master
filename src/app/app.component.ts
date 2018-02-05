import { Component , OnInit } from '@angular/core';
import { ApexService } from './shared/service/apex.service';
import { routerTransition } from './routning.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //for animations between the routes
  animations: [ routerTransition ]
})
export class AppComponent implements OnInit {
  showLoader: boolean = false;
  private _loaderSubscription: any;
  title = 'app';
  isSide :string ;
  rightorleft:string;
  private opened: boolean = true;
  isCollapsed: boolean = true;

  constructor(private apexService : ApexService){
  this.isSide = "right";
  this.rightorleft = 'left';

  }
  // for the loader
  ngOnInit() {
    this._loaderSubscription = this.apexService.loaderEvent.subscribe(data => {
      if (data != this.showLoader) {
        setTimeout( ()=>{
          this.showLoader = data;
        }, 100)
      }
    });
  }
  private _toggleSidebar() {
    this.opened = !this.opened;
  }

collapsed(event: any): void {
  // console.log(event);
}

expanded(event: any): void {
  // console.log(event);
}
getState(outlet) {
  return outlet.activatedRouteData.state;
}
  
}
