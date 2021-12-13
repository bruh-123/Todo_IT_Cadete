import { Component, OnInit } from '@angular/core';
import { Viaje } from '../../interfaces/viaje';
import { ViajesService } from '../../services/viajes.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss'],
})
export class ViajesComponent implements OnInit {
  isLoading: boolean = false;
  viajesDisponibles1!: Viaje[];
  viajesAceptados: Viaje[] = [];
  constructor(
    private viajesService: ViajesService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.viajesService.refreshDisponibles$.subscribe(() =>
      this.getDisponibles()
    );
    this.getDisponibles();
    this.viajesService.refreshAceptados$.subscribe(() => this.getAceptados());
    this.getAceptados();
  }

  getDisponibles() {
    this.viajesService.getDisponibles().subscribe({
      next: (resp) => {
        this.viajesDisponibles1 = [...resp[0], ...resp[1]];
      },
      error: (e) => {
        console.log(e.error);
        this.alertService.failure(e.error);
      },
    });
  }

  getAceptados() {
    this.viajesService.getAceptados().subscribe((res) => {
      this.viajesAceptados = [...res[0], ...res[1],...res[2],...res[3]];
      this.viajesAceptados = this.viajesAceptados.filter((v) => {
        if (
          v.travelEquipmentDTOs[v.travelEquipmentDTOs.length - 1].cadete
            .id == this.viajesService.userLoged$.id
        ) {
          return true;
        }
        return false;
      });
    });
  }
}
