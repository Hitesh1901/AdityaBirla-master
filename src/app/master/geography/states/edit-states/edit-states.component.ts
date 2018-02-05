import { Component, OnInit ,Input , Output, EventEmitter, SimpleChanges} from '@angular/core';
import { GeographyService } from '../../geography.service';
import { State } from '../../../../shared/entities/states';
import { StateForm } from '../states.form';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';


@Component({
  selector: 'app-edit-states',
  templateUrl: './edit-states.component.html',
  styleUrls: ['./edit-states.component.css']
})
export class EditStatesComponent implements OnInit {
  myForm: any = StateForm.init();
  dataList:any = [];
  id:any;
  state: State = new State();
  //coummunicating between two components
  @Input()states:State;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private geographyService:GeographyService , private alertService:AlertService) { 
    StateForm.edit(this.myForm); 
    this.getAllCountries();
  }

  ngOnInit() {
  }
  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if(changes['states']) {
      this.states = changes['states'].currentValue;
      // console.log(this.states.id);
      this.getStateData(this.states.id);
    }
  }
  //getall countries
  getAllCountries() {
    this.geographyService.getCountries().subscribe((data: any) => {
      this.dataList =data.response;
      // console.log(this.dataList);
    });
  }
//get statedat by id
  getStateData(id:any){
    this.geographyService.getStateData(id).subscribe((data: any) => {
      this.state = data.response;
      // console.log(this.state);
  });

}
//update the state
save(){
  this.geographyService.updateState(this.state).subscribe((data: any) => {
    // console.log(data);
    //  console.log(this.state);
    if(data.isstatus === false){
      this.alertService.alert(AlertType.Error,data.message)
      }else{
        this.alertService.alert(AlertType.Success,data.message)
      }
      this.onClose()
  });
}
//to close the module
onClose(){
  this.close.emit();
}
}
