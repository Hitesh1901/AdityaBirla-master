import { FormGroup} from '@angular/forms';//for group validations we have to import formgroup
import { AppFormGroup } from '../../shared/common/app.form';//it is own class for validation

export class Moduleform extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
        group.addControl('module_modulename', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('module_moduleshortname', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('module_moduledescription', this.getController(null, this.TYPE_DATA, null, 50));
    }
}