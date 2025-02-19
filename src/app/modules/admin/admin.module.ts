import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminWrapperComponent } from 'src/app/components/admin/admin-wrapper/admin-wrapper.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AdminWrapperComponent
  ],
  imports: [
    MatButtonModule,
    AdminRoutingModule,
       CommonModule,
       ReactiveFormsModule,
       SharedModule,
       MatFormFieldModule,
       MatInputModule,
  ]
})
export class AdminModule { }
