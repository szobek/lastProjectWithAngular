import { Component } from '@angular/core';
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

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'sankey',
        data: [
          { from: 'A', to: 'X', weight: 2 },
          { from: 'A', to: 'Y', weight: 2 },
          { from: 'B', to: 'X', weight: 2 },
          { from: 'B', to: 'Y', weight: 2 },
        ],
      },
    ],
  };
}
