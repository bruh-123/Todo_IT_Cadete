import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialSharedModule } from './material-shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsSharedModule } from './components/components-shared.module';
import { EstadoViajesPipe } from '../user/pipes/estadoViaje';

@NgModule({
  declarations: [EstadoViajesPipe],
  imports: [
    CommonModule,
    MaterialSharedModule,
    HttpClientModule,
    ComponentsSharedModule,
  ],
  exports: [MaterialSharedModule, HttpClientModule, EstadoViajesPipe],
})
export class SharedModule {}
