import { FormGroup} from '@angular/forms';//for group validations we have to import formgroup
import { AppFormGroup } from '../../shared/common/app.form';//it is own class for validation

export class Employerform extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
        group.addControl('employer_name', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('employer_cityname', this.getController(null, this.TYPE_DATA, null, 50));

    }
}