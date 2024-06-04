import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Eager loading
import { PublicModule } from './modules/public/public.module';
import { AuthAdminGuard } from './auth-admin.guard';
import { AuthUserGuard } from './auth-user.guard';

const routes: Routes = [
  {
    path: 'admin', 
    canMatch: [AuthAdminGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'user',
    canMatch: [AuthUserGuard],
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: '',
    loadChildren: () => PublicModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
