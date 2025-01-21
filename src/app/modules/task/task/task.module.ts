import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from 'src/app/components/task/task-list/task-list.component';

const routes:Routes = [
  {path: 'tasks', component: TaskListComponent}  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class TaskModule { }
