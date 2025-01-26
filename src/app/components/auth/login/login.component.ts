import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup
  callService = inject(CallService)
  isLogged: boolean = false
  fb = inject(FormBuilder)

  @Output('setLogged') logged: EventEmitter<boolean> = new EventEmitter()

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
          this.logged.emit(true)
        },
        error: (e: HttpErrorResponse) => {
          alert(e.error.message)
        }
      })
    } else {
      alert('Form is invalid');
    }
  }

}
