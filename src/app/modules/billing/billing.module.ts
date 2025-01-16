import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { BillingWrapperComponent } from 'src/app/components/billing-wrapper/billing-wrapper.component';

const routes:Routes = [
  {path: 'billing', component: BillingWrapperComponent},
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ]
})
export class BillingModule { }
