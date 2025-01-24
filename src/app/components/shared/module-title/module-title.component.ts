import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-module-title',
  templateUrl: './module-title.component.html',
  styleUrls: ['./module-title.component.scss']
})
export class ModuleTitleComponent {
@Input() title!: string;
}
