import { Component, inject } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { CallService } from 'src/app/services/call.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {
  isChecked: boolean = false;
  callService = inject(CallService)
  singleTodo!: Todo | null
  constructor() {
    this.callService.$todos.subscribe({
      next: (todos: Todo[] | null) => {
        if (todos) {
          this.singleTodo = todos.filter((todo: Todo) => todo.id === 1)[0]
          this.singleTodo.completed = this.isChecked
        }
      }
    })
  }

handleSliderChange(todo:Todo|null){
  if(todo)  todo.completed = this.isChecked
}
}
