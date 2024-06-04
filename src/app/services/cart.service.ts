import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { CartItem } from '../models/cart-item';
import { UtilService } from './util.service';
import { CART_ID } from '../app.constants';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart;
  httpHeaders: HttpHeaders;
  constructor(private http: HttpClient, private utilService: UtilService) {
    this.cart = new Cart();
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
  }
  private calculate(): void {
    this.cart.total = 0;
    this.cart.items.forEach(x => {
      this.cart.total += x.unitPrice * x.quantity;
    });
    this.cart.tax = Math.round(this.cart.total * this.cart.taxRate / 100);
    this.cart.grandTotal = this.cart.total + this.cart.tax;


    //save cart
    this.saveCart();
  }
  private saveCart(): void {
    const data = this.utilService.Encrypt(this.cart);
    localStorage.setItem(this.cart.id, data);
  }


  AddToCart(itemId: number, name: string, imageUrl: string, unitPrice: number, quantity: number): void {
    const index = this.cart.items.findIndex(x => x.itemId === itemId);
    if (index === -1) {
      const item: CartItem = new CartItem(itemId, name, imageUrl, unitPrice, quantity);
      this.cart.items.push(item);
    }
    // else{
    //   this.cart.items[index].quantity += quantity;
    // }
    this.calculate();
  }
  DeleteItem(itemId: number): void {
    const index = this.cart.items.findIndex(x => x.itemId === itemId);
    if (index !== -1) {
      this.cart.items.splice(index, 1);
      this.calculate();
    }
  }


  GetCart(): Cart {
    const data = localStorage.getItem(this.cart.id);
    if (data != null) {
      this.cart = this.utilService.Decrypt(data);
    }
    return this.cart;
  }


  RemoveCart(): void {
    localStorage.removeItem(this.cart.id);
    localStorage.removeItem(CART_ID);
  }
  SaveCartToDB(cart: Cart): Observable<HttpResponse<any>> {
    this.cart.userId = cart.userId;
    this.saveCart();
    return this.http.post<any>(environment.apiAddress + '/cart/savecart', JSON.stringify(this.cart), { headers: this.httpHeaders, observe: 'response' });
  }

}
