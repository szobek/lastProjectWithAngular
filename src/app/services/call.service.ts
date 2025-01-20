import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { settings } from '../settings';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';
import { Voluntary } from '../models/Voluntary';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class CallService {
  $userData:BehaviorSubject<User |null> = new BehaviorSubject<User | null>(null)
  $voluntaries:BehaviorSubject<Voluntary[]> = new BehaviorSubject([
    {title:"0/month",subtitle:"no data",description:"it's a free option",id:1},
    {title:"500/month",subtitle:"base data",description:"it's a middle option",id:2},
    {title:"1200/month",subtitle:"all data",description:"it's a premium option",id:3},
  ])
  $posts:BehaviorSubject<Post[]>=new BehaviorSubject<Post[]>([])
  constructor(private http:HttpClient) {
    this.getUserDataFromDB()
   }
  getUserDataFromDB(){
    if(this.$userData.value===null){

      this.http.get<User>(`${settings.BASE_URL}/users/7`).subscribe({
        next:(data:User)=>{
          this.$userData.next(data)
        }
      })
    }
  }

  handleCallBackendToTokenAddToWallet(){
    return this.http.post(`${settings.BASE_URL}/posts`, {})
  }
  handleCallBackendToEditAddress(){
    return this.http.post(`${settings.BASE_URL}/users/7`, {})
  }
  getPostLitFromDb(){
    return this.http.get<Post[]>(`${settings.BASE_URL}/posts`)
  }
}
