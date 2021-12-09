import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { PagesUserModule } from './pages/pages-user.module';
import { ComponentsUserModule } from './components/components-user.module';
import { MaterialUserModule } from './material-user.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    PagesUserModule,
    ComponentsUserModule,
    MaterialUserModule,
    SharedModule
  ]
})
export class UserModule { }
