import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from 'src/app/components/task/task-list/task-list.component';

const routes:Routes = [
  {path: '', component: TaskListComponent,title: 'Task List'}  
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
export class TaskRoutingModule { }
