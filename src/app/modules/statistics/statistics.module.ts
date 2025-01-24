import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsWrapperComponent } from 'src/app/components/statistics/wrapper/statistics-wrapper.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/components/statistics/header/header.component';
import { ChartWrapperComponent } from 'src/app/components/statistics/chart-wrapper/chart-wrapper.component';
import { LinearChartComponent } from 'src/app/components/statistics/charts/linear-chart/linear-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { BarChartComponent } from 'src/app/components/statistics/charts/bar-chart/bar-chart.component';
import { SankeyChartComponent } from 'src/app/components/statistics/charts/sankey-chart/sankey-chart.component';
import { SpiderwebChartComponent } from 'src/app/components/statistics/charts/spiderweb-chart/spiderweb-chart.component';
import { ChartTitleComponent } from 'src/app/components/statistics/charts/chart-title/chart-title.component';
import { SharedModule } from "../shared/shared.module";

const routes:Routes = [
  {path: 'statistics', component: StatisticsWrapperComponent,title:"Statistics"},
  {path: 'statistics/line-chart', component: LinearChartComponent,title: "Linear chart"},
  {path: 'statistics/bar-chart', component: BarChartComponent, title:"Bar chart"},
  {path: 'statistics/sankey-chart', component: SankeyChartComponent,title:"Sankey chart"},
  {path: 'statistics/spiderweb-chart', component: SpiderwebChartComponent , title:"Spiderweb chart"},
];


@NgModule({
  declarations: [
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
    RouterModule.forRoot(routes),
    SharedModule
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
export class StatisticsModule { }
