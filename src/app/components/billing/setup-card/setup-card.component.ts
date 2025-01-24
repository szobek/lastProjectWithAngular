import { Component, inject, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CallService } from 'src/app/services/call.service';
import { EditAddressComponent } from '../modal/edit-address/edit-address.component';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { Voluntary } from 'src/app/models/Voluntary';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'billing-setup-card',
  templateUrl: './setup-card.component.html',
  styleUrls: ['./setup-card.component.scss']
})
export class SetupCardComponent {
  sanitizedHtml!: SafeHtml;
sanitizer=inject(DomSanitizer)
  @Input() cardTitle!: string
  @Input() cardDescription!: string
html!:string
  private modalService = inject(NgbModal);
  userData: User|null=null
  selectedVoluntary:Voluntary|null=null
  constructor(private callService: CallService, private router: Router) {
    this.callService.$userData.subscribe({
      next: (data: User|null) => {
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
    if(this.userData!=null){
      const address=this.userData["address"]
      return `${address["street"]}, ${address["suite"]}`
    }else return ""
  }

  handleClickOnEditAddressButton() {
    switch (this.cardTitle) {
      case "Address":
        this.modalService.open(EditAddressComponent);
        break
      case "voluntary":
        this.router.navigateByUrl("billing/voluntaries")
        break
      case "Subscription":
        this.router.navigateByUrl("billing/subscriptions")
    }
  }

  handleType() {
    switch (this.cardTitle) {
      case 'Address':
        this.html =(this.userData!=null)? `<ul> <li>Zip: ${this.userData.address.zipcode}</li> <li>City: ${this.userData.address.city}</li> <li>Address: ${this.userData.formatAddressString}</li> </ul>`:"aaa";
        this.sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(this.html);
        break;
      case 'voluntary':
        this.html = (this.userData!=null&&this.userData.voluntary!=undefined)? `<div class="card" style="width: 100%;">
    <div class="card-body">
      <h5 class="card-title">${this.userData.voluntary.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${this.userData.voluntary.subtitle}</h6>
      <p class="card-text">${this.userData.voluntary.description}</p>
    </div>
  </div>`:"";
  this.sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(this.html);
  break;
  case 'Subscription':
    this.html = (this.userData!=null&&this.userData.subscription!=undefined)? `<div class="card" style="width: 100%;">
    <div class="card-body">
    <h5 class="card-title">${this.userData.subscription.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${this.userData.subscription.subtitle}</h6>
    <p class="card-text">${this.userData.subscription.description}</p>
    </div>`:"";
    this.sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(this.html);
        break;
      default:
    }
  }
  ngOnChanges(){
    this.handleType()
  }
}
