import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ViajesComponent } from './viajes/viajes.component';
import { HistorialComponent } from './historial/historial.component';
import { ComponentsUserModule } from '../components/components-user.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [HomeComponent, ViajesComponent, HistorialComponent,],
  imports: [CommonModule, ComponentsUserModule, RouterModule,SharedModule],
  exports: [HomeComponent, ViajesComponent, HistorialComponent,],
})
export class PagesUserModule {}