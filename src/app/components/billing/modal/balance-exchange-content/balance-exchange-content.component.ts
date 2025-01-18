import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CallService } from 'src/app/services/call.service';
import { settings } from 'src/app/settings';

@Component({
  selector: 'app-balance-exchange-content',
  templateUrl: './balance-exchange-content.component.html',
  styleUrls: ['./balance-exchange-content.component.scss']
})
export class BalanceExchangeContentComponent {
  activeModal = inject(NgbActiveModal);
  callService = inject(CallService);

  constructor(private http: HttpClient) { }
  handleAddTokenToWallet() {
    this.callService.handleCallBackendToTokenAddToWallet()
  }
  
  handleAddTokenToBilling() { 
    this.callService.handleCallBackendToTokenAddToWallet()
  }
}
