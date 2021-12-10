import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ViajesComponent } from './viajes/viajes.component';
import { HistorialComponent } from './historial/historial.component';
import { ComponentsUserModule } from '../components/components-user.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeComponent, ViajesComponent, HistorialComponent],
  imports: [CommonModule, ComponentsUserModule, RouterModule],
  exports:[]
})
export class PagesUserModule {}
