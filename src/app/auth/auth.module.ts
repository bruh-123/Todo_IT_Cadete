import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { PagesAuthModule } from './pages/pages-auth.module';
import { ComponentsAuthModule } from './components/components-auth.module';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PagesAuthModule,
    ComponentsAuthModule
  ]
})
export class AuthModule { }
