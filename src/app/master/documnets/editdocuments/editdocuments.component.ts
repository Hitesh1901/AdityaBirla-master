import { Component, OnInit, Input ,SimpleChanges ,EventEmitter ,Output} from '@angular/core';
import { DocumnetsService } from '../documnets.service';
import { Documents } from '../../../shared/entities/documents';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { Documentform } from '../documents.form';


@Component({
  selector: 'app-edit-documents',
  templateUrl: './editdocuments.component.html',
  styleUrls: ['./editdocuments.component.css']
})
export class EditDocumentsComponent implements OnInit {

 
  myForm: any = Documentform.init();
  dataList:any = [];
  id:any;
  //comunicating between two components
  @Input()documents:Documents;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private documnetsService:DocumnetsService , private alertService:AlertService)  { 
    Documentform.edit(this.myForm); 
  }

  ngOnInit() {
  }
  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if(changes['documents']) {
      this.documents = changes['documents'].currentValue;
      // console.log(this.role.roleid);
      this.getRoleData(this.documents.id);
    }
  }
//getRoleData by id
  getRoleData(id:any){
    this.documnetsService.getDocumentsData(id).subscribe((data: any) => {
      this.documents = data.response;
      // console.log(this.role);
  });

}
//save the role
save(){
  this.documnetsService.updateDocuments(this.documents).subscribe((data: any) => {
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

