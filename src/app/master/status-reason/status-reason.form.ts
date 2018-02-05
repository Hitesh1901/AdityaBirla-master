import { FormGroup} from '@angular/forms';//for group validations we have to import formgroup
import { AppFormGroup } from '../../shared/common/app.form';//it is own class for validation

export class StatusReasonform extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
        group.addControl('statusreason_name', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('statusreason_reason', this.getController(null, this.TYPE_DATA, null, 50));

    }
}