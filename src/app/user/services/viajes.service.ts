import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Viaje } from '../interfaces/viaje';
import { DataViaje } from '../interfaces/dataViaje';

@Injectable({
  providedIn: 'root',
})
export class ViajesService {
  constructor(private http: HttpClient) {}

  getViajes(status:number): Observable<Viaje[]> {
    return this.http.get<Viaje[]>('/api/Travel/2/' + status);
  }
  getDisponibles() {
    let viajes1 = this.getViajes(1);
    let viajes5 = this.getViajes(5);

    return forkJoin([viajes1,viajes5])

  }
}
