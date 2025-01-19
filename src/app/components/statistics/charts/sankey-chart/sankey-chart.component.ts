import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_Sankey from 'highcharts/modules/sankey';
HC_Sankey(Highcharts);

@Component({
  selector: 'statistics-sankey-chart',
  templateUrl: './sankey-chart.component.html',
  styleUrls: ['./sankey-chart.component.scss']
})
export class SankeyChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  @Input() preview: boolean = false
  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'sankey',
        data: [
          { from: 'User', to: 'X', weight: 2 },
          { from: 'User', to: 'Y', weight: 2 },
          { from: 'Developer', to: 'X', weight: 2 },
          { from: 'Developer', to: 'Y', weight: 2 },
        ],
      },
    ],
  };
}
