import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { BillingWrapperComponent } from 'src/app/components/billing/wrapper/billing-wrapper.component';
import { HeaderComponent } from 'src/app/components/billing/header/header.component';

const routes:Routes = [
  {path: 'billing', component: BillingWrapperComponent},
];

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],exports: [HeaderComponent]
})
export class BillingModule { }
