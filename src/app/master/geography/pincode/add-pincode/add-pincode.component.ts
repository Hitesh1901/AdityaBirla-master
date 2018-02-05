import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges ,TemplateRef} from '@angular/core';
import { GeographyService } from '../../geography.service';
import { Pincode } from '../../../../shared/entities/pincode';
import { PinCodeForm } from '../pincode.form';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';



@Component({
  selector: 'app-add-pincode',
  templateUrl: './add-pincode.component.html',
  styleUrls: ['./add-pincode.component.css']
})
export class AddPincodeComponent implements OnInit {
  myForm: any = PinCodeForm.init();
  dataList:any = [];
  pincode:Pincode = new Pincode();
  //event emmitter
  @Output() close: EventEmitter<any> = new EventEmitter();
 
    constructor(private geographyService : GeographyService , private alertService:AlertService) {
      PinCodeForm.edit(this.myForm); 
      this.getCities();
     }
  
    ngOnInit() {
    }
    //get cities
    getCities(){
      this.geographyService.getCities().subscribe((data: any) => {
       this.dataList = data.response;
      //  console.log(this.dataList);
      });
    }
    //to save the pincode
    save(){
      this.geographyService.savePincode(this.pincode).subscribe((data: any) => {
        // console.log(data);
        //  console.log(this.pincode);
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