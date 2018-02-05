import { FormGroup} from '@angular/forms';//for group validations we have to import formgroup
import { AppFormGroup } from '../../shared/common/app.form';//it is own class for validation

export class TargetAudienceform extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
        group.addControl('tagetaudience_tagetaudiencename', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('tagetaudience_tagetaudiencedescription', this.getController(null, this.TYPE_DATA, null, 50));

    }
}