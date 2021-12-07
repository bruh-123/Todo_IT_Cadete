import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { PagesUserModule } from './pages/pages-user.module';
import { ComponentsUserModule } from './components/components-user.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    PagesUserModule,
    ComponentsUserModule
  ]
})
export class UserModule { }
