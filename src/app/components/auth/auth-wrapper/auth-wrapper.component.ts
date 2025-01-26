import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallService } from 'src/app/services/call.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-auth-wrapper',
  templateUrl: './auth-wrapper.component.html',
  styleUrls: ['./auth-wrapper.component.scss']
})
export class AuthWrapperComponent {
  isLogged: boolean = false
  fb = inject(FormBuilder)
  callService = inject(CallService)
  loginForm!: FormGroup
  userByJWT!: any
  responsedMe: boolean = false
  dataService = inject(DataService)
  constructor() {
    this.loginForm = this.fb.group({
      username: ['emilys', [Validators.required]],
      password: ['emilyspass', [Validators.required]]
    })
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.callService.login(this.loginForm.controls["username"].value, this.loginForm.controls["password"].value).subscribe({
        next: (data: any) => {
          this.isLogged = true
          localStorage.setItem('accessToken', `Bearer ${data.accessToken}`)
          localStorage.setItem('refreshToken', data.refreshToken)
        },
      })
    } else {
      alert('Form is invalid');
    }
  }

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
            }
          })
        }
      }
    })
  }
}
