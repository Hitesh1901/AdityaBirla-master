import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.css']
})
export class InsightComponent implements OnInit {
    private opened: boolean = true;
    isCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  collapsed(event: any): void {
    // console.log(event);
  }
  
  expanded(event: any): void {
    // console.log(event);
  }
}
