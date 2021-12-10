import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../interfaces/users';
import { Loged } from '../interfaces/loged';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  private loged!: Loged;

  get logedUser() {
    return { ...this.loged };
  }
  constructor(private http: HttpClient, private alertService: AlertService) {
  }

  login(email: string, password: string): Observable<User> {
    return this.http
      .get<User>('api/Login' + '?email=' + email + '&password=' + password)
      .pipe(
        tap((resp) => {
          if (resp.rol.id == 2) {
            this.loged = {
              id: resp.id,
              fullname: resp.fullName,
              email: resp.email,
              cellPhone: resp.cellPhone,
              vehicle: resp.vehicle,
              rol: resp.rol,
            };
            localStorage.setItem('userLoged', JSON.stringify(this.loged));
          } else {
            throw { error: 'Esta app es sólo para cadetes' };
          }
        })
      );
  }

  isLoged(): boolean {
    let currentUser = JSON.parse(localStorage.getItem('userLoged')!);
    return currentUser ? true : false;
  }
}
