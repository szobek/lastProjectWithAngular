import { Component } from '@angular/core';

@Component({
  selector: 'app-billing-wrapper',
  templateUrl: './billing-wrapper.component.html',
  styleUrls: ['./billing-wrapper.component.scss']
})
export class BillingWrapperComponent {
  invoicePageNumber: number = 1
  setPage(e: any) {
    this.invoicePageNumber = e

  }
}
