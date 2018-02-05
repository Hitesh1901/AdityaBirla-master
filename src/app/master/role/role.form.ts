import { FormGroup} from '@angular/forms';//for group validations we have to import formgroup
import { AppFormGroup } from '../../shared/common/app.form';//it is own class for validation

export class Roleform extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
        group.addControl('role_rolename', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('role_roleshortname', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('role_roledescription', this.getController(null, this.TYPE_DATA, null, 50));

    }
}