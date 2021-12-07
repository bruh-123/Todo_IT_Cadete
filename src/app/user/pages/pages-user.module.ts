import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ViajesComponent } from './viajes/viajes.component';
import { HistorialComponent } from './historial/historial.component';



@NgModule({
  declarations: [
    HomeComponent,
    ViajesComponent,
    HistorialComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesUserModule { }
