import { Component, Input, OnInit } from '@angular/core';
import { Viaje } from '../../interfaces/viaje';
import { AlertService } from '../../../shared/services/alert.service';
import { ViajesService } from '../../services/viajes.service';

@Component({
  selector: 'app-aceptados',
  templateUrl: './aceptados.component.html',
  styleUrls: ['./aceptados.component.scss'],
})
export class AceptadosComponent implements OnInit {
  @Input() viajes: Viaje[] = [];

  constructor(
    private alertService: AlertService,
    private viajesService: ViajesService
  ) {}

  rechazarViaje(id: number, status: number) {
    this.viajesService.rechazarViaje(id, status).subscribe({
      next: (resp) => {
        console.log(resp);
        this.alertService.success('Viaje rechazado!');
      },
      error: (e) => {
        console.log(e.error);
        this.alertService.failure(e.error);
      },
    });
  }

  retirar(id: number, status: number) {
    this.viajesService.retirarEquipo(id, status).subscribe({
      next: (resp) => {
        console.log(resp);
        this.alertService.success('Retiraste el equipo!');
      },
      error: (e) => {
        console.log(e.error);
        this.alertService.failure(e.error);
      },
    });
  }
  finalizar(id: number, status: number) {
    this.viajesService.entregarEquipo(id, status).subscribe({
      next: (resp) => {
        console.log(resp);
        this.alertService.success('Entregaste el equipo!');
      },
      error: (e) => {
        console.log(e.error);
        this.alertService.failure(e.error);
      },
    });
  }

  ngOnInit(): void {}
}
