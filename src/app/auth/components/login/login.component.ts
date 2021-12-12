import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateService } from '../../../shared/services/validate.service';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide: boolean = true;
  isLoading: boolean = false;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private validateService: ValidateService,
    private router: Router,
    private alerService: AlertService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }
  ingresar() {
    if (this.loginForm.invalid) {
      this.alerService.failure('Email y contraseña requeridas');
      return;
    }
    this.isLoading = true;
    this.validateService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: (resp) => {
          console.log(resp);

          this.router.navigateByUrl('/home');
        },
        error: (e) => {
          this.isLoading = false;
          console.log(e.error);
          this.alerService.failure(e.error);
        },
      });
  }
}
