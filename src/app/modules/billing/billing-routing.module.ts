import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionsComponent } from 'src/app/components/billing/setup/subscriptions/subscriptions.component';
import { VoluntariesComponent } from 'src/app/components/billing/setup/voluntaries/voluntaries.component';
import { BillingWrapperComponent } from 'src/app/components/billing/wrapper/billing-wrapper.component';

const routes:Routes = [
  {path: '', component: BillingWrapperComponent,title:"Voluntaries"},
  {path: 'billing/voluntaries', component: VoluntariesComponent,title:"Voluntaries"},
  {path: 'billing/subscriptions', component: SubscriptionsComponent,title:"Subscriptions"},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BillingRoutingModule { }
