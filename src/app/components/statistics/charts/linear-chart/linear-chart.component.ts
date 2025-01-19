import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'statistics-linear-chart',
  templateUrl: './linear-chart.component.html',
  styleUrls: ['./linear-chart.component.scss']
})
export class LinearChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartRef: Highcharts.Chart | undefined;
  chartOptions:Highcharts.Options = {
    navigation: {
      buttonOptions: {
        enabled: false,
      },
    },
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    yAxis:{
      min:0,
      max:60,
    },
    legend: {
      y: 25,
    },
    series: [{
      type: 'line',
      name: 'Line 1',
      data: [21,38,12,50]
    }]
  };

  chartCallback: Highcharts.ChartCallbackFunction = (chart) => {
    this.chartRef = chart;
  };

}
