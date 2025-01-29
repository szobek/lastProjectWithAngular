import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

type MakedCoffee = {
  milk: number
  coffeeType: number
  sugarAmount: number
}

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent {
  spinnerValue: number = 0
  spinnerShow: boolean = false
  makedCoffeeShow: boolean = false
  coffee = {
    milk: [
      { value: 0, viewValue: 'Without milk' },
      { value: 1, viewValue: 'With milk' },
    ],
    type: [
      { value: 0, viewValue: 'Presso' },
      { value: 1, viewValue: 'Ristretto' },
      { value: 2, viewValue: 'Americano' },
    ]
  }
  makedCoffee: MakedCoffee = {
    milk: 0,
    coffeeType: 0,
    sugarAmount: 0
  }
  makedCoffeeImage!: string
  formatLabel(value: number): string {
    return `${value} `;
  }

  generateSelectedCoffeeImage() {
    const subs$: Subscription = interval(200).subscribe(res => {
      this.spinnerValue = this.spinnerValue + 10;
      this.spinnerShow = true
      if (this.spinnerValue === 120) {
        subs$.unsubscribe();
        this.makedCoffeeShow = true
        this.spinnerShow = false
        this.spinnerValue = 0;
      }
    });
    
    let image = "/assets/coffee-images/"
    switch (this.makedCoffee.coffeeType) {
      case 2:
        image += (this.makedCoffee.milk === 0) ? "americano.jpg" : "americano-with-milk.jpg"
        break
      case 1:
        image += (this.makedCoffee.milk === 0) ? "presso.jpg" : "presso-with-milk.jpg"
        break
      case 0:
        image += (this.makedCoffee.milk === 0) ? "ristretto.jpg" : "ristretto-with-milk.jpg"
        break
    }
    this.makedCoffeeImage = image
  }
}
