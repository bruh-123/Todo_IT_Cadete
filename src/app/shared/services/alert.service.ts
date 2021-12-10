import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private snackbar: MatSnackBar) {}

  openFailureSnackBar(error: string) {
    this.snackbar.open(error, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
      panelClass: ['red-snackbar'],
    });
  }
  openSuccessSnackBar(message: string) {
    this.snackbar.open(message, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
      panelClass: ['green-snackbar'],
    });
  }
  failure(error: string) {
    if (error == 'Usuario no existe') {
      this.openFailureSnackBar('Usuario no existe/contraseña incorrecta');
    } else {
      this.openFailureSnackBar(error);
    }
  }

  success(message: string) {
    this.openSuccessSnackBar(message);
  }
}
