import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialAuthModule } from '../material-auth.module';
import { MaterialSharedModule } from '../../shared/material-shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, MaterialAuthModule, MaterialSharedModule],
  exports: [LoginComponent, MaterialAuthModule, MaterialSharedModule],
})
export class ComponentsAuthModule {}
