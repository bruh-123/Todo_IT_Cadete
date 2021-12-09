import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUserModule } from '../material-user.module';
import { ComponentsSharedModule } from '../../shared/components/components-shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialUserModule, ComponentsSharedModule],
  exports: [MaterialUserModule, ComponentsSharedModule],
})
export class ComponentsUserModule {}
