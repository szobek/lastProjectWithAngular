import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from 'src/app/components/todos/todo-list/todo-list.component';
import { SharedModule } from '../shared/shared.module';
import { TodoRoutingModule } from './todo-routing.module';


@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule
  ],
  exports: [TodoListComponent]
})
export class TodoModule { }
