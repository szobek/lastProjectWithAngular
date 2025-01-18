import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BalanceExchangeContentComponent } from '../modal/balance-exchange-content/balance-exchange-content.component';
import { User } from 'src/app/models/User';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'billing-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private modalService = inject(NgbModal);
  private callService = inject(CallService)
  userData: User | null = null
  balance: string = ""
  constructor() {
    this.callService.$userData.subscribe({
      next: (data: User | null) => {
        if (data != null) {
          this.userData = data
          this.balance = data?.phone.substring(8)
        }
      }
    })
  }
  openModal() {
    const modalRef = this.modalService.open(BalanceExchangeContentComponent);
  }
}
