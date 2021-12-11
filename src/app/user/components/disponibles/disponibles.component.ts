import { Component, Input, OnInit } from '@angular/core';
import { Viaje } from '../../interfaces/viaje';

@Component({
  selector: 'app-disponibles',
  templateUrl: './disponibles.component.html',
  styleUrls: ['./disponibles.component.scss'],
})
export class DisponiblesComponent implements OnInit {
  @Input() viajes: Viaje[] = [];
  constructor() {}

  ngOnInit(): void {}
}
