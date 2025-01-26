import { Component, inject } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Todo } from 'src/app/models/Todo';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html',
  styleUrls: ['./sample-list.component.scss']
})
export class SampleListComponent {
  todoList!: Todo[];
  todoListDone!: Todo[];
  private dataService=inject(DataService)
  constructor() {
    this.dataService.$todos.subscribe({
      next: (todos: Todo[] | null) => {
        if (todos) {
          this.todoList = todos.slice(0, 5).filter((todo: Todo) => !todo.completed)
          this.todoListDone = todos.filter((todo: Todo) => todo.completed).slice(0, 5)
        }
      }
    })
  }
  drop(event: CdkDragDrop<Todo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    // from -> previousContainer
    // to -> container
    const from = event.previousContainer.id;
    const to = event.container.id;
    const complete = (from === "todo" && to === "done")
    this.handleDroppedTextChangeCompleted(
      event.item.element.nativeElement.dataset['id'] + "",
      complete
    );
  }
  handleDroppedTextChangeCompleted( id: string, complete: boolean) {
    const todos=this.dataService.$todos.value
    if(todos){
      const selectedTodo = todos.filter((todo: Todo) => todo.id.toString() === id)[0]
      selectedTodo.completed = complete
      this.dataService.$todos.next(todos)
    }
  }
}


