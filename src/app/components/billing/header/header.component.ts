import { Component, inject } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BalanceExchangeContentComponent } from '../modal/balance-exchange-content/balance-exchange-content.component';

@Component({
  selector: 'billing-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private modalService = inject(NgbModal);
balance = 1000;
openModal(){
  const modalRef = this.modalService.open(BalanceExchangeContentComponent);
}
}
