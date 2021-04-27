import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../core/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) {
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authenticationService.currentUserValue != null) {
      // let roles = next.data['permittedRoles'] as Array<string>;
      // if(roles) {
      //   if(this.authenticationService.roleMatch(roles)) {
      //     return true;
      //   } else {
      //     this.router.navigate(['/forbidden']);
      //     return false;
      //   }
      // }
      // return true; 
      // console.log(this.authenticationService.currentUserValue)
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
