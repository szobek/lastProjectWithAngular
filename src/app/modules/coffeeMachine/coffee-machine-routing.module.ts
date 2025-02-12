import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineComponent } from 'src/app/components/coffee-machine/machine/machine.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: MachineComponent,title:"Coffee Machine"},
];


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CoffeeMachineRoutingModule { }
