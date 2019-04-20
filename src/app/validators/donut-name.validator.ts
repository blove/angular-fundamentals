import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function donutNameValidator(): ValidatorFn {
  return (control: FormControl): ValidationErrors | null => {
    const valid = /(coated|dipped|frosted)$/i.test(control.value);
    return valid ? null : { donutName: { value: control.value } };
  };
}
