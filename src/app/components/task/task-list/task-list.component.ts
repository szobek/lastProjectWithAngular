import { Component, inject } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  callService = inject(CallService)
  tasks: Todo[] = []
  completedTasks: Todo[] = []
  IncompletedTasks: Todo[] = []
  selectedTab: string = 'all'
  constructor() {
    this.generateTaskList()
  }
  handleChangeCheckbox(todo: Todo) {
    todo.completed = !todo.completed
    this.callService.$todos.next(this.tasks)
  }
  ngOnChanges() {
    this.generateTaskList()

  }
  generateTaskList() {
    this.callService.$todos
      .subscribe({
        next: (todos: Todo[] | null) => {
          if (todos) {
            this.tasks = todos.slice(0, 10)
            this.completedTasks = this.tasks.filter(todo => todo.completed)
            this.IncompletedTasks = this.tasks.filter(todo => !todo.completed)
          }
        }
      })
  }
}
