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
  
  
  constructor(
    private viajesService: ViajesService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}
}
