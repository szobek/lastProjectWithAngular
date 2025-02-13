import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeListComponent } from 'src/app/components/coffee/coffee-list/coffee-list.component';
import { SingleCoffeeComponent } from 'src/app/components/coffee/single-coffee/single-coffee.component';
import { SharedModule } from '../../shared/shared.module';
import { CoffeeRoutingModule } from '../coffee-routing/coffee-routing.module';



@NgModule({
  declarations: [
    CoffeeListComponent,
    SingleCoffeeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoffeeRoutingModule
  ],
  exports: [
    CoffeeListComponent,
    SingleCoffeeComponent
  ]
})
export class CoffeeModule { }
