import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeMachineRoutingModule } from '../coffee-machine-routing/coffee-machine-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MachineComponent } from 'src/app/components/coffee-machine/machine/machine.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MachineComponent
  ],
  imports: [
    CommonModule,
    CoffeeMachineRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSliderModule,
    MatRadioModule,
    FormsModule
  ]
})
export class CoffeeMachineModule { }
