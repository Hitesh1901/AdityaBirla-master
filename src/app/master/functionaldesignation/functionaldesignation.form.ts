import { FormGroup} from '@angular/forms';//for group validations we have to import formgroup
import { AppFormGroup } from '../../shared/common/app.form';//it is own class for validation

export class FunctionalDesignationform extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
        group.addControl('functionaldesignation_functionaldesignation', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('functionaldesignation_description', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('functionaldesignation_costcentername', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('functionaldesignation_subfunctionname', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('functionaldesignation_functionname', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('functionaldesignation_subdeptname', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('functionaldesignation_deptname', this.getController(null, this.TYPE_DATA, null, 50));
        group.addControl('functionaldesignation_businesunitname', this.getController(null, this.TYPE_DATA, null, 50));

    }
}