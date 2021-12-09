import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialAuthModule } from '../material-auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsSharedModule } from '../../shared/components/components-shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialAuthModule,
    ReactiveFormsModule,
    ComponentsSharedModule,
  ],
  exports: [
    LoginComponent,
    MaterialAuthModule,
    ReactiveFormsModule,
    ComponentsSharedModule,
  ],
})
export class ComponentsAuthModule {}
