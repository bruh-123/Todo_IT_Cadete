import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Viaje } from '../../interfaces/viaje';
import { ViajesService } from '../../services/viajes.service';

@Component({
  selector: 'app-disponibles',
  templateUrl: './disponibles.component.html',
  styleUrls: ['./disponibles.component.scss'],
})
export class DisponiblesComponent implements OnInit {
  @Input() viajes: Viaje[] = [];
  constructor(
    private viajesService: ViajesService,
    private alertService: AlertService
  ) {}

  aceptarViaje(idTravel: number, status: number) {
    this.viajesService.aceptarViaje(idTravel, status).subscribe({
      next: (resp) => {
        console.log(resp);
        this.alertService.success('Viaje aceptado!');
      },
      error: (e) => {
        console.log(e.error);
        this.alertService.failure(e.error);
      },
    });
  }
  ngOnInit(): void {}
}
