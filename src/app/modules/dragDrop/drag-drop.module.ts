import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SampleListComponent } from 'src/app/components/dragDrop/sample-list/sample-list.component';
import { MyDragDropRoutingModule } from './drag-drop-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    SampleListComponent
  ],
  imports: [
    CommonModule,
    MyDragDropRoutingModule,
    DragDropModule
  ]
})
export class myDragDropModule { }
