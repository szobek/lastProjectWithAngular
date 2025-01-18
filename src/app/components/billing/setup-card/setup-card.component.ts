import { Component, inject, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CallService } from 'src/app/services/call.service';
import { EditAddressComponent } from '../modal/edit-address/edit-address.component';
import { Router } from '@angular/router';

@Component({
  selector: 'billing-setup-card',
  templateUrl: './setup-card.component.html',
  styleUrls: ['./setup-card.component.scss']
})
export class SetupCardComponent {
  @Input() cardTitle: string = '';
  @Input() cardDescription: string = '';

  private modalService = inject(NgbModal);
  userData: any
  constructor(private callService: CallService, private router: Router) {
    this.callService.userData.subscribe({
      next: (data: any) => {
        if (data != null) {
          this.userData = data
          this.userData.formatAddressString=this.formatAddressString()
          this.handleType()
          this.formatAddressString()
        }
      }
    })
  }

  formatAddressString(){
    const address=this.userData["address"]
    return `${address["street"]}, ${address["suite"]}`
  }

  handleClickOnEditAddressButton() {
    switch (this.cardTitle) {
      case "Address":
        this.modalService.open(EditAddressComponent);
        break
      case "voluntary":
        this.router.navigateByUrl("voluntaries")
        break
      case "Subscription":
        this.router.navigateByUrl("subscriptions")
    }
  }

  handleType() {
    switch (this.cardTitle) {
      case 'Address':
        this.cardDescription = `<ul> <li>Zip: ${this.userData["address"]["zipcode"]}</li> <li>City: ${this.userData["address"]["city"]}</li> <li>Address: ${this.userData.formatAddressString}</li> </ul>`;
        break;
      case 'voluntary':
        this.cardDescription = `<ul> <li>voluntary</li> <li>voluntary</li> <li>voluntary</li> </ul>`;
        break;
      case 'Subscription':
        this.cardDescription = `<ul> <li>Subscription</li> <li>Subscription</li> <li>Subscription</li> </ul>`;
        break;
      default:
    }
  }
}
