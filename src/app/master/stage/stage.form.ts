import { FormGroup} from '@angular/forms';//for group validations we have to import formgroup
import { AppFormGroup } from '../../shared/common/app.form';//it is own class for validation

export class Stageform extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
        group.addControl('stage_stagename', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('stage_stagedescription', this.getController(null, this.TYPE_DATA, null, 50));

    }
}