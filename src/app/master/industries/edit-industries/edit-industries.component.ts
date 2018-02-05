import { Component, OnInit, Input ,SimpleChanges ,EventEmitter ,Output} from '@angular/core';
import { Industries } from '../../../shared/entities/industries';
import { Industriesform } from '../industries.form';
import { IndustriesService } from '../industries.service';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-edit-industries',
  templateUrl: './edit-industries.component.html',
  styleUrls: ['./edit-industries.component.css']
})
export class EditIndustriesComponent implements OnInit {

  myForm: any = Industriesform.init();
  dataList:any = [];
  id:any;
  //communicating between two components
  @Input()industries:Industries;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private industriesService:IndustriesService , private alertService:AlertService)  { 
    Industriesform.edit(this.myForm); 
  }

  ngOnInit() {
  }
  //get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if(changes['industries']) {
      this.industries = changes['industries'].currentValue;
      // console.log(this.industries.id);
      this.getIndustriesrData(this.industries.id);
    }
  }
//get industries data
  getIndustriesrData(id:any){
    this.industriesService.getIndustriesData(id).subscribe((data: any) => {
      this.industries = data.response;
      // console.log(this.industries);
  });

}
//update industries
save(){
  this.industriesService.updateIndustries(this.industries).subscribe((data: any) => {
    // console.log(data);
    //  console.log(this.industries);
    if(data.isstatus === false){
      this.alertService.alert(AlertType.Error,data.message)
      }else{
        this.alertService.alert(AlertType.Success,data.message)
      }
     this.onClose();
  });
}
//close the modle
onClose(){
  this.close.emit();
}
}

