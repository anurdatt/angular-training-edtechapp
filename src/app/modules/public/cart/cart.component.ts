import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {

  cart: Cart;
  user: User | undefined;
  constructor(private cartService: CartService, private authService: AuthService, private router: Router) {
    this.cart = this.cartService.GetCart();
    this.user = this.authService.user;
  }


  ngOnInit(): void {
  }
  DeleteItem(id: number) {
    if (confirm('Are you sure to delete this item?')) {
      this.cartService.DeleteItem(id);
      this.cart = this.cartService.GetCart();
    }
  }
  CheckOut() {
    if (this.user == undefined) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: '/cart' } });
    }
    else {
      this.cart.userId = this.user.id;
      this.cartService.SaveCartToDB(this.cart).subscribe(res => {
        if (res.status == 200) {
          this.router.navigate(['/payment']);
        }
      });
    }
  }


}
