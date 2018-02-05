import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Industries } from '../../../shared/entities/industries';
import { Industriesform } from '../industries.form';
import { IndustriesService } from '../industries.service';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-add-industries',
  templateUrl: './add-industries.component.html',
  styleUrls: ['./add-industries.component.css']
})
export class AddIndustriesComponent implements OnInit {
  myForm: any = Industriesform.init();
  dataList: any = [];
  id: any;
  industries: Industries = new Industries();
  //event emitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private industriesService: IndustriesService , private alertService:AlertService) {
    Industriesform.edit(this.myForm);
  }

  ngOnInit() {
  }
  //to save the industry
  save() {
    this.industriesService.saveIndustries(this.industries).subscribe((data: any) => {
      console.log(data);
      //  console.log(this.industries);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
      this.onClose();
    });
  }
  //to close the modal
  onClose() {
    this.close.emit();
  }
}

