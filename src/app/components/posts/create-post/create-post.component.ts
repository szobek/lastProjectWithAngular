import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  fb = inject(FormBuilder)
  callService = inject(CallService)
  createPostForm!: FormGroup
  alertShowSuccess: boolean = false
  alertShowError: boolean = false
  alertText!: string
  constructor() {
    this.createPostForm = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
      userId: [7],
    })
  }

  onSubmit(): void {
    if (this.createPostForm.valid) {
      this.callService.savePostInDB(this.createPostForm.value).subscribe({
        next: _ => {
          this.alertShowSuccess = true
          this.alertText = "Post saved"
          this.createPostForm.reset()
        },
        error:(error:HttpErrorResponse)=>console.error(error)
        
      })
    } else {
      this.alertShowError = true
      this.alertText = "Invalid form!"
    }
    setTimeout(() => {
      this.setToDefaultAlert()
    }, 5000)
  }
  
  setToDefaultAlert(){
    this.alertShowError = false
    this.alertShowSuccess = false
    this.alertText = ""
  }
}
