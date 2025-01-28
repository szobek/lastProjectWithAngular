import { Component } from '@angular/core';

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
