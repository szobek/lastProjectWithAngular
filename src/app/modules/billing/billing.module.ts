import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BillingWrapperComponent } from 'src/app/components/billing/wrapper/billing-wrapper.component';
import { HeaderComponent } from 'src/app/components/billing/header/header.component';
import { SetupCardComponent } from 'src/app/components/billing/setup-card/setup-card.component';
import { SetupCardWrapperComponent } from 'src/app/components/billing/setup-card-wrapper/setup-card-wrapper.component';
import { InvoiceListComponent } from 'src/app/components/billing/invoice-list/invoice-list.component';
import { InvoicePaginatorComponent } from 'src/app/components/billing/invoice-paginator/invoice-paginator.component';
import { EditAddressComponent } from 'src/app/components/billing/modal/edit-address/edit-address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VoluntariesComponent } from 'src/app/components/billing/setup/voluntaries/voluntaries.component';
import { SubscriptionsComponent } from 'src/app/components/billing/setup/subscriptions/subscriptions.component';
import { SharedModule } from "../shared/shared.module";
const routes:Routes = [
  {path: 'billing', component: BillingWrapperComponent,title:"Billing"},
  {path: 'billing/voluntaries', component: VoluntariesComponent,title:"Voluntaries"},
  {path: 'billing/subscriptions', component: SubscriptionsComponent,title:"Subscriptions"},
];

@NgModule({
  declarations: [
    HeaderComponent,
    SetupCardComponent,
    SetupCardWrapperComponent,
    InvoiceListComponent,
    InvoicePaginatorComponent,
    EditAddressComponent,
    VoluntariesComponent,
    SubscriptionsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    ReactiveFormsModule,
    SharedModule
],
  exports: [
    HeaderComponent,
    SetupCardComponent,
    SetupCardWrapperComponent,
    InvoiceListComponent,
    InvoicePaginatorComponent,
    EditAddressComponent,
    VoluntariesComponent,
    SubscriptionsComponent
  ]
})
export class BillingModule { }
