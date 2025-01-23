import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'src/app/models/Subscription';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent {
router = inject(Router)
callService = inject(CallService) 
subscriptions:Subscription[] = []
constructor() {
  this.callService.$subscriptions.subscribe({
    next: (subscriptions:Subscription[]) => {
      this.subscriptions = subscriptions
    } 
  })
 } 
  handleBackButtonToBilling() {
    this.router.navigateByUrl("billing")
  }
  handleSelectSubscriptionOption(subscription:Subscription) {
    const user = this.callService.$userData.value
    if(user){
      user.subscription = subscription
       this.callService.$userData.next(user) 
        this.router.navigateByUrl("billing")
    }else this.router.navigateByUrl("billing")
  }

}
