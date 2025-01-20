import { Component, inject } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  callService = inject(CallService)
  posts:Post[]=[]
  constructor(){
    this.callService.$posts.subscribe({
      next:(data:Post[])=>{
        this.posts=data.slice(0,32)
      }
    })
  }

}
