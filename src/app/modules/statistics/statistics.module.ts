import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsWrapperComponent } from 'src/app/components/statistics-wrapper/statistics-wrapper.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path: 'statistics', component: StatisticsWrapperComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)  
  ]
})
export class StatisticsModule { }
