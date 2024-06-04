import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { CoursesComponent } from './courses/courses.component';


const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'courses', component: CoursesComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
