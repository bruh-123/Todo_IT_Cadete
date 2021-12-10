import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUserModule } from '../material-user.module';
import { ComponentsSharedModule } from '../../shared/components/components-shared.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialUserModule,
    ComponentsSharedModule,
    RouterModule,
  ],
  exports: [
    MaterialUserModule,
    ComponentsSharedModule,
    HeaderComponent,
    RouterModule,
  ],
})
export class ComponentsUserModule {}
