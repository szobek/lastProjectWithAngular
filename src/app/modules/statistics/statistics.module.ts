import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsWrapperComponent } from 'src/app/components/statistics/wrapper/statistics-wrapper.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/components/statistics/header/header.component';

const routes:Routes = [
  {path: 'statistics', component: StatisticsWrapperComponent},
];


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)  
  ],exports: [  HeaderComponent]
})
export class StatisticsModule { }
