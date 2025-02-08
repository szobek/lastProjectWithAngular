import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from 'src/app/components/task/task-list/task-list.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { TaskRoutingModule } from './task-routing.module';



@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TaskRoutingModule
  ],
  exports:[ TaskListComponent]
})
export class TaskModule { }
