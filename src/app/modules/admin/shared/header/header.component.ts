import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  user: User | undefined;
  constructor(private authService: AuthService, private router: Router) { 
    this.user = authService.user;
  }

  ngOnInit(): void {
  }

  Logout() {
    this.authService.RemoveAuthUser();
    this.user = undefined;
    this.router.navigate(['/login']);
  }
}
