import { Component, inject } from '@angular/core';
import { Coffee } from 'src/app/models/Coffee';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss']
})
export class CoffeeListComponent {
  private dataService=inject(DataService)
  coffees: Coffee[] = []
  constructor() {
    this.dataService.$coffees.subscribe({
      next: (data: Coffee[] | null) => {
        if (data) this.coffees = data;
      }
    });
  }
}
