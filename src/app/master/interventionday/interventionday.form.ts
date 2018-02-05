import { FormGroup} from '@angular/forms';//for group validations we have to import formgroup
import { AppFormGroup } from '../../shared/common/app.form';//it is own class for validation

export class InterventionDayform extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
        group.addControl('interventionday_interventiondayname', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('interventionday_interventiondayno', this.getController(null, this.TYPE_NUMBER, null, 50));
        group.addControl('interventionday_interventiondaydescription', this.getController(null, this.TYPE_DATA, null, 50));

    }
}