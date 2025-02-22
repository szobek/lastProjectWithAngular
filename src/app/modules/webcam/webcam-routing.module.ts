import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamComponent } from 'src/app/components/webcam/webcam.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",component:WebcamComponent,title:"Webcam"},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class WebcamRoutingModule { }
