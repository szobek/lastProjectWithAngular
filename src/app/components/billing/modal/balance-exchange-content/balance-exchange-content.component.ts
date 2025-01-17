import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-balance-exchange-content',
  templateUrl: './balance-exchange-content.component.html',
  styleUrls: ['./balance-exchange-content.component.scss']
})
export class BalanceExchangeContentComponent {
	activeModal = inject(NgbActiveModal);
}
