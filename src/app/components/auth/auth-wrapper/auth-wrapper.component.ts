import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CallService } from 'src/app/services/call.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-auth-wrapper',
  templateUrl: './auth-wrapper.component.html',
  styleUrls: ['./auth-wrapper.component.scss']
})
export class AuthWrapperComponent {
  isLogged: boolean = false
  callService = inject(CallService)
  userByJWT!: any
  responsedMe: boolean = false
  router = inject(Router)

  handleClickOnMeButton() {
    let isRetry: boolean = false
    this.callService.getUserByJWT().subscribe({
      next: (data: any) => {
        this.responsedMe = true
        this.userByJWT = data
      },
      error: (e: any) => {
        if (!isRetry) {
          this.callService.refreshToken().subscribe({
            next: (resp: any) => {
              isRetry = true
              localStorage.setItem('accessToken', `Bearer ${resp.accessToken}`)
              localStorage.setItem('refreshToken', resp.refreshToken)
              this.callService.getUserByJWT().subscribe({
                next: (res: any) => {
                  this.userByJWT = res
                  this.responsedMe = true
                }
              })
            },
            error:_=> {
              location.reload()
              localStorage.removeItem('accessToken')
              localStorage.removeItem('refreshToken')
            }
          })
        } else {
          location.reload()
        }
      }
    })
  }
  handleSetIsLogged(e: any) {
    this.isLogged = e
  }
}
