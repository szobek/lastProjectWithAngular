import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { BillingWrapperComponent } from 'src/app/components/billing/wrapper/billing-wrapper.component';
import { HeaderComponent } from 'src/app/components/billing/header/header.component';
import { SetupCardComponent } from 'src/app/components/billing/setup-card/setup-card.component';
import { SetupCardWrapperComponent } from 'src/app/components/billing/setup-card-wrapper/setup-card-wrapper.component';
import { InvoiceListComponent } from 'src/app/components/billing/invoice-list/invoice-list.component';
import { InvoicePaginatorComponent } from 'src/app/components/billing/invoice-paginator/invoice-paginator.component';
const routes:Routes = [
  {path: 'billing', component: BillingWrapperComponent},
];

@NgModule({
  declarations: [
    HeaderComponent,
    SetupCardComponent,
    SetupCardWrapperComponent,
    InvoiceListComponent,
    InvoicePaginatorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    HeaderComponent,
    SetupCardComponent,
    SetupCardWrapperComponent,
    InvoiceListComponent,
    InvoicePaginatorComponent
  ]
})
export class BillingModule { }
