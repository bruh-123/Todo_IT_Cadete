import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  isLoading: boolean = false;
  submitted:boolean = false;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private validateService:ValidateService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }
  ingresar() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return
    }
    this.isLoading = true;
    this.validateService.login(this.loginForm.value.email,this.loginForm.value.password).pipe()
  }
  ngOnInit(): void {}
}
