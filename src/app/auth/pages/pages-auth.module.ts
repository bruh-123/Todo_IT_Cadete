import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login/loginPage.component';
import { ComponentsAuthModule } from '../components/components-auth.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, ComponentsAuthModule],
  exports: [ComponentsAuthModule, LoginPageComponent],
})
export class PagesAuthModule {}
