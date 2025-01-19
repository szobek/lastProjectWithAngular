import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

@Component({
  selector: 'statistics-spiderweb-chart',
  templateUrl: './spiderweb-chart.component.html',
  styleUrls: ['./spiderweb-chart.component.scss']
})
export class SpiderwebChartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      polar: true,
      type: 'line',
      scrollablePlotArea: {
        minHeight: 768,
        minWidth: 768
      }
    },

    pane: {
      size: '90%'
    },
    xAxis: {
      labels: {
        reserveSpace: true,
        style: {
          fontSize: '14px'
        }
      },
      categories: ['JS', 'PHP', 'JAVA', 'Python', 'C++', 'C#', 'Delphi'],
      tickmarkPlacement: 'on',
      lineWidth: 0
    },
    yAxis: {
      gridLineInterpolation: 'polygon',
      tickInterval: 50,
      minorTickInterval: 25,
      lineWidth: 0,
      min: 0,
      max: 100
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Serie',
        color: '#2bcedc',
        type: 'area',
        data: [22, 36, 23, 57, 44, 57, 99],
        pointPlacement: 'on'
      }
    ],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            align: 'center',
            verticalAlign: 'bottom'
          },
          pane: {
            size: '70%'
          }
        }
      }]
    }
  }
}
