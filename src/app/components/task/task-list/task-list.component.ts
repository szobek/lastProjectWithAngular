import { Component, inject } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { CallService } from 'src/app/services/call.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  private dataService=inject(DataService)
  tasks: Todo[] = []
  completedTasks: Todo[] = []
  IncompletedTasks: Todo[] = []
  selectedTab: string = 'all'
  constructor() {
    this.generateTaskList()
  }
  handleChangeCheckbox(todo: Todo) {
    todo.completed = !todo.completed
    this.dataService.$todos.next(this.tasks)
  }
  ngOnChanges() {
    this.generateTaskList()

  }
  generateTaskList() {
    this.dataService.$todos
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
