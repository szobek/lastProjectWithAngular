import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { settings } from '../settings';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class CallService {
  userData:BehaviorSubject<User |null> = new BehaviorSubject<User | null>(null)
  constructor(private http:HttpClient) {
    this.getUserDataFromDB()
   }
  getUserDataFromDB(){
    this.http.get<User>(`${settings.BASE_URL}/users/7`).subscribe({
      next:(data:User)=>{
        this.userData.next(data)
      }
    })
  }

  handleCallBackendToTokenAddToWallet(){
    return this.http.post(`${settings.BASE_URL}/posts`, {})
  }
  handleCallBackendToEditAddress(){
    return this.http.post(`${settings.BASE_URL}/users/7`, {})
  }
}
