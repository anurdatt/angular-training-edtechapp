import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PublicLayoutComponent } from './shared/public-layout/public-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { FullsizeLayoutComponent } from './shared/fullsize-layout/fullsize-layout.component';
import { PublicRoutingModule } from './public-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ReceiptComponent } from './receipt/receipt.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    PublicLayoutComponent,
    HeaderComponent,
    FullsizeLayoutComponent,
    UnauthorizeComponent,
    CartComponent,
    PaymentComponent,
    ReceiptComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
