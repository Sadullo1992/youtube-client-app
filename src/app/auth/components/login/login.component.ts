import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder, FormGroup, FormGroupDirective, Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { passwordStrenthValidator } from '../../validators/password-strength';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild(FormGroupDirective)
    myForm!: { resetForm: () => void; };

  hide = true;

  loginForm: FormGroup = this.fb.group({
    loginEmail: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, passwordStrenthValidator()]],
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  get loginEmail() {
    return this.loginForm.controls['loginEmail'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  login(): void {
    this.authService.login();
    this.router.navigate(['/youtube']);
    // console.log(this.loginForm);
    this.myForm.resetForm();
  }
}
