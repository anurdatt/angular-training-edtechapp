import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';
import { Usersignup } from '../models/usersignup';
import { AUTH_ID } from '../app.constants';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpHeaders: HttpHeaders;

  user: User | undefined;

  constructor(private httpClient: HttpClient, private utilService: UtilService) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.GetAuthUser();
  }
  ValidateUser(model: Login): Observable<HttpResponse<User>> {
    return this.httpClient.post<User>(environment.apiAddress + '/auth/validateuser',
      model, { headers: this.httpHeaders, observe: 'response' });
  }
  CreateUser(model: Usersignup): Observable<HttpResponse<User>> {
    return this.httpClient.post<User>(environment.apiAddress + '/auth/createuser',
      model, { headers: this.httpHeaders, observe: 'response' });
  }
  SetAuthUser(user: User): void {
    // const data = JSON.stringify(user);
    const data = this.utilService.Encrypt(user);
    localStorage.setItem(AUTH_ID, data);
    this.user= user;
  }
  GetAuthUser(): void {
    const data = localStorage.getItem(AUTH_ID);
    if (data != null) {
      // this.user= JSON.parse(data);
      this.user= this.utilService.Decrypt(data);
    }
    else{
      this.user= undefined;
    }
  }
  RemoveAuthUser(): void {
    localStorage.removeItem(AUTH_ID);
    this.user= undefined;
  }

}
