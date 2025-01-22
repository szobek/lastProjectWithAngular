import { Component, inject } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos:Todo[] = [];
  callService = inject(CallService);
  constructor() {
    this.callService.$todos.subscribe((data) => {
      if(data){
        this.todos = data.slice(0,10);
      }
    });
  }
  handleComplete(todo:Todo){
    todo.completed = true;
  }
  handleIncomplete(todo:Todo){
    todo.completed = false;
  }
}
