import { Injectable } from '@angular/core';
import { CanMatch, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanMatch {
  constructor(private authService: AuthService, private router: Router) {
  }

  canMatch(): boolean {
    //authentication
    if (this.authService.user == undefined) {
      this.router.navigate(['/login']);
      return true;
    }
    //authorization
    else if (this.authService.user.roles.find(role => role == 'User') == 'User') {
      return true;
    } else {
      this.router.navigate(['/unauthorize']);
      return true;
    }
  }
}
