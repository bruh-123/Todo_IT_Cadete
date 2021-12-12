import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { every, forkJoin, Observable, Subject, tap } from 'rxjs';
import { Equipo } from '../interfaces/equipoviajes';
import { Viaje } from '../interfaces/viaje';

@Injectable({
  providedIn: 'root',
})
export class ViajesService {
  constructor(private http: HttpClient) {}

  private _refreshViajes$ = new Subject<void>();

  get refreshViajes$() {
    return this._refreshViajes$;
  }

  getViajes(status: number): Observable<Viaje[]> {
    return this.http.get<Viaje[]>('/api/Travel/2/' + status);
  }
  getDisponibles() {
    let viajes1 = this.getViajes(1);
    let viajes5 = this.getViajes(5);

    return forkJoin([viajes1, viajes5]);
  }

  // checkViaje(idTravel: number): Observable<boolean> {
  //   return this.http
  //     .get<Equipo>(`/api/Equipment/${idTravel}`)
  //     .pipe(
  //       every(
  //         (val) =>
  //           val.travelEquipmentDTOs[val.travelEquipmentDTOs.length - 1]
  //             .statusTravel == 1 ||
  //           val.travelEquipmentDTOs[val.travelEquipmentDTOs.length - 1]
  //             .statusTravel == 5
  //       )
  //     );
  // }

  aceptarViaje(idTravel: number, status: number): Observable<Viaje> {
    let userLoged = JSON.parse(localStorage.getItem('userLoged')!);
    return this.http
      .post<Viaje>(
        `/api/Travel?travelId=${idTravel}&statusTravel=${
          status + 1
        }&userOperation=2&cadeteId=${
          userLoged.id
        }&isReasigned=false&observations=Este%es%mio`,
        idTravel
      )
      .pipe(
        tap(() => {
          this._refreshViajes$.next();
        })
      );
  }

  getAceptados() {}
}
