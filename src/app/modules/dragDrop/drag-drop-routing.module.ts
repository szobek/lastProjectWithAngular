import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SampleListComponent } from 'src/app/components/dragDrop/sample-list/sample-list.component';

const routes:Routes = [
  {path: 'dragdrop', component: SampleListComponent,title: 'Drag & Drop'} ,
]

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
export class DragDropRoutingModule { }
