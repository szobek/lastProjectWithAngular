import { Component, inject } from '@angular/core';
import { Coffee } from 'src/app/models/Coffee';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss']
})
export class CoffeeListComponent {
  callService = inject(CallService)
  coffees: Coffee[] = []
  constructor() {
    this.callService.$coffees.subscribe({
      next: (data: Coffee[] | null) => {
        if (data) this.coffees = data;
      }
    });
  }
}
