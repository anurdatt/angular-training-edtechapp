import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { UserLayoutComponent } from './shared/user-layout/user-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    OrdersComponent,
    UserLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
