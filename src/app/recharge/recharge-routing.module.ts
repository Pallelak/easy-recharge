import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RechargeDashboardComponent} from './recharge-dashboard/recharge-dashboard.component';
import {RechargeComponent} from './recharge-body/recharge.component';
import {PaymentComponent} from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: RechargeDashboardComponent,
    children: [
      {path: '', component: RechargeComponent},
      {path: 'payment', component: PaymentComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RechargeRoutingModule { }
