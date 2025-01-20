import { Component, inject } from '@angular/core';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-billing-wrapper',
  templateUrl: './billing-wrapper.component.html',
  styleUrls: ['./billing-wrapper.component.scss']
})
export class BillingWrapperComponent {
  callService = inject(CallService)
  invoicePageNumber: number = 1
  constructor() {
    this.callService.getUserDataFromUsers()
  }
  setPage(e: any) {
    this.invoicePageNumber = e

  }
}
