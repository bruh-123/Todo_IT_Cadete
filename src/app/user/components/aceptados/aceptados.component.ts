import { Component, Input, OnInit } from '@angular/core';
import { Viaje } from '../../interfaces/viaje';
import { AlertService } from '../../../shared/services/alert.service';
import { ViajesService } from '../../services/viajes.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-aceptados',
  templateUrl: './aceptados.component.html',
  styleUrls: ['./aceptados.component.scss'],
})
export class AceptadosComponent implements OnInit {
  @Input() viajes: Viaje[] = [];
  isLoading: boolean = false;
  loading: boolean = false;

  constructor(
    private alertService: AlertService,
    private viajesService: ViajesService
  ) {}

  rechazarViaje(id: number, status: number) {
    this.viajesService
      .postViaje(id, status - 1, true)
      .pipe(tap(() => this.viajesService.refreshAceptados$.next()))
      .subscribe({
        next: () => {
          this.alertService.success('Viaje rechazado!');
        },
        error: (e) => {
          console.log(e.error);
          this.alertService.failure(e.error);
        },
      });
  }

  // retirar(id: number, status: number) {
  //   this.viajesService.postViaje(id, status+1).pipe(tap(()=>this.viajesService.refreshAceptados$.next())).subscribe({
  //   next: (resp) => {
  //     console.log(resp);
  //     this.alertService.success('Retiraste el equipo!');
  //   },
  //   error: (e) => {
  //     console.log(e.error);
  //     this.alertService.failure(e.error);
  //   },
  // });
  // }
  avanzar(id: number, status: number) {
    this.viajesService
      .postViaje(id, status + 1)
      .pipe(tap(() => this.viajesService.refreshAceptados$.next()))
      .subscribe({
        next: () => {
          this.alertService.success(
            `${
              status == 3 || status == 7 ? `Entregaste` : `Retiraste`
            } el equipo`
          );
        },
        error: (e) => {
          console.log(e.error);
          this.alertService.failure(e.error);
        },
      });
  }

  ngOnInit(): void {
    this.viajesService.refreshAceptados$.subscribe(() => this.getAceptados());
    this.getAceptados();
  }
  getAceptados() {
    this.isLoading = true;
    console.log('getting aceptados');

    this.viajesService.getAceptados().subscribe((res) => {
      this.viajes = [...res[0], ...res[1], ...res[2], ...res[3]];
      this.viajes = this.viajes.filter((v) => {
        if (
          v.travelEquipmentDTOs[v.travelEquipmentDTOs.length - 1].cadete.id ==
          this.viajesService.userLoged$.id
        ) {
          return true;
        }
        return false;
      });
      this.isLoading = false;
    });
  }
}
