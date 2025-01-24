import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from 'src/app/components/task/task-list/task-list.component';
import { SharedModule } from '../../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

const routes:Routes = [
  {path: 'tasks', component: TaskListComponent,title: 'Task List'}  
]

@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],exports:[ TaskListComponent]
})
export class TaskModule { }
