import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Viaje } from '../../interfaces/viaje';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss'],
})
export class ViajesComponent implements OnInit {
  isLoading: boolean = false;
  viajesDisponibles: Viaje[] = [];
  constructor() {}

  ngOnInit(): void {}
}
