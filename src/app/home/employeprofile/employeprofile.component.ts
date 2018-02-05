import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-employe-profile',
  templateUrl: './employeprofile.component.html',
  styleUrls: ['./employeprofile.component.css']
})
export class EmployeProfileComponent implements OnInit {
  input:boolean = true;
  isCollapsed: boolean = false;
  data:any = [];
  constructor(private titleService: Title, private homeService:HomeService) {
    this.employeDetails(1);
   }

  ngOnInit() {
    this.titleService.setTitle('Home');
  }
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
  //to get employe details by employeeid
  employeDetails(id){
    this.homeService.getEmployeeById(id).subscribe((data: any) => {
    this.data = data;
    console.log(this.data)
  })

  }
}