import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './shop.routing';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SchedulerComponent } from './scheduler/scheduler.component';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [CartComponent, CheckoutComponent, ConfirmComponent, SchedulerComponent]
})
export class ShopModule { }