import { Component, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder, FormGroup, FormGroupDirective, ValidationErrors, ValidatorFn, Validators,
} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  @ViewChild(FormGroupDirective)
    createForm!: { resetForm: () => void; };

  REG = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  createCardForm: FormGroup = this.fb.group({
    title: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ],
    ],
    description: ['', [Validators.maxLength(255)]],
    imageLink: ['', [Validators.required, Validators.pattern(this.REG)]],
    linkVideo: ['', [Validators.required, Validators.pattern(this.REG)]],
    date: ['', [Validators.required, this.checkFutureDate()]],
  });

  constructor(private fb: FormBuilder) {}

  get title() {
    return this.createCardForm.controls['title'];
  }

  get description() {
    return this.createCardForm.controls['description'];
  }

  get imageLink() {
    return this.createCardForm.controls['imageLink'];
  }

  get linkVideo() {
    return this.createCardForm.controls['linkVideo'];
  }

  get date() {
    return this.createCardForm.controls['date'];
  }

  createCard(): void {
    // console.log(this.createCardForm.value);
    this.createForm.resetForm();
  }

  private checkFutureDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const { value } = control;

      if (!value) {
        return null;
      }

      const now = new Date();
      const diffTime = now.getTime() - value.getTime();
      const dateValid = (diffTime > 0);
      return !dateValid ? { futureDate: true } : null;
    };
  }
}
