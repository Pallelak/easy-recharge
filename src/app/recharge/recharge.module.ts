import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechargeRoutingModule } from './recharge-routing.module';
import { RechargeDashboardComponent } from './recharge-dashboard/recharge-dashboard.component';
import {HeaderComponent} from './header/header.component';
import {RechargeComponent} from './recharge-body/recharge.component';
import { PaymentComponent } from './payment/payment.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    RechargeDashboardComponent,
    HeaderComponent,
    RechargeComponent,
    PaymentComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RechargeRoutingModule,
    ReactiveFormsModule
  ]
})
export class RechargeModule { }
