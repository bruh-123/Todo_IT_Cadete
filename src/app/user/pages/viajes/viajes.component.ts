import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Viaje } from '../../interfaces/viaje';
import { ViajesService } from '../../services/viajes.service';
import { DataViaje } from '../../interfaces/dataViaje';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss'],
})
export class ViajesComponent implements OnInit {
  isLoading: boolean = false;
  viajesDisponibles: Viaje[] = [];
  constructor(private viajesService: ViajesService) {}

  ngOnInit(): void {
    this.viajesService.getDisponibles().subscribe((resp) => {
      this.viajesDisponibles=[...resp[0],...resp[1]]
    });
  }
}
