import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordStrenthValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
    const { value } = control;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value);

    const hasSpecialCharacter = /[!@#$%^&]+/.test(value);

    const has8Characters = (value.length > 7);

    const passwordValid = hasUpperCase
      && hasLowerCase
      && hasNumeric
      && hasSpecialCharacter
      && has8Characters;

    return !passwordValid ? { passwordStrength: true } : null;
  };
}
