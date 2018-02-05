import { FormGroup} from '@angular/forms';//for group validations we have to import formgroup
import { AppFormGroup } from '../../../shared/common/app.form';//it is own class for validation


export class CountryForm extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
        group.addControl('country_name', this.getController(null, this.APLPHA_NUMERIC, null, 50));
        group.addControl('country_code', this.getController(null, this.APLPHA_NUMERIC, null, 50));
    }
}