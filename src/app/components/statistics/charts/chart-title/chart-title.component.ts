import { Component, Input } from '@angular/core';

@Component({
  selector: 'statistics-chart-title',
  templateUrl: './chart-title.component.html',
  styleUrls: ['./chart-title.component.scss']
})
export class ChartTitleComponent {
@Input() title!:string
}
