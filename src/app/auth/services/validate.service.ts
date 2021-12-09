import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { User } from '../../shared/interfaces/users';
import { Loged } from '../../shared/interfaces/loged';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  public currentUser: Loged = JSON.parse(localStorage.getItem('userLoged')!);
  private loged!: Loged;
  get logedUser() {
    return { ...this.loged };
  }
  constructor(private http: HttpClient) {
    console.log(this.currentUser);
  }

  login(email: string, password: string): Observable<User> {
    return this.http
      .get<User>('api/Login' + '?email=' + email + '&password=' + password)
      .pipe(
        tap((resp) => {
          this.loged = {
            id: resp.id,
            fullname: resp.fullName,
            email: resp.email,
            cellPhone: resp.cellPhone,
            vehicle: resp.vehicle,
            rol: resp.rol,
          };
          localStorage.setItem('userLoged', JSON.stringify(this.loged));
        })
      );
  }
}
