import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { SampleListComponent } from 'src/app/components/dragDrop/sample-list/sample-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
const routes:Routes = [
  {path: 'dragdrop', component: SampleListComponent},
]


@NgModule({
  declarations: [
    SampleListComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    DragDropModule
  ],
  exports: [
    SampleListComponent,
  ]
})
export class myDragDropModule { }
