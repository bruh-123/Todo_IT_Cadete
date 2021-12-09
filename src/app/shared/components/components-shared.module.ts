import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { MaterialSharedModule } from '../material-shared.module';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, MaterialSharedModule],
  exports: [SpinnerComponent, MaterialSharedModule],
})
export class ComponentsSharedModule {}
