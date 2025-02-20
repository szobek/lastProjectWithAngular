import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { Coffee } from '../models/Coffee';
import { Post } from '../models/Post';
import { Todo } from '../models/Todo';
import { User } from '../models/User';
import { Voluntary } from '../models/Voluntary';
import { MySubscription } from '../models/MySubscription';
import { Recipe } from '../models/Recipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  $userData: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null)
  $voluntaries: BehaviorSubject<Voluntary[]> = new BehaviorSubject<Voluntary[]>([])
  $subscriptions: BehaviorSubject<MySubscription[]> = new BehaviorSubject<MySubscription[]>([])
  $posts: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([])
  $users: BehaviorSubject<User[] | null> = new BehaviorSubject<User[] | null>(null)
  $todos: BehaviorSubject<Todo[] | null> = new BehaviorSubject<Todo[] | null>(null)
  $coffees: BehaviorSubject<Coffee[] | null> = new BehaviorSubject<Coffee[] | null>(null)
  $recipes: BehaviorSubject<Recipe[] | null> = new BehaviorSubject<Recipe[] | null>(null)
  $config: BehaviorSubject<any> = new BehaviorSubject<any>(null)

  admin: boolean = false
  private http=inject(HttpClient)

  loadConfig() {
    return this.http.get('https://dummy.szobekweb.hu/settings')
      .pipe(
        catchError((error) => {
          console.error('Failed to load config:', error);
          return of({});
        })
      )
      .toPromise()
      .then((data:any) => {
        this.$config.next(data);
        this.admin = data["user_id"]===7
      });
  }
  getConfig() {
    return this.$config.value;
  }
  isAdmin() {
    return this.admin
  }
}
