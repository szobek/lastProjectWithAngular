import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CallService } from 'src/app/services/call.service';

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
    this.callService.handleCallBackendToTokenAddToWallet().subscribe({
      next: _ => console.log("vége van"),
      error:e=>console.error(e),
      complete:()=>{
        console.info("complete call")
      this.activeModal.close()
      }
    })
  }
  
  handleAddTokenToBilling() { 
    this.callService.handleCallBackendToTokenAddToWallet().subscribe({
      next: _ => console.log("vége van"),
      error:e=>console.error(e),
      complete:()=>{
        console.info("complete call")
      this.activeModal.close()
      }
    })
  }
}
