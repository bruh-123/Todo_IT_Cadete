import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, forkJoin, map, Observable, Subject, tap } from 'rxjs';
import { Viaje } from '../interfaces/viaje';

@Injectable({
  providedIn: 'root',
})
export class ViajesService {
  constructor(private http: HttpClient) {}
  private _userLoged = JSON.parse(localStorage.getItem('userLoged')!);
  private _refreshDisponibles$ = new Subject<void>();
  private _refreshAceptados$ = new Subject<void>();

  get refreshDisponibles$() {
    return this._refreshDisponibles$;
  }
  get refreshAceptados$() {
    return this._refreshDisponibles$;
  }
  get userLoged$() {
    return this._userLoged;
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
    return this.http
      .post<Viaje>(
        `/api/Travel?travelId=${idTravel}&statusTravel=${
          status + 1
        }&userOperation=2&cadeteId=${
          this._userLoged.id
        }&isReasigned=false&observations=Este%es%mio`,
        idTravel
      )
      .pipe(tap(() => this._refreshDisponibles$.next()));
  }

  getAceptados() {
    let aceptados2 = this.getViajes(2);
    let aceptados6 = this.getViajes(6);
    let aceptados3 = this.getViajes(3);
    let aceptados7 = this.getViajes(7);
    return forkJoin([aceptados2, aceptados6,aceptados3,aceptados7]);
  }

  rechazarViaje(idTravel: number, status: number): Observable<Viaje> {
    return this.http
      .post<Viaje>(
        `/api/Travel?travelId=${idTravel}&statusTravel=${
          status - 1
        }&userOperation=2&cadeteId=${
          this._userLoged.id
        }&isReasigned=true&observations=Este%ya%no%es%mio`,
        idTravel
      )
      .pipe(tap(() => this.refreshAceptados$.next()));
  }

  retirarEquipo(idTravel: number, status: number) {
    return this.http
      .post<Viaje>(
        `/api/Travel?travelId=${idTravel}&statusTravel=${
          status + 1
        }&userOperation=2&cadeteId=${
          this._userLoged.id
        }&isReasigned=true&observations=Este%ya%no%es%mio`,
        idTravel
      )
      .pipe(tap(() => this.refreshAceptados$.next()));
  }
  entregarEquipo(idTravel: number, status: number) {
    return this.http
      .post<Viaje>(
        `/api/Travel?travelId=${idTravel}&statusTravel=${
          status + 1
        }&userOperation=2&cadeteId=${
          this._userLoged.id
        }&isReasigned=true&observations=Este%ya%no%es%mio`,
        idTravel
      )
      .pipe(tap(() => this.refreshAceptados$.next()));
  }

  getFinalizados() {
    let finalizados4 = this.getViajes(4);
    let finalizados8 = this.getViajes(8);
    let finalizados9 = this.getViajes(9);
    return forkJoin([finalizados4, finalizados8, finalizados9]);
  }
}
