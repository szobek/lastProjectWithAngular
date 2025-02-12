import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from 'src/app/components/statistics/charts/bar-chart/bar-chart.component';
import { LinearChartComponent } from 'src/app/components/statistics/charts/linear-chart/linear-chart.component';
import { SankeyChartComponent } from 'src/app/components/statistics/charts/sankey-chart/sankey-chart.component';
import { SpiderwebChartComponent } from 'src/app/components/statistics/charts/spiderweb-chart/spiderweb-chart.component';
import { StatisticsWrapperComponent } from 'src/app/components/statistics/wrapper/statistics-wrapper.component';

const routes:Routes = [
  {path: '', component: StatisticsWrapperComponent,title:"Statistics"},
  {path: 'line-chart', component: LinearChartComponent,title: "Linear chart"},
  {path: 'bar-chart', component: BarChartComponent, title:"Bar chart"},
  {path: 'sankey-chart', component: SankeyChartComponent,title:"Sankey chart"},
  {path: 'spiderweb-chart', component: SpiderwebChartComponent , title:"Spiderweb chart"},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StatisticsRoutingModule { }
