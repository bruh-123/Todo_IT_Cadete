import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Viaje } from '../../interfaces/viaje';
import { ViajesService } from '../../services/viajes.service';
import { sortDate } from '../../../shared/utils/sortDate';

@Component({
  selector: 'app-disponibles',
  templateUrl: './disponibles.component.html',
  styleUrls: ['./disponibles.component.scss'],
})
export class DisponiblesComponent implements OnInit {
  @Input() viajes: Viaje[] = [];
  isLoading: boolean = false;

  constructor(
    private viajesService: ViajesService,
    private alertService: AlertService
  ) {}

  aceptarViaje(idTravel: number, status: number) {
    this.viajesService.postViaje(idTravel, status + 1).pipe(tap(()=>this.viajesService.refreshDisponibles$.next())).subscribe({
    next: () => {
      this.alertService.success('Viaje aceptado!');
    },
    error: (e) => {
      console.log(e.error);
      this.alertService.failure(e.error);
    },
  });
  }
  ngOnInit(): void {
    this.viajesService.refreshDisponibles$.subscribe(() =>
      this.getDisponibles()
    );
    this.getDisponibles();
  }
  getDisponibles() {
    this.isLoading = true;
    console.log('getting disponibles');

    this.viajesService
      .getDisponibles().subscribe({
        next: (resp) => {
          this.viajes = [...resp[0], ...resp[1]];
          this.viajes = sortDate(this.viajes);
          this.isLoading = false;
        },
        error: (e) => {
          console.log(e.error);
          this.alertService.failure(e.error);
        },
      });
  }
}
