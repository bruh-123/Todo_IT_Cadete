import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidateService } from '../services/validate.service';
import { AlertService } from '../services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivateChild {
  constructor(private router: Router, private validateService: ValidateService,private alertService:AlertService) { }
  
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.validateService.isLoged()) {
      this.alertService.failure('Debes cerrar sesión primero');
      return this.router.navigateByUrl('/home').then(() => false);
    }
    return true;
  }
  
}
