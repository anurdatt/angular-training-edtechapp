import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AUTH_ID } from 'src/app/app.constants';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  message:string | undefined;
  returnUrl: string | undefined;
  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router, private route:ActivatedRoute) {
    this.userForm = this.fb.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }


  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || undefined;
  }
  LoginUser() {
    if (this.userForm.valid) {
      this.authService.ValidateUser(this.userForm.value).subscribe(res => {
        if (res.status == 200 && res.body != null) {
          const user = res.body;
          this.authService.SetAuthUser(user);


          if (this.returnUrl != undefined) {
            this.router.navigateByUrl(this.returnUrl);
          }
          else if (user.roles.find(role => role == 'Admin') == 'Admin') {
            this.router.navigate(['/admin']);
          }
          else if (user.roles.find(role => role == 'User') == 'User') {
            this.router.navigate(['/user']);
          }
        }
        else{
          this.message = 'Invalid username or password';
        }
      });
    }
  }

  


}
