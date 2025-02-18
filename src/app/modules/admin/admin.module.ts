import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminWrapperComponent } from 'src/app/components/admin/admin-wrapper/admin-wrapper.component';



@NgModule({
  declarations: [
    AdminWrapperComponent
  ],
  imports: [
    AdminRoutingModule,
       CommonModule,
       ReactiveFormsModule,
       SharedModule,
  ]
})
export class AdminModule { }
