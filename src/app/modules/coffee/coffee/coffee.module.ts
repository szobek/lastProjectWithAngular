import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeListComponent } from 'src/app/components/coffee/coffee-list/coffee-list.component';
import { SingleCoffeeComponent } from 'src/app/components/coffee/single-coffee/single-coffee.component';
const routes: Routes = [
  {path: 'coffees', component:CoffeeListComponent},
  {path: 'coffee/:id', component:SingleCoffeeComponent},
]


@NgModule({
  declarations: [
    CoffeeListComponent,
    SingleCoffeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    CoffeeListComponent,
    SingleCoffeeComponent
  ]
})
export class CoffeeModule { }
