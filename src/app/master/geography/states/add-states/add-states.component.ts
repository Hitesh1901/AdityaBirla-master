import { Component, OnInit, Input , Output ,EventEmitter} from '@angular/core';
import { GeographyService } from '../../geography.service';
import { State } from '../../../../shared/entities/states';
import { ApexService } from '../../../../shared/service/apex.service';
import { StateForm } from '../states.form';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';



@Component({
  selector: 'app-add-states',
  templateUrl: './add-states.component.html',
  styleUrls: ['./add-states.component.css']
})
export class AddStatesComponent implements OnInit {
  myForm: any = StateForm.init();
  dataList:any = [];
  state: State = new State();
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private geographyService :GeographyService , private apexService : ApexService , private alertService:AlertService ) {
    StateForm.edit(this.myForm); 
    this.getAllCountries();
   }

  ngOnInit() {
  }
  //get all countries
  getAllCountries() {
    this.geographyService.getCountries().subscribe((data: any) => {
      this.dataList =data.response;
      // console.log(this.dataList);
    });
  }
  //to save the state
  save(){
    this.geographyService.saveState(this.state).subscribe((data: any) => {
      //  console.log(this.state);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
        this.onClose();
    });
  }
//to close the modal
  onClose(){
    this.close.emit();
  }
}
