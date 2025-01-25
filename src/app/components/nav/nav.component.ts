import { Component } from '@angular/core';
import { settings } from 'src/app/settings';

interface Navitem {
  name:string;
  path:string;
  icon:string;
  ariaLabel:string
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
navItems:Navitem[] = settings.NAV_ITEMS
}
