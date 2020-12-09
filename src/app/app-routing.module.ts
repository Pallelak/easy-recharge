import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginGuard} from './guard/login.guard';
import {PreventBackGuard} from './guard/prevent-back.guard';
import {RoleGuard} from './guard/role.guard';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canActivate: [PreventBackGuard]},
  {path: 'recharge', loadChildren: () => import('./recharge/recharge.module').then(m => m.RechargeModule), canActivate: [LoginGuard]},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [LoginGuard, RoleGuard]},
  {path: '', redirectTo: 'auth', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
