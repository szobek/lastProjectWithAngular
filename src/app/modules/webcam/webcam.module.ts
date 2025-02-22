import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamComponent } from '../../components/webcam/webcam.component';
import { WebcamRoutingModule } from './webcam-routing.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    WebcamComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    WebcamRoutingModule
  ]
})
export class WebcamModule { }
