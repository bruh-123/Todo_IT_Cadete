import { Component, Input, OnInit } from '@angular/core';
import { Viaje } from '../../interfaces/viaje';

@Component({
  selector: 'app-aceptados',
  templateUrl: './aceptados.component.html',
  styleUrls: ['./aceptados.component.scss'],
})
export class AceptadosComponent implements OnInit {
  @Input() viajes: Viaje[] = [];

  constructor() {}

  ngOnInit(): void {}
}
