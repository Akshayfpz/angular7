import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
  if (control.value.length<= 5) {
    return { validUrl: true };
  }
  return null;
}
export function ValidatePassword(control: AbstractControl) {
    if (!/[a-zA-Z 0-9]+/.test(control.value)) {
      return { validPassword: true };
    }
    return null;
  }

