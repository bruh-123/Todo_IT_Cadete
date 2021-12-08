import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialAuthModule } from '../material-auth.module';
import { MaterialSharedModule } from '../../shared/material-shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialAuthModule,
    MaterialSharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent,
    MaterialAuthModule,
    MaterialSharedModule,
    ReactiveFormsModule,
  ],
})
export class ComponentsAuthModule {}
