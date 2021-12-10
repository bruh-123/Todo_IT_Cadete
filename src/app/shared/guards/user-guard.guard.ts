import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidateService } from '../services/validate.service';
import { AlertService } from '../services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivateChild {
  constructor(private router: Router, private validateService:ValidateService, private alertService:AlertService) {
    
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.validateService.isLoged()) {
      this.alertService.failure('Debes iniciar sesión primero')
      return this.router.navigateByUrl('/login').then(() => false);
    }  
    return true
  }
}
