import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RazorPayOrder } from '../models/razor-pay-order';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Payment } from '../models/payment';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  httpHeaders: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  }
  CreateOrder(model: RazorPayOrder): Observable<HttpResponse<any>> {
    console.log(model);
    return this.httpClient.post<any>(environment.apiAddress + '/payment/createorder', JSON.stringify(model),
      { headers: this.httpHeaders, observe: 'response' });
  }
  SavePaymentDetails(model: Payment): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(environment.apiAddress + '/payment/savepaymentdetails', JSON.stringify(model),
      { headers: this.httpHeaders, observe: 'response' });
  }

}

