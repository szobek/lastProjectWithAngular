import { Component, inject } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  callService = inject(CallService)
  posts:Post[]=[]
  users:User[]=[]
  constructor(){
    this.callService.$users.subscribe({
      next:(users_:User[]|null)=>{
        if(users_ !=null){
          this.users=users_
          console.log("Az users",this.users);
          
          this.callService.$posts.subscribe({
            next:(data:Post[])=>{
              this.posts=data.slice(0,32)
              this.posts.map((post:Post)=>{
                post.writer=this.callService.$users.value?.filter((user:User)=>post.userId===user.id)[0].name
              })
            }
          })
        }
      }
    })

    
  }

}
