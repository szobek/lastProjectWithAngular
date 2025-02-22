import { Component, inject } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { CallService } from 'src/app/services/call.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {
  isChecked: boolean = false;
  private dataService=inject(DataService)
  private callService=inject(CallService)
  singleTodo!: Todo | null
  buttonText: string = "Mark as completed"
  lightMode: boolean = true
  modeText: string = "Light mode"
  constructor() {
    this.dataService.$todos.subscribe({
      next: (todos: Todo[] | null) => {
        if (todos) {
          this.singleTodo = todos.filter((todo: Todo) => todo.id === 1)[0]
          this.singleTodo.completed = this.isChecked
        }
      }
    })
  }
  

  handleSliderChange(todo: Todo | null) {
    if (todo) todo.completed = this.isChecked
  }
  handleClickOnButton(todo: Todo | null) {
    if (todo) {

      todo.completed = !this.isChecked
      this.buttonText = todo.completed ? "Mark as uncompleted" : "Mark as completed"
    }
    this.isChecked = !this.isChecked

  }
  handleClickOnModeChangeButton() {
    this.modeText = (this.lightMode)? "Light mode":"Dark mode"
  }
  makeMeAdmin() {
    const config=this.dataService.$config.value
    config.user_id=7
    this.callService.saveConfigInDB(config)
    setTimeout(() => {
      window.location.reload()
    }, 1000); 
  }
}
