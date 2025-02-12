import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsWrapperComponent } from 'src/app/components/statistics/wrapper/statistics-wrapper.component';
import { HeaderComponent } from 'src/app/components/statistics/header/header.component';
import { ChartWrapperComponent } from 'src/app/components/statistics/chart-wrapper/chart-wrapper.component';
import { LinearChartComponent } from 'src/app/components/statistics/charts/linear-chart/linear-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { BarChartComponent } from 'src/app/components/statistics/charts/bar-chart/bar-chart.component';
import { SankeyChartComponent } from 'src/app/components/statistics/charts/sankey-chart/sankey-chart.component';
import { SpiderwebChartComponent } from 'src/app/components/statistics/charts/spiderweb-chart/spiderweb-chart.component';
import { ChartTitleComponent } from 'src/app/components/statistics/charts/chart-title/chart-title.component';
import { SharedModule } from "../shared/shared.module";
import { StatisticsRoutingModule } from './statistics-routing.module';

@NgModule({
  declarations: [
    StatisticsWrapperComponent,
    HeaderComponent,
    ChartWrapperComponent,
    LinearChartComponent,
    BarChartComponent,
    SankeyChartComponent,
    SpiderwebChartComponent,
    ChartTitleComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    SharedModule,
    StatisticsRoutingModule
],
  exports: [  
    HeaderComponent,
    ChartWrapperComponent,
    LinearChartComponent,
    BarChartComponent,
    SankeyChartComponent,
    SpiderwebChartComponent,
    ChartTitleComponent
  ]
})
export class StatisticsModule {
  constructor(){
    console.log("this.constructor.name");
    
  }
 }
