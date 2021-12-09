import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialSharedModule } from './material-shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialSharedModule, HttpClientModule],
  exports: [MaterialSharedModule, HttpClientModule],
})
export class SharedModule {}
