import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsWrapperComponent } from 'src/app/components/statistics/wrapper/statistics-wrapper.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/components/statistics/header/header.component';
import { ChartWrapperComponent } from 'src/app/components/statistics/chart-wrapper/chart-wrapper.component';
import { LinearChartComponent } from 'src/app/components/statistics/linear-chart/linear-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
const routes:Routes = [
  {path: 'statistics', component: StatisticsWrapperComponent},
];


@NgModule({
  declarations: [
    HeaderComponent,
    ChartWrapperComponent,
    LinearChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HighchartsChartModule  
  ],
  exports: [  
    HeaderComponent,
    ChartWrapperComponent,
    LinearChartComponent
  ]
})
export class StatisticsModule { }
