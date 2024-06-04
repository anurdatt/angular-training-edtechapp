import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


declare const CryptoJS: any;


@Injectable({
  providedIn: 'root'
})
export class UtilService {
 

  constructor() { }
  Encrypt(data: any): string {
    const jsonData = JSON.stringify(data);
    return CryptoJS.AES.encrypt(jsonData, environment.encKey);
  }
  Decrypt(data: string): any {
    const bytes = CryptoJS.AES.decrypt(data, environment.encKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
}
