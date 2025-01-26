import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { Coffee } from '../models/Coffee';
import { Post } from '../models/Post';
import { Todo } from '../models/Todo';
import { User } from '../models/User';
import { Voluntary } from '../models/Voluntary';
import { MySubscription } from '../models/MySubscription';

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
 
}
