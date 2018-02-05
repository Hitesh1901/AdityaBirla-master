import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { GeographyService } from '../../geography.service';
import { Pincode } from '../../../../shared/entities/pincode';
import { PinCodeForm } from '../pincode.form';
import { AlertService } from '../../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-edit-pincode',
  templateUrl: './edit-pincode.component.html',
  styleUrls: ['./edit-pincode.component.css']
})
export class EditPincodeComponent implements OnInit {
  myForm: any = PinCodeForm.init();
  dataList: any = [];
  id: any;
  pincode: Pincode = new Pincode();
  //communicating between two components
  @Input() pincodes: Pincode;
  //event emitter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private geographyService: GeographyService  , private alertService:AlertService) {
    PinCodeForm.edit(this.myForm);
    this.getAllCities();
  }

  ngOnInit() {
  }
  //to get the object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['pincodes']) {
      this.pincodes = changes['pincodes'].currentValue;
      // console.log(this.pincodes.id);
      this.getPincodeData(this.pincodes.id);
    }
  }
  //get all cities
  getAllCities() {
    this.geographyService.getCities().subscribe((data: any) => {
      this.dataList = data.response;
      // console.log(this.dataList);
    });
  }
  //get pincodedata
  getPincodeData(id: any) {
    this.geographyService.getPincodeData(id).subscribe((data: any) => {
      this.pincode = data.response;
      // console.log(this.pincode);
    });

  }
  //to update pincode
  save() {
    this.geographyService.updatePincode(this.pincode).subscribe((data: any) => {
      // console.log(data);
      //  console.log(this.pincode);
      if(data.isstatus === false){
        this.alertService.alert(AlertType.Error,data.message)
        }else{
          this.alertService.alert(AlertType.Success,data.message)
        }
        this.onClose()
    });
  }

  //to close the modal
  onClose() {
    this.close.emit();
  }
}
