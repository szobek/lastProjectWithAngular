import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/User';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-balance-exchange-content',
  templateUrl: './balance-exchange-content.component.html',
  styleUrls: ['./balance-exchange-content.component.scss']
})
export class BalanceExchangeContentComponent {
  activeModal = inject(NgbActiveModal);
  callService = inject(CallService);
  userData: User | null = null
  constructor() {
    this.callService.$userData.subscribe({
      next: (data: User | null) => {
        if (data != null) {
          this.userData = data
        }
      }
    })
  }
  handleAddTokenToWallet() {
    if (this.userData != null) this.userData.phone = "1500"; 
    this.callService.handleCallBackendToTokenAddToWallet().subscribe({
      next: _ => console.log("vége van"),
      error: e => console.error(e),
      complete: () => {
        this.callService.$userData.next(this.userData)
        this.activeModal.close()
      }
    })
  }

  handleAddTokenToBilling() {
    if (this.userData != null) this.userData.phone = "100";
    this.callService.handleCallBackendToTokenAddToWallet().subscribe({
      next: _ => console.log("vége van"),
      error: e => console.error(e),
      complete: () => {
        this.callService.$userData.next(this.userData)
        this.activeModal.close()
      }
    })
  }
}
