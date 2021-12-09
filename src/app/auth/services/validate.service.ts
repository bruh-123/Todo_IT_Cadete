import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../shared/interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  constructor(private http: HttpClient) {}
  
  login(email: string, password: string): Observable<User> {
    return this.http.get<User>(
      'api/Login' + '?email=' + email + '&password=' + password
    );
  }
}
