import { ValidationErrors, AbstractControl, ValidatorFn } from "@angular/forms";
export class RegisterValidator {
    static match(controlForm: string, matchingForm: string): ValidatorFn {
        return ((group: AbstractControl): ValidationErrors | null => {
            const control = group.get(controlForm);
            const matchin = group.get(matchingForm);
            if (!control || !matchin) {
                return { ControlNotFound: false }
            }
            const error = control.value === matchin.value ? null : { noMatchFound: true }
            matchin?.setErrors(error);
            return error;
        })
    }
}
