import { Component, OnInit, Input ,SimpleChanges ,EventEmitter ,Output} from '@angular/core';
import { DocumnetsService } from '../documnets.service';
import { Documents } from '../../../shared/entities/documents';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { Documentform } from '../documents.form';


@Component({
  selector: 'app-add-documents',
  templateUrl: './adddocuments.component.html',
  styleUrls: ['./adddocuments.component.css']
})
export class AddDocumentsComponent implements OnInit {

 
  myForm: any = Documentform.init();
  dataList:any = [];
  id:any;
  //comunicating between two components
  documents:Documents = new Documents();
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private documnetsService:DocumnetsService , private alertService:AlertService)  { 
    Documentform.edit(this.myForm); 
  }

  ngOnInit() {
  }

//save the role
save(){
  this.documnetsService.saveDocuments(this.documents).subscribe((data: any) => {
    // console.log(data);
    //  console.log(this.role);
    if(data.isstatus === false){
      this.alertService.alert(AlertType.Error,data.message)
      }else{
        this.alertService.alert(AlertType.Success,data.message)
      }
     this.onClose();
  });
}
//close the modal
onClose(){
  this.close.emit();
}
}

