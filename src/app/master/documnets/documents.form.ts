import { FormGroup} from '@angular/forms';//for group validations we have to import formgroup
import { AppFormGroup } from '../../shared/common/app.form';//it is own class for validation

export class Documentform extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
        group.addControl('document_documentname', this.getController(null, this.TYPE_DATA, null, 50));
        
    }
}