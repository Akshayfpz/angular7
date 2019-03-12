import { Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

export const routes: Routes = [
    { path: '', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'confirm', component: ConfirmComponent },
    { path: 'calendar', component: SchedulerComponent },
    { path: '**', component: CartComponent },
];