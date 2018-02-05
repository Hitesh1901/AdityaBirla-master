import { FormGroup} from '@angular/forms';//for group validations we have to import formgroup
import { AppFormGroup } from '../../../shared/common/app.form';//it is own class for validation

export class Functionform extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
        group.addControl('function_name', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('function_shortname', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('function_description', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('function_subdeptname', this.getController(null, this.TYPE_DATA, null, 50));

    }
}