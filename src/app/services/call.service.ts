import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { settings } from '../settings';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';
import { Voluntary } from '../models/Voluntary';
import { Post } from '../models/Post';
import { Todo } from '../models/Todo';
import { Subscription } from '../models/Subscription';

@Injectable({
  providedIn: 'root'
})
export class CallService {
  $userData: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null)
  $voluntaries: BehaviorSubject<Voluntary[]> = new BehaviorSubject([
    { title: "0/month", subtitle: "no data", description: "it's a free option", id: 1 },
    { title: "500/month", subtitle: "base data", description: "it's a middle option", id: 2 },
    { title: "1200/month", subtitle: "all data", description: "it's a premium option", id: 3 },
  ])
  $subscriptions: BehaviorSubject<Subscription[]> = new BehaviorSubject<Subscription[]>([
    { title: "free package", subtitle: "", description: "it's a free option", id: 1 },
    { title: "medium package", subtitle: "you have a medium package", description: "it's a medium option", id: 2 },
    { title: "premium package", subtitle: "you have a premium package", description: "it's a premium option", id: 3 },
  ])
  $posts: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([])
  $users: BehaviorSubject<User[] | null> = new BehaviorSubject<User[] | null>(null)
  $todos: BehaviorSubject<Todo[] | null> = new BehaviorSubject<Todo[] | null>(null)
  
  http = inject(HttpClient)

  getAllDataFromDB() {
    this.getAllUserFromDB()
    this.getAllPostsFromDB()
    this.getAllTodoFromDB()
  }

  getAllPostsFromDB() {
    this.http.get<Post[]>(`${settings.BASE_URL}/posts`).subscribe({
      next: (posts: Post[]) => {
        this.$posts.next(posts)
      }
    })
  }

  getAllTodoFromDB(){
    this.http.get<Todo[]>(`${settings.BASE_URL}/todos`).subscribe({
      next: (todos: Todo[]) => this.$todos.next(todos)
    })
  }
  getUserDataFromUsers() {
    this.$users.subscribe({
      next:(data:User[]|null)=>{
        if(data){
          const user = data.filter((user:User)=>user.id===7)[0]
          if(user!=null)this.$userData.next(user )
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

  handleCallBackendToTokenAddToWallet() {
    return this.http.post(`${settings.BASE_URL}/posts`, {})
  }
  handleCallBackendToEditAddress() {
    return this.http.post(`${settings.BASE_URL}/users/7`, {})
  }
  getPostLitFromDb() {
    return this.http.get<Post[]>(`${settings.BASE_URL}/posts`)
  }

  downloadInvoicesZIP(ids:number[]) {
    return this.http.get(
      `https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-zip-file.zip`,
    
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
