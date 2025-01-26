import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { settings } from '../settings';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';
import { Voluntary } from '../models/Voluntary';
import { Post } from '../models/Post';
import { Todo } from '../models/Todo';
import { Subscription } from '../models/Subscription';
import { Coffee } from '../models/Coffee';

@Injectable({
  providedIn: 'root'
})
export class CallService {
  $userData: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null)
  $voluntaries: BehaviorSubject<Voluntary[]> = new BehaviorSubject<Voluntary[]>([])
  $subscriptions: BehaviorSubject<Subscription[]> = new BehaviorSubject<Subscription[]>([])
  $posts: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([])
  $users: BehaviorSubject<User[] | null> = new BehaviorSubject<User[] | null>(null)
  $todos: BehaviorSubject<Todo[] | null> = new BehaviorSubject<Todo[] | null>(null)
  $coffees: BehaviorSubject<Coffee[] | null> = new BehaviorSubject<Coffee[] | null>(null)

  http = inject(HttpClient)

  getAllDataFromDB() {
    this.getAllUserFromDB()
    this.getAllPostsFromDB()
    this.getAllTodoFromDB()
    this.getAllCoffeeFromDB()
    this.$subscriptions.next(settings.SUBSCRIPTIONS)
    this.$voluntaries.next(settings.VOLUNTARIES)
  }

  getAllPostsFromDB() {
    this.http.get<Post[]>(`${settings.BASE_URL}/posts`).subscribe({
      next: (posts: Post[]) => this.$posts.next(posts)
    })
  }

  getAllTodoFromDB() {
    this.http.get<Todo[]>(`${settings.BASE_URL}/todos`).subscribe({
      next: (todos: Todo[]) => this.$todos.next(todos)
    })
  }
  getUserDataFromUsers() {
    this.$users.subscribe({
      next: (data: User[] | null) => {
        if (data) {
          const user = data.filter((user: User) => user.id === 7)[0]
          if (user != null) this.$userData.next(user)
        }
      }
    })
  }
  getAllUserFromDB() {
    if (this.$users.value === null) {
      this.http.get<User[]>(`${settings.BASE_URL}/users`).subscribe({
        next: (data: User[]) => this.$users.next(data)
      })
    }
  }

  getAllCoffeeFromDB() {
    this.http.get(settings.COFFEE_URL).subscribe({
      next: (data: any) => this.$coffees.next(data)
    })
  }

  handleCallBackendToTokenAddToWallet() {
    return this.http.post(`${settings.BASE_URL}/posts`, {})
  }
  handleCallBackendToEditAddress() {
    return this.http.post(`${settings.BASE_URL}/users/7`, {})
  }
  downloadInvoicesZIP() {
    return this.http.get(
      settings.DUMMY_ZIP_URL,
      {
        'headers': {
          'Content-Type': 'application/json',
          'Accept': 'application/zip',
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
  }
}
