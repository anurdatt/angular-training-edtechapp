import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanMatch {
  
  constructor(private authService: AuthService, private router: Router) {
  }

  canMatch(): boolean {
    //authentication
    if (this.authService.user == undefined) {
      this.router.navigate(['/login']);
      return true;
    }
    //authorization
    else if (this.authService.user.roles.find(role => role == 'Admin') == 'Admin') {
      return true;
    } else {
      this.router.navigate(['/unauthorize']);
      return true;
    }
  }
}
