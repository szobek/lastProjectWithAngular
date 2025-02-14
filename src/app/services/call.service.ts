import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { settings } from '../settings';
import { User } from '../models/User';
import { Post } from '../models/Post';
import { Todo } from '../models/Todo';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  http = inject(HttpClient)
  dataService = inject(DataService)

  getAllDataFromDB() {
    this.getAllUserFromDB()
    this.getAllPostsFromDB()
    this.getAllTodoFromDB()
    this.getAllCoffeeFromDB()
    this.dataService.$subscriptions.next(settings.SUBSCRIPTIONS)
    this.dataService.$voluntaries.next(settings.VOLUNTARIES)
    this.dataService.$movies.next(settings.movies)
    this.getNavItemsFromDB()
  }



  getNavItemsFromDB() {
    this.http.get<any>(`http://localhost:8000/settings`).subscribe({
      next: (res: any) => this.dataService.$settings.next(res)
    })
  }
  getAllPostsFromDB() {
    this.http.get<Post[]>(`${settings.BASE_URL}/posts`).subscribe({
      next: (posts: Post[]) => this.dataService.$posts.next(posts)
    })
  }

  getAllTodoFromDB() {
    this.http.get<Todo[]>(`${settings.BASE_URL}/todos`).subscribe({
      next: (todos: Todo[]) => this.dataService.$todos.next(todos)
    })
  }
  getUserDataFromUsers() {
    this.dataService.$users.subscribe({
      next: (data: User[] | null) => {
        if (data) {
          const user = data.filter((user: User) => user.id === 7)[0]
          if (user != null) this.dataService.$userData.next(user)
        }
      }
    })
  }
  getAllUserFromDB() {
    if (this.dataService.$users.value === null) {
      this.http.get<User[]>(`${settings.BASE_URL}/users`).subscribe({
        next: (data: User[]) => this.dataService.$users.next(data)
      })
    }
  }

  getAllCoffeeFromDB() {
    this.http.get(settings.COFFEE_URL).subscribe({
      next: (data: any) => this.dataService.$coffees.next(data)
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

  login(username: string, password: string) {
    return this.http.post(`${settings.DUMMY_JSON_URL}/login`, {
      username, password
    })
  }

  refreshToken() {
    return this.http.post(`${settings.DUMMY_JSON_URL}/refresh`, { refreshToken: localStorage.getItem('refreshToken') || "" })
  }

  getUserByJWT() {
    return this.http.get(`${settings.DUMMY_JSON_URL}/me`, {
      headers: {
        'Authorization': localStorage.getItem('accessToken') || ""
      }
    })
  }

  savePostInDB(post: Post) {
    return this.http.post(`${settings.BASE_URL}/posts`, post)
  }
}
