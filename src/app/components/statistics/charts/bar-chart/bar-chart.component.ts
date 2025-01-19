import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'statistics-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  chartOptions: Highcharts.Options;
  chartRef: Highcharts.Chart | undefined;
  Highcharts: typeof Highcharts = Highcharts;
  @Input() preview:boolean=false
  constructor(
  ) {
    this.chartOptions = {
      chart: {
        type: "bar"
      },
      title: {
        text: "Trend of Receipt Budget"
      },
      subtitle: {
        text:
          'Data visualisation for receipt budgeting of the state'
      },
      xAxis: {
        categories: ["2018-19", "2019-20", "2020-21"],
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: "In Thousand of Rupees",
          align: "high"
        },
        labels: {
          overflow: "justify"
        }
      },
      tooltip: {
        valuePrefix: "Rs. "
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "top",
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [
        {
          type:'bar',
          name: 'Population',
          data: [
              ['Shanghai', 24.2],
              ['Beijing', 20.8],
              ['Karachi', 14.9],
              ['Shenzhen', 13.7],
              ['Guangzhou', 13.1],
              ['Istanbul', 12.7],
              ['Mumbai', 12.4],
              ['Moscow', 12.2],
              ['São Paulo', 12.0],
              ['Delhi', 11.7],
              ['Kinshasa', 11.5],
              ['Tianjin', 11.2],
              ['Lahore', 11.1],
              ['Jakarta', 10.6],
              ['Dongguan', 10.6],
              ['Lagos', 10.6],
              ['Bengaluru', 10.3],
              ['Seoul', 9.8],
              ['Foshan', 9.3],
              ['Tokyo', 9.3]
          ],}
      ]
    };
  }
  


chartCallback: Highcharts.ChartCallbackFunction = (chart) => {
  this.chartRef = chart;
};
}
