import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MySubscription } from 'src/app/models/MySubscription';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent {
router = inject(Router)
private dataService=inject(DataService)
subscriptions:MySubscription[] = []
constructor() {
  this.dataService.$subscriptions.subscribe({
    next: (subscriptions:MySubscription[]) => {
      this.subscriptions = subscriptions
    } 
  })
 } 
  handleBackButtonToBilling() {
    this.router.navigateByUrl("billing")
  }
  handleSelectSubscriptionOption(subscription:MySubscription) {
    const user = this.dataService.$userData.value
    if(user){
      user.subscription = subscription
       this.dataService.$userData.next(user) 
        this.router.navigateByUrl("billing")
    }else this.router.navigateByUrl("billing")
  }

}
