import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUserModule } from '../material-user.module';
import { ComponentsSharedModule } from '../../shared/components/components-shared.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [CommonModule, MaterialUserModule, ComponentsSharedModule],
  exports: [MaterialUserModule, ComponentsSharedModule,HeaderComponent],
})
export class ComponentsUserModule {}
