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


const routes:Routes = [
  {path: 'statistics', component: StatisticsWrapperComponent},
];


@NgModule({
  declarations: [
    HeaderComponent,
    ChartWrapperComponent,
    LinearChartComponent,
    BarChartComponent,
    SankeyChartComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    RouterModule.forRoot(routes),
    
  ],
  exports: [  
    HeaderComponent,
    ChartWrapperComponent,
    LinearChartComponent,
    BarChartComponent,
    SankeyChartComponent
  ]
})
export class StatisticsModule { }
