import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialSharedModule } from './material-shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsSharedModule } from './components/components-shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialSharedModule, HttpClientModule, ComponentsSharedModule],
  exports: [MaterialSharedModule, HttpClientModule],
})
export class SharedModule {}
