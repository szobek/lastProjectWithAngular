import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BalanceExchangeContentComponent } from '../modal/balance-exchange-content/balance-exchange-content.component';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'billing-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private modalService = inject(NgbModal);
  private dataService=inject(DataService)
  userData: User | null = null
  balance: string = ""
  constructor() {
    this.dataService.$userData.subscribe({
      next: (data: User | null) => {
        if (data != null) {
          this.userData = data
          this.balance = (data.phone.length > 4) ? data?.phone.substring(8) : data?.phone
        }
      }
    })
  }
  openModal() {
    const modalRef = this.modalService.open(BalanceExchangeContentComponent);
  }
}
