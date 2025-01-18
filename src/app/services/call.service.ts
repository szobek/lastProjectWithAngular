import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { settings } from '../settings';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  constructor(private http:HttpClient) { }

  handleCallBackendToTokenAddToWallet(){
    this.http.post(`${settings.BASE_URL}/posts`, {}).subscribe({
      next: _ => console.log("vége van"),
      error:e=>console.error(e),
      complete:()=>console.info("complete call")
    })
  }
}
