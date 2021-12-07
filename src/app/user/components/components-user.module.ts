import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUserModule } from '../material-user.module';
import { MaterialSharedModule } from '../../shared/material-shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialUserModule, MaterialSharedModule],
  exports: [MaterialUserModule, MaterialSharedModule],
})
export class ComponentsUserModule {}
