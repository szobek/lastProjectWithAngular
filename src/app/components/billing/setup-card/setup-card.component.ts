import { Component, Input } from '@angular/core';

@Component({
  selector: 'billing-setup-card',
  templateUrl: './setup-card.component.html',
  styleUrls: ['./setup-card.component.scss']
})
export class SetupCardComponent {
  @Input() cardTitle: string = '';
  @Input() cardDescription: string = '';

  constructor() { }

  ngOnInit() {
    this.handleType()
  }

  handleType() {
    switch (this.cardTitle) {
      case 'Address':
        this.cardDescription = `<ul> <li>ZIP</li> <li>City</li> <li>address</li> </ul>`;
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
