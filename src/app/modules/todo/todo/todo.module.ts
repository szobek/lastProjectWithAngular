import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from 'src/app/components/todos/todo-list/todo-list.component';
import { SharedModule } from '../../shared/shared.module';

const routes:Routes = [
  {path: 'todos', component: TodoListComponent,title: 'Todos'}
];


@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  exports: [TodoListComponent]
})
export class TodoModule { }
